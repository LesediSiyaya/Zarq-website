"""Build the reel's soundtrack: clean voice on top, music ducked under it, light sound effects on the animation beats."""
import json, os, subprocess, sys

warp_file, voice, out = sys.argv[1], sys.argv[2], sys.argv[3]
SRC = os.environ.get('ZARQ_AUDIO_SRC', 'audio-src').rstrip('/') + '/'
W = json.load(open(warp_file))
total = W[-1][0]


def real(tau):
    """Design time -> real time (inverse of the video's warp)."""
    for (a, ta), (b, tb) in zip(W, W[1:]):
        if tau <= tb:
            return a + (b - a) * (tau - ta) / (tb - ta)
    return W[-1][0]


# (design time, file, gain, trim seconds or None)
events = [
    (0.45, 'sweep2', 0.35, None),
    (0.90, 'typing', 0.22, 0.75),
    (3.15, 'sweep1', 0.40, None),
    (3.55, 'bubble', 0.22, None), (3.71, 'bubble', 0.18, None), (3.87, 'bubble', 0.22, None),
    (4.03, 'bubble', 0.18, None), (4.19, 'bubble', 0.22, None),
    (4.65, 'longpop', 0.22, None), (5.10, 'longpop', 0.22, None), (5.55, 'longpop', 0.22, None),
    (7.35, 'sweep2', 0.40, None),
    (7.85, 'hardpop', 0.22, 0.6),
    (11.55, 'sweep1', 0.40, None),
    (12.05, 'bubble', 0.22, None), (12.40, 'bubble', 0.22, None), (12.75, 'bubble', 0.22, None),
    (15.55, 'sweep2', 0.40, None),
    (16.45, 'bubble', 0.18, None), (16.57, 'bubble', 0.18, None), (16.69, 'bubble', 0.18, None),
    (19.55, 'sweep1', 0.40, None),
    (21.00, 'check', 0.30, None),
    (21.62, 'msg', 0.25, 0.7),
    (22.22, 'hardpop', 0.22, 0.6),
    (23.55, 'sweep2', 0.40, None),
    (24.20, 'sparkle', 0.30, 2.0),
    (25.22, 'bubble', 0.22, None), (25.52, 'bubble', 0.22, None),
    (27.15, 'sweep1', 0.40, None),
    (28.42, 'select', 0.30, 0.8),
]

args = ['ffmpeg', '-v', 'error', '-y', '-i', voice, '-i', SRC + 'music.mp3']
for _, f, _, _ in events:
    args += ['-i', SRC + f + '.mp3']

fc = []
# Voice: remove rumble and hiss, even out the level, keep it bright and clear.
fc.append('[0:a]aresample=48000,highpass=f=90,lowpass=f=14000,afftdn=nf=-25,'
          'equalizer=f=3000:t=q:w=1.2:g=2.5,equalizer=f=250:t=q:w=1:g=-2,'
          'acompressor=threshold=-20dB:ratio=3:attack=5:release=90:makeup=2,'
          'deesser=i=0.4:m=0.5:f=0.5,loudnorm=I=-16:TP=-2:LRA=7,afade=t=in:d=0.08,aformat=channel_layouts=stereo,apad,'
          f'atrim=0:{total},asplit=2[vo][vkey]')
# Music: trimmed to length, faded, kept well under the voice and ducked further while the voice-over plays.
fc.append(f'[1:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:{total},asetpts=N/SR/TB,'
          f'afade=t=in:d=0.6,afade=t=out:st={total - 2.2}:d=2.2,volume=0.34[mus]')
fc.append('[mus]equalizer=f=2800:t=q:w=1.2:g=-4,equalizer=f=1200:t=q:w=1:g=-2[museq]')
fc.append('[museq][vkey]sidechaincompress=threshold=0.05:ratio=3:attack=150:release=900:knee=6:makeup=1[musd]')
# Sound effects on the animation beats.
labels = []
for i, (tau, f, g, trim) in enumerate(events):
    t_ms = int(real(tau) * 1000)
    chain = f'[{i + 2}:a]aresample=48000,aformat=channel_layouts=stereo,highpass=f=140,lowpass=f=9500,afade=t=in:d=0.02'
    if trim:
        chain += f',atrim=0:{trim},afade=t=out:st={max(trim - 0.3, 0)}:d=0.3'
    chain += f',volume={round(g * 1.4, 3)},adelay={t_ms}|{t_ms}[s{i}]'
    fc.append(chain)
    labels.append(f'[s{i}]')
fc.append(''.join(labels) + f'amix=inputs={len(labels)}:normalize=0,aecho=0.8:0.7:45|90:0.18|0.1,'
          f'acompressor=threshold=-24dB:ratio=2.5:attack=10:release=150,atrim=0:{total}[sfx]')
fc.append(f'[vo][musd][sfx]amix=inputs=3:weights=1 1 1:normalize=0,'
          f'alimiter=limit=0.89:attack=5:release=80,loudnorm=I=-14:TP=-1.5:LRA=9,atrim=0:{total}[out]')

args += ['-filter_complex', ';'.join(fc), '-map', '[out]', '-ar', '48000', '-c:a', 'pcm_s16le', out]
subprocess.run(args, check=True)
print('wrote', out, 'length', total)

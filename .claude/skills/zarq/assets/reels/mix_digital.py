"""Soundtrack for the ZARQ Digital reel: music and sound effects, plus an optional voice-over.

Usage: mix_digital.py <warp.json> <out.wav> [voice file]
Without a voice the music carries the reel; with one, the voice leads and the music ducks under it.
"""
import json, os, subprocess, sys

warp_file, out = sys.argv[1], sys.argv[2]
voice = sys.argv[3] if len(sys.argv) > 3 else None
SRC = os.environ.get('ZARQ_AUDIO_SRC', 'audio-src').rstrip('/') + '/'
W = json.load(open(warp_file))
total = W[-1][0]


def real(tau):
    for (a, ta), (b, tb) in zip(W, W[1:]):
        if tau <= tb:
            return a + (b - a) * (tau - ta) / (tb - ta)
    return W[-1][0]


# (design time, file, gain, trim)
events = [
    (0.45, 'sweep2', 0.35, None), (0.90, 'typing', 0.22, 1.2),
    (3.15, 'sweep1', 0.40, None),
    (3.60, 'msg', 0.22, 0.7), (4.10, 'msg', 0.22, 0.7), (4.60, 'msg', 0.22, 0.7),
    (7.35, 'sweep2', 0.40, None), (7.85, 'hardpop', 0.22, 0.6), (8.50, 'bubble', 0.25, None),
    (11.55, 'sweep1', 0.40, None),
] + [(11.92 + k * 0.14, 'bubble', 0.18 if k % 2 else 0.22, None) for k in range(9)] + [
    (15.55, 'sweep2', 0.40, None), (15.90, 'longpop', 0.25, None),
    (16.32, 'check', 0.30, None), (16.72, 'check', 0.30, None), (17.12, 'check', 0.30, None),
    (19.55, 'sweep1', 0.40, None),
    (20.22, 'bubble', 0.22, None), (20.77, 'bubble', 0.22, None), (21.32, 'bubble', 0.22, None), (21.87, 'bubble', 0.22, None),
    (23.55, 'sweep2', 0.40, None), (24.10, 'sparkle', 0.30, 2.0), (25.22, 'hardpop', 0.20, 0.6),
    (27.15, 'sweep1', 0.40, None), (28.42, 'select', 0.30, 0.8),
]

args = ['ffmpeg', '-v', 'error', '-y', '-i', SRC + 'music.mp3']
if voice:
    args += ['-i', voice]
first_sfx = 2 if voice else 1
for _, f, _, _ in events:
    args += ['-i', SRC + f + '.mp3']

fc = [f'[0:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:{total},asetpts=N/SR/TB,'
      f'afade=t=in:d=0.6,afade=t=out:st={total - 2.2}:d=2.2,volume={0.34 if voice else 0.55}[mus]']
if voice:
    fc.append('[1:a]aresample=48000,highpass=f=90,lowpass=f=14000,afftdn=nf=-25,'
              'equalizer=f=3000:t=q:w=1.2:g=2.5,equalizer=f=250:t=q:w=1:g=-2,'
              'acompressor=threshold=-20dB:ratio=3:attack=5:release=90:makeup=2,'
              'deesser=i=0.4:m=0.5:f=0.5,'
              f'loudnorm=I=-16:TP=-2:LRA=7,afade=t=in:d=0.08,aformat=channel_layouts=stereo,apad,atrim=0:{total},asplit=2[vo][vkey]')
    fc.append('[mus]equalizer=f=2800:t=q:w=1.2:g=-4,equalizer=f=1200:t=q:w=1:g=-2[museq]')
    fc.append('[museq][vkey]sidechaincompress=threshold=0.05:ratio=3:attack=150:release=900:knee=6:makeup=1[musd]')
labels = []
for i, (tau, f, g, trim) in enumerate(events):
    t_ms = int(real(tau) * 1000)
    chain = f'[{i + first_sfx}:a]aresample=48000,aformat=channel_layouts=stereo,highpass=f=140,lowpass=f=9500,afade=t=in:d=0.02'
    if trim:
        chain += f',atrim=0:{trim},afade=t=out:st={max(trim - 0.3, 0)}:d=0.3'
    chain += f',volume={round(g * 1.4, 3)},adelay={t_ms}|{t_ms}[s{i}]'
    fc.append(chain)
    labels.append(f'[s{i}]')
fc.append(''.join(labels) + f'amix=inputs={len(labels)}:normalize=0,aecho=0.8:0.7:45|90:0.18|0.1,'
          f'acompressor=threshold=-24dB:ratio=2.5:attack=10:release=150,atrim=0:{total}[sfx]')
beds = '[vo][musd][sfx]amix=inputs=3' if voice else '[mus][sfx]amix=inputs=2'
fc.append(f'{beds}:normalize=0,alimiter=limit=0.89:attack=5:release=80,loudnorm=I=-14:TP=-1.5:LRA=9,atrim=0:{total}[out]')

args += ['-filter_complex', ';'.join(fc), '-map', '[out]', '-ar', '48000', '-c:a', 'pcm_s16le', out]
subprocess.run(args, check=True)
print('wrote', out, 'length', total)

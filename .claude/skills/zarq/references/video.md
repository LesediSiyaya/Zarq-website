# Making ZARQ reels

Two finished reels exist (vertical 1080×1920, 30 fps): **free classes** (~40 s, two voice versions) and **ZARQ Digital** (~42 s). Templates live in `assets/reels/`.

## Pipeline
1. **Animate in HTML.** One page per reel (`classes-reel.html`, `digital-reel.html`): absolutely positioned elements and a `window.render(T)` function that sets every element's opacity/transform deterministically for time T. Scenes are written on a 32 s "design" timeline. Helpers: `win()` in/out envelopes, `word()` for kinetic text, ease-out/back curves. Background: ink with drifting blurred rose/lilac/pink blobs; scene 7 turns blush.
2. **Fit to the voice with a time warp.** `window.WARP` is a list of `[realSeconds, designSeconds]` knots. Find each sentence start in the voice-over with
   `ffmpeg -i voice -af "highpass=f=80,silencedetect=n=-38dB:d=0.18" -f null -`
   and set each scene to start ~0.25 s before its line (extra knots inside a scene to land beats, e.g. each customer question or "Level 1"). Keep the end-card entrances at normal speed and let the hold stretch. Saved warps: classes Voice 1 (20:11) `[[0,0],[1.86,3.2],[6.29,7.4],[10.40,11.6],[15.68,15.6],[19.65,19.6],[25.0,23.6],[29.59,27.2],[31.89,29.5],[39.9,31.5],[40.4,32]]`; classes Voice 2 (20:15) `[[0,0],[1.81,3.2],[6.34,7.4],[10.43,11.6],[15.57,15.6],[19.42,19.6],[24.78,23.6],[29.48,27.2],[31.78,29.5],[40.2,31.5],[40.7,32]]`; Digital `[[0,0],[2.56,3.2],[4.45,3.6],[6.05,4.1],[7.75,4.6],[9.35,5.6],[11.37,7.4],[14.18,11.6],[21.29,15.6],[25.61,19.6],[28.6,23.6],[29.45,24.3],[32.45,25.2],[37.45,27.2],[39.75,29.5],[42.0,31.5],[42.5,32]]`.
3. **Render frames** with `assets/reels/render.cjs <dir> <outDir> '<warp json>'` (Playwright screenshots each frame; ~4 min for 40 s). The classes reel embeds a VP9 webm of the robotics clip (headless Chromium has no H.264).
4. **Mix audio** with `assets/reels/mix.py` (classes) or `mix_digital.py` (Digital, also works without a voice). Set `ZARQ_AUDIO_SRC` to the folder holding music and effects.
5. **Encode:** `ffmpeg -framerate 30 -i frames/%05d.jpg -i mix.wav -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart out.mp4`.

## Mix settings the owner approved ("smoother mix")
- Voice: highpass 90 Hz, lowpass 14 kHz, light denoise, +2.5 dB at 3 kHz, −2 dB at 250 Hz, 3:1 compression, de-esser, loudnorm −16 LUFS, 80 ms fade-in.
- Music: volume 0.34, EQ dip at 2.8 kHz (−4 dB) and 1.2 kHz (−2 dB), gentle sidechain duck (threshold 0.05, ratio 3, attack 150 ms, release 900 ms, knee 6); fade in 0.6 s, out 2.2 s.
- Effects: highpass 140 Hz, lowpass 9.5 kHz, 20 ms fade-in, 0.3 s fade-out when trimmed, gain ×1.4 of the listed values, shared light echo and 2.5:1 bus compression.
- Master: limiter 0.89, loudnorm −14 LUFS / TP −1.5. Target balance: music ~11–12 dB under the voice, effects ~16 dB under.
- Check balance by rendering stems (set amix weights to 1/0/0 etc.) and measuring with `ebur128`; the assistant cannot listen, so always ask the owner to check on her phone.

## Sources (free licences, no credit required)
- Robotics video/photo: Pexels, Vanessa Loring - video 7868196 (`https://videos.pexels.com/video-files/7868196/7868196-hd_1920_1080_25fps.mp4`), photo 7868834.
- Music: Mixkit "Motivating Mornings" `https://assets.mixkit.co/music/33/33.mp3`.
- Effects (Mixkit, `https://assets.mixkit.co/active_storage/sfx/<id>/<id>-preview.mp3`): sweep1 166, sweep2 174, bubble 2357, longpop 2358, hardpop 2364, typing 2531, sparkle 2350, check 1120, select 1109, msg 2354.

## Voice-over scripts (≤500 characters for AI voices)
- Classes: "Are you a future coder? Curious about AI, apps, or making a robot move? At ZARQ, you don't just learn it. You build it. Real websites. Real robots. Real projects you can show. There's a track for every age, from five and up. Smart with tech... kind with people. That's Digital Kindness. And it's completely free. Devices and kits provided. ZARQ free coding classes start January 2027. Register your interest at zarq dot co dot za."
- Digital: "Your business deserves to be found. Customers are asking: do you have a website? Where are your prices? Are you registered? Let's give them a yes. At ZARQ Digital, we build it. Websites, branding, apps, AI, IT support and CIPC registration. Clear prices, with websites from fifteen hundred rand. From first call to launch, we're with you. We're a Level 1 B-BBEE contributor, and every project helps fund free coding classes for young people. Get a quote at zarq dot co dot za."

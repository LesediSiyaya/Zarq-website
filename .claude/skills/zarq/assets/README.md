# ZARQ skill assets

Templates expect an `assets/` folder next to them (fonts from `public/fonts/`, photos from `public/`).

## reels/
- `classes-reel.html`, `digital-reel.html` - animated reels; render with
  `REEL=classes-reel.html node render.cjs <this folder> <frames dir> '<warp json>'`
  Needs in `assets/`: geist-400/500/600, geist-mono-500, instrument-serif-400(-italic) woff2;
  classes: robotics.webm (VP9 cut of Pexels 7868196), robotics-car.jpg, zarq-site-mobile.jpg, kids-robotics-class.jpg;
  digital: zarq-site-desktop.jpg, zarq-site-mobile.jpg.
- `mix.py <warp.json> <voice> <out.wav>` (classes) and `mix_digital.py <warp.json> <out.wav> [voice]`;
  set ZARQ_AUDIO_SRC to a folder with music.mp3 and the effect files named in references/video.md.

## instagram/
- `posts.html` - all launch-week slides, profile picture and highlight covers (1080x1350 / 1080x1920);
  `node render.cjs <this folder>` writes one PNG per `section[id]` into `out/`.
  Needs in `assets/`: the fonts, founder-lesedi-headshot.jpg, kids-robotics-class.jpg, robotics-car.jpg, robotics-wiring.jpg.

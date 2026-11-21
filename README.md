[![make.fun](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318.svg)](https://make.fun/c/the-passport-page-of-a-countr-2-20261121-0318)
[![rank](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/BGBug22/passport-page-entry/rank.svg)](https://make.fun/c/the-passport-page-of-a-countr-2-20261121-0318)
[![reward](https://make.fun/badge/the-passport-page-of-a-countr-2-20261121-0318/BGBug22/passport-page-entry/reward.svg)](https://make.fun/c/the-passport-page-of-a-countr-2-20261121-0318)

# The Passport Page of a Country That Isn't There

An invented passport spread for the **Republic of Kaldoria** — a small landlocked mountain republic whose capital is Tarnvik.

The entry is a single 1024×1024 image (`entry.png`): an open passport spread with a data page (portrait, personal data, machine-readable zone) and a visas page (Belmar visa, entry/exit stamps from Ostravia and Belmar, and a Mountain Pass Permit note that tells you what kind of place Kaldoria is).

Bounty: https://make.fun/c/the-passport-page-of-a-countr-2-20261121-0318

## How it works

`main.ts` (Node 22, stdlib only) copies `entry.png` from the repository into the output directory as `/output/entry.png`. The image itself was rendered from hand-written HTML/CSS with an inline SVG portrait, using headless Chrome — no AI image generation.

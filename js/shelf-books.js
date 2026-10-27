/* Data visual rak 3D (index.html): palet ruangan, ukuran buku, motif.
   Dibuat oleh make_palettes.py dari warna punggung tiap cover; fakta karya ada di works.js. */
const SHELF_ORDER = ["chickens", "love-is-blind", "sasaki", "kami-hikoki", "seigi-no-mikata", "shikaku", "mermaid-rhapsody", "nayuta", "fire-punch", "woke-up-as-a-girl", "sisters", "chainsaw-man", "look-back", "17-26", "goodbye-eri", "just-listen"];
const SHELF_VISUALS = {
  "chickens": {
    "color": "#eae95f",
    "foil": "#5a2d1c",
    "palette": {
      "paper": "#e1e05b",
      "paperDeep": "#b0af47",
      "paperPale": "#fcf8dd",
      "ink": "#262615",
      "inkSoft": "#605f2b",
      "wall": "#e1e05b",
      "shelf": "#4f3921",
      "shelfDark": "#1c0e0a",
      "light": "#fbf2ca",
      "fill": "#f3f3a7"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "brackets",
    "seed": 11
  },
  "love-is-blind": {
    "color": "#914d33",
    "foil": "#f3e7c9",
    "palette": {
      "paper": "#663624",
      "paperDeep": "#502a1c",
      "paperPale": "#f0e2d7",
      "ink": "#f2e5db",
      "inkSoft": "#d5b8a9",
      "wall": "#663624",
      "shelf": "#44261b",
      "shelfDark": "#1c0e0a",
      "light": "#ebd6c2",
      "fill": "#c29d8f"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "paths",
    "seed": 18
  },
  "sasaki": {
    "color": "#9ab87b",
    "foil": "#1f2a15",
    "palette": {
      "paper": "#94b176",
      "paperDeep": "#738a5c",
      "paperPale": "#f1f1e1",
      "ink": "#141512",
      "inkSoft": "#363f2d",
      "wall": "#94b176",
      "shelf": "#463324",
      "shelfDark": "#1c0e0a",
      "light": "#ede9cf",
      "fill": "#c7d8b6"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "caret",
    "seed": 25
  },
  "kami-hikoki": {
    "color": "#dedad0",
    "foil": "#4d4d4d",
    "palette": {
      "paper": "#d5d1c8",
      "paperDeep": "#a6a39c",
      "paperPale": "#faf6ed",
      "ink": "#242423",
      "inkSoft": "#575652",
      "wall": "#d5d1c8",
      "shelf": "#4e372e",
      "shelfDark": "#1c0e0a",
      "light": "#f9efdf",
      "fill": "#edebe5"
    },
    "width": 0.94,
    "height": 1.42,
    "depth": 0.11,
    "motifKey": "orbits",
    "seed": 32
  },
  "seigi-no-mikata": {
    "color": "#cfcabe",
    "foil": "#4d4d4d",
    "palette": {
      "paper": "#c7c2b6",
      "paperDeep": "#9b978e",
      "paperPale": "#f8f3eb",
      "ink": "#232220",
      "inkSoft": "#4e4c48",
      "wall": "#c7c2b6",
      "shelf": "#4c352c",
      "shelfDark": "#1c0e0a",
      "light": "#f6ecdc",
      "fill": "#e5e2db"
    },
    "width": 0.94,
    "height": 1.42,
    "depth": 0.11,
    "motifKey": "modules",
    "seed": 39
  },
  "shikaku": {
    "color": "#9c8148",
    "foil": "#1d1608",
    "palette": {
      "paper": "#514325",
      "paperDeep": "#3f341d",
      "paperPale": "#f1e9da",
      "ink": "#f3ebde",
      "inkSoft": "#d9ccb1",
      "wall": "#514325",
      "shelf": "#462d1e",
      "shelfDark": "#1c0e0a",
      "light": "#eddfc6",
      "fill": "#c9ba9a"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "frames",
    "seed": 46
  },
  "mermaid-rhapsody": {
    "color": "#414773",
    "foil": "#e8e19b",
    "palette": {
      "paper": "#353a5e",
      "paperDeep": "#292d49",
      "paperPale": "#e4e1e0",
      "ink": "#e8e5e3",
      "inkSoft": "#b7b6c2",
      "wall": "#353a5e",
      "shelf": "#3b2623",
      "shelfDark": "#1c0e0a",
      "light": "#ddd5ce",
      "fill": "#969ab2"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "compass",
    "seed": 53
  },
  "nayuta": {
    "color": "#e8e19b",
    "foil": "#414773",
    "palette": {
      "paper": "#dfd895",
      "paperDeep": "#aea874",
      "paperPale": "#fcf6e6",
      "ink": "#26251c",
      "inkSoft": "#5f5c42",
      "wall": "#dfd895",
      "shelf": "#4f3828",
      "shelfDark": "#1c0e0a",
      "light": "#fbf1d5",
      "fill": "#f2eec8"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "brackets",
    "seed": 60
  },
  "fire-punch": {
    "color": "#b01528",
    "foil": "#f5e4a8",
    "palette": {
      "paper": "#86101e",
      "paperDeep": "#690c17",
      "paperPale": "#f4dad6",
      "ink": "#f6dfda",
      "inkSoft": "#e1a3a5",
      "wall": "#86101e",
      "shelf": "#48201a",
      "shelfDark": "#1c0e0a",
      "light": "#f1ccc1",
      "fill": "#d47e89"
    },
    "width": 1.04,
    "height": 1.6,
    "depth": 0.32,
    "motifKey": "paths",
    "seed": 67
  },
  "woke-up-as-a-girl": {
    "color": "#a7a488",
    "foil": "#23233b",
    "palette": {
      "paper": "#a09d83",
      "paperDeep": "#7d7a66",
      "paperPale": "#f3eee3",
      "ink": "#0b0b0b",
      "inkSoft": "#34332c",
      "wall": "#a09d83",
      "shelf": "#473125",
      "shelfDark": "#1c0e0a",
      "light": "#efe6d2",
      "fill": "#cfcdbe"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "caret",
    "seed": 74
  },
  "sisters": {
    "color": "#d9ce9f",
    "foil": "#414773",
    "palette": {
      "paper": "#d0c699",
      "paperDeep": "#a29a77",
      "paperPale": "#faf4e6",
      "ink": "#24221d",
      "inkSoft": "#555140",
      "wall": "#d0c699",
      "shelf": "#4d3628",
      "shelfDark": "#1c0e0a",
      "light": "#f8edd6",
      "fill": "#eae4ca"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "orbits",
    "seed": 81
  },
  "chainsaw-man": {
    "color": "#cf4f2d",
    "foil": "#ffffff",
    "palette": {
      "paper": "#742c19",
      "paperDeep": "#5a2214",
      "paperPale": "#f8e2d6",
      "ink": "#f9e5da",
      "inkSoft": "#edb9a7",
      "wall": "#742c19",
      "shelf": "#4c271b",
      "shelfDark": "#1c0e0a",
      "light": "#f6d6c1",
      "fill": "#e59e8c"
    },
    "width": 1.1,
    "height": 1.62,
    "depth": 0.4,
    "motifKey": "modules",
    "seed": 88
  },
  "look-back": {
    "color": "#c6c964",
    "foil": "#2b2a17",
    "palette": {
      "paper": "#bec160",
      "paperDeep": "#94974b",
      "paperPale": "#f7f3de",
      "ink": "#212216",
      "inkSoft": "#4b4c29",
      "wall": "#bec160",
      "shelf": "#4b3521",
      "shelfDark": "#1c0e0a",
      "light": "#f5eccb",
      "fill": "#e0e1aa"
    },
    "width": 1.0,
    "height": 1.56,
    "depth": 0.21,
    "motifKey": "frames",
    "seed": 95
  },
  "17-26": {
    "color": "#f2703a",
    "foil": "#eae95f",
    "palette": {
      "paper": "#6f341b",
      "paperDeep": "#572915",
      "paperPale": "#fde7d8",
      "ink": "#fde9dc",
      "inkSoft": "#fac6ac",
      "wall": "#6f341b",
      "shelf": "#502a1c",
      "shelfDark": "#1c0e0a",
      "light": "#fddcc4",
      "fill": "#f8b093"
    },
    "width": 1.04,
    "height": 1.58,
    "depth": 0.3,
    "motifKey": "compass",
    "seed": 102
  },
  "goodbye-eri": {
    "color": "#16223b",
    "foil": "#f08a4b",
    "palette": {
      "paper": "#121c30",
      "paperDeep": "#0e1625",
      "paperPale": "#dedcd8",
      "ink": "#e3e0dc",
      "inkSoft": "#a6a8ac",
      "wall": "#121c30",
      "shelf": "#36211c",
      "shelfDark": "#1c0e0a",
      "light": "#d5cec4",
      "fill": "#7f8593"
    },
    "width": 1.02,
    "height": 1.58,
    "depth": 0.26,
    "motifKey": "brackets",
    "seed": 109
  },
  "just-listen": {
    "color": "#2b2d31",
    "foil": "#e6e6e6",
    "palette": {
      "paper": "#232528",
      "paperDeep": "#1b1d1f",
      "paperPale": "#e1ddd7",
      "ink": "#e6e1db",
      "inkSoft": "#aeaca9",
      "wall": "#232528",
      "shelf": "#38221b",
      "shelfDark": "#1c0e0a",
      "light": "#d9d0c2",
      "fill": "#8a8c8e"
    },
    "width": 0.96,
    "height": 1.5,
    "depth": 0.15,
    "motifKey": "paths",
    "seed": 116
  }
};

/* Data visual rak 3D (index.html): palet ruangan, ukuran buku, motif.
   Dibuat oleh make_palettes.py dari warna punggung tiap cover; fakta karya ada di works.js. */
const SHELF_ORDER = ["chickens", "love-is-blind", "sasaki", "kami-hikoki", "seigi-no-mikata", "shikaku", "mermaid-rhapsody", "nayuta", "fire-punch", "woke-up-as-a-girl", "sisters", "chainsaw-man", "look-back", "17-26", "goodbye-eri", "just-listen"];
const SHELF_VISUALS = {
  "chickens": {
    "color": "#1f2429",
    "foil": "#e04a3c",
    "palette": {
      "paper": "#191e22",
      "paperDeep": "#14171b",
      "paperPale": "#e0dcd6",
      "ink": "#e4e0da",
      "inkSoft": "#aaa9a6",
      "wall": "#191e22",
      "shelf": "#37211a",
      "shelfDark": "#1c0e0a",
      "light": "#d7cfc1",
      "fill": "#848789"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "brackets",
    "seed": 11
  },
  "love-is-blind": {
    "color": "#6b2f63",
    "foil": "#ff9ac4",
    "palette": {
      "paper": "#582751",
      "paperDeep": "#451e3f",
      "paperPale": "#eadede",
      "ink": "#ede2e1",
      "inkSoft": "#c7adbc",
      "wall": "#582751",
      "shelf": "#402321",
      "shelfDark": "#1c0e0a",
      "light": "#e4d1cb",
      "fill": "#ae8da9"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "paths",
    "seed": 18
  },
  "sasaki": {
    "color": "#e0652f",
    "foil": "#30292b",
    "palette": {
      "paper": "#703218",
      "paperDeep": "#572713",
      "paperPale": "#fbe5d7",
      "ink": "#fbe8db",
      "inkSoft": "#f3c1a8",
      "wall": "#703218",
      "shelf": "#4e291b",
      "shelfDark": "#1c0e0a",
      "light": "#f9dac2",
      "fill": "#eeaa8d"
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
    "color": "#19131e",
    "foil": "#e0386f",
    "palette": {
      "paper": "#141019",
      "paperDeep": "#100c14",
      "paperPale": "#dfdad4",
      "ink": "#e3ded9",
      "inkSoft": "#a8a2a1",
      "wall": "#141019",
      "shelf": "#361f19",
      "shelfDark": "#1c0e0a",
      "light": "#d6cbbf",
      "fill": "#807d83"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "frames",
    "seed": 46
  },
  "mermaid-rhapsody": {
    "color": "#1a84c1",
    "foil": "#ebf1b4",
    "palette": {
      "paper": "#0e4768",
      "paperDeep": "#0b3751",
      "paperPale": "#dfe9eb",
      "ink": "#e4ecec",
      "inkSoft": "#a8cddf",
      "wall": "#0e4768",
      "shelf": "#362d2c",
      "shelfDark": "#1c0e0a",
      "light": "#d6e0dc",
      "fill": "#81bbdd"
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
    "color": "#c17243",
    "foil": "#f6ecd0",
    "palette": {
      "paper": "#643b23",
      "paperDeep": "#4e2e1b",
      "paperPale": "#f6e7da",
      "ink": "#f8eadd",
      "inkSoft": "#e7c6b0",
      "wall": "#643b23",
      "shelf": "#4a2b1d",
      "shelfDark": "#1c0e0a",
      "light": "#f4ddc5",
      "fill": "#ddb198"
    },
    "width": 0.98,
    "height": 1.5,
    "depth": 0.16,
    "motifKey": "caret",
    "seed": 74
  },
  "sisters": {
    "color": "#4a4f55",
    "foil": "#7fd3cf",
    "palette": {
      "paper": "#3d4146",
      "paperDeep": "#303337",
      "paperPale": "#e6e2dc",
      "ink": "#e9e5df",
      "inkSoft": "#bab9b6",
      "wall": "#3d4146",
      "shelf": "#3c271f",
      "shelfDark": "#1c0e0a",
      "light": "#ded6c9",
      "fill": "#9b9ea2"
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
    "color": "#b9b39f",
    "foil": "#1f2a2e",
    "palette": {
      "paper": "#b2ac99",
      "paperDeep": "#8b8677",
      "paperPale": "#f5f0e6",
      "ink": "#1c1c1a",
      "inkSoft": "#3f3d37",
      "wall": "#b2ac99",
      "shelf": "#493328",
      "shelfDark": "#1c0e0a",
      "light": "#f2e8d6",
      "fill": "#d8d5ca"
    },
    "width": 0.96,
    "height": 1.5,
    "depth": 0.15,
    "motifKey": "paths",
    "seed": 116
  }
};

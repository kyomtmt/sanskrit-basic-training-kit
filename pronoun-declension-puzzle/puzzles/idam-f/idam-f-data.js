// pronoun-declension-puzzle/puzzles/idam-f/idam-f-data.js
const pronounPuzzleData = {
  word: "idam (feminine)",
  translation: "これ、この人 (女性)",
  cards: [
    // Singular
    { id: "card-idam-f-nom-sg", text: "iyam",    acceptableCells: ["cell-nom-sg"] },
    { id: "card-idam-f-acc-sg", text: "imām",    acceptableCells: ["cell-acc-sg"] },
    { id: "card-idam-f-ins-sg", text: "anayā",   acceptableCells: ["cell-ins-sg"] },
    { id: "card-idam-f-dat-sg", text: "asyai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-idam-f-ablgen-sg-1", text: "asyāḥ",   acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-idam-f-ablgen-sg-2", text: "asyāḥ",   acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-idam-f-loc-sg", text: "asyām",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-idam-f-nomacc-du-1", text: "ime",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-idam-f-nomacc-du-2", text: "ime",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-idam-f-insdatabl-du-1", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-f-insdatabl-du-2", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-f-insdatabl-du-3", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-f-genloc-du-1", text: "anayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-idam-f-genloc-du-2", text: "anayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-idam-f-nomacc-pl-1", text: "imāḥ",    acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-idam-f-nomacc-pl-2", text: "imāḥ",    acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-idam-f-ins-pl", text: "ābhiḥ",   acceptableCells: ["cell-ins-pl"] },
    { id: "card-idam-f-databl-pl-1", text: "ābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-idam-f-databl-pl-2", text: "ābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-idam-f-gen-pl", text: "āsām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-idam-f-loc-pl", text: "āsu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

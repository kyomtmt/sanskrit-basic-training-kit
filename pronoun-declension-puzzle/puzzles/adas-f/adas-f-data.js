// pronoun-declension-puzzle/puzzles/adas-f/adas-f-data.js
const pronounPuzzleData = {
  word: "adas (feminine)",
  translation: "あれ、あの人 (女性)",
  cards: [
    // Singular
    { id: "card-adas-f-nom-sg", text: "asau",     acceptableCells: ["cell-nom-sg"] },
    { id: "card-adas-f-acc-sg", text: "amūm",     acceptableCells: ["cell-acc-sg"] },
    { id: "card-adas-f-ins-sg", text: "amuyā",    acceptableCells: ["cell-ins-sg"] },
    { id: "card-adas-f-dat-sg", text: "amuṣyai",  acceptableCells: ["cell-dat-sg"] },
    { id: "card-adas-f-ablgen-sg-1", text: "amuṣyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-adas-f-ablgen-sg-2", text: "amuṣyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-adas-f-loc-sg", text: "amuṣyām",  acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-adas-f-nomacc-du-1", text: "amū",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-adas-f-nomacc-du-2", text: "amū",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-adas-f-insdatabl-du-1", text: "amūbhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-adas-f-insdatabl-du-2", text: "amūbhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-adas-f-insdatabl-du-3", text: "amūbhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-adas-f-genloc-du-1", text: "amuyoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-adas-f-genloc-du-2", text: "amuyoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-adas-f-nomacc-pl-1", text: "amūḥ",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-adas-f-nomacc-pl-2", text: "amūḥ",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-adas-f-ins-pl", text: "amūbhiḥ",  acceptableCells: ["cell-ins-pl"] },
    { id: "card-adas-f-databl-pl-1", text: "amūbhyaḥ", acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-adas-f-databl-pl-2", text: "amūbhyaḥ", acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-adas-f-gen-pl", text: "amūṣām",   acceptableCells: ["cell-gen-pl"] },
    { id: "card-adas-f-loc-pl", text: "amūṣu",    acceptableCells: ["cell-loc-pl"] }
  ]
};

// pronoun-declension-puzzle/puzzles/adas-m/adas-m-data.js
const pronounPuzzleData = {
  word: "adas (masculine)",
  translation: "あれ、あの人 (男性)",
  cards: [
    // Singular
    { id: "card-adas-m-nom-sg", text: "asau",     acceptableCells: ["cell-nom-sg"] },
    { id: "card-adas-m-acc-sg", text: "amum",     acceptableCells: ["cell-acc-sg"] },
    { id: "card-adas-m-ins-sg", text: "amunā",    acceptableCells: ["cell-ins-sg"] },
    { id: "card-adas-m-dat-sg", text: "amuṣmai",  acceptableCells: ["cell-dat-sg"] },
    { id: "card-adas-m-abl-sg", text: "amuṣmāt",  acceptableCells: ["cell-abl-sg"] },
    { id: "card-adas-m-gen-sg", text: "amuṣya",   acceptableCells: ["cell-gen-sg"] },
    { id: "card-adas-m-loc-sg", text: "amuṣmin",  acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-adas-m-nomacc-du-1", text: "amū",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-adas-m-nomacc-du-2", text: "amū",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-adas-m-insdatabl-du-1", text: "amūbhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-adas-m-insdatabl-du-2", text: "amūbhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-adas-m-insdatabl-du-3", text: "amūbhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-adas-m-genloc-du-1", text: "amuyoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-adas-m-genloc-du-2", text: "amuyoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-adas-m-nom-pl", text: "amī",      acceptableCells: ["cell-nom-pl"] },
    { id: "card-adas-m-acc-pl", text: "amūn",     acceptableCells: ["cell-acc-pl"] },
    { id: "card-adas-m-ins-pl", text: "amībhiḥ",  acceptableCells: ["cell-ins-pl"] },
    { id: "card-adas-m-databl-pl-1", text: "amībhyaḥ", acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-adas-m-databl-pl-2", text: "amībhyaḥ", acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-adas-m-gen-pl", text: "amīṣām",   acceptableCells: ["cell-gen-pl"] },
    { id: "card-adas-m-loc-pl", text: "amīṣu",    acceptableCells: ["cell-loc-pl"] }
  ]
};

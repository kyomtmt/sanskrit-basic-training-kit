// pronoun-declension-puzzle/puzzles/tad-m/tad-m-data.js
const pronounPuzzleData = {
  word: "tad (masculine)",
  translation: "それ、彼 (3人称・男性)",
  cards: [
    // Singular
    { id: "card-tad-m-nom-sg", text: "saḥ",      acceptableCells: ["cell-nom-sg"] },
    { id: "card-tad-m-acc-sg", text: "tam",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-tad-m-ins-sg", text: "tena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-tad-m-dat-sg", text: "tasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-tad-m-abl-sg", text: "tasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-tad-m-gen-sg", text: "tasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-tad-m-loc-sg", text: "tasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-tad-m-nomacc-du-1", text: "tau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tad-m-nomacc-du-2", text: "tau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tad-m-insdatabl-du-1", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-m-insdatabl-du-2", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-m-insdatabl-du-3", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-m-genloc-du-1", text: "tayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-tad-m-genloc-du-2", text: "tayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-tad-m-nom-pl", text: "te",       acceptableCells: ["cell-nom-pl"] },
    { id: "card-tad-m-acc-pl", text: "tān",      acceptableCells: ["cell-acc-pl"] },
    { id: "card-tad-m-ins-pl", text: "taiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-tad-m-databl-pl-1", text: "tebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-tad-m-databl-pl-2", text: "tebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-tad-m-gen-pl", text: "teṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-tad-m-loc-pl", text: "teṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

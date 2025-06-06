// pronoun-declension-puzzle/puzzles/tad-n/tad-n-data.js
const pronounPuzzleData = {
  word: "tad (neuter)",
  translation: "それ (3人称・中性)",
  cards: [
    // Singular
    { id: "card-tad-n-nomacc-sg-1", text: "tat",      acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-tad-n-nomacc-sg-2", text: "tat",      acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-tad-n-ins-sg", text: "tena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-tad-n-dat-sg", text: "tasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-tad-n-abl-sg", text: "tasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-tad-n-gen-sg", text: "tasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-tad-n-loc-sg", text: "tasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-tad-n-nomacc-du-1", text: "te",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tad-n-nomacc-du-2", text: "te",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tad-n-insdatabl-du-1", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-n-insdatabl-du-2", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-n-insdatabl-du-3", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-n-genloc-du-1", text: "tayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-tad-n-genloc-du-2", text: "tayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-tad-n-nomacc-pl-1", text: "tāni",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-tad-n-nomacc-pl-2", text: "tāni",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-tad-n-ins-pl", text: "taiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-tad-n-databl-pl-1", text: "tebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-tad-n-databl-pl-2", text: "tebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-tad-n-gen-pl", text: "teṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-tad-n-loc-pl", text: "teṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

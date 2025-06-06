// pronoun-declension-puzzle/puzzles/tad-f/tad-f-data.js
const pronounPuzzleData = {
  word: "tad (feminine)",
  translation: "それ、彼女 (3人称・女性)",
  cards: [
    // Singular
    { id: "card-tad-f-nom-sg", text: "sā",       acceptableCells: ["cell-nom-sg"] },
    { id: "card-tad-f-acc-sg", text: "tām",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-tad-f-ins-sg", text: "tayā",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-tad-f-dat-sg", text: "tasyai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-tad-f-ablgem-sg-1", text: "tasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-tad-f-ablgem-sg-2", text: "tasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-tad-f-loc-sg", text: "tasyām",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-tad-f-nomacc-du-1", text: "te",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tad-f-nomacc-du-2", text: "te",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tad-f-insdatabl-du-1", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-f-insdatabl-du-2", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-f-insdatabl-du-3", text: "tābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tad-f-genloc-du-1", text: "tayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-tad-f-genloc-du-2", text: "tayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-tad-f-nomacc-pl-1", text: "tāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-tad-f-nomacc-pl-2", text: "tāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-tad-f-ins-pl", text: "tābhiḥ",   acceptableCells: ["cell-ins-pl"] },
    { id: "card-tad-f-databl-pl-1", text: "tābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-tad-f-databl-pl-2", text: "tābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-tad-f-gen-pl", text: "tāsām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-tad-f-loc-pl", text: "tāsū",     acceptableCells: ["cell-loc-pl"] }
  ]
};

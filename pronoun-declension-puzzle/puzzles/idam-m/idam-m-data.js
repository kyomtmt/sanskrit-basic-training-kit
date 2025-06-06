// pronoun-declension-puzzle/puzzles/idam-m/idam-m-data.js
const pronounPuzzleData = {
  word: "idam (masculine)",
  translation: "これ、この人 (男性)",
  cards: [
    // Singular
    { id: "card-idam-m-nom-sg", text: "ayam",    acceptableCells: ["cell-nom-sg"] },
    { id: "card-idam-m-acc-sg", text: "imam",    acceptableCells: ["cell-acc-sg"] },
    { id: "card-idam-m-ins-sg", text: "anena",   acceptableCells: ["cell-ins-sg"] },
    { id: "card-idam-m-dat-sg", text: "asmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-idam-m-abl-sg", text: "asmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-idam-m-gen-sg", text: "asya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-idam-m-loc-sg", text: "asmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-idam-m-nomacc-du-1", text: "imau",     acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-idam-m-nomacc-du-2", text: "imau",     acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-idam-m-insdatabl-du-1", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-m-insdatabl-du-2", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-m-insdatabl-du-3", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-m-genloc-du-1", text: "anayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-idam-m-genloc-du-2", text: "anayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-idam-m-nom-pl", text: "ime",     acceptableCells: ["cell-nom-pl"] },
    { id: "card-idam-m-acc-pl", text: "imān",    acceptableCells: ["cell-acc-pl"] },
    { id: "card-idam-m-ins-pl", text: "ebhiḥ",   acceptableCells: ["cell-ins-pl"] },
    { id: "card-idam-m-databl-pl-1", text: "ebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-idam-m-databl-pl-2", text: "ebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-idam-m-gen-pl", text: "eṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-idam-m-loc-pl", text: "eṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

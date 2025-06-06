// pronoun-declension-puzzle/puzzles/etad-m/etad-m-data.js
const pronounPuzzleData = {
  word: "etad (masculine)",
  translation: "これ、この人 (男性)",
  cards: [
    // Singular
    { id: "card-etad-m-nom-sg", text: "eṣaḥ",      acceptableCells: ["cell-nom-sg"] },
    { id: "card-etad-m-acc-sg", text: "etam",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-etad-m-ins-sg", text: "etena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-etad-m-dat-sg", text: "etasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-etad-m-abl-sg", text: "etasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-etad-m-gen-sg", text: "etasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-etad-m-loc-sg", text: "etasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-etad-m-nomacc-du-1", text: "etau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-etad-m-nomacc-du-2", text: "etau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-etad-m-insdatabl-du-1", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-m-insdatabl-du-2", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-m-insdatabl-du-3", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-m-genloc-du-1", text: "etayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-etad-m-genloc-du-2", text: "etayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-etad-m-nom-pl", text: "ete",       acceptableCells: ["cell-nom-pl"] },
    { id: "card-etad-m-acc-pl", text: "etān",      acceptableCells: ["cell-acc-pl"] },
    { id: "card-etad-m-ins-pl", text: "etaiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-etad-m-databl-pl-1", text: "etebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-etad-m-databl-pl-2", text: "etebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-etad-m-gen-pl", text: "eteṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-etad-m-loc-pl", text: "eteṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

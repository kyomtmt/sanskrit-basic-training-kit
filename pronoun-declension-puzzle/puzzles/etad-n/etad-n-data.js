// pronoun-declension-puzzle/puzzles/etad-n/etad-n-data.js
const pronounPuzzleData = {
  word: "etad (neuter)",
  translation: "これ (中性)",
  cards: [
    // Singular
    { id: "card-etad-n-nomacc-sg-1", text: "etad",     acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-etad-n-nomacc-sg-2", text: "etad",     acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-etad-n-ins-sg", text: "etena",    acceptableCells: ["cell-ins-sg"] },
    { id: "card-etad-n-dat-sg", text: "etasmai",  acceptableCells: ["cell-dat-sg"] },
    { id: "card-etad-n-abl-sg", text: "etasmāt",  acceptableCells: ["cell-abl-sg"] },
    { id: "card-etad-n-gen-sg", text: "etasya",   acceptableCells: ["cell-gen-sg"] },
    { id: "card-etad-n-loc-sg", text: "etasmin",  acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-etad-n-nomacc-du-1", text: "ete",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-etad-n-nomacc-du-2", text: "ete",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-etad-n-insdatabl-du-1", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-n-insdatabl-du-2", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-n-insdatabl-du-3", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-n-genloc-du-1", text: "etayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-etad-n-genloc-du-2", text: "etayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-etad-n-nomacc-pl-1", text: "etāni",    acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-etad-n-nomacc-pl-2", text: "etāni",    acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-etad-n-ins-pl", text: "etaiḥ",    acceptableCells: ["cell-ins-pl"] },
    { id: "card-etad-n-databl-pl-1", text: "etebhyaḥ", acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-etad-n-databl-pl-2", text: "etebhyaḥ", acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-etad-n-gen-pl", text: "eteṣām",   acceptableCells: ["cell-gen-pl"] },
    { id: "card-etad-n-loc-pl", text: "eteṣu",    acceptableCells: ["cell-loc-pl"] }
  ]
};

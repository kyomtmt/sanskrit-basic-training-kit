// pronoun-declension-puzzle/puzzles/idam-n/idam-n-data.js
const pronounPuzzleData = {
  word: "idam (neuter)",
  translation: "これ (中性)",
  cards: [
    // Singular
    { id: "card-idam-n-nomacc-sg-1", text: "idam",     acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-idam-n-nomacc-sg-2", text: "idam",     acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-idam-n-ins-sg", text: "anena",    acceptableCells: ["cell-ins-sg"] },
    { id: "card-idam-n-dat-sg", text: "asmai",    acceptableCells: ["cell-dat-sg"] },
    { id: "card-idam-n-abl-sg", text: "asmāt",    acceptableCells: ["cell-abl-sg"] },
    { id: "card-idam-n-gen-sg", text: "asya",     acceptableCells: ["cell-gen-sg"] },
    { id: "card-idam-n-loc-sg", text: "asmin",    acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-idam-n-nomacc-du-1", text: "ime",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-idam-n-nomacc-du-2", text: "ime",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-idam-n-insdatabl-du-1", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-n-insdatabl-du-2", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-n-insdatabl-du-3", text: "ābhyām",   acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-idam-n-genloc-du-1", text: "anayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-idam-n-genloc-du-2", text: "anayoḥ",   acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-idam-n-nomacc-pl-1", text: "imāni",   acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-idam-n-nomacc-pl-2", text: "imāni",   acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-idam-n-ins-pl", text: "ebhiḥ",    acceptableCells: ["cell-ins-pl"] },
    { id: "card-idam-n-databl-pl-1", text: "ebhyaḥ",   acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-idam-n-databl-pl-2", text: "ebhyaḥ",   acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-idam-n-gen-pl", text: "eṣām",     acceptableCells: ["cell-gen-pl"] },
    { id: "card-idam-n-loc-pl", text: "eṣu",      acceptableCells: ["cell-loc-pl"] }
  ]
};

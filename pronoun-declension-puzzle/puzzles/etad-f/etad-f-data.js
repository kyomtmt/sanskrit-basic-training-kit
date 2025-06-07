// pronoun-declension-puzzle/puzzles/etad-f/etad-f-data.js
const pronounPuzzleData = {
  word: "etad (feminine)",
  translation: "これ、この人 (女性)",
  cards: [
    // Singular
    { id: "card-etad-f-nom-sg", text: "eṣā",       acceptableCells: ["cell-nom-sg"] },
    { id: "card-etad-f-acc-sg", text: "etām",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-etad-f-ins-sg", text: "etayā",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-etad-f-dat-sg", text: "etasyai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-etad-f-ablgem-sg-1", text: "etasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-etad-f-ablgem-sg-2", text: "etasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-etad-f-loc-sg", text: "etasyām",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-etad-f-nomacc-du-1", text: "ete",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-etad-f-nomacc-du-2", text: "ete",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-etad-f-insdatabl-du-1", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-f-insdatabl-du-2", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-f-insdatabl-du-3", text: "etābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-etad-f-genloc-du-1", text: "etayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-etad-f-genloc-du-2", text: "etayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-etad-f-nomacc-pl-1", text: "etāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-etad-f-nomacc-pl-2", text: "etāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-etad-f-ins-pl", text: "etābhiḥ",   acceptableCells: ["cell-ins-pl"] },
    { id: "card-etad-f-databl-pl-1", text: "etābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-etad-f-databl-pl-2", text: "etābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-etad-f-gen-pl", text: "etāsām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-etad-f-loc-pl", text: "etāsu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

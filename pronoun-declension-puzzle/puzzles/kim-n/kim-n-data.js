// pronoun-declension-puzzle/puzzles/kim-n/kim-n-data.js
const pronounPuzzleData = {
  word: "kim (neuter)",
  translation: "何 (中性)",
  cards: [
    // Singular
    { id: "card-kim-n-nomacc-sg-1", text: "kim",      acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-kim-n-nomacc-sg-2", text: "kim",      acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-kim-n-ins-sg", text: "kena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-kim-n-dat-sg", text: "kasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-kim-n-abl-sg", text: "kasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-kim-n-gen-sg", text: "kasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-kim-n-loc-sg", text: "kasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-kim-n-nomacc-du-1", text: "ke",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-kim-n-nomacc-du-2", text: "ke",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-kim-n-insdatabl-du-1", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-n-insdatabl-du-2", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-n-insdatabl-du-3", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-n-genloc-du-1", text: "kayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-kim-n-genloc-du-2", text: "kayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-kim-n-nomacc-pl-1", text: "kāni",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-kim-n-nomacc-pl-2", text: "kāni",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-kim-n-ins-pl", text: "kaiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-kim-n-databl-pl-1", text: "kebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-kim-n-databl-pl-2", text: "kebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-kim-n-gen-pl", text: "keṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-kim-n-loc-pl", text: "keṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

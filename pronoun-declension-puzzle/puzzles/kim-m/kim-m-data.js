// pronoun-declension-puzzle/puzzles/kim-m/kim-m-data.js
const pronounPuzzleData = {
  word: "kim (masculine)",
  translation: "誰 (男性)",
  cards: [
    // Singular
    { id: "card-kim-m-nom-sg", text: "kaḥ",      acceptableCells: ["cell-nom-sg"] },
    { id: "card-kim-m-acc-sg", text: "kam",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-kim-m-ins-sg", text: "kena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-kim-m-dat-sg", text: "kasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-kim-m-abl-sg", text: "kasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-kim-m-gen-sg", text: "kasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-kim-m-loc-sg", text: "kasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-kim-m-nomacc-du-1", text: "kau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-kim-m-nomacc-du-2", text: "kau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-kim-m-insdatabl-du-1", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-m-insdatabl-du-2", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-m-insdatabl-du-3", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-m-genloc-du-1", text: "kayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-kim-m-genloc-du-2", text: "kayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-kim-m-nom-pl", text: "ke",       acceptableCells: ["cell-nom-pl"] },
    { id: "card-kim-m-acc-pl", text: "kān",      acceptableCells: ["cell-acc-pl"] },
    { id: "card-kim-m-ins-pl", text: "kaiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-kim-m-databl-pl-1", text: "kebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-kim-m-databl-pl-2", text: "kebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-kim-m-gen-pl", text: "keṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-kim-m-loc-pl", text: "keṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

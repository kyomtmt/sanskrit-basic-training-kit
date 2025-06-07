// pronoun-declension-puzzle/puzzles/kim-f/kim-f-data.js
const pronounPuzzleData = {
  word: "kim (feminine)",
  translation: "誰 (女性)",
  cards: [
    // Singular
    { id: "card-kim-f-nom-sg", text: "kā",       acceptableCells: ["cell-nom-sg"] },
    { id: "card-kim-f-acc-sg", text: "kām",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-kim-f-ins-sg", text: "kayā",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-kim-f-dat-sg", text: "kasyai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-kim-f-ablgen-sg-1", text: "kasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-kim-f-ablgen-sg-2", text: "kasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-kim-f-loc-sg", text: "kasyām",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-kim-f-nomacc-du-1", text: "ke",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-kim-f-nomacc-du-2", text: "ke",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-kim-f-insdatabl-du-1", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-f-insdatabl-du-2", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-f-insdatabl-du-3", text: "kābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-kim-f-genloc-du-1", text: "kayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-kim-f-genloc-du-2", text: "kayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-kim-f-nomacc-pl-1", text: "kāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-kim-f-nomacc-pl-2", text: "kāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-kim-f-ins-pl", text: "kābhiḥ",   acceptableCells: ["cell-ins-pl"] },
    { id: "card-kim-f-databl-pl-1", text: "kābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-kim-f-databl-pl-2", text: "kābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-kim-f-gen-pl", text: "kāsām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-kim-f-loc-pl", text: "kāsu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

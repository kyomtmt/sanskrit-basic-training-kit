// pronoun-declension-puzzle/puzzles/aham/aham-data.js
const pronounPuzzleData = {
  word: "aham",
  translation: "私 (1人称)",
  cards: [
    // Singular
    { id: "card-aham-nom-sg", text: "aham",   acceptableCells: ["cell-nom-sg"] },
    { id: "card-aham-acc-sg", text: "mām",    acceptableCells: ["cell-acc-sg"] },
    { id: "card-aham-ins-sg", text: "mayā",   acceptableCells: ["cell-ins-sg"] },
    { id: "card-aham-dat-sg", text: "mahyam", acceptableCells: ["cell-dat-sg"] },
    { id: "card-aham-abl-sg", text: "mat",    acceptableCells: ["cell-abl-sg"] },
    { id: "card-aham-gen-sg", text: "mama",   acceptableCells: ["cell-gen-sg"] },
    { id: "card-aham-loc-sg", text: "mayi",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-aham-nomacc-du-1", text: "āvām",   acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-aham-nomacc-du-2", text: "āvām",   acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-aham-insdatabl-du-1", text: "āvābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-aham-insdatabl-du-2", text: "āvābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-aham-insdatabl-du-3", text: "āvābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-aham-genloc-du-1", text: "āvayoḥ", acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-aham-genloc-du-2", text: "āvayoḥ", acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-aham-nom-pl", text: "vayam",  acceptableCells: ["cell-nom-pl"] },
    { id: "card-aham-acc-pl", text: "asmān",  acceptableCells: ["cell-acc-pl"] },
    { id: "card-aham-ins-pl", text: "asmābhiḥ", acceptableCells: ["cell-ins-pl"] },
    { id: "card-aham-dat-pl", text: "asmabhyam",acceptableCells: ["cell-dat-pl"] },
    { id: "card-aham-abl-pl", text: "asmat",  acceptableCells: ["cell-abl-pl"] },
    { id: "card-aham-gen-pl", text: "asmākam",acceptableCells: ["cell-gen-pl"] },
    { id: "card-aham-loc-pl", text: "asmāsu", acceptableCells: ["cell-loc-pl"] }
  ]
  // declensions オブジェクトは、もしセルの正解テキストを参照するのに使うなら残してもOK
};

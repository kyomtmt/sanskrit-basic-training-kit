// pronoun-declension-puzzle/puzzles/tvam/tvam-data.js
const pronounPuzzleData = {
  word: "tvam",
  translation: "あなた (2人称)",
  cards: [
    // Singular
    { id: "card-tvam-nom-sg", text: "tvam",      acceptableCells: ["cell-nom-sg"] },
    { id: "card-tvam-acc-sg", text: "tvām",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-tvam-ins-sg", text: "tvayā",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-tvam-dat-sg", text: "tubhyam",  acceptableCells: ["cell-dat-sg"] },
    { id: "card-tvam-abl-sg", text: "tvat",      acceptableCells: ["cell-abl-sg"] },
    { id: "card-tvam-gen-sg", text: "tava",      acceptableCells: ["cell-gen-sg"] },
    { id: "card-tvam-loc-sg", text: "tvayi",     acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-tvam-nomacc-du-1", text: "yuvām",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tvam-nomacc-du-2", text: "yuvām",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-tvam-insdatabl-du-1", text: "yuvābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tvam-insdatabl-du-2", text: "yuvābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tvam-insdatabl-du-3", text: "yuvābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-tvam-genloc-du-1", text: "yuvayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-tvam-genloc-du-2", text: "yuvayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-tvam-nom-pl", text: "yūyam",     acceptableCells: ["cell-nom-pl"] },
    { id: "card-tvam-acc-pl", text: "yuṣmān",    acceptableCells: ["cell-acc-pl"] },
    { id: "card-tvam-ins-pl", text: "yuṣmābhiḥ", acceptableCells: ["cell-ins-pl"] },
    { id: "card-tvam-dat-pl", text: "yuṣmabhyam",acceptableCells: ["cell-dat-pl"] },
    { id: "card-tvam-abl-pl", text: "yuṣmat",    acceptableCells: ["cell-abl-pl"] },
    { id: "card-tvam-gen-pl", text: "yuṣmākam",  acceptableCells: ["cell-gen-pl"] },
    { id: "card-tvam-loc-pl", text: "yuṣmāsu",   acceptableCells: ["cell-loc-pl"] }
  ]
};

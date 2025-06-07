// pronoun-declension-puzzle/puzzles/yad-f/yad-f-data.js
const pronounPuzzleData = {
  word: "yad (feminine)",
  translation: "関係代名詞 (女性)",
  cards: [
    // Singular
    { id: "card-yad-f-nom-sg", text: "yā",       acceptableCells: ["cell-nom-sg"] },
    { id: "card-yad-f-acc-sg", text: "yām",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-yad-f-ins-sg", text: "yayā",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-yad-f-dat-sg", text: "yasyai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-yad-f-ablgen-sg-1", text: "yasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-yad-f-ablgen-sg-2", text: "yasyāḥ", acceptableCells: ["cell-abl-sg", "cell-gen-sg"] },
    { id: "card-yad-f-loc-sg", text: "yasyām",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-yad-f-nomacc-du-1", text: "ye",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-yad-f-nomacc-du-2", text: "ye",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-yad-f-insdatabl-du-1", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-f-insdatabl-du-2", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-f-insdatabl-du-3", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-f-genloc-du-1", text: "yayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-yad-f-genloc-du-2", text: "yayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-yad-f-nomacc-pl-1", text: "yāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-yad-f-nomacc-pl-2", text: "yāḥ",      acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-yad-f-ins-pl", text: "yābhiḥ",   acceptableCells: ["cell-ins-pl"] },
    { id: "card-yad-f-databl-pl-1", text: "yābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-yad-f-databl-pl-2", text: "yābhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-yad-f-gen-pl", text: "yāsām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-yad-f-loc-pl", text: "yāsu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

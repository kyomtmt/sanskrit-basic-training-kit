// pronoun-declension-puzzle/puzzles/yad-m/yad-m-data.js
const pronounPuzzleData = {
  word: "yad (masculine)",
  translation: "関係代名詞 (男性)",
  cards: [
    // Singular
    { id: "card-yad-m-nom-sg", text: "yaḥ",      acceptableCells: ["cell-nom-sg"] },
    { id: "card-yad-m-acc-sg", text: "yam",      acceptableCells: ["cell-acc-sg"] },
    { id: "card-yad-m-ins-sg", text: "yena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-yad-m-dat-sg", text: "yasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-yad-m-abl-sg", text: "yasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-yad-m-gen-sg", text: "yasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-yad-m-loc-sg", text: "yasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-yad-m-nomacc-du-1", text: "yau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-yad-m-nomacc-du-2", text: "yau",      acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-yad-m-insdatabl-du-1", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-m-insdatabl-du-2", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-m-insdatabl-du-3", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-m-genloc-du-1", text: "yayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-yad-m-genloc-du-2", text: "yayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-yad-m-nom-pl", text: "ye",       acceptableCells: ["cell-nom-pl"] },
    { id: "card-yad-m-acc-pl", text: "yān",      acceptableCells: ["cell-acc-pl"] },
    { id: "card-yad-m-ins-pl", text: "yaiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-yad-m-databl-pl-1", text: "yebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-yad-m-databl-pl-2", text: "yebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-yad-m-gen-pl", text: "yeṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-yad-m-loc-pl", text: "yeṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

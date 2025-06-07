// pronoun-declension-puzzle/puzzles/yad-n/yad-n-data.js
const pronounPuzzleData = {
  word: "yad (neuter)",
  translation: "関係代名詞 (中性)",
  cards: [
    // Singular
    { id: "card-yad-n-nomacc-sg-1", text: "yat",      acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-yad-n-nomacc-sg-2", text: "yat",      acceptableCells: ["cell-nom-sg", "cell-acc-sg"] },
    { id: "card-yad-n-ins-sg", text: "yena",     acceptableCells: ["cell-ins-sg"] },
    { id: "card-yad-n-dat-sg", text: "yasmai",   acceptableCells: ["cell-dat-sg"] },
    { id: "card-yad-n-abl-sg", text: "yasmāt",   acceptableCells: ["cell-abl-sg"] },
    { id: "card-yad-n-gen-sg", text: "yasya",    acceptableCells: ["cell-gen-sg"] },
    { id: "card-yad-n-loc-sg", text: "yasmin",   acceptableCells: ["cell-loc-sg"] },
    // Dual
    { id: "card-yad-n-nomacc-du-1", text: "ye",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-yad-n-nomacc-du-2", text: "ye",       acceptableCells: ["cell-nom-du", "cell-acc-du"] },
    { id: "card-yad-n-insdatabl-du-1", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-n-insdatabl-du-2", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-n-insdatabl-du-3", text: "yābhyām", acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"] },
    { id: "card-yad-n-genloc-du-1", text: "yayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    { id: "card-yad-n-genloc-du-2", text: "yayoḥ",    acceptableCells: ["cell-gen-du", "cell-loc-du"] },
    // Plural
    { id: "card-yad-n-nomacc-pl-1", text: "yāni",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-yad-n-nomacc-pl-2", text: "yāni",     acceptableCells: ["cell-nom-pl", "cell-acc-pl"] },
    { id: "card-yad-n-ins-pl", text: "yaiḥ",     acceptableCells: ["cell-ins-pl"] },
    { id: "card-yad-n-databl-pl-1", text: "yebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-yad-n-databl-pl-2", text: "yebhyaḥ",  acceptableCells: ["cell-dat-pl", "cell-abl-pl"] },
    { id: "card-yad-n-gen-pl", text: "yeṣām",    acceptableCells: ["cell-gen-pl"] },
    { id: "card-yad-n-loc-pl", text: "yeṣu",     acceptableCells: ["cell-loc-pl"] }
  ]
};

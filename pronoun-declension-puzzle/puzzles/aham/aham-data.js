// pronoun-declension-puzzle/puzzles/aham.js
const pronounData = {
  word: "aham", // 代表形 (主格単数)
  translation: "私 (1人称)", // 意味と人称
  declensions: {
    "Nominative":  { "Singular": "aham",   "Dual": "āvām",     "Plural": "vayam" },
    "Accusative":  { "Singular": "mām",    "Dual": "āvām",     "Plural": "asmān" },
    "Instrumental":{ "Singular": "mayā",   "Dual": "āvābhyām", "Plural": "asmābhiḥ" },
    "Dative":      { "Singular": "mahyam", "Dual": "āvābhyām", "Plural": "asmabhyam" },
    "Ablative":    { "Singular": "mat",    "Dual": "āvābhyām", "Plural": "asmat" },
    "Genitive":    { "Singular": "mama",   "Dual": "āvayoḥ",   "Plural": "asmākam" },
    "Locative":    { "Singular": "mayi",   "Dual": "āvayoḥ",   "Plural": "asmāsu" }
    // 1人称代名詞には通常、呼格 (Vocative) はありません。
  }
};

// もし既存のスクリプトがグローバル変数からデータを読み込む場合
// (例: window.currentPuzzleData = pronounData; のようにするか、
// script.js が直接この pronounData 変数を参照するようにします)
// window.currentPuzzleData = pronounData; // ← この行を有効にするか、script.jsの読み込み方を確認

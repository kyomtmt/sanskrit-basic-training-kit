// Data for paśu (m.) declension puzzle

const pasuCardsData = [
    // 単数 (Singular)
    { id: 'pasu-nom-sg',  romaji: 'paśuḥ',    devanagari: 'पशुः',   acceptableCells: ['cell-nom-sg'] },
    { id: 'pasu-acc-sg',  romaji: 'paśum',    devanagari: 'पशुम्',   acceptableCells: ['cell-acc-sg'] },
    { id: 'pasu-ins-sg',  romaji: 'paśunā',   devanagari: 'पशुना',   acceptableCells: ['cell-ins-sg'] },
    { id: 'pasu-dat-sg',  romaji: 'paśave',   devanagari: 'पशवे',   acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ paśoḥ なので、対応するカードを2枚用意し、acceptableCells を使う
    { id: 'pasu-ablgen-sg-1', romaji: 'paśoḥ',    devanagari: 'पशोः',    acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'pasu-ablgen-sg-2', romaji: 'paśoḥ',    devanagari: 'पशोः',    acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'pasu-loc-sg',  romaji: 'paśau',    devanagari: 'पशौ',    acceptableCells: ['cell-loc-sg'] },
    { id: 'pasu-voc-sg',  romaji: 'paśo',     devanagari: 'पशो',     acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ paśū なので、対応するカードを3枚用意し、acceptableCells を使う
    { id: 'pasu-nav-du-1', romaji: 'paśū',     devanagari: 'पशू',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'pasu-nav-du-2', romaji: 'paśū',     devanagari: 'पशू',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'pasu-nav-du-3', romaji: 'paśū',     devanagari: 'पशू',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // ★★★ 具格・与格・奪格が同じ paśubhyām なので、対応するカードを3枚用意し、acceptableCells を使う ★★★
    { id: 'pasu-ida-du-1', romaji: 'paśubhyām',devanagari: 'पशुभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'pasu-ida-du-2', romaji: 'paśubhyām',devanagari: 'पशुभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'pasu-ida-du-3', romaji: 'paśubhyām',devanagari: 'पशुभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ paśvoḥ なので、対応するカードを2枚用意し、acceptableCells を使う
    { id: 'pasu-gl-du-1',  romaji: 'paśvoḥ',   devanagari: 'पश्वोः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'pasu-gl-du-2',  romaji: 'paśvoḥ',   devanagari: 'पश्वोः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ paśavaḥ なので、対応するカードを2枚用意し、acceptableCells を使う
    { id: 'pasu-nav-pl-1', romaji: 'paśavaḥ',  devanagari: 'पशवः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'pasu-nav-pl-2', romaji: 'paśavaḥ',  devanagari: 'पशवः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'pasu-acc-pl', romaji: 'paśūn',    devanagari: 'पशून्',   acceptableCells: ['cell-acc-pl'] },
    { id: 'pasu-ins-pl', romaji: 'paśubhiḥ', devanagari: 'पशुभिः',  acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ paśubhyaḥ なので、対応するカードを2枚用意し、acceptableCells を使う
    { id: 'pasu-da-pl-1',  romaji: 'paśubhyaḥ',devanagari: 'पशुभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'pasu-da-pl-2',  romaji: 'paśubhyaḥ',devanagari: 'पशुभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'pasu-gen-pl', romaji: 'paśūnām',  devanagari: 'पशूनाम्',  acceptableCells: ['cell-gen-pl'] },
    { id: 'pasu-loc-pl', romaji: 'paśuṣu',   devanagari: 'पशुषु',   acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("pasu-data.js loaded");
// console.log(pasuCardsData);

// Data for rai- (m.) declension puzzle (財産 - 男性)

const raiMCardsData = [
    // 単数 (Singular)
    { id: 'rai-m-nv-sg-1', romaji: 'rāḥ',        devanagari: 'राः',        acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'rai-m-nv-sg-2', romaji: 'rāḥ',        devanagari: 'राः',        acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'rai-m-acc-sg',  romaji: 'rāyam',      devanagari: 'रायम्',       acceptableCells: ['cell-acc-sg'] },
    { id: 'rai-m-ins-sg',  romaji: 'rāyā',       devanagari: 'राया',        acceptableCells: ['cell-ins-sg'] },
    { id: 'rai-m-dat-sg',  romaji: 'rāye',       devanagari: 'राये',        acceptableCells: ['cell-dat-sg'] },
    // ★★★ 単数 奪格・属格の rāyaḥ に (単数) を追記 ★★★
    { id: 'rai-m-ablgen-sg-1', romaji: 'rāyaḥ (単数)',devanagari: 'रायः',       acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'rai-m-ablgen-sg-2', romaji: 'rāyaḥ (単数)',devanagari: 'रायः',       acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'rai-m-loc-sg',  romaji: 'rāyi',       devanagari: 'रायि',        acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    { id: 'rai-m-nav-du-1', romaji: 'rāyau',      devanagari: 'रायौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'rai-m-nav-du-2', romaji: 'rāyau',      devanagari: 'रायौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'rai-m-nav-du-3', romaji: 'rāyau',      devanagari: 'रायौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'rai-m-ida-du-1', romaji: 'rābhyām',    devanagari: 'राभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'rai-m-ida-du-2', romaji: 'rābhyām',    devanagari: 'राभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'rai-m-ida-du-3', romaji: 'rābhyām',    devanagari: 'राभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'rai-m-gl-du-1',  romaji: 'rāyoḥ',      devanagari: 'रायोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'rai-m-gl-du-2',  romaji: 'rāyoḥ',      devanagari: 'रायोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // ★★★ 複数 主格・呼格・対格の rāyaḥ に (複数) を追記 ★★★
    { id: 'rai-m-nva-pl-1', romaji: 'rāyaḥ (複数)',devanagari: 'रायः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl', 'cell-acc-pl'] },
    { id: 'rai-m-nva-pl-2', romaji: 'rāyaḥ (複数)',devanagari: 'रायः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl', 'cell-acc-pl'] },
    { id: 'rai-m-nva-pl-3', romaji: 'rāyaḥ (複数)',devanagari: 'रायः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl', 'cell-acc-pl'] }, // 主格・対格・呼格が同じなので3枚
    { id: 'rai-m-ins-pl',  romaji: 'rābhiḥ',     devanagari: 'राभिः',      acceptableCells: ['cell-ins-pl'] },
    { id: 'rai-m-da-pl-1', romaji: 'rābhyaḥ',    devanagari: 'राभ्यः',     acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'rai-m-da-pl-2', romaji: 'rābhyaḥ',    devanagari: 'राभ्यः',     acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'rai-m-gen-pl',  romaji: 'rāyām',      devanagari: 'रायाम्',      acceptableCells: ['cell-gen-pl'] },
    { id: 'rai-m-loc-pl',  romaji: 'rāsu',       devanagari: 'रासु',       acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるように調整。
// rāyaḥ (単数) は2枚 (奪格・属格用)。
// rāyaḥ (複数) は3枚 (主格・対格・呼格用)。

// console.log("rai-m-data.js loaded");
// console.log(raiMCardsData.length); // 24枚になっているか確認
// console.log(raiMCardsData);

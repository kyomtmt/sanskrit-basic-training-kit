// Data for go- (m./f.) declension puzzle (牛 - 男性/女性)

const puzzleData = [
    // 単数 (Singular)
    // 主格・呼格が同じ gauḥ
    { id: 'go-nv-sg-1', romaji: 'gauḥ',    devanagari: 'गौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'go-nv-sg-2', romaji: 'gauḥ',    devanagari: 'गौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] }, // 2枚用意
    { id: 'go-acc-sg',  romaji: 'gām',     devanagari: 'गाम्',   acceptableCells: ['cell-acc-sg'] },
    { id: 'go-ins-sg',  romaji: 'gavā',    devanagari: 'गवा',    acceptableCells: ['cell-ins-sg'] },
    { id: 'go-dat-sg',  romaji: 'gave',    devanagari: 'गवे',    acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ goḥ
    { id: 'go-ablgen-sg-1', romaji: 'goḥ',     devanagari: 'गोः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'go-ablgen-sg-2', romaji: 'goḥ',     devanagari: 'गोः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'go-loc-sg',  romaji: 'gavi',    devanagari: 'गवि',    acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ gāvau
    { id: 'go-nav-du-1', romaji: 'gāvau',   devanagari: 'गावौ',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'go-nav-du-2', romaji: 'gāvau',   devanagari: 'गावौ',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'go-nav-du-3', romaji: 'gāvau',   devanagari: 'गावौ',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ gobhyām
    { id: 'go-ida-du-1', romaji: 'gobhyām', devanagari: 'गोभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'go-ida-du-2', romaji: 'gobhyām', devanagari: 'गोभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'go-ida-du-3', romaji: 'gobhyām', devanagari: 'गोभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ gavoḥ
    { id: 'go-gl-du-1',  romaji: 'gavoḥ',   devanagari: 'गवोः',  acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'go-gl-du-2',  romaji: 'gavoḥ',   devanagari: 'गवोः',  acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ gāvaḥ
    { id: 'go-nv-pl-1', romaji: 'gāvaḥ',   devanagari: 'गावः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'go-nv-pl-2', romaji: 'gāvaḥ',   devanagari: 'गावः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'go-acc-pl',  romaji: 'gāḥ',     devanagari: 'गाः',    acceptableCells: ['cell-acc-pl'] },
    { id: 'go-ins-pl',  romaji: 'gobhiḥ',  devanagari: 'गोभिः',  acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ gobhyaḥ
    { id: 'go-da-pl-1', romaji: 'gobhyaḥ', devanagari: 'गोभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'go-da-pl-2', romaji: 'gobhyaḥ', devanagari: 'गोभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'go-gen-pl',  romaji: 'gavām',   devanagari: 'गवाम्',   acceptableCells: ['cell-gen-pl'] },
    { id: 'go-loc-pl',  romaji: 'goṣu',    devanagari: 'गोषु',   acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("go-data.js loaded");
// console.log(goCardsData.length);
// console.log(goCardsData);

// Data for dhī- (f.) declension puzzle (思慮)

const puzzleData = [
    // 単数 (Singular)
    // 主格・呼格が同じ dhīḥ
    { id: 'dhi-nv-sg-1', romaji: 'dhīḥ',            devanagari: 'धीः',          acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'dhi-nv-sg-2', romaji: 'dhīḥ',            devanagari: 'धीः',          acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] }, // 2枚用意
    { id: 'dhi-acc-sg',  romaji: 'dhiyam',          devanagari: 'धियम्',         acceptableCells: ['cell-acc-sg'] },
    { id: 'dhi-ins-sg',  romaji: 'dhiyā',           devanagari: 'धिया',          acceptableCells: ['cell-ins-sg'] },
    { id: 'dhi-dat-sg',  romaji: 'dhiye/dhiyai',    devanagari: 'धिये/धियै',    acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ dhiyaḥ/dhiyāḥ
    { id: 'dhi-ablgen-sg-1', romaji: 'dhiyaḥ/dhiyāḥ',  devanagari: 'धियः/धियाः',  acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dhi-ablgen-sg-2', romaji: 'dhiyaḥ/dhiyāḥ',  devanagari: 'धियः/धियाः',  acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dhi-loc-sg',  romaji: 'dhiyi/dhiyām',    devanagari: 'धियि/धियाम्',   acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ dhiyau
    { id: 'dhi-nav-du-1', romaji: 'dhiyau',          devanagari: 'धियौ',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dhi-nav-du-2', romaji: 'dhiyau',          devanagari: 'धियौ',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dhi-nav-du-3', romaji: 'dhiyau',          devanagari: 'धियौ',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ dhībhyām
    { id: 'dhi-ida-du-1', romaji: 'dhībhyām',        devanagari: 'धीभ्याम्',       acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dhi-ida-du-2', romaji: 'dhībhyām',        devanagari: 'धीभ्याम्',       acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dhi-ida-du-3', romaji: 'dhībhyām',        devanagari: 'धीभ्याम्',       acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ dhiyoḥ
    { id: 'dhi-gl-du-1',  romaji: 'dhiyoḥ',          devanagari: 'धियोः',         acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'dhi-gl-du-2',  romaji: 'dhiyoḥ',          devanagari: 'धियोः',         acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ dhiyaḥ
    { id: 'dhi-nv-pl-1', romaji: 'dhiyaḥ',          devanagari: 'धियः',         acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'dhi-nv-pl-2', romaji: 'dhiyaḥ',          devanagari: 'धियः',         acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'dhi-acc-pl',  romaji: 'dhiyaḥ',          devanagari: 'धियः',         acceptableCells: ['cell-acc-pl'] }, // 活用表では主格と同じdhiyaḥのようだが、通常はdhiyaḥ/dhīḥなど。ここでは表に従う。
    { id: 'dhi-ins-pl',  romaji: 'dhībhiḥ',         devanagari: 'धीभिः',         acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ dhībhyaḥ
    { id: 'dhi-da-pl-1', romaji: 'dhībhyaḥ',        devanagari: 'धीभ्यः',        acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dhi-da-pl-2', romaji: 'dhībhyaḥ',        devanagari: 'धीभ्यः',        acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dhi-gen-pl',  romaji: 'dhiyām/dhīnām',   devanagari: 'धियाम्/धीनाम्',  acceptableCells: ['cell-gen-pl'] },
    { id: 'dhi-loc-pl',  romaji: 'dhīṣu',           devanagari: 'धीषु',          acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 複数対格は活用表に従い dhiyaḥ としましたが、他の資料も参照すると良いかもしれません。

// console.log("dhi-data.js loaded");
// console.log(dhiCardsData.length);
// console.log(dhiCardsData);

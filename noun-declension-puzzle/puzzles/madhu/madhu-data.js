// Data for madhu (n.) declension puzzle

const puzzleData = [
    // 単数 (Singular)
    // 主格・対格が同じ madhu なので、カードを2枚用意
    { id: 'madhu-na-sg-1',  romaji: 'madhu',          devanagari: 'मधु',         acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'madhu-na-sg-2',  romaji: 'madhu',          devanagari: 'मधु',         acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'madhu-ins-sg', romaji: 'madhunā',        devanagari: 'मधुना',       acceptableCells: ['cell-ins-sg'] },
    { id: 'madhu-dat-sg', romaji: 'madhune',        devanagari: 'मधुने',       acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ madhunaḥ なので、カードを2枚用意
    { id: 'madhu-ablgen-sg-1', romaji: 'madhunaḥ',       devanagari: 'मधुनः',      acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'madhu-ablgen-sg-2', romaji: 'madhunaḥ',       devanagari: 'मधुनः',      acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'madhu-loc-sg', romaji: 'madhuni',        devanagari: 'मधुनि',       acceptableCells: ['cell-loc-sg'] },
    { id: 'madhu-voc-sg', romaji: 'madhu/madho',    devanagari: 'मधु/मधो',    acceptableCells: ['cell-voc-sg'] }, // 呼格単数は madhu または madho

    // 両数 (Dual)
    // 主格・対格・呼格が同じ madhunī なので、カードを3枚用意
    { id: 'madhu-nav-du-1', romaji: 'madhunī',        devanagari: 'मधुनी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'madhu-nav-du-2', romaji: 'madhunī',        devanagari: 'मधुनी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'madhu-nav-du-3', romaji: 'madhunī',        devanagari: 'मधुनी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ madhubhyām なので、カードを3枚用意
    { id: 'madhu-ida-du-1', romaji: 'madhubhyām',     devanagari: 'मधुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'madhu-ida-du-2', romaji: 'madhubhyām',     devanagari: 'मधुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'madhu-ida-du-3', romaji: 'madhubhyām',     devanagari: 'मधुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ madhunoḥ なので、カードを2枚用意
    { id: 'madhu-gl-du-1',  romaji: 'madhunoḥ',       devanagari: 'मधुनोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'madhu-gl-du-2',  romaji: 'madhunoḥ',       devanagari: 'मधुनोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・対格・呼格が同じ madhūni なので、カードを3枚用意
    { id: 'madhu-nav-pl-1', romaji: 'madhūni',        devanagari: 'मधूनि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'madhu-nav-pl-2', romaji: 'madhūni',        devanagari: 'मधूनि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'madhu-nav-pl-3', romaji: 'madhūni',        devanagari: 'मधूनि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'madhu-ins-pl', romaji: 'madhubhiḥ',      devanagari: 'मधुभिः',      acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ madhubhyaḥ なので、カードを2枚用意
    { id: 'madhu-da-pl-1',  romaji: 'madhubhyaḥ',     devanagari: 'मधुभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'madhu-da-pl-2',  romaji: 'madhubhyaḥ',     devanagari: 'मधुभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'madhu-gen-pl', romaji: 'madhūnām',       devanagari: 'मधूनाम्',      acceptableCells: ['cell-gen-pl'] },
    { id: 'madhu-loc-pl', romaji: 'madhuṣu',        devanagari: 'मधुषु',       acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("madhu-data.js loaded");
// console.log(madhuCardsData);

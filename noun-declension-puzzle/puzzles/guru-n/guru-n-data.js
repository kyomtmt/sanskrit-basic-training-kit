// Data for guru- (n.) declension puzzle (重い - 中性) - 最新の活用表に基づいて修正

const puzzleData = [
    // 単数 (Singular) - 中性
    { id: 'guru-n-na-sg-1', romaji: 'guru',           devanagari: 'गुरु',         acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'guru-n-na-sg-2', romaji: 'guru',           devanagari: 'गुरु',         acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'guru-n-ins-sg',  romaji: 'guruṇā',         devanagari: 'गुरुणा',       acceptableCells: ['cell-ins-sg'] },
    { id: 'guru-n-dat-sg',  romaji: 'guruṇe/gurave',  devanagari: 'गुरुणे/गुरवे', acceptableCells: ['cell-dat-sg'] },
    { id: 'guru-n-ablgen-sg-1', romaji: 'guruṇaḥ/guroḥ',devanagari: 'गुरुणः/गुरोः',acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'guru-n-ablgen-sg-2', romaji: 'guruṇaḥ/guroḥ',devanagari: 'गुरुणः/गुरोः',acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'guru-n-loc-sg',  romaji: 'guruṇi/gurau',   devanagari: 'गुरुणि/गुरौ',  acceptableCells: ['cell-loc-sg'] },
    { id: 'guru-n-voc-sg',  romaji: 'guru/guro',      devanagari: 'गुरु/गुरो',    acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual) - 中性
    // ★★★ 主格・対格・呼格を新しい活用表に合わせて guruṇī に ★★★
    { id: 'guru-n-nav-du-1', romaji: 'guruṇī',         devanagari: 'गुरुणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'guru-n-nav-du-2', romaji: 'guruṇī',         devanagari: 'गुरुणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'guru-n-nav-du-3', romaji: 'guruṇī',         devanagari: 'गुरुणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'guru-n-ida-du-1', romaji: 'gurubhyām',      devanagari: 'गुरुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'guru-n-ida-du-2', romaji: 'gurubhyām',      devanagari: 'गुरुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'guru-n-ida-du-3', romaji: 'gurubhyām',      devanagari: 'गुरुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'guru-n-gl-du-1',  romaji: 'guruṇoḥ/gurvoḥ', devanagari: 'गुरुणोः/गुर्वोः',acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'guru-n-gl-du-2',  romaji: 'guruṇoḥ/gurvoḥ', devanagari: 'गुरुणोः/गुर्वोः',acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 中性
    // ★★★ 主格・対格・呼格を新しい活用表に合わせて gurūṇi に ★★★ (これは前回と同じでOKでした)
    { id: 'guru-n-nav-pl-1', romaji: 'gurūṇi',         devanagari: 'गुरूणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'guru-n-nav-pl-2', romaji: 'gurūṇi',         devanagari: 'गुरूणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'guru-n-nav-pl-3', romaji: 'gurūṇi',         devanagari: 'गुरूणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'guru-n-ins-pl', romaji: 'gurubhiḥ',       devanagari: 'गुरुभिः',      acceptableCells: ['cell-ins-pl'] },
    { id: 'guru-n-da-pl-1',  romaji: 'gurubhyaḥ',      devanagari: 'गुरुभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'guru-n-da-pl-2',  romaji: 'gurubhyaḥ',      devanagari: 'गुरुभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'guru-n-gen-pl', romaji: 'gurūṇām',        devanagari: 'गुरूणाम्',      acceptableCells: ['cell-gen-pl'] },
    { id: 'guru-n-loc-pl', romaji: 'guruṣu',         devanagari: 'गुरुषु',        acceptableCells: ['cell-loc-pl'] }
];

// console.log("guru-n-data.js loaded");
// console.log(guruNCardsData);

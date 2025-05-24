// Data for vidvas (m.) declension puzzle (知っている者 - 男性)

const vidvasMCardsData = [
    // 単数 (Singular) - 男性
    { id: 'vidvas-m-nom-sg',  romaji: 'vidvān',      devanagari: 'विद्वान्',     acceptableCells: ['cell-nom-sg'] }, // 強語幹
    { id: 'vidvas-m-acc-sg',  romaji: 'vidvāṃsam',   devanagari: 'विद्वांसम्',   acceptableCells: ['cell-acc-sg'] }, // 強語幹
    { id: 'vidvas-m-ins-sg',  romaji: 'viduṣā',      devanagari: 'विदुषा',      acceptableCells: ['cell-ins-sg'] }, // 弱語幹
    { id: 'vidvas-m-dat-sg',  romaji: 'viduṣe',      devanagari: 'विदुषे',      acceptableCells: ['cell-dat-sg'] }, // 弱語幹 (一般的な形)
    { id: 'vidvas-m-abl-sg',  romaji: 'viduṣaḥ',     devanagari: 'विदुषः',     acceptableCells: ['cell-abl-sg'] }, // 弱語幹 (一般的な形)
    { id: 'vidvas-m-gen-sg',  romaji: 'viduṣaḥ',     devanagari: 'विदुषः',     acceptableCells: ['cell-gen-sg'] }, // 弱語幹 (一般的な形)
    { id: 'vidvas-m-loc-sg',  romaji: 'viduṣi',      devanagari: 'विदुषि',      acceptableCells: ['cell-loc-sg'] }, // 弱語幹
    { id: 'vidvas-m-voc-sg',  romaji: 'vidvan',      devanagari: 'विद्वन्',      acceptableCells: ['cell-voc-sg'] }, // 中語幹

    // 両数 (Dual) - 男性
    // 主格・対格・呼格が同じ vidvāṃsau なので、カードを3枚用意
    { id: 'vidvas-m-nav-du-1', romaji: 'vidvāṃsau',   devanagari: 'विद्वांसौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] }, // 強語幹
    { id: 'vidvas-m-nav-du-2', romaji: 'vidvāṃsau',   devanagari: 'विद्वांसौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'vidvas-m-nav-du-3', romaji: 'vidvāṃsau',   devanagari: 'विद्वांसौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ vidvadbhyām (一般的な形) なので、カードを3枚用意
    { id: 'vidvas-m-ida-du-1', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] }, // 中語幹
    { id: 'vidvas-m-ida-du-2', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'vidvas-m-ida-du-3', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ viduṣoḥ (一般的な形) なので、カードを2枚用意
    { id: 'vidvas-m-gl-du-1',  romaji: 'viduṣoḥ',    devanagari: 'विदुषोः',    acceptableCells: ['cell-gen-du', 'cell-loc-du'] }, // 弱語幹
    { id: 'vidvas-m-gl-du-2',  romaji: 'viduṣoḥ',    devanagari: 'विदुषोः',    acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 男性
    // 主格・呼格が同じ vidvāṃsaḥ なので、カードを2枚用意
    { id: 'vidvas-m-nav-pl-1', romaji: 'vidvāṃsaḥ',  devanagari: 'विद्वांसः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] }, // 強語幹
    { id: 'vidvas-m-nav-pl-2', romaji: 'vidvāṃsaḥ',  devanagari: 'विद्वांसः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'vidvas-m-acc-pl', romaji: 'viduṣaḥ',    devanagari: 'विदुषः',    acceptableCells: ['cell-acc-pl'] }, // 弱語幹
    { id: 'vidvas-m-ins-pl', romaji: 'vidvadbhiḥ', devanagari: 'विद्वद्भिः',  acceptableCells: ['cell-ins-pl'] }, // 中語幹
    // 与格・奪格が同じ vidvadbhyaḥ (一般的な形) なので、カードを2枚用意
    { id: 'vidvas-m-da-pl-1',  romaji: 'vidvadbhyaḥ',devanagari: 'विद्वद्भ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] }, // 中語幹
    { id: 'vidvas-m-da-pl-2',  romaji: 'vidvadbhyaḥ',devanagari: 'विद्वद्भ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'vidvas-m-gen-pl', romaji: 'viduṣām',    devanagari: 'विदुषाम्',    acceptableCells: ['cell-gen-pl'] }, // 弱語幹 (一般的な形)
    { id: 'vidvas-m-loc-pl', romaji: 'vidvatsu',   devanagari: 'विद्वत्सु',   acceptableCells: ['cell-loc-pl'] }  // 中語幹
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 活用表にない形は一般的なvas-語幹の男性形の活用を参考に補いました。

// console.log("vidvas-m-data.js loaded");
// console.log(vidvasMCardsData);

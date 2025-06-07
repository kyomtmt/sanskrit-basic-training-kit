// Data for vidvas (n.) declension puzzle (知った、賢者 - 中性)

const puzzleData = [
    // 単数 (Singular) - 中性
    // 主格・対格・呼格が同じ vidvat なので、カードを3枚用意
    { id: 'vidvas-n-nav-sg-1', romaji: 'vidvat',      devanagari: 'विद्वत्',     acceptableCells: ['cell-nom-sg', 'cell-acc-sg', 'cell-voc-sg'] },
    { id: 'vidvas-n-nav-sg-2', romaji: 'vidvat',      devanagari: 'विद्वत्',     acceptableCells: ['cell-nom-sg', 'cell-acc-sg', 'cell-voc-sg'] },
    { id: 'vidvas-n-nav-sg-3', romaji: 'vidvat',      devanagari: 'विद्वत्',     acceptableCells: ['cell-nom-sg', 'cell-acc-sg', 'cell-voc-sg'] },
    { id: 'vidvas-n-ins-sg',  romaji: 'viduṣā',      devanagari: 'विदुषा',      acceptableCells: ['cell-ins-sg'] }, // 男性形と同じ
    { id: 'vidvas-n-dat-sg',  romaji: 'viduṣe',      devanagari: 'विदुषे',      acceptableCells: ['cell-dat-sg'] }, // 男性形と同じ
    // 奪格・属格が同じ viduṣaḥ なので、カードを2枚用意 (男性形と同じ)
    { id: 'vidvas-n-ablgen-sg-1', romaji: 'viduṣaḥ',     devanagari: 'विदुषः',     acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'vidvas-n-ablgen-sg-2', romaji: 'viduṣaḥ',     devanagari: 'विदुषः',     acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'vidvas-n-loc-sg',  romaji: 'viduṣi',      devanagari: 'विदुषि',      acceptableCells: ['cell-loc-sg'] }, // 男性形と同じ

    // 両数 (Dual) - 中性
    // 主格・対格・呼格が同じ viduṣī なので、カードを3枚用意
    { id: 'vidvas-n-nav-du-1', romaji: 'viduṣī',      devanagari: 'विदुषी',      acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'vidvas-n-nav-du-2', romaji: 'viduṣī',      devanagari: 'विदुषी',      acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'vidvas-n-nav-du-3', romaji: 'viduṣī',      devanagari: 'विदुषी',      acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ vidvadbhyām なので、カードを3枚用意 (男性形と同じ)
    { id: 'vidvas-n-ida-du-1', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'vidvas-n-ida-du-2', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'vidvas-n-ida-du-3', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ viduṣoḥ なので、カードを2枚用意 (男性形と同じ)
    { id: 'vidvas-n-gl-du-1',  romaji: 'viduṣoḥ',    devanagari: 'विदुषोः',    acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'vidvas-n-gl-du-2',  romaji: 'viduṣoḥ',    devanagari: 'विदुषोः',    acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 中性
    // 主格・対格・呼格が同じ vidvāṃsi なので、カードを3枚用意
    { id: 'vidvas-n-nav-pl-1', romaji: 'vidvāṃsi',    devanagari: 'विद्वांसि',    acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'vidvas-n-nav-pl-2', romaji: 'vidvāṃsi',    devanagari: 'विद्वांसि',    acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'vidvas-n-nav-pl-3', romaji: 'vidvāṃsi',    devanagari: 'विद्वांसि',    acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'vidvas-n-ins-pl', romaji: 'vidvadbhiḥ',  devanagari: 'विद्वद्भिः',  acceptableCells: ['cell-ins-pl'] }, // 男性形と同じ
    // 与格・奪格が同じ vidvadbhyaḥ なので、カードを2枚用意 (男性形と同じ)
    { id: 'vidvas-n-da-pl-1',  romaji: 'vidvadbhyaḥ', devanagari: 'विद्वद्भ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'vidvas-n-da-pl-2',  romaji: 'vidvadbhyaḥ', devanagari: 'विद्वद्भ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'vidvas-n-gen-pl', romaji: 'viduṣām',     devanagari: 'विदुषाम्',    acceptableCells: ['cell-gen-pl'] }, // 男性形と同じ
    { id: 'vidvas-n-loc-pl', romaji: 'vidvatsu',    devanagari: 'विद्वत्सु',   acceptableCells: ['cell-loc-pl'] }  // 男性形と同じ
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("vidvas-n-data.js loaded");
// console.log(vidvasNCardsData);

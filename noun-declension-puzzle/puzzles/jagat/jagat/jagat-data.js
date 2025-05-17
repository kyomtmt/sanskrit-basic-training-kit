// Data for jagat declension puzzle

const jagatCardsData = [
    // 単数 (Singular)
    { id: 'card-jagat-nom-sg',  romaji: 'jagat',    devanagari: 'जगत्',    correctCell: 'cell-nom-sg' },
    { id: 'card-jagat-acc-sg',  romaji: 'jagat',    devanagari: 'जगत्',    correctCell: 'cell-acc-sg' }, // 中性なので主格と同じ
    { id: 'card-jagat-ins-sg',  romaji: 'jagatā',   devanagari: 'जगता',   correctCell: 'cell-ins-sg' },
    { id: 'card-jagat-dat-sg',  romaji: 'jagate',   devanagari: 'जगते',   correctCell: 'cell-dat-sg' },
    { id: 'card-jagat-abl-sg',  romaji: 'jagataḥ',  devanagari: 'जगतः',  correctCell: 'cell-abl-sg' },
    { id: 'card-jagat-gen-sg',  romaji: 'jagataḥ',  devanagari: 'जगतः',  correctCell: 'cell-gen-sg' },
    { id: 'card-jagat-loc-sg',  romaji: 'jagati',   devanagari: 'जगति',   correctCell: 'cell-loc-sg' },
    { id: 'card-jagat-voc-sg',  romaji: 'jagat',    devanagari: 'जगत्',    correctCell: 'cell-voc-sg' }, // 中性なので主格と同じ

    // 両数 (Dual)
    { id: 'card-jagat-nom-du',  romaji: 'jagatī',   devanagari: 'जगती',   correctCell: 'cell-nom-du' },
    { id: 'card-jagat-acc-du',  romaji: 'jagatī',   devanagari: 'जगती',   correctCell: 'cell-acc-du' }, // 中性なので主格と同じ
    { id: 'card-jagat-ins-du',  romaji: 'jagadbhyām',devanagari: 'जगद्भ्याम्',correctCell: 'cell-ins-du' }, // marut- と同様の活用語尾と推定
    { id: 'card-jagat-dat-du',  romaji: 'jagadbhyām',devanagari: 'जगद्भ्याम्',correctCell: 'cell-dat-du' },
    { id: 'card-jagat-abl-du',  romaji: 'jagadbhyām',devanagari: 'जगद्भ्याम्',correctCell: 'cell-abl-du' }, // marut- と同様の活用語尾と推定
    { id: 'card-jagat-gen-du',  romaji: 'jagatoḥ',  devanagari: 'जगतोः',  correctCell: 'cell-gen-du' },
    { id: 'card-jagat-loc-du',  romaji: 'jagatoḥ',  devanagari: 'जगतोः',  correctCell: 'cell-loc-du' }, // marut- と同様の活用語尾と推定
    { id: 'card-jagat-voc-du',  romaji: 'jagatī',   devanagari: 'जगती',   correctCell: 'cell-voc-du' }, // 中性なので主格と同じ

    // 複数 (Plural)
    { id: 'card-jagat-nom-pl',  romaji: 'jaganti',  devanagari: 'जगन्ति',  correctCell: 'cell-nom-pl' },
    { id: 'card-jagat-acc-pl',  romaji: 'jaganti',  devanagari: 'जगन्ति',  correctCell: 'cell-acc-pl' }, // 中性なので主格と同じ
    { id: 'card-jagat-ins-pl',  romaji: 'jagadbhiḥ',devanagari: 'जगद्भिः', correctCell: 'cell-ins-pl' }, // 表24はjagadbhihだが、通常sandhiで jagadbhiḥ
    { id: 'card-jagat-dat-pl',  romaji: 'jagadbhyaḥ',devanagari: 'जगद्भ्यः',correctCell: 'cell-dat-pl' },
    { id: 'card-jagat-abl-pl',  romaji: 'jagadbhyaḥ',devanagari: 'जगद्भ्यः',correctCell: 'cell-abl-pl' }, // 表24はjagadbhyahだが、通常sandhiで jagadbhyaḥ
    { id: 'card-jagat-gen-pl',  romaji: 'jagatām',  devanagari: 'जगताम्',  correctCell: 'cell-gen-pl' },
    { id: 'card-jagat-loc-pl',  romaji: 'jagatsu',  devanagari: 'जगत्सु',  correctCell: 'cell-loc-pl' },
    { id: 'card-jagat-voc-pl',  romaji: 'jaganti',  devanagari: 'जगन्ति',  correctCell: 'cell-voc-pl' }  // 中性なので主格と同じ
];

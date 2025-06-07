// Data for sarit declension puzzle (Reflecting shared forms as per Table 23's intent)

const puzzleData = [
    // 単数 (Singular)
    { id: 'card-sarit-nom-sg',  romaji: 'sarit',    devanagari: 'सरित्',    correctCell: 'cell-nom-sg' },
    { id: 'card-sarit-acc-sg',  romaji: 'saritam',  devanagari: 'सरितम्',  correctCell: 'cell-acc-sg' },
    { id: 'card-sarit-ins-sg',  romaji: 'saritā',   devanagari: 'सरिता',   correctCell: 'cell-ins-sg' },
    { id: 'card-sarit-dat-sg',  romaji: 'sarite',   devanagari: 'सरिते',   correctCell: 'cell-dat-sg' },
    { id: 'card-sarit-abl-sg',  romaji: 'saritaḥ',  devanagari: 'सरितः',  correctCell: 'cell-abl-sg' },
    { id: 'card-sarit-gen-sg',  romaji: 'saritaḥ',  devanagari: 'सरितः',  correctCell: 'cell-gen-sg' }, // 単数奪格と同じ
    { id: 'card-sarit-loc-sg',  romaji: 'sariti',   devanagari: 'सरिति',   correctCell: 'cell-loc-sg' },
    { id: 'card-sarit-voc-sg',  romaji: 'sarit',    devanagari: 'सरित्',    correctCell: 'cell-voc-sg' }, // 単数主格と同じ

    // 両数 (Dual)
    { id: 'card-sarit-nom-du',  romaji: 'saritau',  devanagari: 'सरितौ',  correctCell: 'cell-nom-du' },
    { id: 'card-sarit-acc-du',  romaji: 'saritau',  devanagari: 'सरितौ',  correctCell: 'cell-acc-du' }, // 両数主格と同じ
    { id: 'card-sarit-ins-du',  romaji: 'saridbhyām',devanagari: 'सरिद्भ्याम्',correctCell: 'cell-ins-du' },
    { id: 'card-sarit-dat-du',  romaji: 'saridbhyām',devanagari: 'सरिद्भ्याम्',correctCell: 'cell-dat-du' }, // 両数具格と同じ
    { id: 'card-sarit-abl-du',  romaji: 'saridbhyām',devanagari: 'सरिद्भ्याम्',correctCell: 'cell-abl-du' }, // 両数具格と同じ
    { id: 'card-sarit-gen-du',  romaji: 'saritoḥ',  devanagari: 'सरितोः',  correctCell: 'cell-gen-du' },
    { id: 'card-sarit-loc-du',  romaji: 'saritoḥ',  devanagari: 'सरितोः',  correctCell: 'cell-loc-du' }, // 両数属格と同じ
    { id: 'card-sarit-voc-du',  romaji: 'saritau',  devanagari: 'सरितौ',  correctCell: 'cell-voc-du' }, // 両数主格と同じ

    // 複数 (Plural)
    { id: 'card-sarit-nom-pl',  romaji: 'saritaḥ',  devanagari: 'सरितः',  correctCell: 'cell-nom-pl' },
    { id: 'card-sarit-acc-pl',  romaji: 'saritaḥ',  devanagari: 'सरितः',  correctCell: 'cell-acc-pl' }, // 複数主格と同じ
    { id: 'card-sarit-ins-pl',  romaji: 'saridbhiḥ',devanagari: 'सरिद्भिः', correctCell: 'cell-ins-pl' },
    { id: 'card-sarit-dat-pl',  romaji: 'saridbhyaḥ',devanagari: 'सरिद्भ्यः',correctCell: 'cell-dat-pl' },
    { id: 'card-sarit-abl-pl',  romaji: 'saridbhyaḥ',devanagari: 'सरिद्भ्यः',correctCell: 'cell-abl-pl' }, // 複数与格と同じ
    { id: 'card-sarit-gen-pl',  romaji: 'saritām',  devanagari: 'सरिताम्',  correctCell: 'cell-gen-pl' },
    { id: 'card-sarit-loc-pl',  romaji: 'saritsu',  devanagari: 'सरित्सु',  correctCell: 'cell-loc-pl' },
    { id: 'card-sarit-voc-pl',  romaji: 'saritaḥ',  devanagari: 'सरितः',  correctCell: 'cell-voc-pl' }  // 複数主格と同じ
];

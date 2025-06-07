// Data for manas- (n. "mind") declension puzzle

const puzzleData = [
    // 単数 (Singular)
    { id: 'card-manas-nom-sg',  romaji: 'manaḥ',     devanagari: 'मनः',     correctCell: 'cell-nom-sg' },
    { id: 'card-manas-acc-sg',  romaji: 'manaḥ',     devanagari: 'मनः',     correctCell: 'cell-acc-sg' }, // 中性: 主格と同じ
    { id: 'card-manas-ins-sg',  romaji: 'manasā',    devanagari: 'मनसा',    correctCell: 'cell-ins-sg' },
    { id: 'card-manas-dat-sg',  romaji: 'manase',    devanagari: 'मनसे',    correctCell: 'cell-dat-sg' },
    { id: 'card-manas-abl-sg',  romaji: 'manasaḥ',   devanagari: 'मनसः',   correctCell: 'cell-abl-sg' }, // 表では与格と異なるが、補足に基づき manasaḥ を採用
    { id: 'card-manas-gen-sg',  romaji: 'manasaḥ',   devanagari: 'मनसः',   correctCell: 'cell-gen-sg' },
    { id: 'card-manas-loc-sg',  romaji: 'manasi',    devanagari: 'मनसि',    correctCell: 'cell-loc-sg' },
    { id: 'card-manas-voc-sg',  romaji: 'manaḥ',     devanagari: 'मनः',     correctCell: 'cell-voc-sg' }, // 中性: 主格と同じ

    // 両数 (Dual)
    { id: 'card-manas-nom-du',  romaji: 'manasī',    devanagari: 'मनसी',    correctCell: 'cell-nom-du' },
    { id: 'card-manas-acc-du',  romaji: 'manasī',    devanagari: 'मनसी',    correctCell: 'cell-acc-du' }, // 中性: 主格と同じ
    { id: 'card-manas-ins-du',  romaji: 'manobhyām', devanagari: 'मनोभ्याम्', correctCell: 'cell-ins-du' }, // 与格・奪格と同じ
    { id: 'card-manas-dat-du',  romaji: 'manobhyām', devanagari: 'मनोभ्याम्', correctCell: 'cell-dat-du' },
    { id: 'card-manas-abl-du',  romaji: 'manobhyām', devanagari: 'मनोभ्याम्', correctCell: 'cell-abl-du' }, // 与格と同じ
    { id: 'card-manas-gen-du',  romaji: 'manasoḥ',   devanagari: 'मनसोः',   correctCell: 'cell-gen-du' },
    { id: 'card-manas-loc-du',  romaji: 'manasoḥ',   devanagari: 'मनसोः',   correctCell: 'cell-loc-du' }, // 属格と同じ
    { id: 'card-manas-voc-du',  romaji: 'manasī',    devanagari: 'मनसी',    correctCell: 'cell-voc-du' }, // 中性: 主格と同じ

    // 複数 (Plural)
    { id: 'card-manas-nom-pl',  romaji: 'manāṃsi',   devanagari: 'मनांसि',  correctCell: 'cell-nom-pl' },
    { id: 'card-manas-acc-pl',  romaji: 'manāṃsi',   devanagari: 'मनांसि',  correctCell: 'cell-acc-pl' }, // 中性: 主格と同じ
    { id: 'card-manas-ins-pl',  romaji: 'manobhiḥ',  devanagari: 'मनोभिः',  correctCell: 'cell-ins-pl' },
    { id: 'card-manas-dat-pl',  romaji: 'manobhyaḥ', devanagari: 'मनोभ्यः', correctCell: 'cell-dat-pl' },
    { id: 'card-manas-abl-pl',  romaji: 'manobhyaḥ', devanagari: 'मनोभ्यः', correctCell: 'cell-abl-pl' }, // 与格と同じ
    { id: 'card-manas-gen-pl',  romaji: 'manasām',   devanagari: 'मनसाम्',   correctCell: 'cell-gen-pl' },
    { id: 'card-manas-loc-pl',  romaji: 'manaḥsu/manassu',   devanagari: 'मनःसु/मनस्सु',   correctCell: 'cell-loc-pl' },
    { id: 'card-manas-voc-pl',  romaji: 'manāṃsi',   devanagari: 'मनांसि',  correctCell: 'cell-voc-pl' }  // 中性: 主格と同じ
];

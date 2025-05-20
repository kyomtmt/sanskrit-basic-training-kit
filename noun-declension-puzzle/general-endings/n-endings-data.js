// n-endings-data.js

// パズルのタイトルと説明
const declensionPuzzleTitle = "名詞の格語尾パズル：中性";
const declensionPuzzleDescription = "一般的な中性名詞の格語尾を正しい位置に配置してください。";

// 中性名詞の格語尾カードデータ (全24枚)
const nEndingCardsData = [
    // Singular (単数) n. - 8枚
    { // 単数主格: 語幹のみ (a語幹除く)
        id: "n-stem-nom-sg",
        romaji: "語幹のみ", // または「―」
        acceptableCells: ["cell-nom-sg"],
        relatedRuleIds: ["no_ending_stem_only", "rule4_n_sg_no_ending", "n_sg_nav_details"]
    },
    { // 単数対格: 語幹のみ (a語幹除く)
        id: "n-stem-acc-sg",
        romaji: "語幹のみ",
        acceptableCells: ["cell-acc-sg"],
        relatedRuleIds: ["no_ending_stem_only", "rule4_n_nom_voc_acc_equal", "rule4_n_sg_no_ending", "n_sg_nav_details"]
    },
    { // 単数具格: -ā (m/fと共通)
        id: "n-aa-ins-sg",
        romaji: "-ā",
        acceptableCells: ["cell-ins-sg"],
        relatedRuleIds: ["ending_aa_long"]
    },
    { // 単数与格: -e (m/fと共通)
        id: "n-e-dat-sg",
        romaji: "-e",
        acceptableCells: ["cell-dat-sg"],
        relatedRuleIds: ["ending_e_short"]
    },
    { // 単数奪格用 -as カード (1枚目) (m/fと共通)
        id: "n-as-abl-sg",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg"], // 奪格・属格単数で共通
        relatedRuleIds: ["ending_as", "rule5_ab_g_sg_equal", "rule2_s_to_h_final"]
    },
    { // 単数属格用 -as カード (2枚目) (m/fと共通)
        id: "n-as-gen-sg",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg"], // 奪格・属格単数で共通
        relatedRuleIds: ["ending_as", "rule5_ab_g_sg_equal", "rule2_s_to_h_final"]
    },
    { // 単数処格: -i (m/fと共通)
        id: "n-i-loc-sg",
        romaji: "-i",
        acceptableCells: ["cell-loc-sg"],
        relatedRuleIds: ["ending_i_short"]
    },
    { // 単数呼格: 語幹のみ (a語幹除く)
        id: "n-stem-voc-sg",
        romaji: "語幹のみ",
        acceptableCells: ["cell-voc-sg"],
        relatedRuleIds: ["no_ending_stem_only", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule4_n_sg_no_ending", "n_sg_nav_details"]
    },

    // Dual (両数) n. - 8枚
    { // 両数主格用 -ī カード (1枚目)
        id: "n-ii-nom-du",
        romaji: "-ī",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"], // 主・対・呼 両数で共通
        relatedRuleIds: ["ending_ii_long", "rule4_n_nom_voc_acc_equal", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    { // 両数対格用 -ī カード (2枚目)
        id: "n-ii-acc-du",
        romaji: "-ī",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_ii_long", "rule4_n_nom_voc_acc_equal", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    { // 両数呼格用 -ī カード (3枚目)
        id: "n-ii-voc-du",
        romaji: "-ī",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_ii_long", "rule4_n_nom_voc_acc_equal", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    { // 両数具格用 -bhyām カード (1枚目) (m/fと共通)
        id: "n-bhyam-ins-du",
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    { // 両数与格用 -bhyām カード (2枚目) (m/fと共通)
        id: "n-bhyam-dat-du",
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    { // 両数奪格用 -bhyām カード (3枚目) (m/fと共通)
        id: "n-bhyam-abl-du",
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    { // 両数属格用 -os カード (1枚目) (m/fと共通)
        id: "n-os-gen-du",
        romaji: "-os",
        acceptableCells: ["cell-gen-du", "cell-loc-du"],
        relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"]
    },
    { // 両数処格用 -os カード (2枚目) (m/fと共通)
        id: "n-os-loc-du",
        romaji: "-os",
        acceptableCells: ["cell-gen-du", "cell-loc-du"],
        relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"]
    },

    // Plural (複数) n. - 8枚
    { // 複数主格用 -i カード (1枚目) (m/fの処格単数とは別)
        id: "n-i-nom-pl",
        romaji: "-i", // 短いi
        acceptableCells: ["cell-nom-pl", "cell-acc-pl", "cell-voc-pl"], // 主・対・呼 複数で共通
        relatedRuleIds: ["ending_i_short_n_pl", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule6_nasal_insertion_n_pl"]
    },
    { // 複数対格用 -i カード (2枚目)
        id: "n-i-acc-pl",
        romaji: "-i",
        acceptableCells: ["cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_i_short_n_pl", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule6_nasal_insertion_n_pl"]
    },
    { // 複数呼格用 -i カード (3枚目)
        id: "n-i-voc-pl",
        romaji: "-i",
        acceptableCells: ["cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_i_short_n_pl", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule6_nasal_insertion_n_pl"]
    },
    { // 複数具格: -bhis (m/fと共通)
        id: "n-bhis-ins-pl",
        romaji: "-bhis",
        acceptableCells: ["cell-ins-pl"],
        relatedRuleIds: ["ending_bhis", "rule7_pada_endings", "rule2_s_to_h_final"]
    },
    { // 複数与格用 -bhyas カード (1枚目) (m/fと共通)
        id: "n-bhyas-dat-pl",
        romaji: "-bhyas",
        acceptableCells: ["cell-dat-pl", "cell-abl-pl"],
        relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"]
    },
    { // 複数奪格用 -bhyas カード (2枚目) (m/fと共通)
        id: "n-bhyas-abl-pl",
        romaji: "-bhyas",
        acceptableCells: ["cell-dat-pl", "cell-abl-pl"],
        relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"]
    },
    { // 複数属格: -ām (m/fと共通)
        id: "n-aam-gen-pl",
        romaji: "-ām",
        acceptableCells: ["cell-gen-pl"],
        relatedRuleIds: ["ending_aam_long"]
    },
    { // 複数処格: -su (m/fと共通)
        id: "n-su-loc-pl",
        romaji: "-su",
        acceptableCells: ["cell-loc-pl"],
        relatedRuleIds: ["ending_su", "rule7_pada_endings"]
    }
];

// mf-endings-data.js

// パズルのタイトルと説明 (HTML側で参照されます)
const declensionPuzzleTitle = "名詞の格語尾パズル：男性・女性";
const declensionPuzzleDescription = "一般的な男性名詞・女性名詞の格語尾を正しい位置に配置してください。";

// 男性・女性名詞の格語尾カードデータ
const mfEndingCardsData = [
    // Singular (単数) m./f.
    { id: "mf-s-nom-sg", romaji: "-s", correctCell: "cell-nom-sg", relatedRuleIds: ["ending_s", "rule1_s_drop_consonant", "rule2_s_to_h_final"] },
    { id: "mf-am-acc-sg", romaji: "-am", correctCell: "cell-acc-sg", relatedRuleIds: ["ending_am"] },
    { id: "mf-aa-ins-sg", romaji: "-ā", correctCell: "cell-ins-sg", relatedRuleIds: ["ending_aa_long"] },
    { id: "mf-e-dat-sg", romaji: "-e", correctCell: "cell-dat-sg", relatedRuleIds: ["ending_e_short"] },
    { id: "mf-as-abl-sg", romaji: "-as", correctCell: "cell-abl-sg", relatedRuleIds: ["ending_as", "rule5_ab_g_sg_equal", "rule2_s_to_h_final"] },
    { id: "mf-as-gen-sg", romaji: "-as", correctCell: "cell-gen-sg", relatedRuleIds: ["ending_as", "rule5_ab_g_sg_equal", "rule2_s_to_h_final"] },
    { id: "mf-i-loc-sg", romaji: "-i", correctCell: "cell-loc-sg", relatedRuleIds: ["ending_i_short"] },
    { // 単数呼格のカード (併記バージョン)
        id: "mf-voc-sg-combined",
        romaji: "語幹 / =N.", // 「― / =N.」でも良いですが、より分かりやすく
        correctCell: "cell-voc-sg",
        relatedRuleIds: ["voc_sg_combined_explanation_mf", "rule3_voc_equals_nom", "equals_nominative", "no_ending_stem_only"]
    },

    // Dual (両数) m./f.
    { id: "mf-au-nomaccvoc-du-1", romaji: "-au", correctCell: "cell-nom-du", relatedRuleIds: ["ending_au", "rule5_du_three_forms"] },
    { id: "mf-au-nomaccvoc-du-2", romaji: "-au", correctCell: "cell-acc-du", relatedRuleIds: ["ending_au", "rule5_du_three_forms"] },
    { id: "mf-au-nomaccvoc-du-3", romaji: "-au", correctCell: "cell-voc-du", relatedRuleIds: ["ending_au", "rule3_voc_equals_nom", "rule5_du_three_forms"] },
    { id: "mf-bhyam-insdatabl-du-1", romaji: "-bhyām", correctCell: "cell-ins-du", relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"] },
    { id: "mf-bhyam-insdatabl-du-2", romaji: "-bhyām", correctCell: "cell-dat-du", relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"] },
    { id: "mf-bhyam-insdatabl-du-3", romaji: "-bhyām", correctCell: "cell-abl-du", relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"] },
    { id: "mf-os-genloc-du-1", romaji: "-os", correctCell: "cell-gen-du", relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"] },
    { id: "mf-os-genloc-du-2", romaji: "-os", correctCell: "cell-loc-du", relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"] },

    // Plural (複数) m./f.
    { id: "mf-as-nomaccvoc-pl-1", romaji: "-as", correctCell: "cell-nom-pl", relatedRuleIds: ["ending_as", "rule2_s_to_h_final"] },
    { id: "mf-as-nomaccvoc-pl-2", romaji: "-as", correctCell: "cell-acc-pl", relatedRuleIds: ["ending_as", "rule2_s_to_h_final"] },
    { id: "mf-as-nomaccvoc-pl-3", romaji: "-as", correctCell: "cell-voc-pl", relatedRuleIds: ["ending_as", "rule3_voc_equals_nom", "rule2_s_to_h_final"] },
    { id: "mf-bhis-ins-pl", romaji: "-bhis", correctCell: "cell-ins-pl", relatedRuleIds: ["ending_bhis", "rule7_pada_endings", "rule2_s_to_h_final"] },
    { id: "mf-bhyas-databl-pl-1", romaji: "-bhyas", correctCell: "cell-dat-pl", relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"] },
    { id: "mf-bhyas-databl-pl-2", romaji: "-bhyas", correctCell: "cell-abl-pl", relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"] },
    { id: "mf-aam-gen-pl", romaji: "-ām", correctCell: "cell-gen-pl", relatedRuleIds: ["ending_aam_long"] },
    { id: "mf-su-loc-pl", romaji: "-su", correctCell: "cell-loc-pl", relatedRuleIds: ["ending_su", "rule7_pada_endings"] }
];
// Total 24 cards

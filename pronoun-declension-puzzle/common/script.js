// pronoun-declension-puzzle/common/script.js
// ★ グローバルスコープの pronounPuzzleData を参照するように変更
console.log("pronounPuzzleData from script.js:", typeof pronounPuzzleData !== 'undefined' ? pronounPuzzleData : "Not loaded yet");
console.log("Pronoun common script loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("Pronoun puzzle page DOM fully loaded and parsed");

    const cardsArea = document.getElementById('cards-area');
    const dropzones = document.querySelectorAll('.dropzone');
    const resetButton = document.getElementById('reset-button');
    let draggedCardElement = null;

    function initializePuzzle() {
        console.log("Initializing pronoun puzzle...");
        draggedCardElement = null;
        if (cardsArea) cardsArea.innerHTML = '';
        dropzones.forEach(zone => {
            zone.innerHTML = '';
            zone.classList.remove('placed-correctly'); // 正解スタイルをクリア
            // zone.classList.remove('placed-correctly-cell'); // セル側のスタイルもあればクリア
        });

        // ★ pronounPuzzleData を参照
        if (typeof pronounPuzzleData !== 'undefined' && pronounPuzzleData.cards) {
            console.log("pronounPuzzleData.cards is available:", pronounPuzzleData.cards);

            const shuffledCardsData = [...pronounPuzzleData.cards].sort(() => Math.random() - 0.5);

            shuffledCardsData.forEach(cardData => {
                const cardElement = document.createElement('div');
                cardElement.id = cardData.id; // データからIDを使用
                cardElement.classList.add('card');
                cardElement.draggable = true;
                cardElement.textContent = cardData.text;
                // ★ acceptableCells を JSON 文字列として data属性に格納
                cardElement.dataset.acceptableCells = JSON.stringify(cardData.acceptableCells);
                cardElement.dataset.text = cardData.text; // カードのテキスト

                cardElement.addEventListener('dragstart', handleDragStart);
                if (cardsArea) cardsArea.appendChild(cardElement);
            });
        } else {
            console.error("pronounPuzzleData.cards is NOT available.");
            if (cardsArea) cardsArea.textContent = "カードデータの読み込みに失敗しました。";
        }
    }

    function handleDragStart(event) {
        draggedCardElement = event.target;
        console.log('DragStart:', draggedCardElement.id, 'Text:', draggedCardElement.dataset.text);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const targetCell = event.target.closest('.dropzone');

        if (draggedCardElement && targetCell) {
            const targetCellId = targetCell.id; // ドロップ先セルのIDを取得
            // ★ カードの dataset.acceptableCells から許容セルIDのリストを取得
            const acceptableCellsForCard = JSON.parse(draggedCardElement.dataset.acceptableCells);
            const draggedCardText = draggedCardElement.dataset.text;

            console.log('Attempting Drop: Card', draggedCardElement.id, `(Text: "${draggedCardText}")`,
                        'on cell ID:', targetCellId,
                        'Card accepts cells:', acceptableCellsForCard);

            // ★ 正誤判定: ドロップ先セルのIDが、カードのacceptableCellsに含まれているか
            if (acceptableCellsForCard.includes(targetCellId)) {
                // (オプション) さらに、カードのテキストと、そのセルに入るべきテキストが一致するかどうか
                // let cellExpectedText = (pronounPuzzleData.declensions && pronounPuzzleData.declensions[targetCell.dataset.case] && pronounPuzzleData.declensions[targetCell.dataset.case][targetCell.dataset.number]) ? pronounPuzzleData.declensions[targetCell.dataset.case][targetCell.dataset.number] : null;
                // if (draggedCardText === cellExpectedText) { ... }

                if (targetCell.children.length === 0) {
                    targetCell.appendChild(draggedCardElement);
                    draggedCardElement.classList.add('placed-correctly');
                    draggedCardElement.draggable = false;
                    console.log('Correct! Card placed in', targetCellId);
                    checkIfAllCorrect();
                } else {
                    console.log('Cell', targetCellId, 'is already occupied.');
                    if (cardsArea) cardsArea.appendChild(draggedCardElement);
                }
            } else {
                console.log('Incorrect placement! Card', draggedCardElement.id, 'cannot be placed in', targetCellId);
                if (cardsArea) cardsArea.appendChild(draggedCardElement);
            }
        }
        draggedCardElement = null;
    }

    function checkIfAllCorrect() {
        let allFilledCorrectly = true;
        dropzones.forEach(zone => {
            // セルに子要素があり、かつその子要素が 'placed-correctly' クラスを持っているか
            if (zone.children.length === 0 || !zone.children[0].classList.contains('placed-correctly')) {
                allFilledCorrectly = false;
            }
        });
        if (allFilledCorrectly) {
            console.log("All cells are filled correctly!");
            setTimeout(() => {
                alert("素晴らしい！全問正解です！");
            }, 100);
        }
    }

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            console.log('Reset button clicked');
            initializePuzzle();
        });
    }

    // aham-data.js で定義された pronounPuzzleData を使う
    if (typeof pronounPuzzleData !== 'undefined') {
        initializePuzzle();
    } else {
        console.error("pronounPuzzleData is not defined. Check if aham-data.js is loaded correctly before script.js and if the variable name is correct.");
    }
});

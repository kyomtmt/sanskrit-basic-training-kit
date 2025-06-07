// Common JavaScript for Sanskrit declension puzzles
console.log("Common puzzle script loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("Puzzle page DOM fully loaded and parsed");

    // --- DOM Element References ---
    const cardsArea = document.getElementById('cards-area');
    const dropzones = document.querySelectorAll('.dropzone');
    const resetButton = document.getElementById('reset-button');
    const showAnswerButton = document.getElementById('show-answer-button');

    // --- State Variables ---
    let draggedCardElement = null;

    /**
     * Initializes the puzzle board, shuffles and displays cards.
     */
    function initializePuzzle() {
        console.log("Initializing puzzle...");
        draggedCardElement = null;
        if (cardsArea) cardsArea.innerHTML = '';
        dropzones.forEach(zone => {
            zone.innerHTML = '';
            zone.classList.remove('placed-correctly');
        });

        // puzzleData should be defined in a file like asva-data.js or pronoun-data.js
        if (typeof puzzleData === 'undefined' || !puzzleData.length) {
            console.error("Global 'puzzleData' array is not available or empty.");
            if (cardsArea) cardsArea.textContent = "カードデータの読み込みに失敗しました。";
            return;
        }

        const shuffledCardsData = [...puzzleData].sort(() => Math.random() - 0.5);

        shuffledCardsData.forEach(cardData => {
            const cardElement = document.createElement('div');
            cardElement.id = cardData.id;
            cardElement.classList.add('card');
            cardElement.draggable = true;
            // For noun puzzles, text is cardData.romaji. For pronouns, cardData.text
            cardElement.textContent = cardData.romaji || cardData.text; 
            
            // Store data attributes for validation logic
            // This handles both noun (correctCell) and pronoun (acceptableCells) data structures
            if (cardData.correctCell) {
                cardElement.dataset.correctCell = cardData.correctCell;
            }
            if (cardData.acceptableCells) {
                cardElement.dataset.acceptableCells = JSON.stringify(cardData.acceptableCells);
            }

            cardElement.addEventListener('dragstart', handleDragStart);
            if (cardsArea) cardsArea.appendChild(cardElement);
        });
    }

    /**
     * Handles the start of a drag event.
     */
    function handleDragStart(event) {
        draggedCardElement = event.target;
        console.log('DragStart:', draggedCardElement.id);
    }

    /**
     * Prevents the default handling of the element being dragged over.
     */
    function handleDragOver(event) {
        event.preventDefault();
    }

    /**
     * Handles the drop event, validating the placement.
     */
    function handleDrop(event) {
        event.preventDefault();
        if (!draggedCardElement) return;

        const targetCell = event.target.closest('.dropzone');
        if (!targetCell) return;

        // Prevent dropping on a cell that is already correctly filled
        if (targetCell.children.length > 0) {
            console.log('Cell is already occupied.');
            return;
        }

        let isCorrect = false;
        // Logic for Pronoun Puzzles
        if (draggedCardElement.dataset.acceptableCells) {
            const acceptableCells = JSON.parse(draggedCardElement.dataset.acceptableCells);
            if (acceptableCells.includes(targetCell.id)) {
                isCorrect = true;
            }
        }
        // Logic for Noun Puzzles
        else if (draggedCardElement.dataset.correctCell) {
            if (draggedCardElement.dataset.correctCell === targetCell.id) {
                isCorrect = true;
            }
        }

        if (isCorrect) {
            targetCell.appendChild(draggedCardElement);
            draggedCardElement.classList.add('placed-correctly');
            draggedCardElement.draggable = false;
            console.log('Correct! Card placed in', targetCell.id);
            checkIfAllCorrect();
        } else {
            console.log('Incorrect placement!');
        }
        draggedCardElement = null;
    }
    
    /**
     * Checks if all dropzones are correctly filled and shows a success message.
     */
    function checkIfAllCorrect() {
        const allCorrect = Array.from(dropzones).every(zone => 
            zone.children.length > 0 && zone.children[0].classList.contains('placed-correctly')
        );

        if (allCorrect) {
            console.log("Congratulations! All cells are filled correctly!");
            setTimeout(() => {
                alert("素晴らしい！全問正解です！");
            }, 100);
        }
    }

    /**
     * Fills the board with the correct answers.
     */
    function showAnswers() {
        console.log("Show Answer button clicked");
        if (typeof puzzleData === 'undefined') return;

        // Clear board and cards
        if (cardsArea) cardsArea.innerHTML = '';
        dropzones.forEach(zone => {
            zone.innerHTML = '';
        });

        const cardDataCopy = JSON.parse(JSON.stringify(puzzleData));

        dropzones.forEach(zone => {
            const cellId = zone.id;
            let foundCardIndex = -1;

            // Find the correct card for this cell from the copy
            // Logic for Noun Puzzles
            if (cardDataCopy[0].correctCell) {
                foundCardIndex = cardDataCopy.findIndex(card => card.correctCell === cellId);
            } 
            // Logic for Pronoun Puzzles
            else if (cardDataCopy[0].acceptableCells) {
                foundCardIndex = cardDataCopy.findIndex(card => card.acceptableCells.includes(cellId));
            }
            
            if (foundCardIndex !== -1) {
                const cardInfo = cardDataCopy[foundCardIndex];
                
                const answerElement = document.createElement('div');
                answerElement.textContent = cardInfo.romaji || cardInfo.text;
                answerElement.classList.add('card', 'placed-correctly');
                
                zone.appendChild(answerElement);

                // Remove the used card from the copy to handle duplicates (like in pronoun puzzles)
                cardDataCopy.splice(foundCardIndex, 1);
            }
        });
    }

    // --- Event Listeners ---
    dropzones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });

    if (resetButton) {
        resetButton.addEventListener('click', initializePuzzle);
    }

    if (showAnswerButton) {
        showAnswerButton.addEventListener('click', showAnswers);
    }

    // --- Initial Load ---
    initializePuzzle();
});
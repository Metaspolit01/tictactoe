class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        
        // DOM elements
        this.cells = document.querySelectorAll('.cell');
        this.statusElement = document.getElementById('status');
        this.scoreXElement = document.getElementById('score-x');
        this.scoreOElement = document.getElementById('score-o');
        this.resetBtn = document.getElementById('reset-btn');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.modal = document.getElementById('modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');
        this.modalBtn = document.getElementById('modal-btn');
        
        this.initializeGame();
    }
    
    initializeGame() {
        // Add event listeners
        this.cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
            cell.addEventListener('keydown', (e) => this.handleKeyPress(e));
        });
        
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.newGameBtn.addEventListener('click', () => this.newGame());
        this.modalBtn.addEventListener('click', () => this.hideModal());
        
        // Load scores from localStorage
        this.loadScores();
        this.updateScoreDisplay();
        this.updateStatus();
    }
    
    handleCellClick(e) {
        const cell = e.target;
        const cellIndex = parseInt(cell.getAttribute('data-cell-index'));
        
        if (this.board[cellIndex] !== '' || !this.gameActive) {
            return;
        }
        
        this.makeMove(cellIndex);
    }
    
    handleKeyPress(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const cellIndex = parseInt(e.target.getAttribute('data-cell-index'));
            
            if (this.board[cellIndex] !== '' || !this.gameActive) {
                return;
            }
            
            this.makeMove(cellIndex);
        }
    }
    
    makeMove(cellIndex) {
        this.board[cellIndex] = this.currentPlayer;
        this.cells[cellIndex].textContent = this.currentPlayer;
        this.cells[cellIndex].classList.add(this.currentPlayer.toLowerCase());
        
        // Check for win or draw
        if (this.checkWin()) {
            this.handleGameEnd('win');
        } else if (this.checkDraw()) {
            this.handleGameEnd('draw');
        } else {
            this.switchPlayer();
        }
    }
    
    checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                
                // Highlight winning cells
                this.cells[a].classList.add('winning');
                this.cells[b].classList.add('winning');
                this.cells[c].classList.add('winning');
                
                return true;
            }
        }
        return false;
    }
    
    checkDraw() {
        return this.board.every(cell => cell !== '');
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatus();
    }
    
    handleGameEnd(result) {
        this.gameActive = false;
        
        if (result === 'win') {
            this.scores[this.currentPlayer]++;
            this.saveScores();
            this.updateScoreDisplay();
            this.showModal('Winner!', `Player ${this.currentPlayer} wins!`);
        } else {
            this.showModal('Draw!', 'The game ended in a draw.');
        }
    }
    
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winning');
        });
        
        this.updateStatus();
    }
    
    newGame() {
        this.scores = { X: 0, O: 0 };
        this.saveScores();
        this.updateScoreDisplay();
        this.resetGame();
    }
    
    updateStatus() {
        this.statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
    }
    
    updateScoreDisplay() {
        this.scoreXElement.textContent = this.scores.X;
        this.scoreOElement.textContent = this.scores.O;
    }
    
    showModal(title, message) {
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modal.classList.add('show');
        
        // Focus the modal button for accessibility
        setTimeout(() => {
            this.modalBtn.focus();
        }, 100);
    }
    
    hideModal() {
        this.modal.classList.remove('show');
        this.resetGame();
    }
    
    saveScores() {
        localStorage.setItem('tictactoe-scores', JSON.stringify(this.scores));
    }
    
    loadScores() {
        const savedScores = localStorage.getItem('tictactoe-scores');
        if (savedScores) {
            this.scores = JSON.parse(savedScores);
        }
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('modal').classList.contains('show')) {
        document.getElementById('modal').classList.remove('show');
    }
}); 
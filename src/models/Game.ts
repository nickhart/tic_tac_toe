export type Player = 'X' | 'O';
export type CellState = ' ' | 'X' | 'O';

export type Board = CellState[];

export interface GameState {
  currentPlayer: Player;
  board: Board;
  winner: Player | null;
  isDraw: boolean;
}

export class Game {
  private state: GameState;

  constructor() {
    this.state = {
      currentPlayer: 'X',
      board: Array(9).fill(' '),
      winner: null,
      isDraw: false
    };
  }

  public getState(): GameState {
    return { ...this.state };
  }

  public makeMove(index: number): boolean {
    if (this.state.board[index] !== ' ' || this.state.winner !== null || this.state.isDraw) {
      return false;
    }

    const newBoard = [...this.state.board];
    newBoard[index] = this.state.currentPlayer;

    this.state = {
      ...this.state,
      board: newBoard,
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    };

    this.checkWinner();
    this.checkDraw();

    return true;
  }

  private checkWinner(): void {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (this.state.board[a] !== ' ' &&
          this.state.board[a] === this.state.board[b] &&
          this.state.board[a] === this.state.board[c]) {
        this.state.winner = this.state.board[a] as Player;
        return;
      }
    }
  }

  private checkDraw(): void {
    if (this.state.winner === null && !this.state.board.includes(' ')) {
      this.state.isDraw = true;
    }
  }

  public reset(): void {
    this.state = {
      currentPlayer: 'X',
      board: Array(9).fill(' '),
      winner: null,
      isDraw: false
    };
  }
} 
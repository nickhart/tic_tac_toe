import { Game, type GameState } from '../models/Game';

export function createGameViewModel(onStateChange: (state: GameState) => void) {
  const game = new Game();
  onStateChange(game.getState());

  const makeMove = (index: number): void => {
    if (game.makeMove(index)) {
      onStateChange(game.getState());
    }
  };

  const reset = (): void => {
    game.reset();
    onStateChange(game.getState());
  };

  const getStatusMessage = (): string => {
    const state = game.getState();
    if (state.winner) {
      return `Player ${state.winner} wins!`;
    }
    if (state.isDraw) {
      return "It's a draw!";
    }
    return `Current player: ${state.currentPlayer}`;
  };

  return {
    makeMove,
    reset,
    getStatusMessage
  };
} 
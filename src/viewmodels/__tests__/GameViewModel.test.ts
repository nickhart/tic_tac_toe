import { createGameViewModel } from '../GameViewModel';
import { type GameState, type Player, type CellState } from '../../models/Game';

describe('GameViewModel', () => {
  let viewModel: ReturnType<typeof createGameViewModel>;
  let mockOnStateChange: jest.Mock;

  beforeEach(() => {
    mockOnStateChange = jest.fn();
    viewModel = createGameViewModel(mockOnStateChange);
  });

  test('should initialize and notify initial state', () => {
    expect(mockOnStateChange).toHaveBeenCalledTimes(1);
    const initialState = mockOnStateChange.mock.calls[0][0];
    expect(initialState.currentPlayer).toBe('X');
    expect(initialState.board).toEqual(Array(9).fill(' '));
    expect(initialState.winner).toBeNull();
    expect(initialState.isDraw).toBe(false);
  });

  test('should make move and notify state change', () => {
    viewModel.makeMove(0);
    expect(mockOnStateChange).toHaveBeenCalledTimes(2);
    const state = mockOnStateChange.mock.calls[1][0];
    expect(state.board[0]).toBe('X');
    expect(state.currentPlayer).toBe('O');
  });

  test('should not notify state change for invalid move', () => {
    viewModel.makeMove(0);
    viewModel.makeMove(0); // Try to move in same position
    expect(mockOnStateChange).toHaveBeenCalledTimes(2); // Only initial + first move
  });

  test('should reset game and notify state change', () => {
    viewModel.makeMove(0);
    viewModel.reset();
    expect(mockOnStateChange).toHaveBeenCalledTimes(3);
    const resetState = mockOnStateChange.mock.calls[2][0];
    expect(resetState.currentPlayer).toBe('X');
    expect(resetState.board).toEqual(Array(9).fill(' '));
    expect(resetState.winner).toBeNull();
    expect(resetState.isDraw).toBe(false);
  });

  test('should get correct status message for current player', () => {
    expect(viewModel.getStatusMessage()).toBe('Current player: X');
  });

  test('should get correct status message for winner', () => {
    // X X X
    // - - -
    // - - -
    viewModel.makeMove(0); // X
    viewModel.makeMove(3); // O
    viewModel.makeMove(1); // X
    viewModel.makeMove(4); // O
    viewModel.makeMove(2); // X

    expect(viewModel.getStatusMessage()).toBe('Player X wins!');
  });

  test('should get correct status message for draw', () => {
    // X O X
    // X O O
    // O X X
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    moves.forEach(move => viewModel.makeMove(move));

    expect(viewModel.getStatusMessage()).toBe("It's a draw!");
  });
}); 
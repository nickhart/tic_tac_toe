import { Game } from '../Game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  test('should initialize with empty board and X as first player', () => {
    const state = game.getState();
    expect(state.currentPlayer).toBe('X');
    expect(state.board).toEqual(Array(9).fill(' '));
    expect(state.winner).toBeNull();
    expect(state.isDraw).toBe(false);
  });

  test('should allow valid moves', () => {
    expect(game.makeMove(0)).toBe(true);
    const state = game.getState();
    expect(state.board[0]).toBe('X');
    expect(state.currentPlayer).toBe('O');
  });

  test('should not allow moves on occupied cells', () => {
    game.makeMove(0);
    expect(game.makeMove(0)).toBe(false);
  });

  test('should detect horizontal win', () => {
    // X X X
    // - - -
    // - - -
    game.makeMove(0); // X
    game.makeMove(3); // O
    game.makeMove(1); // X
    game.makeMove(4); // O
    game.makeMove(2); // X

    const state = game.getState();
    expect(state.winner).toBe('X');
  });

  test('should detect vertical win', () => {
    // X O O
    // X - -
    // X - -
    game.makeMove(0); // X
    game.makeMove(1); // O
    game.makeMove(3); // X
    game.makeMove(2); // O
    game.makeMove(6); // X

    const state = game.getState();
    expect(state.winner).toBe('X');
  });

  test('should detect diagonal win', () => {
    // X O O
    // O X -
    // - - X
    game.makeMove(0); // X
    game.makeMove(1); // O
    game.makeMove(4); // X
    game.makeMove(2); // O
    game.makeMove(8); // X

    const state = game.getState();
    expect(state.winner).toBe('X');
  });

  test('should detect draw', () => {
    // X O X
    // X O O
    // O X X
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
    moves.forEach(move => game.makeMove(move));

    const state = game.getState();
    expect(state.isDraw).toBe(true);
    expect(state.winner).toBeNull();
  });

  test('should not allow moves after game is won', () => {
    // X X X
    // - - -
    // - - -
    game.makeMove(0); // X
    game.makeMove(3); // O
    game.makeMove(1); // X
    game.makeMove(4); // O
    game.makeMove(2); // X

    expect(game.makeMove(5)).toBe(false);
  });

  test('should reset game state', () => {
    game.makeMove(0);
    game.makeMove(1);
    game.reset();

    const state = game.getState();
    expect(state.currentPlayer).toBe('X');
    expect(state.board).toEqual(Array(9).fill(' '));
    expect(state.winner).toBeNull();
    expect(state.isDraw).toBe(false);
  });
}); 
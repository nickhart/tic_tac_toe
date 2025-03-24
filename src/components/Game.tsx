'use client';

import { useState, useMemo } from 'react';
import { GameState } from '../models/Game';
import { createGameViewModel } from '../viewmodels/GameViewModel';
import { Board } from './Board';

export function Game() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const viewModel = useMemo(() => createGameViewModel(setGameState), []);

  if (!gameState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
      <div className="text-xl font-semibold">{viewModel.getStatusMessage()}</div>
      <Board
        board={gameState.board}
        onCellClick={viewModel.makeMove}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={viewModel.reset}
      >
        Reset Game
      </button>
    </div>
  );
} 
'use client';

import { CellState } from '../models/Game';

interface BoardProps {
  board: CellState[];
  onCellClick: (index: number) => void;
}

export function Board({ board, onCellClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-4 w-64 h-64">
      {board.map((cell, index) => (
        <button
          key={index}
          className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-4xl font-bold w-20 h-20 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => onCellClick(index)}
        >
          {cell === 'X' && 'X'}
          {cell === 'O' && 'O'}
          {cell === ' ' && '\u00A0'}
        </button>
      ))}
    </div>
  );
} 
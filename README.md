# Tic Tac Toe

[![CI](https://github.com/nickhart/tic_tac_toe/actions/workflows/jest.yml/badge.svg)](https://github.com/nickhart/tic_tac_toe/actions/workflows/jest.yml)
[![Tests](https://github.com/nickhart/tic_tac_toe/actions/workflows/jest.yml/badge.svg?branch=main&event=push&label=tests)](https://github.com/nickhart/tic_tac_toe/actions/workflows/jest.yml)

A modern implementation of the classic Tic Tac Toe game built with Next.js, React, and TypeScript. The game features a clean, responsive design with dark mode support and follows best practices for React development.

## Features

- Clean, modern UI with dark mode support
- Responsive design that works on all devices
- TypeScript for type safety
- Comprehensive unit tests
- MVVM architecture for clean separation of concerns
- Built with Next.js 13+ App Router

## Game Rules

Tic Tac Toe is a simple two-player game played on a 3x3 grid. Players take turns placing their mark (X or O) in an empty square. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game. If all squares are filled and no player has three marks in a row, the game is a draw.

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tic_tac_toe.git
cd tic_tac_toe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the game.

### Running Tests

```bash
npm test
# or
yarn test
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
├── models/          # Game logic and state management
└── viewmodels/      # View models for component logic
```

## Development

The project uses:
- Next.js 13+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Jest for testing

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

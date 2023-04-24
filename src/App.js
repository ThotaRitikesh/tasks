import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [grid, setGrid] = useState(Array(9).fill(null)); // grid state to store the grid items
  const [currentPlayer, setCurrentPlayer] = useState('red'); // state to track the current player
  const [round, setRound] = useState(1); // state to track the current round

  const handleItemClick = (index) => {
    if (grid[index] === null) {
      // check if the grid item is not already filled
      const updatedGrid = [...grid];
      updatedGrid[index] = currentPlayer; // fill the grid item with current player's color
      setGrid(updatedGrid);

      if (checkWin(updatedGrid)) {
        // check if current player wins
        alert(`${currentPlayer.toUpperCase()} wins!`);
        resetGame();
      } else if (round === 9) {
        // check if it's a draw
        alert("It's a draw!");
        resetGame();
      } else {
        setCurrentPlayer(currentPlayer === 'red' ? 'blue' : 'red'); // switch to the other player
      }
    }
  };

  const checkWin = (grid) => {
    // array to store all possible winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // loop through all winning combinations and check if any player has 3 consecutive grid items with the same color
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setGrid(Array(9).fill(null)); // reset grid
    setCurrentPlayer('red'); // reset current player
    setRound(round + 1); // increment round
  };

  return (
    <div className="container">
      <h1>Round: {round}</h1>
      <div className="grid">
        {grid.map((item, index) => (
          <div
            key={index}
            className={`grid-item ${item}`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;



// import React from 'react';
// import "./App.css";

// function Board() {
//   const [squares, setSquares] = React.useState(Array(9).fill(null))

//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)
//   const [currentPlayer, setCurrentPlayer] = useState('red'); // state to track the current player


//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       return
//     }
//     const squaresCopy = [...squares]
//     squaresCopy[square] = nextValue
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     setSquares(Array(9).fill(null))
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`
// }

// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'red' : 'blue'
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }

// function App() {
//   return <Game />
// }

// export default App;
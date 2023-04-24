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

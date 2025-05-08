import React, { createContext, useEffect, useState } from "react";

export const playerContext = createContext();

function ContextPlayer({ children }) {
  const initialBoard = Array.from({ length: 3 }, () => Array(3).fill(0));
  const [values, setValues] = useState(initialBoard);
  const [Turn, setTurn] = useState("x");

  const changeTurn = () => {
    // if(Turn==="x") setTurn("o")
    // if(Turn==="o") setTurn("x")
    setTurn((pre) => (pre === "x" ? "o" : "x"));
  };

  const winingLogic = () => {
    const winningCombinations = [
      // Rows
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // Columns
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // Diagonals
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (let combo of winningCombinations) {
      const [[a1, a2], [b1, b2], [c1, c2]] = combo;
      const first = values[a1][a2];

      if (
        (first === "x" || first === "o") &&
        first === values[b1][b2] &&
        first === values[c1][c2]
      )
        return first;
    }

    return null;
    // if (
    //   values[0][0] === values[0][1] &&
    //   values[0][1] === values[0][2] &&
    //   (values[0][0] === "x" || values[0][0] === "o")
    // ) {
    //   return values[0][0];
    // } else if (
    //   values[0][0] === values[1][0] &&
    //   values[1][0] === values[2][0] &&
    //   (values[0][0] === "x" || values[0][0] === "o")
    // ) {
    //   return values[0][0];
    // } else if (
    //   values[0][0] === values[1][1] &&
    //   values[1][1] === values[2][2] &&
    //   (values[0][0] === "x" || values[0][0] === "o")
    // ) {
    //   return values[0][0];
    // } else if (
    //   values[1][1] === values[0][1] &&
    //   values[0][1] === values[2][1] &&
    //   (values[1][1] === "x" || values[1][1] === "o")
    // ) {
    //   return values[1][1];
    // } else if (
    //   values[1][1] === values[1][0] &&
    //   values[1][0] === values[1][2] &&
    //   (values[1][1] === "x" || values[1][1] === "o")
    // ) {
    //   return values[1][1];
    // } else if (
    //   values[1][1] === values[0][2] &&
    //   values[0][2] === values[2][0] &&
    //   (values[1][1] === "x" || values[1][1] === "o")
    // ) {
    //   return values[1][1];
    // }else if (
    //   values[2][2] === values[2][1] &&
    //   values[2][1] === values[2][0] &&
    //   (values[2][2] === "x" || values[2][2] === "o")
    // ) {
    //   return values[2][2];
    // }else if (
    //   values[2][2] === values[0][2] &&
    //   values[0][2] === values[1][2] &&
    //   (values[2][2] === "x" || values[2][2] === "o")
    // ) {
    //   return values[2][2];
    // }
  };

  const handleSetValue = (rowIndex, colIndex, newValue) => {
    if (
      values[rowIndex][colIndex] === "x" ||
      values[rowIndex][colIndex] === "o"
    ) {
      return; // already filled
    }
    setValues((prevValues) => {
      const newValues = prevValues.map((row) => [...row]);

      newValues[rowIndex][colIndex] = newValue;

      // Only call changeTurn if we actually updated the cell
      // Doing it inside the setter to respect React's async updates
      return newValues;
    });
    changeTurn();
  };

  useEffect(() => {
    const winner = winingLogic();
    if (winner != null) {
      alert("winner is: " + winner);
      console.log("winner is: ", winner);
      setValues(initialBoard);
    }
  }, [Turn]);

  return (
    <playerContext.Provider
      value={{
        values,
        Turn,
        handleSetValue,
        changeTurn,
      }}
    >
      {children}
    </playerContext.Provider>
  );
}

export default ContextPlayer;

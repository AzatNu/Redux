import { GameLayout } from "../components/gameLayout";
import { useState } from "react";
export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState([``, ``, ``, ``, ``, ``, ``, ``, ``]);
  const clean = () => {
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer("X");
    setField([``, ``, ``, ``, ``, ``, ``, ``, ``]);
  };
  return (
    <>
      <GameLayout
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        clean={clean}
      />
    </>
  );
};

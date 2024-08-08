import React from "react";
import { useState } from "react";
import { GameLayout } from "./GameLayout";

export const Game = () => {
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState([``, ``, ``, ``, ``, ``, ``, ``, ``]);
    const [currentPlayer, setCurrentPlayer] = useState(`X`);

    const restartGame = () => {
        setField([``, ``, ``, ``, ``, ``, ``, ``, ``]);
        setIsGameEnded(false);
        setIsDraw(false);
        setCurrentPlayer(`X`);
    };
    return (
        <GameLayout
            field={field}
            currentPlayer={currentPlayer}
            setField={setField}
            setCurrentPlayer={setCurrentPlayer}
            isGameEnded={isGameEnded}
            setIsGameEnded={setIsGameEnded}
            isDraw={isDraw}
            setIsDraw={setIsDraw}
            restartGame={restartGame}
        />
    );
};

import React, { useState, useEffect } from "react";
import style from "./information.module.css";
import { store } from "../store";

export const InformationLayout = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setState(store.getState()));

        return () => unsubscribe();
    }, []);

    const { currentPlayer, isGameEnded, isDraw, winner } = state;

    return (
        <div className={style.information}>
            {isGameEnded
                ? `Победитель: ${winner}`
                : isDraw
                ? `Ничья`
                : `Ход: ${currentPlayer}`}
        </div>
    );
};

import style from "./field.module.css";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const FieldLayout = () => {
    const dispatch = useDispatch();

    const field = useSelector((state) => state.field);
    const currentPlayer = useSelector((state) => state.currentPlayer);
    const isGameEnded = useSelector((state) => state.isGameEnded);
    const isDraw = useSelector((state) => state.isDraw);

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinAndDoAction = (index) => {
        const newField = field.map((item, i) =>
            i === index ? currentPlayer : item
        );
        store.dispatch({ type: "SET_FIELD", payload: newField });
        if (newField.every((item) => item !== ``) && !isGameEnded) {
            store.dispatch({ type: "SET_DRAW", payload: true });
        }
        winPatterns.forEach((pattern) => {
            if (
                newField[pattern[0]] !== `` &&
                newField[pattern[0]] === newField[pattern[1]] &&
                newField[pattern[1]] === newField[pattern[2]]
            ) {
                store.dispatch({ type: "SET_GAME_ENDED", payload: true });
                store.dispatch({
                    type: "SET_WINNER",
                    payload: newField[pattern[0]],
                });
            }
        });
    };

    const changePlayer = () => {
        dispatch({
            type: "SET_CURRENT_PLAYER",
            payload: currentPlayer === `X` ? `O` : `X`,
        });
    };

    const restart = () => {
        dispatch({ type: "RESTART_GAME" });
    };

    return (
        <>
            <div className={style.game}>
                {field.map((item, index) => (
                    <button
                        disabled={isGameEnded || isDraw || item !== ``}
                        className={
                            item !== ``
                                ? style.fieldButtonOccupied
                                : style.fieldButton
                        }
                        onClick={() => {
                            checkWinAndDoAction(index);
                            changePlayer();
                        }}
                        key={index}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <button className={style.gameButton} onClick={restart}>
                Начать заново
            </button>
        </>
    );
};

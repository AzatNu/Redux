import PropTypes from "prop-types";
import { FieldLayout } from "../Field/FieldLayout";

export const Field = ({
    field,
    isGameEnded,
    isDraw,
    currentPlayer,
    setField,
    setCurrentPlayer,
    setIsGameEnded,
    setIsDraw,
}) => {
    const WIN_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const checkWin = () => {
        WIN_PATTERNS.forEach((pattern) => {
            if (
                field[pattern[0]] !== `` &&
                field[pattern[0]] === field[pattern[1]] &&
                field[pattern[1]] === field[pattern[2]]
            ) {
                setIsGameEnded(true);
                setCurrentPlayer(field[pattern[1]]);
            }
        });
        if (field.every((item) => item !== ``)) {
            setIsDraw(true);
        }
    };

    const makeAction = (index) => {
        if (!isGameEnded && !isDraw && field[index] === ``) {
            field[index] = currentPlayer;
            setField([...field]);
            if (currentPlayer === `X`) {
                setCurrentPlayer(`O`);
            } else {
                setCurrentPlayer(`X`);
            }
            checkWin();
        }
    };

    return (
        <FieldLayout
            field={field}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
            currentPlayer={currentPlayer}
            setField={setField}
            setCurrentPlayer={setCurrentPlayer}
            setIsGameEnded={setIsGameEnded}
            setIsDraw={setIsDraw}
            makeAction={makeAction}
        />
    );
};

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    makeAction: PropTypes.func.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    currentPlayer: PropTypes.string.isRequired,
    setField: PropTypes.func.isRequired,
    setCurrentPlayer: PropTypes.func.isRequired,
    setIsGameEnded: PropTypes.func.isRequired,
    setIsDraw: PropTypes.func.isRequired,
};

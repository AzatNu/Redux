import PropTypes from "prop-types";
import style from "./Game.module.css";
import { Field } from "./Field/Field";
import { Informations } from "./information/Informations";

export const GameLayout = ({
    field,
    currentPlayer,
    isGameEnded,
    isDraw,
    restartGame,
    setField,
    setCurrentPlayer,
    setIsGameEnded,
    setIsDraw,
}) => {
    return (
        <div className={style[`gameWrapper`]}>
            <div className={style[`informations`]}>
                <Informations
                    isGameEnded={isGameEnded}
                    isDraw={isDraw}
                    currentPlayer={currentPlayer}
                />
            </div>
            <div className={style[`game`]}>
                <Field
                    field={field}
                    isGameEnded={isGameEnded}
                    isDraw={isDraw}
                    currentPlayer={currentPlayer}
                    setField={setField}
                    setCurrentPlayer={setCurrentPlayer}
                    setIsGameEnded={setIsGameEnded}
                    setIsDraw={setIsDraw}
                />
            </div>
            <div className={style[`restartButton`]} onClick={restartGame}>
                Новая игра
            </div>
        </div>
    );
};

GameLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    restartGame: PropTypes.func.isRequired,
};

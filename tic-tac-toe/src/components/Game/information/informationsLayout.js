import React from "react";
import PropTypes from "prop-types";
import styel from "./informations.module.css";

export const InformationsLayout = ({ isGameEnded, isDraw, currentPlayer }) => {
    return (
        <div className={styel[`informations`]}>
            {isDraw
                ? `Ничья`
                : isGameEnded
                ? `Игра окончена. Победил игрок: ${currentPlayer}`
                : `Ход игрока: ${currentPlayer}`}
        </div>
    );
};

InformationsLayout.propTypes = {
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    currentPlayer: PropTypes.string.isRequired,
};

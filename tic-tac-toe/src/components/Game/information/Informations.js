import PropTypes from "prop-types";
import { InformationsLayout } from "../information/informationsLayout";

export const Informations = ({ isGameEnded, isDraw, currentPlayer }) => {
    return (
        <InformationsLayout
            isGameEnded={isGameEnded}
            isDraw={isDraw}
            currentPlayer={currentPlayer}
        />
    );
};

Informations.propTypes = {
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    currentPlayer: PropTypes.string.isRequired,
};

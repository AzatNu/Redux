const initialState = {
    currentPlayer: "X",
    isGameEnded: false,
    isDraw: false,
    field: Array(9).fill(""),
    winner: "",
};
export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_CURRENT_PLAYER":
            return {
                ...state,
                currentPlayer: payload,
            };
        case "SET_FIELD":
            return {
                ...state,
                field: payload,
            };

        case "SET_GAME_ENDED":
            return {
                ...state,
                isGameEnded: payload,
            };

        case "SET_DRAW":
            return {
                ...state,
                isDraw: payload,
            };

        case "RESTART_GAME":
            return initialState;

        case "SET_WINNER":
            return {
                ...state,
                winner: payload,
            };

        default:
            return state;
    }
};

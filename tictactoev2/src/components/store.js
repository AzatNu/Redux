import { appReducer } from "./reducer";

export const createStore = (reducer) => {
    let state;
    let listeners = [];

    return {
        subscribe: (listener) => {
            listeners.push(listener);

            return () => {
                listeners = listeners.filter((l) => l !== listener);
            };
        },
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach((listener) => listener());
        },
        getState: () => state,
    };
};

export const store = createStore(appReducer);
store.dispatch({ type: "LAUNCH_GAME" });

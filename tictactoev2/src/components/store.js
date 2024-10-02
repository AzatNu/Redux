import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { appReducer } from "./reducer";
const reducer = appReducer;
export const store = createStore(reducer, applyMiddleware(thunk));

import { createStore } from "redux";
import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";


const allReducers=combineReducers({
    CounterReducer
});

const store=createStore(
    allReducers,
);

export default store;
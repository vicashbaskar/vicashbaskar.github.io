import { createStore } from 'redux';
import { combineReducers } from "redux";
import CounterReducer from './reducers/CounterReducer';
import { EmployeeReducer } from '../store/reducers/EmployeeReducer';

const allReducers = combineReducers({
    count: CounterReducer,
    employee: EmployeeReducer,
});

//The created store
const store = createStore(
    allReducers
);

export default store


// state = {
//     count: 0
// }

// function countReducer(state, action) {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 count: state.count++
//             };
//         case DECREMENT:
//             return {
//                 count: state.count--
//             };
//         case COUNTER_RESET:
//             return {
//                 count: state.count
//             };
//             default:
//             return state.count = 0
//     }
// }
// const INCREMENT="INCREMENT";
// const DECREMENT="DECREMENT";
// const COUNTER_RESET="COUNTER_RESET";
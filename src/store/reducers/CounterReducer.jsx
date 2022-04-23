import { INCREMENT, DECREMENT, COUNTER_RESET } from '../action/CounterAction'


const initialstate = {
    count: 1,
};

const CounterReducer = (state = initialstate, action) => {
    
    console.log(action.type)
    switch (action.type) {
        case INCREMENT:
            return {
                count:state.count + 1
            };
        case DECREMENT:
            return {
                count:state.count - 1
            };
        case COUNTER_RESET:
            return {
                count:state.count = 0
            };
        default:
            return state;
    }
}


export default CounterReducer;
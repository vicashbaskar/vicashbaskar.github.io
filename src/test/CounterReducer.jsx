import {INCREMENT,DECREMENT,COUNTER_RESET} from './CounterAction';
var state={
    count:0
};

const CountReducer=(state,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                count:state.count++
            };
            case DECREMENT:
                return{
                    count:state.count--
                };
                case COUNTER_RESET:
                    return{
                        count:state.count=0
                    };
                    default:
                        return state;
    }
}
export default CountReducer;
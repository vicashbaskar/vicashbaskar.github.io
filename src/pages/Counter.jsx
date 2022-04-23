import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, COUNTER_RESET } from '../store/action/CounterAction';

import '../css/counter.css';
import { connect } from "react-redux";




// class Counter extends React.Component {
//     state = {
//         count: 0
//     }
// dispatch = useDispatch()
// componentDidUpdate() {
//     console.log("Counter : " + this.state.count)
// }

// increment() {
//     this.setState({ count: this.state.count + 1 })
// }

// decrement() {
//     this.setState({ count: this.state.count - 1 })
// }
class Counter extends React.Component {
    INCREMENT = () => {
        this.props.dispatch({ type: INCREMENT });
    }

    DECREMENT = () => {
        this.props.dispatch({ type: DECREMENT });
    }
    COUNTER_RESET = () => {
        this.props.dispatch({ type: COUNTER_RESET });
    }

    render() {
        return (
            <div>
                <h2 className="counter-h2">Increment and Decrement counter</h2>
                < div >
                    <div className="counter">
                        <button className="counter-button" onClick={this.INCREMENT}>+</button>
                        <span className="counter-span">{this.props.count}</span>
                        <button className="counter-button" onClick={this.DECREMENT}>-</button> <br/> <br/>
                    </div>
                    <div  className="counter">
                    <button className="counter-button1" onClick={this.COUNTER_RESET}>COUNTER RESET</button>
                    </div>
                </div >
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        count:state.count.count
    };
}

export default connect(mapStateToProps)(Counter)
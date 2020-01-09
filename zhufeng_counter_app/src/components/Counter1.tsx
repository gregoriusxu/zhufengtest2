import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter1';
function Counter1(props) {
    return (
        <div>
            <p>Counter1:{props.number}</p>
            <button id="counter1-increment" className="change-btn" onClick={() => props.increment1()}>+</button>
            <button id="counter1-decrement" className="change-btn" onClick={() => props.decrement1()}>-</button>
            <button className="change-btn" onClick={() => props.asyncIncrement1()}>asyncIncrement1</button>
        </div>
    )
}
let mapStateToProps = state => state.counter1
export default connect(mapStateToProps, actions)(Counter1);
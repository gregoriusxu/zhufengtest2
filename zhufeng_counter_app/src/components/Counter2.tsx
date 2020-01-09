import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter2';
function Counter2(props) {
    return (
        <div>
            <p>Counter2:{props.number}</p>
            <button onClick={() => props.increment2()}>+</button>
            <button onClick={() => props.decrement2()}>-</button>
        </div>
    )
}
let mapStateToProps = state => state.counter2
export default connect(mapStateToProps, actions)(Counter2);
import React from 'react';
import { withRouter } from 'react-router-dom';
function NavHeader(props) {
    return (
        <ul>
            <li>
                <button id="counter1" className="nav-button" onClick={() => props.history.push('/counter1')}>counter1</button>
            </li>
            <li>
                <button id="counter2" className="nav-button" onClick={() => props.history.push('/counter2')}>counter2</button>
            </li>
        </ul>
    )
}
export default withRouter(NavHeader);
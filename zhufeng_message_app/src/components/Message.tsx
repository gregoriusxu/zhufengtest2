import React from 'react';
export default function (props) {
    return (
        <li className="list-group-item">{props.message.content}</li>
    )
}
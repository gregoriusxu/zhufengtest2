import React from 'react';
import Message from './Message';
export default function (props) {
    return (
        <ul className="list-group">
            {
                props.messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))
            }
        </ul>
    )
}
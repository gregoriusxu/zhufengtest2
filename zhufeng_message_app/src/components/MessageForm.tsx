import React, { useState } from 'react';
export default function (props) {
    let [content, setContent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (content) {
            props.addMessage(content);
        }
    }
    return (
        <form>
            <div className="form-group">
                <input
                    value={content}
                    onChange={event => setContent(event.target.value)}
                    className="form-control"
                    placeholder="请 "
                />
            </div>
            <div className="form-group">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSubmit}
                >发表</button>
            </div>
        </form>
    )
}
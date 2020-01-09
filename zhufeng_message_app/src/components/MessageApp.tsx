import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageApp extends React.Component {
    state = { messages: [] }
    addMessage = (content) => {
        let newMessage = { id: Date.now() + '', content };
        this.setState({
            messages: [...this.state.messages, newMessage]
        });
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-8 col-md-2">
                    <div className="panel">
                        <div className="panel-heading">
                            <h1 style={{ textAlign: 'center' }}>珠峰留言板</h1>
                        </div>
                        <div className="panel-body">
                            <MessageList messages={this.state.messages} />
                        </div>
                        <div className="panel-footer">
                            <MessageForm addMessage={this.addMessage} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

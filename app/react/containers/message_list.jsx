import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';
import MessageForm from '../containers/message_form';
import MessagesSubscription from '../channels/messages_subscription';

class MessageList extends Component {
  renderMessage(message) {
    return (
      <Message key={message.id}
        id={message.id}
        content={message.content}
        userName={message.user.name}
        roomId={message.room_id}
        createdAt={message.created_at}
      />
    );
  };

  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  };

  render() {
    debugger;
    return(
      <div className="message-list">
        <div ref={(div) => { this.messageList = div }} className="entries list-group">
          {this.props.messages.map(this.renderMessage)}
        </div>
        <MessageForm />
        <MessagesSubscription />
      </div>
    );
  };
};

function mapStateToProps({ messages }) {
  return { messages };
};

export default connect(mapStateToProps)(MessageList);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNewMessage } from '../actions/index';

class MessagesSubscription extends Component {

  connected() {
    // Notify someone has joined
  }


  disconnected() {
    // Notify someone has disconnected
  }

  received(data) {
    this.props.displayNewMessage(data);
  }

  render() {
    const roomId = this.props.activeRoomId;

    if (roomId) {
      App.messages = App.cable.subscriptions.create({
        channel: 'MessagesChannel',
        room_id: roomId,
      }, {
        connected: this.connected,
        disconnected: this.disconnected,
        received: this.received.bind(this),
      });
    };

    return null;
  }
}

function mapStateToProps({ activeRoomId }) {
  return { activeRoomId };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ displayNewMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesSubscription);

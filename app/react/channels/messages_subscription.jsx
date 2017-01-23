import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayNewMessage } from '../actions/index';

class MessagesSubscription extends Component {

  connected() {
    // Stuff when someone connects
  }

  disconnected() {
    // Stuff when someone disconnects
  }

  received(data) {
    this.props.displayNewMessage(data);
  }

  render() {
    const roomId = this.props.activeRoomId;

    if (this.props.activeRoomId) {
      App.messages = App.cable.subscriptions.create({
        channel: 'MessagesChannel',
        room_id: this.props.activeRoomId,
      }, {
        connected: this.connected,
        disconnected: this.disconnected,
        // bind `this` to be able to access props in received function
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

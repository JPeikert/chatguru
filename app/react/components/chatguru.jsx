import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import RoomList from '../containers/room_list';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

class Chatguru extends Component {
  render() {
    return(
      <div className="chat-guru">
        <RoomList />
        <MessageList />
      </div>
    );
  };
}

export default connect(null, null)(Chatguru);

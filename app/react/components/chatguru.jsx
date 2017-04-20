import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import RoomList from '../containers/room_list';
import MessageList from '../containers/message_list';

const Chatguru = (props) => (
  <div className="chat-guru">
    <RoomList />
    <MessageList />
  </div>
);

export default Chatguru;

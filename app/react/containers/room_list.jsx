import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { setActiveRoom, loadMessages } from '../actions/index';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.renderRoom = this.renderRoom.bind(this);
  }

  setActiveRoom(event) {
    const roomId = event.target.dataset.roomId;
    this.props.setActiveRoom(roomId);
    this.props.loadMessages(roomId);
  };

  renderRoom(room) {
    const isRoomActive = room.id === this.props.activeRoomId;
    return (
      <div
        key={room.id}
        className={classNames('room', { 'room--active': isRoomActive })}
        data-room-id={room.id}
        onClick={this.setActiveRoom}
      >
        <span className="room-name">{room.name}</span>
      </div>
    );
  }

  render() {
    return(
      <div className="room-list">
        {this.props.rooms.map(this.renderRoom)}
      </div>
    );
  }
};

function mapStateToProps({ rooms, activeRoomId }) {
  return { rooms, activeRoomId };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveRoom, loadMessages }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);

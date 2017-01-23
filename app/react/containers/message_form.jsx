import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  };

  onFormSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/messages', {
      content: this.state.message,
      room_id: this.props.activeRoomId,
    });
    this.setState({ message: '' });
  };

  onInputChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <form className="message-form" onChange={this.onInputChange} onSubmit={this.onFormSubmit}>
        <div className="input-group">
          <input type="text" value={this.state.message} className="form-control" name="message"/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">Submit</button>
          </span>
        </div>
      </form>
    );
  };
};

function mapStateToProps({ activeRoomId }) {
  return { activeRoomId }
}

export default connect(mapStateToProps)(MessageForm);

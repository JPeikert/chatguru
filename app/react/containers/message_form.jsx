import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  };

  onFormSubmit(event) {
    event.preventDefault();
    const message = this.state.message;
    const roomId = this.props.activeRoomId;

    this.props.submitMessage(message, roomId);

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
  return { activeRoomId };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

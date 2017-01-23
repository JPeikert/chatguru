import React, { PropTypes } from 'react';
import moment from 'moment';

const Message = (props) => {
  return(
    <div key={props.id} className="entry list-group-item">
      <span><strong>{props.userName} </strong> </span>
      <span>- {moment(props.createdAt).calendar()}</span>
      <br/>
      <span>{props.content}</span>
    </div>
  )
}

Message.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  userName: PropTypes.string,
  roomId: PropTypes.number,
  createdAt: PropTypes.string,
};

export default Message;

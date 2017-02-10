import React, { PropTypes } from 'react';
import moment from 'moment';

const Message = ({userName, createdAt, content}) => {
  return(
    <div key={id} lassName="entry list-group-item">
      <span><b>{userName}</b></span>
      <span>- {moment(createdAt).calendar()}</span>
      <br/>
      <span>{content}</span>
    </div>
  )
}

Message.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Message;

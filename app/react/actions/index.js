import axios from 'axios';

import { LOAD_MESSAGES } from '../consts/index';
import { SET_ACTIVE_ROOM } from '../consts/index';
import { SUBMIT_MESSAGE } from '../consts/index';
import { DISPLAY_NEW_MESSAGE } from '../consts/index';

const BASE_URL = 'http://localhost:3000';

export const loadMessages = (roomId) => {
  const url = `${BASE_URL}/messages?room_id=${roomId}`;
  const request = axios.get(url);

  return {
    type: LOAD_MESSAGES,
    payload: request,
  };
};

export const setActiveRoom = (roomId) => {
  if (App.messages) App.messages.unsubscribe();

  return {
    type: SET_ACTIVE_ROOM,
    payload: roomId,
  };
};

export const displayNewMessage = (data) => {
  return {
    type: DISPLAY_NEW_MESSAGE,
    payload: data.message,
  };
};

export const submitMessage = (message, roomId) => {
  const url = `${BASE_URL}/messages`;
  const request = axios.post(url, {
    content: message,
    room_id: roomId,
  });

  return {
    type: SUBMIT_MESSAGE,
    payload: request
  };
}

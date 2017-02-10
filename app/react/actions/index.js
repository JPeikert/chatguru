import axios from 'axios';

import { LOAD_MESSAGES } from '../consts/index';
import { SET_ACTIVE_ROOM } from '../consts/index';
import { SUBMIT_MESSAGE } from '../consts/index';
import { DISPLAY_NEW_MESSAGE } from '../consts/index';

const BASE_URL = 'http://localhost:3000';

export function loadMessages(roomId) {
  const url = `${BASE_URL}/messages?room_id=${roomId}`;
  const request = axios.get(url);

  return {
    type: LOAD_MESSAGES,
    payload: request,
  };
};

export function setActiveRoom(roomId) {
  if (App.messages) App.messages.unsubscribe();

  return {
    type: SET_ACTIVE_ROOM,
    payload: roomId,
  }
};

export function displayNewMessage(data) {
  return {
    type: DISPLAY_NEW_MESSAGE,
    payload: data.message,
  }
}

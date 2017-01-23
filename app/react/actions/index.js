import axios from 'axios';

export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export const DISPLAY_NEW_MESSAGE = 'DISPLAY_NEW_MESSAGE';

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

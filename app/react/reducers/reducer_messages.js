import { LOAD_MESSAGES, DISPLAY_NEW_MESSAGE } from '../actions/index';

export default (state = [], action) => {
  switch(action.type) {
    case LOAD_MESSAGES:
      state = action.payload.data;
  }

  switch(action.type) {
    case DISPLAY_NEW_MESSAGE:
      state = [...state, action.payload];
  }

  return state;
};

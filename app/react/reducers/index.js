import { combineReducers } from 'redux';

import MessagesReducer from './messages';
import ActiveRoomReducer from './active_room';
import RoomsReducer from './rooms';

const rootReducer = combineReducers({
  messages: MessagesReducer,
  activeRoomId: ActiveRoomReducer,
  rooms: RoomsReducer,
});

export default rootReducer;

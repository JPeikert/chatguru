import { combineReducers } from 'redux';

import MessagesReducer from './reducer_messages';
import ActiveRoomReducer from './reducer_active_room';
import RoomsReducer from './reducer_rooms';

const rootReducer = combineReducers({
  messages: MessagesReducer,
  activeRoomId: ActiveRoomReducer,
  rooms: RoomsReducer,
});

export default rootReducer;

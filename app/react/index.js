import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

integrationsManager.register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager.register('redux-container', RWRRedux.containerIntegrationWrapper);

RWR.run();

import ChatguruStore from './store/chatguru_store';
RWRRedux.registerStore('ChatguruStore', ChatguruStore);

import RoomList from './containers/room_list';
RWRRedux.registerContainer('RoomList', RoomList);

import MessageList from './containers/message_list';
RWRRedux.registerContainer('MessageList', MessageList);

import Chatguru from './components/chatguru';
RWRRedux.registerContainer('Chatguru', Chatguru);

import { createStore } from 'redux';
import contactsReducer from '../Reducer/contactsReducer';

const store=createStore(contactsReducer)

export default store;
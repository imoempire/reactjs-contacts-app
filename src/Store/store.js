import { applyMiddleware, compose, createStore } from 'redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import contactsReducer from '../Reducer/contactsReducer';
import thunk from 'redux-thunk';
import firebase from '../firebase/Config'
import { firestore } from 'firebase';

const store=createStore(contactsReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firestore)
))

export default store;
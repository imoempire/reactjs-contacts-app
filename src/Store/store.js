import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import contactsReducer from '../Reducer/contactsReducer';
import thunk from 'redux-thunk';
import firebase from '../firebase/Config';

let reducers= combineReducers({
    contact: contactsReducer,
    firebase: firebaseReducer,
})

const store=createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))

export default store;
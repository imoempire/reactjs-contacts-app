import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SET_ALL_CONTACTS } from "../Action/ContactsActions";


const initialState= {
    contacts: [ ]
};

const contactsReducer=(state=initialState, action)=>{
        switch (action.type) {
            case ADD_CONTACT:

            return{...state.contacts, contacts: [...state.contacts, action.payload]};

            case DELETE_CONTACT:
                const newArr = state.contacts.filter((contact)=>{
                    return contact.id !== action.payload;
                  });
                  return {...state, contacts: newArr }
            
                  case EDIT_CONTACT:
                  return{
                   ...state, contacts: state.contacts.map((contact)=>
                    contact.id === action.payload.id ? action.payload : contact
                    )};
                  case SET_ALL_CONTACTS:
                    return{...state, contacts: action.payload}

            default:
                return state
        }
}
export default contactsReducer;
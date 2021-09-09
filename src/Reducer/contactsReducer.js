import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "../Action/ContactsActions";


const initialState={
    contacts: [
        {
          Name: "James",
          Phone: "0244945255",
          Location: "Accra",
          id: "5367r8trgnjb",
        },
      ]
};

const ContactsReducer=(state=initialState, action)=>{
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
                    )}
            default:
                return state
        }
}
export default ContactsReducer;
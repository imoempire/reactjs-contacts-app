import { ADD_CONTACT } from "../Action/ContactsActions";


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

            default:
                return state
        }
}
export default ContactsReducer;
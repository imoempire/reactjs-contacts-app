export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT ="DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT"


export const addContact = (contact)=>{
    contact.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('Contacts')
        .add(contact).then((docs)=>{
            console.log(docs)
        });
    }


    // return{
    //     type: ADD_CONTACT,
    //     payload: contact
    // }
};
export const deleteContact = (contactId)=>{
    return{
        type: DELETE_CONTACT,
        payload: contactId
    }
};

export const editContact = (updateContact)=>{
    return{
        type: EDIT_CONTACT,
        payload: updateContact
    }
};
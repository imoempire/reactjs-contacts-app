export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT ="DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const SET_ALL_CONTACTS = "SET_ALL_CONTACTS";


export const addContact = (contact)=>{
    contact.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
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

export const getAllContacts = ()=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
        .onSnapshot(
            (snapshot)=>{
                let contacts = [];
                snapshot.forEach((doc)=>{
                    contacts.push(doc.data())
                });
                dispatch({
                    type: SET_ALL_CONTACTS,
                    payload: contacts
                })
            })
    }
}
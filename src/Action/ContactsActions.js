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

        return(dispatch, state, {getFirestore})=>{
            getFirestore().collection('contacts')
            .doc(contactId).delete().then(()=>{})
        }


    // return{
    //     type: DELETE_CONTACT,
    //     payload: contactId
    // }
};

export const editContact = (updateContact)=>{
        return(dispatch, state, {getFirestore})=>{
            getFirestore().collection('contacts')
            .doc(updateContact.id).set(updateContact)
            .then(()=>{})
        }


    // return{
    //     type: EDIT_CONTACT,
    //     payload: updateContact
    // }
};

export const getAllContacts = ()=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
        .orderBy("Name",)
        .onSnapshot(
            (snapshot)=>{
                let contacts = [];
                snapshot.forEach((doc)=>{
                    contacts.push({...doc.data(), id:doc.id})
                });
                dispatch({
                    type: SET_ALL_CONTACTS,
                    payload: contacts
                })
            })
    }
}
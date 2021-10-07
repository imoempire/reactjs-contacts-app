import React from 'react'
import { connect } from 'react-redux';
import Contact from './Contact';

function ContactsList( {contacts, deleteContact, editContact} ) {
    const contactsList = contacts.map((contact) => {
        return(
          <Contact 
          contacts={contact}
          key={contact.id}
          deleteContact={deleteContact}
          editContact={editContact} 
          />
        )
      });
    return (
        <div>
            {contactsList}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        contacts: state.contact.contacts
    }
}
export default connect(mapStateToProps)(ContactsList)

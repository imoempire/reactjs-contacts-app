import React from 'react'
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

export default ContactsList

import React from 'react';

const Contact = ({contacts, index}) => {
    return (
        <div className="contact" key={index}> 
          <h3>Name: {contacts.Name}</h3>
          <h3>Phone: {contacts.Phone}</h3>
          <h3>Location: {contacts.Location}</h3>
          </div>
    );
}

export default Contact;

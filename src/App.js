import React, { Component } from 'react';
import "./App.css";
import Contact from './Components/Contact'
import ContactForm from './Components/ContactForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
     contacts: [
       { 
         Name: 'James',
         Phone: '0244945255',
         Location: 'Accra'
       }
     ]
    }
  };
  handleAdd=(newContact)=>{
    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
  }
  render() {
    const contacts = this.state.contacts.map((contact, index) => {
      return(
        <Contact contacts={contact} index={index}/>
      )
    } )
    return (
      <div>
        <ContactForm addcontact={this.handleAdd}/>
        <h1>All Contacts</h1>
        {contacts}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          Name: "James",
          Phone: "0244945255",
          Location: "Accra",
          id: "5367r8trgnjb",
        },
      ],
    };
  }
  handleAdd = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

    handleDelete=(contactId)=>{
      const newArr = this.state.contacts.filter((contact)=>{
        return contact.id !== contactId;
      });
      this.setState({ contacts: newArr})
    }
    handleEdit=(updateContact)=>{
      this.setState({
        contacts: this.state.contacts.map((contact)=>
        contact.id === updateContact.id ? updateContact : contact)
      })
    }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ContactForm addContact={this.handleAdd} />
            </div>
            <div className="col">
              <h1>All Contacts</h1>
              <ContactsList contacts={this.state.contacts} 
              deleteContact={this.handleDelete}
              editContact={this.handleEdit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

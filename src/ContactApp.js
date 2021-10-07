import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import {logoutUser} from './Action/authActions'

class ContactApp extends Component {

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
              <ContactForm />
            </div>
            <div className="col">
              <h1>All Contacts <button onClick={this.props.logoutUser}>Logout</button> </h1>
              <ContactsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps={
  logoutUser,
}

export default connect(null, mapDispatchToProps) (ContactApp);

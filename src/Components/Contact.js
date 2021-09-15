import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/esm/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import { connect } from 'react-redux';
import { deleteContact } from '../Action/ContactsActions';
import EditContactForm from './EditContactForm';

const Contact = ( {contacts, deleteContact, editContact } ) => {
    const [show, setShow]= useState(false);
    const handleClose =()=> setShow(false);
    const handleShow = ()=> setShow(true);
    const deletehandle =(e)=>{
        deleteContact(contacts.id)
    }
    return (
        <>
        <Card className="contact"> 
          <Card.Header>Name: {contacts.Name}</Card.Header>
          <ListGroup variant="flush">

          <ListGroup.Item>Phone: {contacts.Phone}</ListGroup.Item>
          <ListGroup.Item>Location: {contacts.Location}</ListGroup.Item>

          </ListGroup>
          <Button onClick={deletehandle}>Delete</Button>
          <Button onClick={handleShow}>Edit</Button>

          </Card>
        
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <EditContactForm 
              contacts={contacts}
              editContact={editContact}
              closeModal={handleClose}
              />
              </Modal.Body>
          </Modal>

        </>
    );
}


const mapDispatchToProps={
    deleteContact : deleteContact
}
export default connect(null, mapDispatchToProps)(Contact);

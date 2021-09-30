import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editContact } from '../Action/ContactsActions'

class EditContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                    Name: props.contacts.Name || '',
                    Phone: props.contacts.Phone || '',
                    Location: props.contacts.Location || '',
                    id: props.contacts.id || '',
        }
    };
    handleChange=(e)=>{
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.editContact(this.state);
        this.setState({
            Name: "",
            Phone: "", 
            Location: "",
        });
        this.props.closeModal();
    }
    render() {
        return (
            <>
        <Form onSubmit={this.handleSubmit}>
         <Form.Group controlId="formBasicName">
         <Form.Label htmlFor="name">Name</Form.Label>
         <Form.Control type="text" name="Name" htmlFor="Name"
         placeholder="Name" className="input"
         onChange={this.handleChange} 
         value={this.state.Name} 
         />
         </Form.Group>
         <Form.Group controlId="formBasicNumber">
          <Form.Label htmlFor="Number">Phone</Form.Label>
         <Form.Control type="number" name="Phone" htmlFor="Phone"
         className="input"
         placeholder="Phone"
         onChange={this.handleChange} 
         value={this.state.Phone} 
         />
         </Form.Group>
         <Form.Group controlId="formBasicLocation">
             <Form.Label htmlFor="Location"></Form.Label>
         <Form.Control type="text" name="Location" htmlFor="Location" 
         className="input"
         placeholder="Location" 
         onChange={this.handleChange} 
         value={this.state.Location} 
         />
         </Form.Group>
         <div className="form-control">
            <Button variant="primary" type="submit">Save Change</Button>
         </div>
     </Form> 
            </>
        );
    }
}

const mapDispatchToProps={
    editContact: editContact,
}

export default connect(null, mapDispatchToProps)(EditContactForm);
 
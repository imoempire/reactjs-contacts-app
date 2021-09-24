import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, getAllContacts } from '../Action/ContactsActions';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts : [
                {
                    Name: '',
                    Phone: '',
                    Location: '',
                }
            ]
        }
    };
    handleChange=(e)=>{
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            Name: '',
            Phone: '',
            Location: '',
        })
    }
    componentDidMount(){
        this.props.getAllContacts()
    }
    render() {
        return (
            <>
        <form onSubmit={this.handleSubmit}>
         <div className="form-control">
         <input type="text" name="Name" htmlFor="Name"
         placeholder="Name" 
         onChange={this.handleChange} 
         value={this.state.Name} 
         />
         </div>
         <div className="form-control">
         <input type="number" name="Phone" htmlFor="Phone"
         placeholder="Phone" 
         onChange={this.handleChange} 
         value={this.state.Phone} 
         />
         </div>
         <div className="form-control">
         <input type="text" name="Location" htmlFor="Location" 
         placeholder="Location" 
         onChange={this.handleChange} value={this.state.Location} 
         />
         </div>
         <div className="form-control">
            <button type="submit">Add To Contact</button>
         </div>
     </form>  
            </>
        );
    }
}


const mapDispatch={
    addContact: addContact,
    getAllContacts: getAllContacts 
}

export default connect(null, mapDispatch)(ContactForm);

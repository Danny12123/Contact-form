
import React, { Component } from 'react';
class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {contact:[{
            Id: "",
            Phone: "",
            Location: ""
        }]};
    }
    firstnamechangehandler = e => {
        this.setState({
            Id:e.target.value
        });
    }
    emailchangehandler = e => {
        this.setState({
            Phone:e.target.value
        });
    }
   passwordchangehandler = e => {
        this.setState({
            Location:e.target.value
        });
    }
    onCreate = (e) => {
        // console.log({
        //     Name: this.state.Id,
        //     Email: this.state.Email,
        //     Password: this.state.Password
        // });
        this.setState({
			contact: [
				...this.state.contact,
				{ Id: this.state.Id, Phone: this.state.Phone, Location: this.state.Location },
                
			],
		});
    }

    
    render() { 
        return ( 
            <div id='Card'>
                
                <form>
                    
                    <input className='first-name' type="text" value={this.state.contact.Id} onChange={this.firstnamechangehandler} placeholder='First Name'/><br /><br />
                  
                    <input className='first-name' type="email" value={this.state.contact.Email} onChange={this.emailchangehandler} placeholder='Phone'/><br /><br />

                    <input className='first-name' type="text" value={this.state.contact.Password} onChange={this.passwordchangehandler} placeholder='Location'/>
                </form>
                <button type='submit' onClick={this.onCreate}>Send</button>
                <div>
                    
                    {/* <h1>Name:{this.state.Id}</h1> */}
                    {this.state.contact.map((item, index) => {
					return (
						<div key={index}>
							<h1>{item.Id}</h1>
							<h1>{item.Phone}</h1>
							<h1>{item.Location}</h1>
							
						</div>
					);
				})}
                </div>
            </div>
         );
    }
}
 
export default ClassForm;

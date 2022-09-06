
// import React, { Component } from 'react';
// class ClassForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {contact:[{
//             name: "",
//             phone: "",
//             location: ""
//         }]};
//     }

//     firstnamechangehandler = e => {
//         this.setState({
//             name:e.target.value
//         });
//     }
//     phonechangehandler = e => {
//         this.setState({
//             phone:e.target.value
//         });
//     }
//    passwordchangehandler = e => {
//         this.setState({
//             location:e.target.value
//         });
//     }
//     onCreate = (e) => {
//         e.preventDefault();
//         this.props.addU({name,phone,location})
//         // this.setState({
// 		// 	contact: [
// 		// 		...this.state.contact,
// 		// 		{ name: this.state.name, Phone: this.state.Phone, Location: this.state.Location },
                
// 		// 	],
// 		// });
//     }

    
//     render() { 
//         return ( 
//             <div className='Card'>
                
//                 <form>
                    
//                     <input className='first-name' type="text" value={this.state.name} onChange={this.firstnamechangehandler} placeholder='First Name'/><br /><br />
                  
//                     <input className='first-name' type="email" value={this.state.phone} onChange={this.phonechangehandler} placeholder='Phone'/><br /><br />

//                     <input className='first-name' type="text" value={this.state.location} onChange={this.passwordchangehandler} placeholder='Location'/>
//                 </form>
//                 <button type='submit' onClick={this.onCreate}>Send</button>
//                 <div>
                    
//                     {/* <h1>Name:{this.state.name}</h1> */}
//                     {this.state.contact.map((item, index) => {
// 					return (
// 						<div key={index}>
// 							<h1>{item.name}</h1>
// 							<h1>{item.phone}</h1>
// 							<h1>{item.location}</h1>
							
// 						</div>
// 					);
// 				})}
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default ClassForm;

import React from 'react';
import "./App.css";

const Contacts = ({contact}) => {
  return (
    <div>
        <>
            {contact.map((item, index) => {
                return (
                <div className='contact-blog' key={index}>
                    <h2>{item.username}</h2>
                    <h2>{item.contactNumber}</h2>
                    <h2>{item.location}</h2>
                </div>
                )
            })}
        
        </>
    </div>
  )
}

export default Contacts

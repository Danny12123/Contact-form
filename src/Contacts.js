import React from 'react';
import "./App.css";
import { useSelector } from 'react-redux';
const Contacts = (props) => {
  const {users} = useSelector((state) => {
    return state;
  })
  return (
    <div id='contact'>
        <>
            {users.map((item, index) => {
                return (
                <div className='contact-blog' key={index}>
                    <h2>Name: {item.username}</h2>
                    <h2>Number: {item.phone}</h2>
                    <h2>Location: {item.location}</h2>
                </div>
                )
            })}
        
        </>
    </div>
  )
}

export default Contacts

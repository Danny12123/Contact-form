


import React, { useState } from 'react';
import Contact from './Contacts';
import './App.css';

 import ContactFormFu from './ContactFormFu';

function App() {

  const [contact, setContact] = useState([
    {username: "Eric", contactNumber:" 0544545254", location: "Accra"},
    {username: "John", contactNumber: "0204352344", location: "Wa"}
  ]);

  const addContact = (user) => {
		setContact([...contact, user]);
    
	};

  return (
    <div className='App'>
      <Contact 
      contact={contact}
      />
      <ContactFormFu addContact={addContact}/>
          
    </div>
  );
}

export default App;

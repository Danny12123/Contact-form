import React, { useState } from 'react';
import Contact from './Contacts';
import './App.css';
import ContactForm from './ContactForm';

function App() {

  // const [name, setName] = useState("");
  // const [contact, setContact] = useState("");
  // const [location, setLocation] = useState("");
  const [contact, setContact] = useState([
    {username: "Eric", contactNumber:" 0544545254", location: "Accra"},
    {username: "John", contactNumber: "0204352344", location: "Wa"}
  ]);

  return (
    <div className='App'>
      <Contact 
      contact={contact}
      />
      <ContactForm />
          
    </div>
  );
}

export default App;

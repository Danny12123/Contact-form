import React, {useState} from 'react';


const ContactFormFu = (props) => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    
    const onCreate = (e) => {
        e.preventDefault();
        props.addContact({username,phone,location});
        setLocation("");
        setPhone("");
        setUsername("");
    }

  return (
    <div>
        <div className='Card'>
                
                <form>
                    
                    <input className='first-name' type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='First Name'/><br /><br />
                  
                    <input className='first-name' type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone'/><br /><br />

                    <input className='first-name' type="text" value={location} onChange={(e) => setLocation(e.target.value) } placeholder='Location'/>
                </form>
                <button type='submit' onClick={onCreate}>Send</button>
               
            </div>
      
    </div>
  )
}

export default ContactFormFu

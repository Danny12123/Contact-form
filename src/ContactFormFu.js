import React, {useState} from 'react';
import { connect } from 'react-redux';
import { ADD_USER } from './Action/Action';

const ContactFormFu = (props) => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    
    const onCreate = (e) => {
        e.preventDefault();
        props.ADD_USER({username,phone,location});
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
const mapDispatch = {
  ADD_USER
}

export default connect(null, mapDispatch)(ContactFormFu)

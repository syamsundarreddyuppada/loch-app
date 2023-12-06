import React, { useState } from 'react'
import "./Signup.scss";
import cross from "../../assets/cross-23.png"
const Signup = ({menuActive,setMenuActive}) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false)

  const handleChange = (e) => { 
    setEmail(e.target.value);
    checkValid(email)
  }

  const checkValid = (mail) => { 
        const valid = /\S+@\S+\.\S+/;
    const emailValid = valid.test(mail);
    console.log(emailValid);
    if (emailValid) {
      setValidEmail(false)
      return
    }
          setValidEmail(true)

   }
  
  const handleSubmit = () => { 
    if (!email.length) {
      setValidEmail(true)
      return;
    } 
    checkValid(email)
    window.location.href = "https://app.loch.one/welcome"



   }
  return (
      <div className={`signup ${menuActive ? "menuOn" :"menuOf"}`}>
          <h3>Sign up for exclusive access.</h3>
      <input type="email" name="" id="" value={email} onChange={handleChange} placeholder='Your email address' />
      {validEmail ? <p className='error'>Please enter a valid email</p>:""}
          <button disabled={validEmail} onClick={handleSubmit}>Get started</button>
      <p>You’ll receive an email with an invite link to join.</p>
      <img src={cross} alt="cross" width={32} height={32} onClick={e => setMenuActive()}  />
          
    </div>
  )
}

export default Signup
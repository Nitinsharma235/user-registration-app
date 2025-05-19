import React, { useState } from 'react'
import { useRef } from 'react';

function generateId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 5);
}

function RegistrationForm({onRegister}) {
  const nameRef=useRef(null);
  const emailRef=useRef(null);
  const phoneRef=useRef(null);
  const genderRef=useRef(null);
  const addressRef=useRef(null);
  
  

  const handleAddSubmit= () =>{
    const name=nameRef.current.value.trim();
    const email=emailRef.current.value.trim();
    const phone=phoneRef.current.value.trim();
    const gender=genderRef.current.value.trim();
    const address=addressRef.current.value.trim();
  
    const newUser={
      id:generateId(),
      name:name,
      email:email,
      phone:phone,
      gender:gender,
      address:address
    }
    console.log(newUser);
    onRegister(newUser);
   
  }
  return (
    <div>
      <h1>Registration Form</h1>
      Name:{" "} <input type='text' placeholder='Enter your Full Name' ref={nameRef}/><br/>
      E-mail:{" "}<input type='email' placeholder="Enter your Email" ref={emailRef} /><br/>
      Phone-No.:{" "}<input type='tel' placeholder="Enter your phone no." ref={phoneRef} /><br/>
      Gender:{" "}<input type='text' placeholder="Enter gender" ref={genderRef} /><br/>
      Address:{" "}<input type='text' placeholder="Enter Address" ref={addressRef} /><br/>
      <button onClick={handleAddSubmit}>Submit form</button>
    </div>
  )
}

export default RegistrationForm

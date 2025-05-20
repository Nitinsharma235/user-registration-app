import '../App.css';
import { useRef, useState } from 'react';

function generateId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 5);
}

function RegistrationForm({ onRegister }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);
  const addressRef = useRef(null);

  const [error, setErrors] = useState({});

  const handleAddSubmit = () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const gender = genderRef.current.value.trim();
    const address = addressRef.current.value.trim();

    const newUser = {
      id: generateId(),
      name,
      email,
      phone,
      gender,
      address,
    };

    const newErrors = validateForm(newUser);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully!');
      console.log(newUser);
      onRegister(newUser);

     
      nameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
      genderRef.current.value = '';
      addressRef.current.value = '';
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (/\d/.test(data.name)) {
      errors.name = 'Name must be in alphabets';
     
    }else if (data.name.length < 4) {
      errors.name = 'Name must be at least 4 characters long';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }

    if (!data.gender.trim()) {
      errors.gender = 'Gender is required';
    }

    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }

    return errors;
  };

  return (
    <div className="input-field">
      <h1>Registration Form</h1>

      <label>Name<sup>*</sup>:</label><br />
      <input type="text" placeholder="Enter your Full Name" ref={nameRef} />
      {error.name && <span className="error">{error.name}</span>}<br />

      <label>Email:</label><br />
      <input type="email" placeholder="Enter your Email" ref={emailRef} />
      {error.email && <span className="error">{" "}{error.email}</span>}<br />

      <label>Phone No.:</label><br />
      <input type="tel" placeholder="Enter your phone no." ref={phoneRef} />
      {error.phone && <span className="error">{" "}{error.phone}</span>}<br />

      <label>Gender:</label><br />
      {/* <input type="text" placeholder="Enter gender" ref={genderRef} /> */}
      <select ref={genderRef}>
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {error.gender && <span className="error">{" "}{error.gender}</span>}<br />

      <label>Address:</label><br />
      <input type="text" placeholder="Enter Address" ref={addressRef} />
      {error.address && <span className="error">{" "}{error.address}</span>}<br />
      <button onClick={handleAddSubmit}>Submit form</button>
    </div>
  );
}

export default RegistrationForm;

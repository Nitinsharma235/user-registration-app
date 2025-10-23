import '../App.css';
import { useRef, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function generateId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 5);
}

function RegistrationForm() {
 
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const genderRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();

  const [error, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [stateIdNameMap, setStateIdNameMap] = useState({});
  const [cityMap, setCityMap] = useState({});
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState('');

  const { state, pathname } = useLocation();
  const [user,setUser]=useState({});

  
  useEffect(() => {
 
  if (state) {
    setUser(state.user);

    // Set text inputs
    nameRef.current.value = state.user.name;
    emailRef.current.value = state.user.email;
    phoneRef.current.value = state.user.phone;
    genderRef.current.value = state.user.gender;

    // Step 1: Match the state name with the fetched states
    const userStateName = state.user.address.state; // e.g., "Rajasthan"
    const matchingState = states.find((s) => s.onm === userStateName);

    if (matchingState) {
      const stateIdx = matchingState.idx;
      stateRef.current.value = stateIdx;
      setSelectedState(stateIdx); // triggers fetching of cities
    }
  }
}, [states]); // Make sure states are loaded before running

useEffect(() => {
  // After cities are loaded, match and set the city
  if (state && cities.length > 0) {
    const userCityName = state.user.address.city; // e.g., "Ganganagar"
    const matchingCity = cities.find((c) => c.nm === userCityName);
    if (matchingCity) {
      cityRef.current.value = matchingCity.idx;
    }
  }
}, [cities]); // Only run when cities are updated

   
  
  useEffect(() => {
  fetch("https://crmapi.ajjas.com/crm/geolocation/geolocation/getallstates")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((stateData) => {
      
        // const sortedStates = (stateData.data  || []).sort((a, b) => a.onm.localeCompare(b.onm));
        const sortedStates = stateData.data.filter(user => user.ctrid === "1269750").sort((a, b) => a.onm.localeCompare(b.onm));

        setStates(sortedStates);
      
        let stateMap1 = {}
        sortedStates.forEach((state) => {
          stateMap1[state.idx] = state.onm;
        })
        setStateIdNameMap(stateMap1);  //  statemap1={2="AP" , 3="Assam" , 4="Bihar" ...}
    })
      
      .catch(err => console.error("Failed to load countries:", err));
        }, []); 

  useEffect(() => {
  if (selectedState) {
    fetch(`https://crmapi.ajjas.com/crm/geolocation/geolocation/getcitiesbystateid?idx=${selectedState}`)
      .then(res => res.json())
      .then(data => {
      const sortedCities = (data.data || []).sort((a, b) => a.nm.localeCompare(b.nm));
      setCities(sortedCities);

        let cityMap1 = {}
        sortedCities.forEach((city) => {
          cityMap1[city.idx] = city.nm;
        })
        setCityMap(cityMap1);
        cityRef.current.value="";
      })
      .catch(err => console.error("Error fetching cities", err));
  } else {
  setCities([]); // Clear cities if no state is selected
  }
  }, [selectedState]);
  
  const handleAddSubmit = () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const gender = genderRef.current.value.trim();
    let state = stateRef.current.value.trim();
    let city = cityRef.current.value.trim();
 
    // console.log("state1-->",state)
    // console.log("stateMap-->", stateMap)

     console.log("city1-->",city)
    console.log("cityMap-->", cityMap)

    state = stateIdNameMap[state]; // state = statemap[4] ,="Bihar"  ,state="Bihar"
    city = cityMap[city];

    console.log("city2-->",city)

    const newUser = {
      id: generateId(),
      name,
      email,
      phone,
      gender,
      address : {
        city,
        state
      },
    };

    const newErrors = validateForm(newUser);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully!');
      console.log(newUser);
     
      // Add new user to localStorage
      const storedUser = JSON.parse(localStorage.getItem('userData')) || [] ;
      if(pathname==="/edit"){
         
        
        for(let i=0;i<storedUser.length;i++){
          if(storedUser[i].id===user.id){
            newUser.id=user.id;
            storedUser[i]=newUser;
            // console.log(state.user.name);
          }
        }
      }
      else{
        storedUser.push(newUser);
      }
      localStorage.setItem('userData', JSON.stringify(storedUser));
   
      nameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
      genderRef.current.value = '';
      // addressRef.current.value = '';
      cityRef.current.value = '';
      stateRef.current.value = ''
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
    } else if (data.name.length < 4) {
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

     if (!data.address.state?.trim()) {
      errors.addressState = 'state is required';
    }
    if (!data.address.city?.trim()) {
      errors.addressCity = 'city is required';
    }

    return errors;
  };

  return (
    <div>
      <br/>
      <Container fluid='sm' style={{backgroundColor:'rgb(224, 239, 227)'}}>
        {(pathname==="/edit")?<h1>Update Profile</h1>: <h1>Registration Form</h1>}
        <Form>
          <Row classname='m-1' >
            <Col xs={12} lg={4} className='m-2 mb-1 '>
              <Row>
                <Col lg={2}>
                  <Form.Label column className='fw-bold'>
                    Name:
                  </Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control placeholder="Enter your Full Name" ref={nameRef} />
                  {error.name && <span className="error">{error.name}</span>}
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5} className='m-2'>
              <Row>
                <Col lg={3}>
                  <Form.Label column className='fw-bold'>
                    Email Id:
                  </Form.Label>
                </Col>
                <Col lg={9}>
                  <Form.Control placeholder="Enter  Email" ref={emailRef} />
                  {error.email && <span className="error">{" "}{error.email}</span>}
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4} className='m-2 mb-1 '>
              <Row>
                <Col lg={5}>
                  <Form.Label column className='fw-bold'>
                    Phone No.:
                  </Form.Label>
                </Col>
                <Col lg={6}>
                  <Form.Control placeholder="Enter Phone No." ref={phoneRef} />
                   {error.phone && <span className="error">{" "}{error.phone}</span>}<br />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5} className='m-2'>
              <Row>
                <Col lg={3}>
                  <Form.Label column className='fw-bold'>
                    Gender:
                  </Form.Label>
                </Col>
                <Col lg={9}>
                  {/* <Form.Control placeholder="Enter Gender" ref={genderRef} /> */}
                   <Form.Select aria-label="Select Gender" ref={genderRef}>
                      <option value="">-- Select Gender --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                   </Form.Select>
                   {error.gender && <span className="error">{" "}{error.gender}</span>}<br />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4} className='m-2 mb-1 '>
              <Row>
                <Col lg={3}>
                  <Form.Label column className='fw-bold'>
                    Address:
                  </Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Select aria-label="Select State" ref={stateRef} onChange={(e) => setSelectedState(e.target.value)}>
                    <option value="X">--Select State--</option>
                    {
                      states.map((state) =>{
                      return  <option value={state.idx}>{state.onm}</option>
                      })
                    }
                  </Form.Select>
                  {error.addressState && <span className="error">{" "}{error.addressState}</span>}<br/><br/>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5} className='m-2'>
              <Row>
                <Col lg={3}>
                  {/* <Form.Label column className='fw-bold'>
                  </Form.Label> */}
                </Col>
                <Col lg={9}>
                   <Form.Select aria-label="Select City" ref={cityRef} >
                    <option value="">--Select City--</option>
                      {
                        cities.map((city) =>{
                        return  <option value={city.idx}>{city.nm}</option>
                        })
                      }
                  </Form.Select>
                  {error.addressCity && <span className="error">{" "}{error.addressCity}</span>}<br/><br/>
                </Col>
              </Row>
               <Button variant="success" onClick={handleAddSubmit} >Submit form</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default RegistrationForm;


















































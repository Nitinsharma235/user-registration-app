import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import UserList from './components/UserList';
import Home from './pages/Home';
import { useState,useEffect } from 'react';

function App() {
  const [userData,setUserData]=useState([]);


  const handleRegister= (newUser) =>{
    setUserData(prev => [...prev, newUser]);   // safe, uses freshest state

    // setUserData([...userData,newUser]);
  }

    useEffect(() => {
     console.log('userData changed:', userData);
    }, [userData]);


  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home userData={userData}/></>
    },
  
    {
      path:"/register",
      element:<><Navbar/><RegistrationForm  onRegister={handleRegister}/></>
    }
  ])

  
  return (
    <>
   
    
    <RouterProvider router={router} basename="/your-base-url" />

    <div className="App">
    
    </div></>

  );
}

export default App;

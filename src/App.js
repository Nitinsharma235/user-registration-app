import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import UserList from './components/UserList';
import Home from './pages/Home';
import { useState,useEffect } from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [userData,setUserData]=useState([]);


  const handleRegister= (newUser) =>{
    setUserData(prev => [...prev, newUser]);   

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
    },

    {
      path:'/user/:id',
      element:<><Navbar/>{<UserProfile userData={userData} />}</>
    }
  ])

  
  return (
    <>
   
    
    <RouterProvider router={router} />

    <div className="App">
    
    </div></>

  );
}

export default App;

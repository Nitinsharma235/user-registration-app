import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import { useState,useEffect } from 'react';
import Profile from './pages/Profile';

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
      element:<><Navbar/><Register  onRegister={handleRegister}/></>
    },

    {
      path:'/user/:id',
      element:<><Navbar/><Profile/></>
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

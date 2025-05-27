import './App.css';
import Navbar from './components/Navbar';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/user/:id' element={<Profile/>}/>
          <Route path="/edit" element={<RegistrationForm />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;





//  <Route path='/' element={<Home />}/>
// <Route path='/register?edit=1' element={<Register />}/>
// <Route path='/user/:id' element={<Profile/>}/>
// {/* <Route path="/edit" element={<RegistrationForm />}/> */}
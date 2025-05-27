import React from 'react'
import RegistrationForm from '../components/RegistrationForm'

function Register({onRegister}) {
  return (
    <div>
     <RegistrationForm edit/> 
    </div>
  )
}
export default Register
























// React Frontend Assignment – Task 2: Profile Viewer and Registration Form
// Objective:
// Enhance the User Directory app by adding:
// - A user profile page via dynamic routing
// - A user registration form to simulate adding a user
// - Use of React Router, controlled forms, and local state updates
// Features & Requirements:
// 1. React Router
//    - Use `react-router-dom` for routing.
//    - '/' → Show the user list
//    - '/user/:id' → Show detailed profile
// 2. User Profile Page
//    - Navigate to '/user/:id' on click.
//    - Display: full name, address, age, gender, etc.
//    - Either fetch again or pass user data through state.
// 3. Registration Form (/register)
//    - Fields: Full Name, Email, Phone, Gender, Address
//    - Controlled inputs and basic validation
//    - On submit, show confirmation and add to local state
// 4. Navigation Bar
//    - Include links to Home and Register
// Suggested Folder Structure:
// src/

// nnn components/

// n   nnn Navbar.jsx

// n   nnn UserCard.jsx

// n   nnn UserList.jsx

// n   nnn UserProfile.jsx

// n   nnn RegisterForm.jsx

// nnn pages/

// n   nnn Home.jsx

// n   nnn Profile.jsx

// n   nnn Register.jsx

// nnn App.jsx

// nnn index.js
// New Learnings:
// - React Router: SPA navigation with dynamic routes
// - Controlled Forms: Input handling and validation
// - State Lifting & Props: Manage shared state
// - Simulated local updates: Mimics backend
// - Navigation: Improves UX
// Bonus:
// - Add pagination or filters by gender/age
// Submission:
// - GitHub repo with README.
// - Mention simulated vs fetched data clearly.

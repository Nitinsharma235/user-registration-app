# User Registration App

## Description
This is a simple React-based User Registration Application with profile viewing and editing functionality.  
Users can register with details such as name, email, phone, gender, state, and city.  
The app also allows searching, editing, and displaying user data using **localStorage**.

---

## Features

### 1. User Registration
- Register new users with validation for name, email, and phone number.
- Gender selection and dynamic state–city dropdowns fetched from an external API.
- User data saved in **localStorage**.

### 2. User Listing
- All registered users are displayed on the **Home page** in card format.
- Each user card shows the user's name and unique ID.
- Clicking on a card navigates to the user’s profile page.

### 3. User Profile
- Displays detailed user information including name, email, phone, gender, city, and state.
- Includes an **Edit** button that allows updating user information.

### 4. Search Functionality
- Real-time search by user name on the home page.

### 5. Edit and Update
- Existing user details can be edited through the same form used for registration.
- The app detects whether it’s in registration or edit mode based on routing.

---

## Technologies Used
- **React.js**
- **React Router**
- **React Bootstrap**
- **React Icons**
- **LocalStorage API**
- **Fetch API** (for state and city data)

---

## Folder Structure

src/
│
├── components/
│ ├── CustNavBar.js
│ ├── RegistrationForm.js
│ ├── UserCard.js
│ ├── UserList.js
│ └── UserProfile.js
│
├── pages/
│ ├── Home.js
│ ├── Profile.js
│ └── Register.js
│
├── App.js
├── App.css
└── index.js

## How It Works
1. On the **Register** page, users fill out their information and submit.  
2. The app validates all fields and saves the user data to localStorage.  
3. The **Home** page lists all registered users as cards.  
4. Clicking a user card navigates to their **Profile**.  
5. The **Edit** button on the Profile page opens the same form pre-filled with user data for editing.  
6. The **Search bar** filters users by name dynamically.





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/features/users/pages/Home';
import Register from '../src/features/users/pages/Register';
import  Profile  from './features/users/pages/Profile';
import { NavBar } from './features/users/pages/Navbar';
import SignIn from './features/users/pages/Signin';
const App: React.FC = () => {
    return (
        <Router>
          <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='signin' element={<SignIn/>}/>
                <Route path="/matcher" element={<Profile />} />
                <Route path="/register" element={<Register />} /> 
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;

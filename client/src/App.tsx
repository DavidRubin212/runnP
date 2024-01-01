import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/features/users/pages/Home';
import Register from '../src/features/users/pages/Register';
import NavBar from '../src/features/users/pages/Navbar';

const App: React.FC = () => {
    return (
        <Router>
          <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} /> 
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;

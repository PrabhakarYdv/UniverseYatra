import React from 'react'
import { Routes,Route } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';

function AppRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes;
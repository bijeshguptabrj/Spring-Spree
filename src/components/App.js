import React from 'react';
import { Routes , Route } from 'react-router';
import { useLocation } from "react-router-dom";


import Events from './Events';
import Sponsors from './Sponsors';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Gallery from './Gallery/LayoutGallery.js'

const App = () => {
    const location = useLocation();
    return (
        <> 
            {location.pathname === '/gallery' ? null : <Navbar />}
            <Routes> 
                <Route path='/' exact element={<LandingPage />} />
                <Route path="/events" exact element={<Events />} />
                <Route path="/sponsors" exact element={<Sponsors />} />
                <Route path="/gallery" exact element={<Gallery />} />
                 
            </Routes>

        </>
    )
}   

export default App;
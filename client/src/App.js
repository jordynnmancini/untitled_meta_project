import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/pages/home/home";
import Navigation from './components/navigation/navigation/navigation';
import Profile from './components/pages/profile/profile';



function App() {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);


  return (
    <div>

      <BrowserRouter>
        <Navigation navOpen={navOpen} toggleNav={toggleNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/** @format */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import ProjectPage from "./Pages/ProjectPage";
import AboutModal from "./Modals/AboutModal";
import ContactModal from "./Modals/ContactModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/about' element={<AboutModal />} />
        <Route path='/contact' element={<ContactModal />} />
      </Routes>
    </Router>
  );
}

export default App;

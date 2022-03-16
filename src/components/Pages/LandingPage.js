/** @format */

import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import Projects from "../Projects";
import Education from "../Education";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";

const LandingPage = () => {
  return (
    <div>
      <Toaster className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8' />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;

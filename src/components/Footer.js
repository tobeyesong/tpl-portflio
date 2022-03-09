/** @format */

import React from "react";
import { FaStackOverflow, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const navigation = {
  social: [
    {
      name: "Github",
      href: "https://github.com/tobeyesong",
      icon: () => (
        <FaGithubSquare className='transition ease-in hover:text-red-600 text-gray-50' />
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/toan-lam-69a429103/",
      icon: () => (
        <FaLinkedin className='transition ease-in hover:text-red-600 text-gray-50 ' />
      ),
    },
    {
      name: "StackOverFlow",
      href: "https://stackoverflow.com/users/16131535/toan-lam",
      icon: () => (
        <FaStackOverflow className='transition ease-in hover:text-red-600 text-gray-50' />
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className='transform bg-gray-100 bg-left-bottom bg-cover bg-hero-pattern '>
      <div className='px-8 py-4 mx-auto overflow-hidden heropattern-diagonallines-indigo-200 max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex justify-center mt-4 space-x-3 text-2xl'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>{item.name}</span>
              <item.icon className='w-6 h-6' aria-hidden='true' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

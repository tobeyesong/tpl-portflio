/** @format */
import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const project = [
  {
    number: "1",
    imageUrl: "",
    title: "MERN Expense Tracker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore repudiandae eaque iste eius excepturi! Provident aspernatur animi ea assumenda.",
  },
  // {
  //   number: "",
  //   title: "",
  //   desc: "",
  // },
];

const Projects = () => {
  return (
    <div className='bg-left-bottom bg-cover bg-project-pattern'>
      <div className='px-4 py-4 mx-auto rounded-md max-w-7xl sm:px-6 lg:px-2 '>
        <div className='relative mt-4 mb-6 rounded-md bg-gradient-to-r from-green-400 to-blue-500 ring ring-white ring-offset-2'>
          <div className='h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
            <img
              className='object-cover w-full h-full lg:rounded-l-md'
              src='https://st4.depositphotos.com/4177785/26739/v/1600/depositphotos_267395888-stock-illustration-travel-expense-tracker-smartphone-interface.jpg'
              alt=''
            />
          </div>
          {project.map((project) => (
            <div className='relative px-4 py-12 mx-auto rounded-md shadow-lg max-w-7xl sm:px-6 lg:px-8 lg:py-16 '>
              <div className='md:ml-auto md:w-1/2 md:pl-10'>
                <h2 className='text-base font-semibold tracking-wider text-gray-300 uppercase '>
                  Project Number {project.number}
                </h2>
                <p className='mt-2 text-3xl tracking-tight text-white sm:text-4xl'>
                  {project.title}
                </p>
                <p className='mt-3 text-lg text-gray-300'>{project.desc}</p>
                <div className='mt-8'>
                  <div className='inline-flex rounded-md shadow'>
                    <a
                      href='#'
                      className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50'>
                      Live Site
                      <ExternalLinkIcon
                        className='w-5 h-5 ml-3 -mr-1 text-gray-400 '
                        aria-hidden='true'
                      />
                    </a>
                    <a
                      href='#'
                      className='inline-flex items-center justify-center px-5 py-3 ml-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50'>
                      Demo
                      <ExternalLinkIcon
                        className='w-5 h-5 ml-3 -mr-1 text-gray-400 animate-bounce'
                        aria-hidden='true'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

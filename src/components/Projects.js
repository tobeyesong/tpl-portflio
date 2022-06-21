/** @format */
import React from "react";

import { Link } from "react-router-dom";
import {
  ExternalLinkIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
const project = [
  {
    name: "Pass-Man",
    imageUrl:
      "https://media.publit.io/file/passmanDemoImage/passman-landing-page.jpg",
    title: "MERN Password Manager",

    desc: "Inspired by LastPass, Pass-Man is a MERN app with full CRUD operations combined with Clearbit API, React-Final-Form, and TailwindCSS",
    demoLink: "https://passmandemo.herokuapp.com/dashboard",
  },
  {
    name: "MoneyX",
    imageUrl:
      "https://media.publit.io/file/passmanDemoImage/Depositphotos_194290034_L-1.jpg",
    title: "Expense Tracker",
    desc: "Inspired by Mint , MoneyX is a React app made with the Context API for create, read, and delete operations combined with React-Final-Form, and TailwindCSS",
    demoLink: "https://moneyxtracker.netlify.app/",
  },
];

const Projects = () => {
  return (
    <React.Fragment>
      <div className='bg-left-bottom bg-cover bg-project-pattern'>
        <div className='px-4 py-4 mx-auto rounded-md max-w-7xl sm:px-6 lg:px-2 '>
          <svg
            className='absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'>
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'>
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-white'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={300}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>

          {project.map((project) => (
            <div
              key={project.name}
              className='relative mt-4 mb-6 rounded-md bg-gradient-to-r from-green-400 to-blue-500 ring ring-white ring-offset-2'>
              <div className='h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
                <img
                  src={project.imageUrl}
                  alt='projectImage'
                  className='object-cover w-full h-full rounded-t-md'
                />
              </div>
              <div className='relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16'>
                <div className='md:ml-auto md:w-1/2 md:pl-10'>
                  <h2 className='text-base font-semibold tracking-wider text-gray-300 uppercase '>
                    {project.name}
                  </h2>
                  <p className='mt-2 text-3xl tracking-tight text-white sm:text-4xl'>
                    {project.title}
                  </p>
                  <p className='mt-3 text-lg text-gray-50'>{project.desc}</p>

                  <div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
                    <div className='mt-3 shadow sm:mt-0 sm:ml-3'>
                      <Link
                        to='/projects'
                        className='flex items-center justify-center w-full px-6 py-3 text-base font-medium text-green-600 bg-white rounded-md filter drop-shadow-lg hover:bg-gray-100 md:py-2 md:text-lg md:px-5'>
                        More Info
                        <InformationCircleIcon className='w-5 h-5 ml-3 -mr-1 text-blue-400 ' />
                      </Link>
                    </div>

                    <div className='mt-3 shadow sm:mt-0 sm:ml-3'>
                      <a
                        href={project.demoLink}
                        className='flex items-center justify-center w-full px-6 py-3 text-base font-medium text-green-600 bg-white rounded-md filter drop-shadow-lg hover:bg-gray-100 md:py-2 md:text-lg md:px-5'>
                        Demo
                        <ExternalLinkIcon
                          className='w-5 h-5 ml-3 -mr-1 text-red-600 animate-bounce'
                          aria-hidden='true'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;

/** @format */
import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const project = [
  {
    number: "1",
    title: "MERN Password Manager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore repudiandae eaque iste eius excepturi! Provident aspernatur animi ea assumenda.",
  },
  {
    number: "2",
    imageUrl: "",
    title: "MERN Expense Tracker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore repudiandae eaque iste eius excepturi! Provident aspernatur animi ea assumenda.",
  },
];

const Projects = () => {
  return (
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
        <div className='relative mt-4 mb-6 rounded-md bg-gradient-to-r from-green-400 to-blue-500 ring ring-white ring-offset-2'>
          <div className='h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'></div>
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

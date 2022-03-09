/** @format */

import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ClipboardListIcon, HomeIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";

const projects = [
  {
    name: "PassMan",
    href: "#passman",
  },
  {
    name: "MoneyX",
    href: "#moneyx",
  },
];

const AltHeader = () => {
  return (
    <div>
      <div className='relative z-40 '>
        <div className='relative pt-6 pb-6 '>
          <div className='px-4 mx-auto max-w-7xl sm:px-4'>
            <nav
              className='fixed top-0 left-0 right-0 flex py-2 bg-white border-b border-gray-200 shadow-lg'
              aria-label='Breadcrumb'>
              <ol
                role='list'
                className='flex w-full max-w-screen-xl px-4 mx-auto space-x-4 sm:px-6 lg:px-8'>
                <li className='flex'>
                  <div className='flex items-center'>
                    <Link
                      to='/'
                      className='p-1 text-gray-400 hover:text-gray-50 hover:bg-gray-900 hover:rounded-md'>
                      <HomeIcon
                        className='flex-shrink-0 w-5 h-5 '
                        aria-hidden='true'
                      />
                      <span className='sr-only'>Home</span>
                    </Link>
                  </div>
                </li>
                {projects.map((project) => (
                  <li key={project.name} className='flex '>
                    <div className='flex items-center'>
                      <svg
                        className='flex-shrink-0 w-6 h-full text-gray-200'
                        viewBox='0 0 24 44'
                        preserveAspectRatio='none'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'>
                        <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
                      </svg>
                      <a
                        href={project.href}
                        className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                        aria-current={project.current ? "page" : undefined}>
                        {project.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltHeader;

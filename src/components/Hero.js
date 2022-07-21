/** @format */
/* This example requires Tailwind CSS v2.0+ */

import React, { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  TerminalIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";

const navigation = [
  {
    name: "Projects",
    href: "/projects",
    icon: <TerminalIcon className='w-6 h-6 mr-2 -ml-1' aria-hidden='true' />,
  },
];

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='relative bg-center bg-cover bg-hero-pattern '>
      <div
        className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
        aria-hidden='true'>
        <lottie-player
          src='https://assets9.lottiefiles.com/packages/lf20_nzz1mpo2.json'
          background='transparent'
          speed='1'
          loop
          autoplay></lottie-player>
      </div>

      <div className='relative pt-6 pb-8 sm:pb-24'>
        <Popover>
          {({ open }) => (
            <>
              <div className='px-4 mx-auto max-w-7xl sm:px-6'>
                <nav
                  className='relative flex items-center justify-between sm:h-10 md:justify-end'
                  aria-label='Global'>
                  <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                    <div className='flex items-center justify-between w-full md:w-auto'>
                      <a href='#'>
                        <span className='sr-only'>ToanCode</span>
                        <img
                          className='w-auto h-12 lg:h-14 sm:h-10 hover:opacity-75'
                          src='https://media.publit.io/file/tplport/noun_coding_2985075-1.svg'
                          alt=''
                        />
                      </a>
                      <div className='flex items-center -mr-2 shadow-inner md:hidden'>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset '>
                          <span className='sr-only'>Open main menu</span>
                          <MenuIcon className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>

                  <div className='hidden md:flex md:space-x-10 '>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        type='button'
                        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition duration-200 ease-in transform bg-white border border-transparent rounded-md shadow-sm hover:bg-red-700 hover:text-white '>
                        {item.icon}

                        {item.name}
                      </Link>
                    ))}
                    <a
                      href='https://drive.google.com/file/d/1jGOtJl3hesUvvFJemFMuPpF9WwSfk5U1/view'
                      className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition duration-200 ease-in transform bg-white border border-transparent rounded-md shadow-sm hover:bg-red-700 hover:text-white '>
                      <ClipboardListIcon
                        className='w-6 h-6 mr-2 -ml-1'
                        aria-hidden='true'
                      />
                      Resume
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter='duration-150 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Popover.Panel
                  focus
                  static
                  className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
                  <div className='overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5'>
                    <div className='flex items-center justify-between px-5 pt-4'>
                      <div>
                        <img
                          className='w-auto h-8'
                          src='https://media.publit.io/file/tplport/noun_coding_2985075-1.svg'
                          alt=''
                        />
                      </div>
                      <div className='-mr-2 '>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close menu</span>
                          <XIcon className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='px-2 pt-2 pb-3'>
                      {navigation.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          type='button'
                          className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'>
                          {item.name}
                        </Link>
                      ))}

                      <a
                        href='https://drive.google.com/file/d/1jGOtJl3hesUvvFJemFMuPpF9WwSfk5U1/view'
                        className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'>
                        Resume
                      </a>
                    </div>
                    <a
                      href='#'
                      className='block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-red-600'></a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className='px-4 py-2 m-4 mx-auto max-w-7xl sm:mt-24 '>
          <div className='p-6 text-center rounded-md shadow-xl lg:p-8 md:p-7 md:backdrop-filter lg:backdrop-filter md:backdrop-blur lg:backdrop-blur-md heropattern-texture-gray-100'>
            <h1 className='text-4xl tracking-tight text-center text-white uppercase sm:text-5xl md:text-6xl'>
              <span className='block p-2 text-green-400 rounded-md lg:inline-block bg-white/70'>
                Theater Major
              </span>
              <span className='px-3 m-1 text-gray-900'>turned</span>
              <span className='block text-blue-500 underline lg:mt-3 xl:inline decoration-solid decoration-pink-500 underline-offset-8'>
                React Developer
              </span>
            </h1>

            <div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
              <div className=''>
                <Link
                  to='/contact'
                  className='flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition ease-in-out bg-red-600 border border-transparent rounded-md filter drop-shadow-lg hover:bg-red-700 md:py-4 md:text-lg md:px-10'>
                  Contact
                </Link>
              </div>
              <div className='mt-3 shadow sm:mt-0 sm:ml-3'>
                <Link
                  to='/about'
                  className='flex items-center justify-center w-full px-6 py-3 text-base font-medium text-green-600 bg-white border border-transparent rounded-md filter drop-shadow-lg hover:bg-gray-100 md:py-4 md:text-lg md:px-10'>
                  About
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;

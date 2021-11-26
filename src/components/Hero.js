/** @format */
/* This example requires Tailwind CSS v2.0+ */

import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import "@lottiefiles/lottie-player";

const navigation = [
  { name: "Projects", href: "#" },
  { name: "Resume", href: "#" },
  // { name: "Contact", href: "#" },
];

const Hero = () => {
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
        <div className='relative h-full mx-auto max-w-7xl'>
          <svg
            className='absolute transform animate-pulse left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'>
            <defs>
              <pattern
                id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
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
              height={650}
              fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
            />
          </svg>
        </div>
      </div>

      <div className='relative pt-6 pb-16 sm:pb-24'>
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
                        <span className='sr-only'>Workflow</span>
                        <img
                          className='w-auto h-12 lg:h-14 sm:h-10 hover:opacity-75'
                          src='https://media.publit.io/file/portflio-icon.svg'
                          alt=''
                        />
                      </a>
                      <div className='flex items-center -mr-2 md:hidden'>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Open main menu</span>
                          <MenuIcon className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex md:space-x-10 '>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='p-2 text-xl font-medium text-white underline hover:text-green-600'>
                        {item.name}
                      </a>
                    ))}
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
                          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                          alt=''
                        />
                      </div>
                      <div className='-mr-2'>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close menu</span>
                          <XIcon className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='px-2 pt-2 pb-3'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'>
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href='#'
                      className='block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-indigo-100'></a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className='px-4 mx-auto mt-16 max-w-7xl sm:mt-24 '>
          <div className='p-4 text-center border-white rounded-md shadow-xl md:backdrop-filter lg:backdrop-filter md:backdrop-blur lg:backdrop-blur-md heropattern-texture-gray-100'>
            <h1 className='text-4xl tracking-tight text-center text-white uppercase sm:text-5xl md:text-6xl'>
              <span className='block text-green-400 xl:inline'>
                Theater Major turned {""}
              </span>
              <span className='block text-blue-500 xl:inline'>
                React Developer.
              </span>
            </h1>

            <div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
              <div className=''>
                <a
                  href='#'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition ease-in-out bg-green-600 border border-transparent rounded-md filter drop-shadow-lg hover:bg-green-700 md:py-4 md:text-lg md:px-10'>
                  Contact
                </a>
              </div>
              <div className='mt-3 shadow sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-600 bg-white border border-transparent rounded-md filter drop-shadow-lg hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                  About
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;

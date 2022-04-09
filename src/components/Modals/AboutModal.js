/** @format */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChatAltIcon } from "@heroicons/react/outline";
import LandingPage from "../Pages/LandingPage";

import { Navigate } from "react-router-dom";
import { FaStackOverflow, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const navigation = {
  social: [
    {
      name: "Github",
      href: "https://github.com/tobeyesong",
      icon: () => (
        <FaGithubSquare className='w-8 h-8 text-gray-900 transition ease-in hover:text-red-600' />
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/toan-lam-69a429103/",
      icon: () => (
        <FaLinkedin className='w-8 h-8 text-gray-900 transition ease-in hover:text-red-600' />
      ),
    },
    {
      name: "StackOverFlow",
      href: "https://stackoverflow.com/users/16131535/toan-lam",
      icon: () => (
        <FaStackOverflow className='w-8 h-8 text-gray-900 transition ease-in hover:text-red-600' />
      ),
    },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  if (!open) {
    return <Navigate to='/' />;
  }
  return (
    <Fragment>
      <LandingPage />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          initialFocus={cancelButtonRef}
          onClose={setOpen}>
          <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
                <div>
                  <div className='flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full'>
                    <ChatAltIcon
                      className='w-6 h-6 text-green-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-left sm:mt-5'>
                    <div className='space-y-4'>
                      <div className='aspect-w-3 aspect-h-2'>
                        <img
                          className='object-cover rounded-lg shadow-lg'
                          src='https://media.publit.io/file/smirkBeach.jpeg'
                          alt=''
                        />
                      </div>
                      <div className='space-y-1 text-lg font-medium leading-6'>
                        <h3>Toan Lam</h3>
                        <p className='text-amber-700'>
                          Self-Taught Front-End Developer
                        </p>
                      </div>
                      <div className='text-lg'>
                        <p className='text-gray-500'>
                          I graduated at Cal State Long Beach with a BA in
                          Theater Arts. I am self taught developer. Mainly in
                          the MERN stack. This portfolio is the culmination of
                          my expertise. However, I do look forward to learning
                          Python and TypeScript soon.
                        </p>
                      </div>

                      <ul role='list' className='flex space-x-5'>
                        <li className='flex'>
                          {navigation.social.map((item) => (
                            <a key={item.name} href={item.href}>
                              <span className='sr-only'>{item.name}</span>
                              <item.icon aria-hidden='true' />
                            </a>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}>
                    Go Back
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
}

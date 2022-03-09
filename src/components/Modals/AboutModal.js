/** @format */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BookOpenIcon } from "@heroicons/react/outline";
import LandingPage from "../Pages/LandingPage";

import { Navigate } from "react-router-dom";

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
                    <BookOpenIcon
                      className='w-6 h-6 text-green-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-left sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'>
                      So here's the story...
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        I graduated at Cal State Long Beach with a BA in Theater
                        Arts in 2016.
                      </p>
                      <p className='pt-3 text-sm text-gray-500'>
                        In 2019, I moved to Mill Valley and I started doing
                        Stand-Up Comedy in the Bay Area.
                      </p>
                      <p className='pt-3 text-sm text-gray-500'>
                        In 2020, the Pandemic happened and I seized it as I saw
                        it as a once in a lifetime opportunity to start over
                        again.
                      </p>
                      <p className='pt-3 text-sm text-gray-500'>
                        Just like that, I began my coding journey on March 2020,
                        and I never gave up. Sometimes, you just know when to
                        start something new and although it wasn't all sunshine
                        and rainbows, my mistakes carved the path to my faith in
                        the journey.
                      </p>
                      <p className='pt-3 text-sm text-gray-500'>
                        This portfolio is the culmination of my perserverance in
                        fighting for something I believe in.
                      </p>
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

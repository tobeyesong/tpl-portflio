/** @format */

import React from "react";

const ContactForm = () => {
  return (
    <div className='bg-left-bottom bg-cover bg-contact-pattern-2 '>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8'>
        <div className='relative shadow-xl bg-'>
          <div className='grid grid-cols-1 rounded-md lg:grid-cols-3'>
            {/* Contact information */}
            <div className='relative px-6 py-10 overflow-hidden bg-center bg-cover rounded-t-md md:rounded-l-md lg:rounded-l-md bg-contact-pattern sm:px-10 xl:p-12'>
              <div
                className='absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block'
                aria-hidden='true'>
                <svg
                  className='absolute inset-0 w-full h-full'
                  width={160}
                  height={678}
                  viewBox='0 0 160 678'
                  fill='none'
                  preserveAspectRatio='xMidYMid slice'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                    fill='url(#linear3)'
                    fillOpacity='.1'
                  />
                  <defs>
                    <linearGradient
                      id='linear3'
                      x1='192.553'
                      y1='325.553'
                      x2='899.66'
                      y2='1032.66'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#fff' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className='text-lg font-medium text-white'>
                Contact Information
              </h3>
              <p className='max-w-3xl mt-6 text-base text-indigo-50'>
                Please feel free to contact me about employment opportunities
                here.
              </p>
              <dl className='mt-8 space-y-6'></dl>
              <ul className='flex mt-8 space-x-12' role='list'>
                <li>
                  <a className='text-indigo-200 hover:text-indigo-100' href='#'>
                    <span className='sr-only'>Facebook</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'>
                      <path
                        d='M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className='text-indigo-200 hover:text-indigo-100' href='#'>
                    <span className='sr-only'>GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'>
                      <path
                        d='M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className='text-indigo-200 hover:text-indigo-100' href='#'>
                    <span className='sr-only'>Twitter</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'>
                      <path
                        d='M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <lottie-player
                src='https://assets5.lottiefiles.com/packages/lf20_fn2gqs3b.json'
                background='transparent'
                speed='1'
                loop
                autoplay></lottie-player>
            </div>

            {/* Contact form */}
            <div className='px-6 py-10 bg-gray-100 sm:px-10 lg:col-span-2 xl:p-12 rounded-b-md md:rounded-r-md lg:rounded-r-md'>
              <h3 className='text-lg font-medium text-gray-900'>
                Send a message
              </h3>
              <form
                action='#'
                method='POST'
                className='grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                <div>
                  <label
                    htmlFor='first_name'
                    className='block text-sm font-medium text-gray-900'>
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first_name'
                      id='first_name'
                      autoComplete='given-name'
                      className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last_name'
                    className='block text-sm font-medium text-gray-900'>
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last_name'
                      id='last_name'
                      autoComplete='family-name'
                      className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900'>
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-900'>
                      Phone
                    </label>
                    <span id='phone-optional' className='text-sm text-gray-500'>
                      Optional
                    </span>
                  </div>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                      aria-describedby='phone-optional'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-900'>
                    Subject
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-900'>
                      Message
                    </label>
                    <span id='message-max' className='text-sm text-gray-500'>
                      Max. 500 characters
                    </span>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                      aria-describedby='message-max'
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2 sm:flex sm:justify-end'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-gray-100 bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 sm:w-auto'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

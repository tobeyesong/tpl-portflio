/** @format */

import React from "react";
import { Form, Field } from "react-final-form";
import { XCircleIcon } from "@heroicons/react/solid";
import { FaStackOverflow, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const required = (value) => (value ? undefined : "Required");

const ContactForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='relative p-10 bg-opacity-50 bg-right-bottom bg-cover bg-contact-pattern-2 '>
      <div className='py-12 mx-auto max-w-7xl sm:py-24 sm:px-8 lg:px-8'>
        <div className='relative shadow-xl bg-'>
          <div className='grid grid-cols-1 rounded-md lg:grid-cols-3'>
            {/* Contact information */}
            <div className='relative px-6 py-10 overflow-hidden bg-center bg-cover rounded-t-md lg:rounded-l-md bg-contact-pattern sm:px-10 xl:p-12'>
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
              <h3 className='text-lg font-medium text-gray-50'>
                Contact Information
              </h3>
              <p className='max-w-3xl mt-6 text-base text-gray-50'>
                Please feel free to contact me about employment opportunities
                here.
              </p>
              <dl className='mt-8 space-y-6'></dl>
              <div className='flex mt-8 space-x-12 text-3xl' role='list'>
                <a href='https://github.com/tobeyesong'>
                  <FaGithubSquare className='transition ease-in hover:text-red-600 text-gray-50' />
                </a>
                <a href='https://www.linkedin.com/in/toan-lam-69a429103/'>
                  <FaLinkedin className='transition ease-in hover:text-red-600 text-gray-50 ' />
                </a>
                <a href='https://stackoverflow.com/users/16131535/toan-lam'>
                  <FaStackOverflow className='transition ease-in hover:text-red-600 text-gray-50' />
                </a>
              </div>

              <div aria-hidden='true'>
                <lottie-player
                  src='https://assets5.lottiefiles.com/packages/lf20_fn2gqs3b.json'
                  background='transparent'
                  speed='1'
                  loop
                  autoplay></lottie-player>{" "}
              </div>
            </div>

            {/* Contact form */}
            <div className='px-6 py-10 bg-gray-100 sm:px-10 lg:col-span-2 xl:p-12 rounded-b-md md:rounded-r-md lg:rounded-r-md'>
              <h3 className='text-lg font-medium text-gray-900'>
                Send a message
              </h3>

              {/* <!-- A little help for the Netlify bots if you're not using a SSG --> */}
              <form name='contact' netlify netlify-honeypot='bot-field' hidden>
                <input type='text' name='name' />
                <input type='text' name='email' />
                <input type='text' name='subject' />
                <textarea name='message'></textarea>
              </form>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitError }) => (
                  <form onSubmit={handleSubmit} name='contact' method='post'>
                    <div className='mt-6 space-y-8 rounded-b-md sm:space-y-5'>
                      <div>
                        <div className=''>
                          <Field
                            name='name'
                            component='input'
                            placeholder=''
                            validate={required}>
                            {({ input, meta, placeholder }) => (
                              <div className='col-span-6 sm:col-span-3'>
                                <div>
                                  <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-700'>
                                    Name
                                  </label>
                                  <input
                                    type='text'
                                    {...input}
                                    placeholder={placeholder}
                                    className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow md:w-3/4 lg:w-3/4 text-l focus:outline-none focus:border-blue-500'
                                  />
                                </div>
                                {meta.error && meta.touched && (
                                  <div className='w-full p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md md:w-3/4 lg:w-3/4 sm:col-span-3 bg-red-50'>
                                    <div className='flex'>
                                      <div className='flex-shrink-0'>
                                        <XCircleIcon
                                          className='w-5 h-5 text-red-400'
                                          aria-hidden='true'
                                        />
                                      </div>
                                      <div className='ml-3'>
                                        <h3 className='text-sm font-medium text-red-800'>
                                          {meta.error}
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </Field>

                          {submitError && (
                            <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                              <div className='flex'>
                                <div className='flex-shrink-0'>
                                  <XCircleIcon
                                    className='w-5 h-5 text-red-400'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='ml-3'>
                                  <h3 className='text-sm font-medium text-red-800'>
                                    {submitError}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <Field
                            name='email'
                            component='input'
                            placeholder=''
                            validate={required}>
                            {({ input, meta, placeholder }) => (
                              <div className='col-span-6 sm:col-span-3'>
                                <div>
                                  <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700'>
                                    E-mail
                                  </label>
                                  <input
                                    type='text'
                                    {...input}
                                    placeholder={placeholder}
                                    className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow md:w-3/4 lg:w-3/4 text-l focus:outline-none focus:border-blue-500'
                                  />
                                </div>
                                {meta.error && meta.touched && (
                                  <div className='w-full p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md md:w-3/4 lg:w-3/4 sm:col-span-3 bg-red-50'>
                                    <div className='flex'>
                                      <div className='flex-shrink-0'>
                                        <XCircleIcon
                                          className='w-5 h-5 text-red-400'
                                          aria-hidden='true'
                                        />
                                      </div>
                                      <div className='ml-3'>
                                        <h3 className='text-sm font-medium text-red-800'>
                                          {meta.error}
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </Field>

                          {submitError && (
                            <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                              <div className='flex'>
                                <div className='flex-shrink-0'>
                                  <XCircleIcon
                                    className='w-5 h-5 text-red-400'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='ml-3'>
                                  <h3 className='text-sm font-medium text-red-800'>
                                    {submitError}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <Field
                          name='subject'
                          component='input'
                          placeholder=''
                          validate={required}>
                          {({ input, meta, placeholder }) => (
                            <div className='col-span-6 sm:col-span-3'>
                              <div>
                                <label
                                  htmlFor='subject'
                                  className='block text-sm font-medium text-gray-700'>
                                  Subject
                                </label>
                                <input
                                  type='text'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow text-l focus:outline-none focus:border-blue-500'
                                />
                              </div>
                              {meta.error && meta.touched && (
                                <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='message'
                          component='textarea'
                          validate={required}
                          className='block w-full h-32 p-4 px-4 py-2 pl-1 mb-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'>
                          {({ input, meta, placeholder }) => (
                            <div className='col-span-6 sm:col-span-3'>
                              <div>
                                <label
                                  htmlFor='message'
                                  className='block text-sm font-medium text-gray-700'>
                                  Message
                                </label>
                                <textarea
                                  type='text'
                                  rows='8'
                                  {...input}
                                  placeholder={placeholder}
                                  className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow text-l focus:outline-none focus:border-blue-500'
                                />
                              </div>
                              {meta.error && meta.touched && (
                                <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                          <button
                            type='submit'
                            className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-indigo-500 sm:col-start-2 sm:text-sm'>
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

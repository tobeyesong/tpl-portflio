/** @format */

import React from "react";
import { Form, Field } from "react-final-form";
import { XCircleIcon } from "@heroicons/react/solid";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const required = (value) => (value ? undefined : "Required");
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const ContactModal = () => {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => navigate("/"))
      .then(() => toast.success("Message Sent. Thank you."))
      .catch((error) => alert(error));
  };

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  if (!open) {
    return <Navigate to='/' />;
  }
  return (
    <div>
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
                  <div className='px-6 py-10 bg-gray-100 sm:px-10 lg:col-span-2 xl:p-12 rounded-b-md md:rounded-r-md lg:rounded-r-md'>
                    <h3 className='text-lg font-medium text-gray-900'>
                      Send a message
                    </h3>

                    <Form
                      onSubmit={onSubmit}
                      validate={(values) => {
                        const errors = {};
                        if (values.email !== "undefined") {
                          var pattern = new RegExp(
                            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
                          );

                          if (!pattern.test(values.email)) {
                            errors.email = "Please enter valid email address.";
                          }
                        }

                        return errors;
                      }}
                      render={({ handleSubmit, submitError }) => (
                        <form
                          onSubmit={handleSubmit}
                          name='contact'
                          method='POST'
                          data-netlify='true'>
                          <input
                            type='hidden'
                            name='form-name'
                            value='contact'
                          />
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
                                          name='name'
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
                                          name='email'
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
                                        name='subject'
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
                                        name='message'
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
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </Fragment>
    </div>
  );
};

export default ContactModal;

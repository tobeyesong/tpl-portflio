/** @format */

// /** @format */

// import React from "react";
// import { Form, Field } from "react-final-form";
// import { XCircleIcon } from "@heroicons/react/solid";

// const required = (value) => (value ? undefined : "Required");

// export const MessageModal = () => {
//   return (
//     <div>
//       <div className='px-6 py-10 bg-gray-100 sm:px-10 lg:col-span-2 xl:p-12 rounded-b-md md:rounded-r-md lg:rounded-r-md'>
//         <h3 className='text-lg font-medium text-gray-900'>Send a message</h3>
//         <Form
//           onSubmit={onSubmit}
//           render={({ handleSubmit, submitError }) => (
//             <form onSubmit={handleSubmit}>
//               <div className='mt-6 space-y-8 rounded-b-md sm:space-y-5'>
//                 <div>
//                   <div className=''>
//                     <Field
//                       name='name'
//                       component='input'
//                       placeholder=''
//                       validate={required}>
//                       {({ input, meta, placeholder }) => (
//                         <div className='col-span-6 sm:col-span-3'>
//                           <div>
//                             <label
//                               htmlFor='name'
//                               className='block text-sm font-medium text-gray-700'>
//                               Name
//                             </label>
//                             <input
//                               type='text'
//                               {...input}
//                               npm
//                               placeholder={placeholder}
//                               className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow md:w-3/4 lg:w-3/4 text-l focus:outline-none focus:border-blue-500'
//                             />
//                           </div>
//                           {meta.error && meta.touched && (
//                             <div className='w-full p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md md:w-3/4 lg:w-3/4 sm:col-span-3 bg-red-50'>
//                               <div className='flex'>
//                                 <div className='flex-shrink-0'>
//                                   <XCircleIcon
//                                     className='w-5 h-5 text-red-400'
//                                     aria-hidden='true'
//                                   />
//                                 </div>
//                                 <div className='ml-3'>
//                                   <h3 className='text-sm font-medium text-red-800'>
//                                     {meta.error}
//                                   </h3>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </Field>

//                     {submitError && (
//                       <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
//                         <div className='flex'>
//                           <div className='flex-shrink-0'>
//                             <XCircleIcon
//                               className='w-5 h-5 text-red-400'
//                               aria-hidden='true'
//                             />
//                           </div>
//                           <div className='ml-3'>
//                             <h3 className='text-sm font-medium text-red-800'>
//                               {submitError}
//                             </h3>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div>
//                     <Field
//                       name='email'
//                       component='input'
//                       placeholder=''
//                       validate={required}>
//                       {({ input, meta, placeholder }) => (
//                         <div className='col-span-6 sm:col-span-3'>
//                           <div>
//                             <label
//                               htmlFor='email'
//                               className='block text-sm font-medium text-gray-700'>
//                               E-mail
//                             </label>
//                             <input
//                               type='text'
//                               {...input}
//                               placeholder={placeholder}
//                               className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow md:w-3/4 lg:w-3/4 text-l focus:outline-none focus:border-blue-500'
//                             />
//                           </div>
//                           {meta.error && meta.touched && (
//                             <div className='w-full p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md md:w-3/4 lg:w-3/4 sm:col-span-3 bg-red-50'>
//                               <div className='flex'>
//                                 <div className='flex-shrink-0'>
//                                   <XCircleIcon
//                                     className='w-5 h-5 text-red-400'
//                                     aria-hidden='true'
//                                   />
//                                 </div>
//                                 <div className='ml-3'>
//                                   <h3 className='text-sm font-medium text-red-800'>
//                                     {meta.error}
//                                   </h3>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </Field>

//                     {submitError && (
//                       <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
//                         <div className='flex'>
//                           <div className='flex-shrink-0'>
//                             <XCircleIcon
//                               className='w-5 h-5 text-red-400'
//                               aria-hidden='true'
//                             />
//                           </div>
//                           <div className='ml-3'>
//                             <h3 className='text-sm font-medium text-red-800'>
//                               {submitError}
//                             </h3>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <Field
//                     name='subject'
//                     component='input'
//                     placeholder=''
//                     validate={required}>
//                     {({ input, meta, placeholder }) => (
//                       <div className='col-span-6 sm:col-span-3'>
//                         <div>
//                           <label
//                             htmlFor='subject'
//                             className='block text-sm font-medium text-gray-700'>
//                             Subject
//                           </label>
//                           <input
//                             type='text'
//                             {...input}
//                             placeholder={placeholder}
//                             className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow text-l focus:outline-none focus:border-blue-500'
//                           />
//                         </div>
//                         {meta.error && meta.touched && (
//                           <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
//                             <div className='flex'>
//                               <div className='flex-shrink-0'>
//                                 <XCircleIcon
//                                   className='w-5 h-5 text-red-400'
//                                   aria-hidden='true'
//                                 />
//                               </div>
//                               <div className='ml-3'>
//                                 <h3 className='text-sm font-medium text-red-800'>
//                                   {meta.error}
//                                 </h3>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </Field>

//                   <Field
//                     name='message'
//                     component='textarea'
//                     validate={required}
//                     className='block w-full h-32 p-4 px-4 py-2 pl-1 mb-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'>
//                     {({ input, meta, placeholder }) => (
//                       <div className='col-span-6 sm:col-span-3'>
//                         <div>
//                           <label
//                             htmlFor='message'
//                             className='block text-sm font-medium text-gray-700'>
//                             Message
//                           </label>
//                           <textarea
//                             type='text'
//                             rows='8'
//                             {...input}
//                             placeholder={placeholder}
//                             className='block w-full px-4 py-2 pl-1 mb-2 rounded-md shadow text-l focus:outline-none focus:border-blue-500'
//                           />
//                         </div>
//                         {meta.error && meta.touched && (
//                           <div className='col-span-6 p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md sm:col-span-3 bg-red-50'>
//                             <div className='flex'>
//                               <div className='flex-shrink-0'>
//                                 <XCircleIcon
//                                   className='w-5 h-5 text-red-400'
//                                   aria-hidden='true'
//                                 />
//                               </div>
//                               <div className='ml-3'>
//                                 <h3 className='text-sm font-medium text-red-800'>
//                                   {meta.error}
//                                 </h3>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </Field>
//                 </div>
//               </div>
//             </form>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

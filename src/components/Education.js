/** @format */
import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  { name: "Step 1", href: "#", status: "complete" },
  { name: "Step 2", href: "#", status: "complete" },
  { name: "Step 3", href: "#", status: "current" },
  { name: "Step 4", href: "#", status: "upcoming" },
  { name: "Step 5", href: "#", status: "upcoming" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Education = () => {
  return (
    <div className='max-w-3xl px-4 py-12 mx-auto rounded-md sm:py-16 sm:px-6 lg:px-8'>
      <div className='relative rounded-md'>
        <div className='max-w-2xl mx-auto lg:bg-transparent lg:px-8'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent'>
              <div className='sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
                <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                  <img
                    className='object-cover object-center w-full h-48 shadow-2xl rounded-t-md lg:rounded-md '
                    src='https://st.depositphotos.com/1062085/3028/i/950/depositphotos_30288659-stock-photo-online-education.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='relative text-right uppercase rounded-md bg-project-pattern lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:grid lg:grid-cols-10 lg:items-center'>
              <div className='relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6'>
                <p className='text-white text-md'>CSU LONG BEACH</p>
                <p className='text-white text-md'>2016</p>
                <p className='text-white text-md'>B.A. Theater Arts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

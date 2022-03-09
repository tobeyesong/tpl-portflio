/** @format */
import React from "react";

const skillset = [
  { logoUrl: "https://media.publit.io/file/backendlogo/MongoDB.svg" },
  {
    logoUrl:
      "https://media.publit.io/file/backendlogo/express-facebook-share.png",
  },
  { logoUrl: "https://media.publit.io/file/logo512.png" },
  {
    logoUrl:
      "https://media.publit.io/file/backendlogo/1200px-Node.js_logo.svg.png",
  },
];

const Skills = () => {
  return (
    <div className='relative '>
      <div className='bg-white '>
        <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:py-8 lg:px-8'></div>
        <p className='text-base font-semibold tracking-wider text-center text-gray-600 uppercase lg:text-2xl'>
          My skillset is the MERN stack
        </p>

        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4 '>
            {skillset.map((skillset) => (
              <div
                key={skillset.logoUrl}
                className='flex justify-center col-span-1 py-2 text-xl transition duration-200 ease-in transform border-2 border-t-4 border-blue-600 border-opacity-75 rounded-md shadow hover:border-green-600 hover:-translate-y-2 lg:rounded-md hover:shadow-lg hover:animate-pulse md:col-span-2 lg:col-span-1'>
                <img className='h-12 ' src={skillset.logoUrl} alt='Tuple' />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

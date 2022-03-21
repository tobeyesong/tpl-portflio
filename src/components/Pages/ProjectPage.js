/** @format */

import React, { useEffect } from "react";

import "@lottiefiles/lottie-player";
import { ExternalLinkIcon } from "@heroicons/react/outline";

import Footer from "../Footer";
import AltHeader from "../AltHeader";

const tech = [
  {
    name: "MongoDB",

    imageUrl: "https://media.publit.io/file/backendlogo/MongoDB.svg",
  },
  {
    name: "Express",

    imageUrl: "https://media.publit.io/file/express-logo-1.jpg",
  },
  {
    name: "React",

    imageUrl: "https://media.publit.io/file/logo512.png",
  },
  {
    name: "Node.js",

    imageUrl: "https://media.publit.io/file/nodejslogo.png",
  },
  {
    name: "Tailwind CSS",

    imageUrl:
      "https://media.publit.io/file/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
  },
  {
    name: "Redux",

    imageUrl: "https://media.publit.io/file/frontend/redux.png",
  },
  {
    name: "Clearbit",

    imageUrl: "https://media.publit.io/file/frontend/cleabit-logo.jpg",
  },
  {
    name: "React Final Form",

    imageUrl: "https://media.publit.io/file/frontend/react-final-form-logo.png",
  },

  {
    name: "React Router",

    imageUrl: "https://media.publit.io/file/react-router-logo.svg",
  },
  {
    name: "Algolia",

    imageUrl: "https://media.publit.io/file/algolia-logo.png",
  },
  // More people...
];

const techTwo = [
  {
    name: "React",

    imageUrl: "https://media.publit.io/file/logo512.png",
  },
  {
    name: "Tailwind CSS",

    imageUrl:
      "https://media.publit.io/file/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
  },
  {
    name: "Rapid API",

    imageUrl: "https://media.publit.io/file/rapi-api-logo.webp",
  },
  {
    name: "ReCharts",

    imageUrl: "https://media.publit.io/file/recharts-logo-1.png",
  },
  {
    name: "Axios",

    imageUrl: " https://media.publit.io/file/axios-logo.png",
  },

  // More people...
];

const passManImages = [
  {
    url: "https://media.publit.io/file/passmanDemoImage/localhost_3000_dashboard-iPhone-6_7_8-1.png",
  },
  {
    url: "https://media.publit.io/file/passmanDemoImage/dashboardPassMan.jpg",
  },
];

const mintCloneImages = [
  {
    url: "https://media.publit.io/file/localhost_3000_-iPhone-5_SE-1.png",
  },
  {
    url: "https://media.publit.io/file/MintClone-Landing-PNG.png",
  },
];

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' bg-gray-100/40'>
      <AltHeader />
      <div className='relative' id='passman'>
        <div className='relative px-4 py-4 mx-auto mt-1 lg:mt-3 max-w-7xl sm:py-8 sm:px-6 lg:px-8'>
          <div className='absolute inset-x-0 top-0 rounded-md h-96 bg-emerald-500/90'></div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-64 bg-emerald-500 '></div>

        <div className='relative px-2 py-4 mx-auto max-w-7xl sm:py-8 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold tracking-wide uppercase text-gray-50'>
              Password Manager
            </h2>
            <p className='mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              PassMan
            </p>
            <p className='max-w-xl mx-auto mt-5 text-xl text-gray-50'>
              Here are the technologies used:
            </p>
          </div>

          <div className='p-4 px-4 py-8 mx-auto mb-4 text-center rounded-md shadow-lg backdrop-blur-xl bg-stone-200/40 max-w-7xl sm:px-6 lg:px-8 lg:py-12 md:backdrop-filter lg:backdrop-filter md:backdrop-blur lg:backdrop-blur-md'>
            <div
              role='list'
              className='grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-5 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
              {tech.map((tech) => (
                <div key={tech.name}>
                  <div className='space-y-4'>
                    <img
                      className='flex justify-center object-scale-down w-20 h-20 col-span-1 py-2 mx-auto my-auto ml-auto mr-auto text-xl transition duration-200 ease-in transform rounded-md shadow md:w-full md:h-full hover:border-green-600 hover:-translate-y-2 lg:rounded-md hover:shadow-lg hover:animate-pulse md:col-span-2 lg:col-span-1 sm:w-12 sm:h-12 lg:w-24 lg:h-24'
                      src={tech.imageUrl}
                      alt=''
                    />
                    <div className='space-y-2'>
                      <div className='text-xs font-medium lg:text-sm'>
                        <h3>{tech.name}</h3>
                        <p className='text-indigo-600'>{tech.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-3 shadow sm:mt-0 '>
            <a
              href='https://passmanmern.herokuapp.com/'
              className='flex items-center justify-center py-2 font-medium text-gray-900 uppercase bg-cyan-100 hover:bg-cyan-500 hover:text-white rounded-t-md '>
              Live Site
            </a>

            <a
              href='https://passmandemo.herokuapp.com/dashboard'
              className='flex items-center justify-center py-2 font-medium uppercase bg-cyan-400 hover:bg-cyan-500 text-gray-50 rounded-b-md'>
              Demo
            </a>
          </div>
        </div>

        <div className='relative hidden px-4 py-4 mx-auto rounded-md lg:block md:block sm:block bg-slate-100 max-w-7xl sm:py-8 sm:px-6 lg:px-8 '>
          <ul role='list' className='flex divide-y lg:flex lg:items-center'>
            {passManImages.map((passManImage) => (
              <li key={passManImage.url} className=' snap-x cover'>
                <div className='space-y-4 snap-center '>
                  <img className='' src={passManImage.url} alt='screenshots' />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECOND PORTION
       */}

      <div id='moneyx' className='relative'>
        <div className='absolute inset-x-0 top-0 h-80 bg-emerald-500'></div>

        <div className='relative px-4 py-4 mx-auto max-w-7xl sm:py-8 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='mt-12 text-base font-semibold tracking-wide uppercase text-gray-50'>
              Expense Tracker
            </h2>
            <p className='mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              MoneyX
            </p>
            <p className='max-w-xl mx-auto mt-5 text-xl text-gray-50'>
              Here are the technologies used:
            </p>
          </div>

          <div className='p-4 px-4 py-8 mx-auto mb-4 text-center rounded-md shadow-lg backdrop-blur-xl bg-stone-200/40 max-w-7xl sm:px-6 lg:px-8 lg:py-12 md:backdrop-filter lg:backdrop-filter md:backdrop-blur lg:backdrop-blur-md'>
            <div
              role='list'
              className='grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-5 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5'>
              {techTwo.map((tech) => (
                <div key={tech.imageUrl}>
                  <div className='space-y-4'>
                    <img
                      className='flex justify-center object-scale-down w-20 h-20 col-span-1 py-2 mx-auto my-auto ml-auto mr-auto text-xl transition duration-200 ease-in transform rounded-md shadow md:w-full md:h-full hover:border-green-600 hover:-translate-y-2 lg:rounded-md hover:shadow-lg hover:animate-pulse md:col-span-2 lg:col-span-1 sm:w-12 sm:h-12 lg:w-24 lg:h-24'
                      src={tech.imageUrl}
                      alt=''
                    />
                    <div className='space-y-2'>
                      <div className='text-xs font-medium lg:text-sm'>
                        <h3>{tech.name}</h3>
                        <p className='text-indigo-600'>{tech.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-3 shadow sm:mt-0 '>
            <a
              href='https://sharp-clarke-ef7e56.netlify.app/'
              className='flex items-center justify-center py-2 font-medium uppercase rounded-md bg-amber-400 hover:bg-amber-500 text-gray-50'>
              Demo
            </a>
          </div>
        </div>
        {/* BLENDED BACKGROUND */}

        <div className='relative hidden px-4 py-4 mx-auto rounded-md lg:block md:block sm:block max-w-7xl sm:py-8 sm:px-6 lg:px-8'>
          <ul
            role='list'
            className='flex items-center divide-y divide-gray-200 '>
            {mintCloneImages.map((mintCloneImage) => (
              <li key={mintCloneImage.url}>
                <div className='space-y-4 snap-center '>
                  <img
                    className=''
                    src={mintCloneImage.url}
                    alt='screenshots'
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;

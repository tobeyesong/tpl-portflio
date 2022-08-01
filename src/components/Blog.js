/** @format */
/* This example requires Tailwind CSS v2.0+ */

import React from "react";

const posts = [
  {
    title: "How to submit a form on Netlify with React Final Form",
    href: "https://medium.com/@toanlam01/how-to-submit-a-form-on-netlify-with-react-final-form-880c528bae74",
    category: { name: "Article" },
    description:
      "It can be a little tricky submitting your form on Netlify with React Final Form. Here's how step by step.",
    datetime: "2022-04-07",
    imageUrl:
      "https://st4.depositphotos.com/4230659/22960/v/600/depositphotos_229605270-stock-illustration-isometric-modern-e-mail-email.jpg",
    readingTime: "3 min",
    author: {
      name: "Toan Lam",
      href: "https://medium.com/@toanlam01",
      imageUrl: "https://media.publit.io/file/smirkBeach.jpeg",
    },
  },
  {
    title: "How to connect Algolia API to your MongoDB API with the MERN stack",
    href: "https://medium.com/@toanlam01/how-to-connect-algolia-api-to-your-mongodb-api-with-the-mern-stack-5135113b0f9",
    category: { name: "Article" },
    description:
      "For this to work, I assume you have already set up your MERN or whichever full-stack app is set up already with MongoDB.",
    datetime: "2022-04-23",
    imageUrl: "https://miro.medium.com/max/700/1*zvLcyxB6RW5AW6nymUCgMw.jpeg",
    readingTime: "2 min",
    author: {
      name: "Toan Lam",
      href: "https://medium.com/@toanlam01",
      imageUrl: "https://media.publit.io/file/smirkBeach.jpeg",
    },
  },
  {
    title: "5 reasons why I think TailwindCSS reigns supreme.",
    href: "https://medium.com/@toanlam01/how-to-connect-algolia-api-to-your-mongodb-api-with-the-mern-stack-5135113b0f9",
    category: { name: "Article" },
    description:
      "If you are looking for new CSS framework to try, look no further. I highly recommend TailwindCSS.",
    datetime: "2022-04-23",

    imageUrl:
      "https://st3.depositphotos.com/15881914/34536/v/600/depositphotos_345368624-stock-illustration-coding-and-programming-app-in.jpg",
    readingTime: "2 min",
    author: {
      name: "Toan Lam",
      href: "https://medium.com/@toanlam01",
      imageUrl: "https://media.publit.io/file/smirkBeach.jpeg",
    },
  },
];

const Blog = () => {
  return (
    <div className='relative px-4 pb-20 bg-gradient-to-r from-gray-50 to-slate-200/70 sm:px-6 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center '>
          <h2 className='text-base font-semibold tracking-wider text-center text-gray-600 uppercase lg:text-2xl '>
            Medium Posts
          </h2>
        </div>
        <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
              <p className='flex-shrink-0'>
                <img
                  className='object-cover w-full h-48'
                  src={post.imageUrl}
                  alt=''
                />
              </p>
              <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'>
                    <div href={post.category.href} className='hover:underline'>
                      {post.category.name}
                    </div>
                  </p>
                  <a href={post.href} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className='flex items-center mt-6'>
                  <div className='flex-shrink-0'>
                    <a href={post.author.href}>
                      <span className='sr-only'>{post.author.name}</span>
                      <img
                        className='object-cover w-10 h-10 rounded-full'
                        src={post.author.imageUrl}
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

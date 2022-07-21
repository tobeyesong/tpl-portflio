/** @format */
import { FaGithubSquare } from "react-icons/fa";
const people = [
  {
    name: "Expense Tracker",
    role: "",
    imageUrl:
      "https://media.publit.io/file/tplport/Depositphotos_400802992_L.jpg",
    githubUrl: "https://github.com/tobeyesong/expense-tracker-demo",
    demoUrl: "https://moneyxtracker.netlify.app/",
  },
  {
    name: "Github Finder",
    role: "",
    imageUrl:
      "https://media.publit.io/file/tplport/Depositphotos_356416406_L.jpg",
    githubUrl: "https://github.com/tobeyesong/github-finder",
    demoUrl: "https://github-finder-ten-zeta.vercel.app/",
  },

  {
    name: "Loan Calculator",
    role: "",
    imageUrl: "https://media.publit.io/file/Depositphotos_479532604_L.jpg",
    githubUrl: "https://github.com/tobeyesong/movieVersus",
    demoUrl: "https://loan-calc-liart.vercel.app/",
  },
  // More people...
];

export default function Example() {
  return (
    <div className=''>
      <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
        <h2 className='py-4 text-xl font-normal tracking-tight text-white sm:text-4xl'>
          Mini-Projects
        </h2>
      </div>
      <ul
        role='list'
        className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
        {people.map((person) => (
          <li key={person.name}>
            <div className='space-y-4 rounded-lg'>
              <div className='relative aspect-w-3 aspect-h-2 '>
                <img
                  className='object-cover rounded-lg '
                  src={person.imageUrl}
                  alt=''
                />
                <div class='opacity-0 transform transition-all hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
                  <a href={person.demoUrl}>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 '>
                      View Demo
                    </button>
                  </a>
                </div>
                <div className='absolute inset-0 bg-emerald-200/70 mix-blend-multiply' />
              </div>

              <div className='space-y-2'>
                <div className='space-y-1 text-lg font-medium leading-6'>
                  <h3 className='font-normal text-slate-50'>{person.name}</h3>
                  <p className='text-indigo-600'>{person.role}</p>
                </div>
                <ul role='list' className='flex space-x-5'>
                  <li>
                    <a href={person.githubUrl} className='text-white'>
                      <span className='sr-only'>Github</span>
                      <FaGithubSquare className='w-8 h-8 transition ease-in hover:text-red-600 text-gray-50' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

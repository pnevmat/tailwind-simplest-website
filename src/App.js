import React from 'react';
import starWars from './images/star-wars-header-img.jpg';

const App = () => {
  return (
    <div className="bg-gray-50 p-0 dark:bg-gray-900">
      <main className="lg:relative lg:max-w-7xl lg:mx-auto">
        <div className="h-64 sm:h-72 md:h-96 lg:w-1/2 lg:absolute lg:right-0 lg:h-full">
          <img
            src={starWars}
            alt="Star Wars"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center pt-8 px-4 lg:w-1/2 lg:py-48 lg:text-left lg:max-w-lg">
          <h1 className="text-4xl text-gray-900 font-extrabold tracking-tight sm:text-5-xl md:text-6xl dark:color-gray-100">
            Watch your favorite
            <span className="block text-blue-700">movies and TV shows</span>
          </h1>
          <p className="text-lg text-gray-500 mt-3 max-w-md mx-auto sm:text-xl md:mt-5 md:max-w-3xl dark:gray-400">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="bg-blue-700 px-5 py-3 rounded-lg shadow-lg font-semibold text-sm text-white inline-block w-full text-center hover:text-white hover:bg-blue-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-800 focus:ring-opacity-50 active:bg-blue-900 dark:focus:ring-blue-400 dark:ring-offset-gray-900 sm:w-auto md:px-10 md:py-4 md:text-lg"
            >
              Get Started!
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

// const buuttonStyles = [
//   'bg-blue-700 px-5 py-3 rounded-lg shadow-lg font-semibold text-sm text-white inline-block w-full text-center hover:text-white hover:bg-blue-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-800 focus:ring-opacity-50 active:bg-blue-900 dark:focus:ring-blue-400 dark:ring-offset-gray-900 sm:w-auto md:px-10 md:py-4 md:text-lg',
// ];

// {buuttonStyles.join(' ')}

// const buuttonStyles = [
//   'bg-blue-700',
//   'px-5 py-3',
//   'rounded-lg',
//   'shadow-lg',
//   'font-semibold',
//   'text-sm text-white',
//   'inline-block w-full',
//   'text-center',
//   'hover:text-white',
//   'hover:bg-blue-800',
//   'focus:outline-none',
//   'focus:ring',
//   'focus:ring-offset-2',
//   'focus:ring-blue-800',
//   'focus:ring-opacity-50',
//   'active:bg-blue-900',
//   'dark:focus:ring-blue-400',
//   'dark:ring-offset-gray-900',
//   'sm:w-auto',
//   'md:px-10',
//   'md:py-4',
//   'md:text-lg',
// ];

export default App;

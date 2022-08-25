import React from 'react';
import starWars from './images/star-wars-header-img.jpg';

const App = () => {
  return (
    <div className="bg-gray-50 p-0">
      <div className="h-64">
        <img
          src={starWars}
          alt="Star Wars"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center pt-8 px-4">
        <h1 className="text-4xl text-gray-900 font-extrabold tracking-tight">
          Watch your favorite
          <span className="block text-blue-700">movies and TV shows</span>
        </h1>
      </div>
      <p className="text-lg text-gray-500 mt-3 max-w-md mx-auto">
        Stream unlimited movies and TV shows on your phone, tablet, laptop and
        TV.
      </p>
      <div className="mt-10">
        <a
          href="#"
          className="bg-blue-700 px-5 py-3 rounded-lg shadow-lg font-semibold text-sm text-white inline-block w-full text-center"
        >
          Get Started!
        </a>
      </div>
    </div>
  );
};

export default App;

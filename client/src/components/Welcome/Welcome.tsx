import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
      <div className="text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Application</h1>
        <p className="text-xl mb-8">Click anywhere to get started</p>
        <button
          onClick={handleClick}
          className="bg-white text-indigo-500 font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </button>
      </div>
  );
};

export default Welcome;



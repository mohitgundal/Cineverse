import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-semibold my-4">Page Not Found</p>
      <p className="text-neutral-400 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
      >
        Go to Home
      </Link>
    </main>
  );
};

export default NotFound;

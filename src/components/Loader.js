import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="loader mb-2"></div>
      <p className="text-sm">Loading...</p>

      {/* Simple CSS animation */}
      <style jsx="true">{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top: 4px solid white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;

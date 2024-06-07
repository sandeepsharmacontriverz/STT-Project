import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="w-80 p-6 bg-gray-200 shadow-lg rounded-lg text-center animate-pulse">
      <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300" />
      <div className="h-6 mb-2 bg-gray-300" />
      <div className="h-4 mb-2 bg-gray-300" />
      <div className="flex justify-center mb-6">
        <div className="mr-6">
          <div className="h-4 w-16 bg-gray-300" />
          <div className="h-4 w-20 bg-gray-300" />
        </div>
        <div>
          <div className="h-4 w-16 bg-gray-300" />
          <div className="h-4 w-20 bg-gray-300" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-20 h-8 bg-gray-300" />
        <div className="w-20 h-8 bg-gray-300" />
      </div>
    </div>
  );
};

export default Skeleton;
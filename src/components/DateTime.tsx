import React, { useState, useEffect } from 'react';
import { getCurrentTime } from './GetCurrentTime';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState('');


  useEffect(() => {
    setCurrentTime(getCurrentTime());
    console.log(getCurrentTime())
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-4 flex items-center justify-center">
      <span className="text-lg font-semibold text-gray-700 mr-2">Current Time:</span>
      <span className="bg-gray-100 text-gray-900 py-2 px-4 rounded-lg shadow-md">{currentTime}</span>
    </div>
  );
};

export default DateTime;
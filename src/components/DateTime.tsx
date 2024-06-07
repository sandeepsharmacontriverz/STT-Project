import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
    const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    return `${formattedDate} : ${formattedTime}`;
  }

  return (
    <div className="mt-4 flex items-center justify-center">
      <span className="text-lg font-semibold text-gray-700 mr-2">Current Time:</span>
      <span className="bg-gray-100 text-gray-900 py-2 px-4 rounded-lg shadow-md" dangerouslySetInnerHTML={{ __html: currentTime }} />
    </div>
  );
};

export default DateTime;

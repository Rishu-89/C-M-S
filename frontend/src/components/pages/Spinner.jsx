import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const Spinner = () => {
  let navigate = useNavigate();
  let [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      toast.error('You have to login first');
      navigate('/login');
    }

    return () => clearInterval(interval);
  }, [timer, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Spinner</h1>
      <ClimbingBoxLoader size={30} color="#3498db" />
      <h1 className="text-lg font-medium mt-6">
        Redirecting you to the login page in {timer}...
      </h1>
    </div>
  );
};

export default Spinner;

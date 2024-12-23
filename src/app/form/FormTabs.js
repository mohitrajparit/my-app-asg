import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default function FormTabs() {
  const [step, setStep] = useState(0);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/form');
      const data = await response.json();
      console.log('Fetched Data:', data);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="p-4"
      >
        {steps[step]}
      </motion.div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
          disabled={step === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={step === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

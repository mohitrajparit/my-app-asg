// 'use client';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Step4() {
  const formData = useSelector((state) => state.form.formData);
  // const notify = () => toast("Wow so easy!");
  const handleSubmit = () => {

    toast.success('Form submitted successfully!');
    console.log('Submitted Data:', formData);
  };

  return (
    <div className='w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8'>
      <h2>Step 4: Review & Submit</h2>
      <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800">
        <h3 className="font-bold">Review Your Details</h3>
        <p><strong>Name:</strong> {formData.name || 'Not Provided'}</p>
        <p><strong>Address:</strong> {formData.address || 'Not Provided'}</p>
        <p><strong>City:</strong> {formData.city || 'Not Provided'}</p>
        <p><strong>ZIP Code:</strong> {formData.zipCode || 'Not Provided'}</p>
        <p>
          <strong>Newsletter Subscription:</strong>{' '}
          {formData.subscribeNewsletter ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Terms Agreed:</strong>{' '}
          {formData.agreeTerms ? 'Yes' : 'No'}
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
}

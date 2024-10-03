import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const api_uri = import.meta.env.VITE_REACT_API_URI

  const validate = () => {
    const newErrors = {};

    // Validate item
    if (!name) newErrors.item = 'Item is required';

    // Validate phone number
    const phoneRegex = /^\+2547\d{8}$/; // Ensures the number starts with +2547 and is followed by exactly 8 digits
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Invalid phone number format. It should start with +2547 and contain 8 digits.';
    }
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`${api_uri}/api/customer`, { name, phone });
        console.log(response.data.message);
        setSuccessMessage('Customer created successfully!');
        setName('');
        setPhone('');

        // Navigate to the order form after a short delay
        setTimeout(() => {
          navigate('/order-form');
        }, 2000); // Redirect after 2 seconds
      } catch (error) {
        console.error('Error creating customer:', error);
        setErrors({ apiError: 'Failed to create customer. Please try again.' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[372px] md:w-[498px] p-2 md:p-6 mt-12">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-600">
          Fill In The Form For your Order
        </h1>
        <div className="bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-7 mb-4 border-[1px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="+2547xxxxxxxx"
                required
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white rounded-lg shadow-lg py-2"
            >
              Submit
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-4 p-2 bg-green-200 text-green-700">
              {successMessage}
            </div>
          )}

          {/* API Error Message */}
          {errors.apiError && (
            <div className="mt-4 p-2 bg-red-200 text-red-700">
              {errors.apiError}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;

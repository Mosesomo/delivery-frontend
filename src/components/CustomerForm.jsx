import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  /*const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/customer', { name, phone });
      console.log(response.data.message);
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };*/

  return (
    <div className="flex items-center justify-center">
        <div className="w-[372px] md:w-[498px] p-2 md:p-6 mt-12">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-600">Fill In The Form For your Order</h1>
            <div className='bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-7 mb-4 border-[1px]'>
                <form onSubmit="">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            value=""
                            onChange=""
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Phone</label>
                        <input
                            type="text"
                            value=""
                            onChange=""
                            className="w-full border border-gray-300 rounded-lg p-2"
                            placeholder="+2547xxxxxxxx"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-700 text-white rounded-lg shadow-lg py-2">
                    Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default CustomerForm;
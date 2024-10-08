import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const api_uri = import.meta.env.VITE_REACT_API_URI

const OrderSummary = () => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { phone } = useParams(); // Fetching the phone number from the URL params

  useEffect(() => {
    const fetchOrderStatement = async () => {
      try {
        const response = await axios.get(`${api_uri}/api/order/${phone}`);
        setOrderData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch order details. Please try again later.');
        setLoading(false);
      }
    };

    if (phone) {
      fetchOrderStatement();
    }
  }, [phone]);

  // Render loading, error, or order summary
  if (loading) {
    return <div className="text-center mt-12 font-bold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col w-full bg-white p-6">
      <h1 className="text-xl font-bold text-center mb-6">Order Summary</h1>

      {orderData ? (
        <div>
          {/* Customer Details */}
          <div className="mb-6">
            <p><strong className='text-gray-600'>Name:</strong> {orderData.customer_name}</p>
            <p><strong className='text-gray-600'>Phone:</strong> {orderData.phone}</p>
          </div>

          {/* Order Table */}
          <h2 className="text-lg font-semibold mb-4">Recent Orders:</h2>
          <div className="bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-7 mb-4 border-[1px]">
            {orderData.orders.length > 0 ? (
              <table className="min-w-full bg-white p-2">
                <thead>
                  <tr>
                    <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Order ID</th>
                    <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Item</th>
                    <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Amount</th>
                    <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Order Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.orders.map((order) => (
                    <tr key={order.order_id} className="border-b">
                      <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{order.order_id}</td>
                      <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{order.item}</td>
                      <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">Ksh.{order.amount}</td>
                      <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{new Date(order.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No recent orders found for this customer.</p>
            )}
          </div>
        </div>
      ) : (
        <p>No customer data available.</p>
      )}
    </div>
  );
};

export default OrderSummary;

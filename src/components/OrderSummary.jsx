import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderSummary = () => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { phone } = useParams(); // Fetching the phone number from the URL params

  useEffect(() => {
    const fetchOrderStatement = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/order/${phone}`); // Correct interpolation
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
    return <div className="text-center">Loading...</div>;
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
          {orderData.orders.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Order ID</th>
                  <th className="px-4 py-2 border">Item</th>
                  <th className="px-4 py-2 border">Amount</th>
                  <th className="px-4 py-2 border">Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orderData.orders.map((order) => (
                  <tr key={order.order_id}>
                    <td className="px-4 py-2 border text-center">{order.order_id}</td>
                    <td className="px-4 py-2 border">{order.item}</td>
                    <td className="px-4 py-2 border text-center">Ksh.{order.amount}</td>
                    <td className="px-4 py-2 border text-center">{new Date(order.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No recent orders found for this customer.</p>
          )}
        </div>
      ) : (
        <p>No customer data available.</p>
      )}
    </div>
  );
};

export default OrderSummary;

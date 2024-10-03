import { useEffect, useState } from 'react';
import axios from 'axios';

const api_uri = import.meta.env.VITE_REACT_API_URI

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers data from backend
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${api_uri}/api/customers`);
        console.log(response.data);
        setCustomers(response.data); 
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Customers</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Customer ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td className="py-2 px-4 border-b">{customer.id}</td>
                <td className="py-2 px-4 border-b">{customer.name}</td>
                <td className="py-2 px-4 border-b">{customer.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-2 px-4 border-b" colSpan="3">No customers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCustomers;

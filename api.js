export const createCustomer = async (data) => {
    const response = await fetch('/api/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  export const createOrder = async (data) => {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  export const getCustomers = async () => {
    const response = await fetch('/api/customers');
    return response.json();
  };
  
  export const getOrders = async () => {
    const response = await fetch('/api/orders');
    return response.json();
  };
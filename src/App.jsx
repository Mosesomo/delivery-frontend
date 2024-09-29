// Main app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
/*import OrderForm from './components/OrderForm';
import ManageCustomers from './pages/ManageCustomers';
import ManageOrders from './pages/ManageOrders';
import GoogleLoginButton from './components/GoogleLoginButton';*/

function App() {
  return (
    /*<Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CustomerForm />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/dashboard" element={<GoogleLoginButton />} />
          <Route path="/manage-customers" element={<ManageCustomers />} />
          <Route path="/manage-orders" element={<ManageOrders />} />
        </Routes>
      </div>
    </Router>*/
    <div className='w-full h-screen'>
      <CustomerForm />
    </div>
  );
}

export default App;

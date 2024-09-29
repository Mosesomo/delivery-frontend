// Main app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';
import Nav from './components/Nav';
import OrderSummary from './components/OrderSummary'
/*import ManageCustomers from './pages/ManageCustomers';
import ManageOrders from './pages/ManageOrders';
import GoogleLoginButton from './components/GoogleLoginButton';*/

function App() {
  return (
    <Router>
      <div className='w-full h-screen'>
        <Nav />
        <Routes>
          <Route path="/" element={<CustomerForm />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/order-summary/:phone" element={<OrderSummary />} />
          {/*<Route path="/dashboard" element={<GoogleLoginButton />} />
          <Route path="/manage-customers" element={<ManageCustomers />} />
          <Route path="/manage-orders" element={<ManageOrders />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Nav bar section
import React from 'react';
import { FaShoppingCart, FaShopware } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='flex justify-between items-center w-full bg-white shadow-lg border-[1px] p-4'>
      <div className='flex items-center gap-2 text-gray-800'>
        <FaShopware size={28}/>
        <h2 className='text-2xl font-bold'>OrderDelivery</h2>
      </div>
      <div className='flex items-center gap 2 text-gray-600'>
        <h4 className='text-xl font-semibold cursor-pointer'>Order</h4>
        <FaShoppingCart size={28} />
    </div>
    </div>
  );
}

export default Nav;
import React, { useContext, useRef, useEffect } from 'react';
//import link

import {Link} from 'react-router-dom';

// import icons
import { IoMdArrowForward} from 'react-icons/io';
import { FiTrash2} from 'react-icons/fi';

// import components
import CartItem from './CartItem';

//import sidebare context
import {SidebarContext} from '../contexts/SidebarContext';

//import cart context
import {CartContext} from '../contexts/CartContext';



const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext); 
  const {cart, clearCart, total, itemAmount} = useContext(CartContext);

    //ref for sidebar element
    const sidebarRef = useRef();

    // effect hook for attaching event listener
    useEffect(() => {
      // function to close sidebar when clicked outside
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen){
          handleClose();
        }
      };
  
      // attach the event listener
      document.addEventListener("mousedown", handleClickOutside);
  
      // clean up
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, handleClose]);

  return (
  <div ref={sidebarRef} className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-[white] fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
  transition-all duration-300 z-20 px-4 lg:px-[35px]  max-h-screen flex flex-col justify-between overflow-hidden`}>
    <div className='flex items-center justify-between py-6 border-b border-[black]'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
      {/* icon */}
      <div onClick={handleClose} 
      className='cursor-pointer w-8 h-8 flex justify-center items-center hover:scale-110 transition-transform duration-200'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div className=' flex flex-col  gap-y-2 h-[400px] lg:h-[450px] overflow-y-auto overflow-x-hidden hide-scrollbar '>
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
      <div className='flex w-full justify-between items-center'>
        {/* total */}
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {total}
        </div>
        {/* Clear cart */}
        <div onClick={clearCart} className='cursor-pointer py-4 rounded-lg bg-black text-white w-12 h-12 flex justify-center items-center text-xl
        hover:scale-90 transition-transform duration-200'>
          <FiTrash2/>
        </div>
      </div>
      <div className='flex justify-start items-center gap-4'> {/* Add gap for spacing */}
        <Link to="/" className='flex p-1 items-center justify-center text-primary font-medium'> 
          <span className='hover:scale-90 transition-transform duration-200 p-2 border border-black'>View Cart</span>
        </Link>
        <Link to="/" className='flex p-1 items-center justify-center text-primary font-medium'> 
          <span className='hover:scale-90 transition-transform duration-200 p-2 border border-black'>Checkout</span>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;

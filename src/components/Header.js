import React, {useContext, useEffect, useState} from 'react';

// sidebar context
import {SidebarContext} from '../contexts/SidebarContext';

// cart context
import {CartContext} from '../contexts/CartContext';

// import icons
import {BsBag} from 'react-icons/bs';

// import logo
import logo from '../img/logo.svg';

// import link
import {Link} from 'react-router-dom';



const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  //event listener
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
  <header className={`${isActive ? 'bg-[#c6b7bd] py-6 shadow-md' : 'bg-[] py-8'} fixed w-full z-10 transition-all duration-1000 h-[60px]`}>
    <div className='container mx-auto flex items-center justify-between h-full '>
      {/* logo */}
      <Link to={'/'}>
        <div>
          <img className='w-[40px] hover:scale-110 transition-transform duration-200' src={logo} alt=''/>
        </div>
      </Link>
      {/* cart  */}

      <div onClick={() => setIsOpen(!isOpen)}
      className='cursor-pointer flex relative hover:scale-110 transition-transform duration-200'>
        <BsBag className='text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>

      </div>
    </div>
  </header>
)
};

export default Header;

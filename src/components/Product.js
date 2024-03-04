import React, {useContext} from 'react';

// import link
import {Link} from 'react-router-dom';

// import icons
import {BsPlus, BsEyeFill} from 'react-icons/bs';

// import cart context
import {CartContext} from '../contexts/CartContext';

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);

  // destructure product
  const {id, image, category, title, price} = product;

  console.log("Category:", category);
  console.log("ID:", id);
  console.log("Title:", title);
  console.log("Price:", price);
  return (
    <div>
    <div className='bg-[white] '>
      <div className='border border-[black] h-[300px] mb-4 relative overflow-hidden group transition hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-1000' src={image} alt=' ' />
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-0.5  p-2 flex flex-col items-center justify-center
        gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-1000'> 
          <button onClick={() => addToCart(product ,id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-[black] hover:scale-90 transition-transform duration-200'>
              <BsPlus className=' text-3xl text-[white]'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-[#c6b7bd] flex justify-center items-center text-[black] drop-shadow-xl hover:scale-90 transition-transform duration-200'>
          <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category  & title*/}

    </div>
    <div className=''>
        <div className='text-sm capitalize text-gray-500 mb-1 '>{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;

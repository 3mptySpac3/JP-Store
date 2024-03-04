import React, {useContext} from 'react';

// import useParms
import {useParams} from 'react-router-dom';

// import cart context 
import {CartContext} from '../contexts/CartContext';

// import product context
import {ProductContext} from '../contexts/ProductContext';


const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get product details
  const product = products.find(item => {
    return item.id === parseInt(id);
  
  })

  if (!product){
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }

// destruction product
const {title, price, description, image} = product;

  return (
  <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      {/* imaage text-wrapper */}
      <div className='flex flex-col lg:flex-row items-center gap-6'>
        {/* image */}
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 border border-[black] bg-white'>
          <img className='max-w-[250px] lg:max-w-sm p-4' src={image} alt='' />
        </div>

        {/* text */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
          <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
          <p className='mb-8'>{description}</p>
          <button onClick={()=> addToCart(product, product.id)}
          className='underline py-2 px-8 text-[black] rounded-lg hover:scale-90 transition-transform duration-200'>
            Add to cart
          </button>
        </div>
      </div>

    </div>
  </section>
)
};

export default ProductDetails;

import React from 'react';

// import images
import David from '../img/David.png';
import Woman from '../img/woman_hero.png';
import Walk from '../img/walk.png';
import Woman2 from '../img/Woman2.png';
import Woman3 from '../img/Woman3.png';


// import link
import {Link} from 'react-router-dom';

const Hero = () => {
  return <section className='bg-[#7b8197] h-[757px] sm:bg-home-without-lines lg:bg-home bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
         <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-[#c6b7bd] mr-3 lg:hidden'>
            </div><div className='lg:hidden'>New Trend</div>
        </div>
        <h1 className='text-[70px] lg:hidden leading-[1.1] font-light mb-4'>
        AUTUMN SALE STYLISH <br/>
        <span className='font-semibold'>WOMENS</span>
        </h1>
        <Link className='lg:hidden self-start uppercase font-semibold border-b-2 border-[#c6b7bd]' to={'/'}>
          Discover More
        </Link>
      </div>
      {/* image */}
      <div className='hidden lg:block'>
        <img src={Woman3} alt='Woman' />
      </div>

    </div>
    </section>;
};

export default Hero;

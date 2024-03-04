import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='bg-[#c6b7bd] h-[60px] flex justify-center items-center flex-col'>
    <div className='flex justify-center items-center space-x-4 gap-4'>
      <Link to={'https://www.linkedin.com/in/jean-pierre-n/'} target='_blank' className='hover:text-accent transition-all duration-600 animate-pulse flex justify-center items-center'>
        <FaLinkedin className='text-2xl hover:text-[white]'/>
      </Link>
      <motion.div className='flex justify-center items-center'>
        <Link to={'https://github.com/3mptySpac3'} target='_blank' className='hover:text-accent transition-all duration-400 animate-bounce flex justify-center items-center'>
          <FaGithub className='text-2xl hover:text-[white]'/>
        </Link>
      </motion.div>
    </div>
  </footer>
  );
};

export default Footer;

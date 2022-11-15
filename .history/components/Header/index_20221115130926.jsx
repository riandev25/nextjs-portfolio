import { useState } from 'react';
import Logo from '../Logo';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ drawer, onDrawer }) => {
  // const [drawer, setDrawer] = useState(false);

  // const onDrawer = () => {
  //   setDrawer(!drawer);
  //   console.log('ABC');
  // };

  return (
    <nav className='px-8 py-1 bg-gray-700 dark:bg-gray-900 fixed w-full z-50 top-0 left-0 border-b shadow-sm border-gray-700 md:px-12 md:py-3 dark:border-gray-600'>
      <div className='flex flex-row justify-between items-center w-full'>
        <section className=''>
          <Logo />
        </section>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='hidden lg:flex bg-transparent text-[#b2fcfb] border border-[#b2fcfb] hover:bg-[#b2fcfb] hover:opacity-40 transition-all font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Resume
          </button>
          <button
            type='button'
            className='cursor-pointer inline-flex items-center p-2 text-sm text-neon rounded-lg md:hidden hover:text-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            onClick={onDrawer}
          >
            <span className='sr-only'>Open main menu</span>
            <FontAwesomeIcon icon={faBars} className='w-6' />
          </button>
        </div>
        <Navbar onDrawer={onDrawer} drawer={drawer} />
        {/* <div className='z-[48] absolute h-screen w-full'></div> */}
      </div>
    </nav>
  );
};

export default Header;

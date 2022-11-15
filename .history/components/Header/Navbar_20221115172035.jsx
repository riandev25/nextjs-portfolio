import { useContext, useEffect, useState } from 'react';
import { DrawerContext } from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useWindowSize } from '../../lib/hooks/useWindowSize';

const Navbar = () => {
  // const hide = useWindowSize(767);
  const { drawer, setDrawer } = useContext(DrawerContext);

  const onDrawerHandler = () => {
    setDrawer(!drawer);
  };

  // useEffect(() => {
  //   if (!hide && drawer) setDrawer(false);
  // }, [hide, drawer, setDrawer]);

  const data = [
    {
      id: 'Home',
    },
    {
      id: 'About',
    },
    {
      id: 'Technologies',
    },
    {
      id: 'Projects',
    },
  ];
  return (
    <div
      className={`z-[60] absolute top-0 right-0 justify-between items-center transition w-[70%] h-screen md:h-full flex bg-gray-800 shadow-md transform ease-in-out 
      ${
        drawer
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-300 translate-x-full'
      } md:relative md:w-auto md:order-1 md:bg-transparent md:shadow-none`}
      id='navbar-sticky'
    >
      <div className='h-screen relative flex justify-center items-center flex-auto md:h-auto'>
        <button
          type='button'
          className='absolute top-0 right-0 cursor-pointer inline-flex items-center p-4 text-sm text-neon rounded-lg md:hidden hover:text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          onClick={onDrawerHandler}
        >
          <span className='sr-only'>Close main menu</span>
          <FontAwesomeIcon icon={faXmark} className='w-6' />
        </button>
        <ul className='flex flex-col justify-center items-center flex-auto rounded-lg gap-5 md:justify-between md:flex-row md:space-x-12 md:p-2 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
          {data.map((item) => {
            return (
              <li key={item.id} className='relative group'>
                <a
                  href={`#${item.id}`}
                  className='block py-2 px-1 text-lg md:text-base font-extralight text-white dark:text-white'
                  aria-current={item.id}
                >
                  {item.id}
                </a>

                <span className='z-50 absolute bottom-1.5 w-0 h-[1px] bg-white transition-all md:group-hover:w-full'></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

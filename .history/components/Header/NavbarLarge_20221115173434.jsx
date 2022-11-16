import { useContext, useEffect, useState } from 'react';
import { DrawerContext } from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useWindowSize } from '../../lib/hooks/useWindowSize';

const NavbarLarge = () => {
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
      className={`z-[60] hidden justify-between items-center transition md:h-full md:flex bg-gray-800 transform ease-in-out 
 relative w-auto order-1 bg-transparent`}
      id='navbar-sticky'
      // ${
      //   drawer
      //     ? 'transition-opacity opacity-100 duration-500 translate-x-0'
      //     : 'transition-all delay-300 translate-x-full'
      // }
    >
      <div className='relative flex flex-auto justify-center items-center h-auto'>
        {/* <button
          type='button'
          className='absolute top-0 right-0 cursor-pointer inline-flex items-center p-4 text-sm text-neon rounded-lg md:hidden hover:text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          onClick={onDrawerHandler}
        >
          <span className='sr-only'>Close main menu</span>
          <FontAwesomeIcon icon={faXmark} className='w-6' />
        </button> */}
        <ul className='flex flex-auto items-center justify-between flex-row gap-x-12 p-2 mt-0 text-sm font-medium border-0'>
          {data.map((item) => {
            return (
              <li key={item.id} className='relative group'>
                <a
                  href={`#${item.id}`}
                  className='block py-2 px-1 md:text-base font-extralight text-white '
                  aria-current={item.id}
                >
                  {item.id}
                </a>

                <span className='z-50 absolute bottom-1.5 w-0 h-[1px] bg-white transition-all group-hover:w-full'></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarLarge;
import { useContext, useEffect, useState } from 'react';
import { DrawerContext } from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';
// import { useWindowSize } from '../../lib/hooks/useWindowSize';

const NavbarLarge = () => {
  const { animate, animationHandler } = useScrollAnimate();
  const { drawer, setDrawer } = useContext(DrawerContext);

  const onDrawerHandler = () => {
    setDrawer(!drawer);
  };

  const data = [
    {
      id: 'Home',
      delay: 200,
    },
    {
      id: 'About',
      delay: 400,
    },
    {
      id: 'Technologies',
      delay: 600,
    },
    {
      id: 'Projects',
      delay: 800,
    },
  ];
  return (
    <div
      className={`z-[60] hidden justify-between items-center transition md:h-full md:flex bg-gray-800 transform ease-in-out 
 relative w-auto order-1 bg-transparent`}
      id='navbar-sticky'
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
                <Parallax onEnter={animationHandler}>
                  <a
                    href={`#${item.id}`}
                    className={`${
                      animate
                        ? `animate-scroll_left delay-${item.delay} visible `
                        : 'invisible'
                    } block py-2 px-1 md:text-base font-extralight text-white `}
                    aria-current={item.id}
                  >
                    {item.id}
                  </a>
                </Parallax>

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

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

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
      className='z-[60] bg-red-400 absolute top-0 right-0 justify-between items-center w-[70%] h-screen flex md:relative md:w-auto md:order-1'
      id='navbar-sticky'
    >
      <div className='relative flex justify-center items-center flex-auto h-screen bg-black'>
        <button
          data-collapse-toggle='navbar-sticky'
          type='button'
          className='cursor-pointer inline-flex items-center p-2 text-sm text-neon rounded-lg md:hidden hover:text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-sticky'
          aria-expanded='false'
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

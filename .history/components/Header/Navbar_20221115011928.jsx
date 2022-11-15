import { useState } from 'react';

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
      <div>
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

const Navbar = () => {
  return (
    <div
      className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
      id='navbar-sticky'
    >
      <ul className='flex flex-col p-4 mt-4 rounded-lg border max-w-xs md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
        <li>
          <a
            href='#'
            className='block py-2 pr-4 pl-3 text-lg text-white md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
            aria-current='page'
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Services
          </a>
        </li>
        <li>
          <a
            href='#'
            className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

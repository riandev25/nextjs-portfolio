const Navbar = () => {
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
      className='bg-red-100 h-full absolute top-0 right-0 justify-between items-center w-full md:flex md:relative md:w-auto md:order-1'
      id='navbar-sticky'
    >
      <ul className='flex flex-col justify-between items-center flex-auto p-1 rounded-lg md:flex-row md:space-x-8 md:p-3 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
        {data.map((item) => {
          return (
            <li key={item}>
              <a
                href={item.id}
                className='block py-2 pr-4 pl-3 text-lg text-white md:bg-transparent md:p-0 dark:text-white'
                // aria-current='page'
              >
                {item.id}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

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
      className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
      id='navbar-sticky'
    >
      <ul className='flex flex-col justify-between items-center p-4 mt-4 rounded-lg border max-w-xl bg-yellow-100 md:flex-row md:space-x-13 md:mt-0 md:text-sm md:font-medium md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
        {data.map((item) => {
          return (
            <li key={item}>
              <a
                href={item.id}
                className='block py-2 pr-4 pl-3 text-lg text-white md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
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

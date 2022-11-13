const PageHeader = ({ title }) => {
  return (
    <div className='relative overflow-visible flex justify-center items-center'>
      <h1 className='z-10 relative w-full flex flex-start bg-gray-700 px-4 text-2xl font-bold animate-neon_text sm:text-4xl'>
        {title}
      </h1>
      <span className='absolute top-1/2 w-72 h-0.5 bg-white animated-neon_bg'></span>
    </div>
  );
};

export default PageHeader;

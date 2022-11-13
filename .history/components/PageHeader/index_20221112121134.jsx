const PageHeader = ({ title }) => {
  return (
    <div className='relative overflow-visible flex justify-center items-center'>
      <h1 className='relative z-10 w-full text-3xl flex flex-start bg-gray-700 px-4 animate-neon_text'>
        {title}
      </h1>
      <span className='absolute top-1/2 w-72 h-0.5 animated-neon_bg'></span>
    </div>
  );
};

export default PageHeader;

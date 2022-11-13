const PageHeader = (props) => {
  return (
    <div className='relative overflow-visible flex justify-center items-center'>
      <h1 className='relative z-10 w-full text-2xl flex flex-start bg-gray-700 px-4'>
        {props.title}
      </h1>
      <span className='absolute top-1/2 w-72 h-0.5 bg-white'></span>
    </div>
  );
};

export default PageHeader;

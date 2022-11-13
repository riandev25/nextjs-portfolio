import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechStack from './TechStack';

const techArray = () => {
  const FRONTEND = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'ReactJS',
    'TailwindCSS',
    'NextJS',
  ];
  const BACKEND = ['NodeJS', 'MongoDB'];
  const TOOLS = ['Git', 'Github', 'VSCode'];
  const SOON = ['ExpressJS', 'TypeScript'];
  return { FRONTEND, BACKEND, TOOLS, SOON };
};

const Technologies = () => {
  const { FRONTEND, BACKEND, TOOLS, SOON } = techArray();
  return (
    <div className='pt-4 flex flex-col w-full h-screen gap-11 justify-center items-center text-white px-20 bg-bg_about_image bg-fixed'>
      <div className='relative overflow-visible flex justify-center items-center'>
        <h1 className='relative z-10 w-full text-2xl flex flex-start bg-gray-700 px-4'>
          Technologies
        </h1>
        <span className='absolute top-1/2 w-72 h-0.5 bg-white'></span>
      </div>
      <div className='max-w-4xl flex flex-row'>
        <section className='max-w-sm flex flex-col w-96'>
          <h2 className='z-50 px-3 text-lg'>Front-end</h2>
          <span className='w-full h-0.5 bg-white'></span>
        </section>
        <section className='z-40 group relative flex flex-col bg-white shadow-lg border-2 border-[#b2fcfb] w-full p-7 gap-8 rounded-lg image-filter'>
          <div className='absolute z-30 w-full h-full bg-gray-700'></div>
          <div className='z-10 absolute w-full h-full bg-transparent border-2 border-[#b2fcfb] transition-duration-300 delay-300 ease-in-out translate-x-3 translate-y-3 z-10 rounded-md group-hover:translate-x-2 group-hover:translate-y-2'></div>
          <ul className='grid grid-cols-3 gap-3'>
            {FRONTEND.map((item) => {
              return (
                <li
                  key={item}
                  className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
                >
                  <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className='w-3 text-gray-700'
                    />
                  </div>

                  <div className='py-3 pl-1'>
                    <span className='col-span-2 text-base text-white my-2 '>
                      {item}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className='grid grid-cols-3 gap-3'>
            {BACKEND.map((item) => {
              return (
                <li key={item} className='grid grid-cols-3 border rounded-lg'>
                  <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faCaretRight} className='w-3' />
                  </div>

                  <div className='border-l border-[#b2fcfb] py-3 pl-1'>
                    <span className='col-span-2 text-base my-2'>{item}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className='grid grid-cols-3 gap-3'>
            {TOOLS.map((item) => {
              return (
                <li key={item} className='grid grid-cols-3 border rounded-lg'>
                  <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faCaretRight} className='w-3' />
                  </div>

                  <div className='border-l border-[#b2fcfb] py-3 pl-1'>
                    <span className='col-span-2 text-base my-2'>{item}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className='grid grid-cols-3 gap-3'>
            {SOON.map((item) => {
              return (
                <li key={item} className='grid grid-cols-3 border rounded-lg'>
                  <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faCaretRight} className='w-3' />
                  </div>

                  <div className='border-l border-[#b2fcfb] py-3 pl-1'>
                    <span className='col-span-2 text-base my-2'>{item}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Technologies;

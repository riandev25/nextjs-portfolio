import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const techStack = () => {
  const FRONTEND = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'ReactJS',
    'TailwindCSS',
    'NextJS',
  ];
  const BACKEND = ['NodeJS', 'MongoDB'];
  const TOOLS = ['Git', 'Github', 'VS Code'];
  const SOON = ['ExpressJS', 'TypeScript'];
  return { FRONTEND, BACKEND, TOOLS, SOON };
};

const DATA = [
  ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'TailwindCSS', 'NextJS'],
  ['NodeJS', 'MongoDB'],
  ['Git', 'Github', 'VS Code'],
  ['ExpressJS', 'TypeScript'],
];

const Technologies = () => {
  const { FRONTEND, BACKEND, TOOLS, SOON } = techStack();
  return (
    <div className='pt-4 flex flex-col w-full h-screen gap-11 justify-center items-center text-white px-20 bg-bg_about_image bg-fixed'>
      <div className='relative overflow-visible flex justify-center items-center'>
        <h1 className='relative z-10 w-full text-2xl flex flex-start bg-gray-700 px-4'>
          Technologies
        </h1>
        <span className='absolute top-1/2 w-72 h-0.5 bg-white'></span>
      </div>
      <div className='max-w-4xl flex flex-row'>
        <section className='relative max-w-sm flex justify-center'>
          <h2 className='relative z-50 px-3 relative'>Front-end</h2>
          <span className='absolute top-1/2 left-0 w-full h-0.5 bg-white text-xl'></span>
        </section>
      </div>
    </div>
  );
};

export default Technologies;

{
  /* <div className='pt-4 flex flex-col w-full h-screen gap-11 justify-center-items-center text-white px-20 bg-bg_about_image bg-fixed'>
      <div>
        <h1 className=''>Technologies</h1>
        <div className='absolute top-1/2 w-72 h-0.5 bg-white'></div>
      </div>
      <div className='max-w-4xl flex flex-row'>
        <section className='relative max-w-sm flex justify-center items-center'>
          <h2 className='z-10 px-3 relative'>Front-end</h2>
          <div className='absolute top-1/2 left-0 w-full h-0.5 bg-white'></div>
        </section>
        <section className='grid-rows-3 border-2 border-[#b2fcfb]'>
          {DATA.map((item, i) => {
            <ul key={i} className='grid grid-cols-3'>
              {item.map((item) => {
                <li key={item} className='border border-[#b2fcfb]'>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className='w-3 border-r border-[#b2fcfb]'
                  />
                  <span className='col-span-2'>{item}</span>
                </li>;
              })}
            </ul>;
          })}
        </section>
      </div>
    </div> */
}

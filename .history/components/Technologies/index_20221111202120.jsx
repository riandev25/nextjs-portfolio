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

const Technologies = () => {
  const { FRONTEND, BACKEND, TOOLS, SOON } = techStack();
  return (
    <div className='pt-4 flex flex-col w-full h-screen gap-11 justify-center-items-center text-white px-20 bg-bg_about_image bg-fixed'>
      <div>
        <h1 className=''>Technologies</h1>
        <div className='absolute top-1/2 w-72 h-0.5 bg-white'></div>
      </div>
      <div className='max-w-4xl flex flex-row'>
        <section className='relativemax-w-sm flex justify-center items-center'>
          <h2 className='z-10 px-3 relative'>Front-end</h2>
          <div className='absolute top-1/2 left-0 w-full h-0.5 bg-white'></div>
        </section>
        <section>
          <div>
            <section className='grid grid-cols-1 p-4 border-2 border-[#b2fcfb]'>
              <ul className='grid grid-cols-3'>
                {FRONTEND((item, i) => {
                  return (
                    <li
                      key={item}
                      className='grid grid-cols-3 border-[#b2fcfb] '
                    >
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className='w-3 border-r border-[#b2fcfb]'
                      />
                      <span className='col-span-2'>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {FRONTEND((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {BACKEND((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {TOOLS((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {SOON((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technologies;

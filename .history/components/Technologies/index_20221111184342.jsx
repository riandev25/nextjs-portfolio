import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TECHNOLOGIES = {
  FRONTEND: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'TailwindCSS', 'NextJS'],
  BACKEND: ['NodeJS', 'MongoDB'],
  TOOLS: ['Git', 'Github', 'VS Code'],
  SOON: ['ExpressJS', 'TypeScript'],
};

const Technologies = () => {
  return (
    <div className='pt-4 flex flex-row'>
      <div>
        <h1 className=''>Technologies</h1>
        <div className='absolute top-1/2 w-72 h-0.5 bg-white'></div>
      </div>
      <div className='max-w-4xl flex flex-row'>
        <section className='max-w-sm'>
          <h2>Front-end</h2>
          <div className='w-full h-0.5 bg-white'></div>
        </section>
        <section>
          <div>
            <section className='grid grid-cols-1 p-4'>
              <ul className='grid grid-cols-3'>
                {TECHNOLOGIES.FRONTEND((item, i) => {
                  return (
                    <li key={item} className='grid grid-cols-3'>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span className='col-span-2'>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {TECHNOLOGIES.FRONTEND((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {TECHNOLOGIES.BACKEND((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {TECHNOLOGIES.TOOLS((item, i) => {
                  return (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className='grid grid-cols-3'>
                {TECHNOLOGIES.SOON((item, i) => {
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

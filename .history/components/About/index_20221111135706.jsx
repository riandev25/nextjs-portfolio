import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ProgrammerImage from '../../assets/images/programmer.jpg';
import { useParallax } from 'react-scroll-parallax';

const technologies = [
  'React.js',
  'Node.js',
  'Next.js',
  'Express.js',
  'Typescript',
  'MongoDB',
];

const About = () => {
  return (
    <div className='pt-4 w-full h-screen flex flex-col gap-11 justify-center items-center text-white px-20 bg-gray-700'>
      <div className='relative overflow-visible flex justify-center items-center'>
        <h1 className='relative z-10 w-full text-2xl flex flex-start bg-gray-700 px-4'>
          About me
        </h1>
        <div className='absolute top-1/2 w-72 h-0.5 bg-white'></div>
      </div>
      <div className='max-w-3xl flex flex-row gap-6'>
        <section className='max-w-md flex flex-col gap-4'>
          <p>
            Hi! I am Rian Miguel Engracia, a Registered Mechanical Engineer in
            the Philippines. My interest in technology start way back in high
            school. I was introduced first to html and find it interesting
            knowing that&apos;s how the web works. Years passed and life led me
            to a different path and became a Mechanical Engineer
          </p>
          <p>
            My curiosity to technology somehow didn&apos;t lost and here I am
            now pursuing a path to become a developer.
          </p>
          <div className='flex flex-col gap-3'>
            <p>
              Here are a few technologies I&apos;ve been learning/mastering
              recently
            </p>
            <ul className='grid grid-cols-5 gap-2'>
              {technologies.map((item, i) => {
                return (
                  <li
                    key={item}
                    className={`col-span-${
                      (i + 1) % 2 === 0 ? '3' : '2'
                    } flex justify-start items-center gap-1 `}
                  >
                    <FontAwesomeIcon icon={faCaretRight} className='w-2 pl-3' />
                    <span className=''>{item}</span>
                  </li>
                );
              })}
              {/* <li className={`col-span-1 flex justify-center items-center`}>
                <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                <span className=''>React.js</span>
              </li>
              <li className={`col-span-1 flex justify-center items-center`}>
                <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                <span className=''>React.js</span>
              </li>
              <li className={`col-span-1 flex justify-center items-center`}>
                <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                <span className=''>React.js</span>
              </li>
              <li className={`col-span-1 flex justify-center items-center`}>
                <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                <span className=''>React.js</span>
              </li>
              <li className={`col-span-1 flex justify-center items-center`}>
                <FontAwesomeIcon icon={faCaretRight} className='w-2' />
                <span className=''>React.js</span>
              </li> */}
            </ul>
          </div>
        </section>
        <section className='relative'>
          <Image
            className='relative z-40 rounded-md'
            src={ProgrammerImage}
            alt='developer'
            width={300}
            height={300}
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute top-0 left-0 w-[300px] h-[300px] bg-transparent border-2 border-[#b2fcfb] translate-x-3 translate-y-3 z-10 rounded-md'></div>
        </section>
      </div>
    </div>
  );
};

export default About;

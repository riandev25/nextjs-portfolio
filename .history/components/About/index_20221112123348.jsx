import Image from 'next/future/image';
import PageHeader from '../PageHeader';
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
    <div className='pt-4 w-full h-screen flex flex-col gap-11 justify-center items-center text-white px-20 bg-bg_chip_image bg-fixed'>
      <PageHeader title='About me' />
      <div className='max-w-3xl flex flex-row gap-6'>
        <section className='max-w-md flex flex-col gap-4'>
          <p>
            Hi! I am Rian Miguel Engracia, a Registered Mechanical Engineer in
            the Philippines. My interest in technology started way back in high
            school. I was introduced first to html and find it interesting
            knowing that&apos;s how the web works.
          </p>
          <p>
            Years have passed and life led me to a different path and became a
            Mechanical Engineer. My curiosity and eagerness to learn about
            technology somehow didn&apos;t perish and here I am now pursuing a
            path to become a{' '}
            <span className='text-[neon-green] no-underline decoration-[neon-green] underline-offset-4 decoration-2 hover:underline'>
              developer
            </span>
            .
          </p>
          <div className='flex flex-col gap-3'>
            <p>
              Here are few technologies I&apos;ve been learning/mastering
              recently:
            </p>
            <ul className='grid grid-cols-3 gap-2'>
              {technologies.map((item, i) => {
                return (
                  <li
                    key={item}
                    className={`${(i + 1) % 2 === 0 ? 'col-span-2' : ''}
                    } flex justify-start items-center gap-2 pl-4`}
                  >
                    <FontAwesomeIcon icon={faCaretRight} className='w-1.5' />
                    <span className=''>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className='relative'>
          <div className='absolute z-20 w-[295px] h-[295px] bg-gray-700'></div>
          <Image
            className='relative z-30 rounded-md image-filter bg-[#b2fcfb] border-2 peer'
            src={ProgrammerImage}
            alt='developer'
            width={300}
            height={300}
            priority='true'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute top-0 left-0 w-[300px] h-[300px] bg-transparent border-2 border-[#b2fcfb] transition-duration-300 delay-300 ease-in-out translate-x-3 translate-y-3 z-10 rounded-md peer-hover:translate-x-2 peer-hover:translate-y-2 '></div>
        </section>
      </div>
    </div>
  );
};

export default About;

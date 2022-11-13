import Image from 'next/future/image';
import ProgrammerImage from '../../assets/images/programmer.jpg';
import { useParallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <div className='pt-4 w-full h-screen flex flex-col gap-11 justify-center items-center text-white px-20 bg-gray-700'>
      <div className='relative overflow-visible flex'>
        <h1 className='relative z-10 w-full text-2xl flex flex-start'>
          About me
        </h1>
        <div className='absolute top-1/2left-0 w-96 h-0.5 bg-white'></div>
      </div>
      <div className='max-w-3xl flex flex-row gap-6'>
        <section className='max-w-md'>
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
          <p>
            Here are a few technologies I&apos;ve been learning/mastering
            recently
          </p>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>TypeScript</li>
          </ul>
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

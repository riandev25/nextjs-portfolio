import Image from 'next/future/image';
import ProgrammerImage from '../../assets/images/programmer.jpg';
import { useParallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center text-white px-20 bg-gray-700'>
      <div className='max-w-2xl flex flex-row'>
        <section className='max-w-lg'>
          <h1 className='text-lg'>About me</h1>
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
        <section>
          <Image
            className=''
            src={ProgrammerImage}
            alt='developer'
            width={300}
            height={300}
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </section>
      </div>
    </div>
  );
};

export default About;

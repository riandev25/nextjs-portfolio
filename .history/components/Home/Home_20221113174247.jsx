import Link from 'next/link';
import Image from 'next/future/image';
import { useParallax } from 'react-scroll-parallax';
import styles from './index.module.css';
import DevImage from '../../assets/images/dev-image.svg';
import GithubImage from '../../assets/images/github-neon-fill.png';
import LinkedinImage from '../../assets/images/linkedin-neon-fill.png';
import FacebookImage from '../../assets/images/facebook-neon-fill.png';
import Keyboard from './Keyboard';
import { useState } from 'react';

export const CONTACTS = [
  {
    id: 'github',
    imgSrc: GithubImage,
    link: 'https://github.com/riandev25',
  },
  {
    id: 'linkedin',
    imgSrc: LinkedinImage,
    link: 'https://www.linkedin.com/in/rian-miguel-engracia/',
  },
  {
    id: 'facebook',
    imgSrc: FacebookImage,
    link: 'https://web.facebook.com/rianmiguel.engracia',
  },
  {
    id: 'email',
    email: 'rianengracia@gmail.com',
  },
];

const nameArray = ['I', '&apos;', 'm', ' ', 'R', 'i', 'a', 'n'];
const jobArray = [
  'f',
  'u',
  'l',
  'l',
  ' ',
  's',
  't',
  'a',
  'c',
  'k',
  ' ',
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
];

const Home = () => {
  const { ref } = useParallax({
    translateY: [-100, 30, 'easeInOut'],
  });
  const [keyboard, setKeyboard] = useState(true);
  return (
    <header className='flex justify-center items-center w-full h-screen px-20 bg-fixed bg-repeat bg-bg_gear_image'>
      <section
        ref={ref}
        className='w-full text-center md:text-left md:w-4/12 space-y-4'
      >
        <div className='flex flex-col gap-2.5 place-items-start'>
          <h1
            className={`text-base md:text-xl font-thin text-white ${styles.typingLet}`}
          >
            Hi there!
          </h1>
          <h1 className='text-lg md:text-6xl font-bold animate-neon_text'>
            I&apos;m Rian Miguel
          </h1>
          <h1 className='text-base md:text-xl text-white font-bold'>
            <span className='text-xl font-thin'>a</span> Full Stack Developer
          </h1>
        </div>
        <ul className='flex flex-row gap-4'>
          {CONTACTS.map((item) => {
            if (item.id === 'email') return;
            return (
              <li
                className='block p-3 bg-gray-800 border rounded-lg border-[#b2fcfb] transition-all hover:scale-110'
                key={item.id}
              >
                <Link href={item.link} legacyBehavior>
                  <a className=''>
                    <Image
                      className=''
                      src={item.imgSrc}
                      alt={item.id}
                      width={20}
                      height={20}
                      sizes='5vw'
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className='hidden lg:flex max-w-2xl h-full justify-center items-center'>
        <Image
          src={DevImage}
          alt='dev-image'
          width={500}
          height={500}
          sizes='(max-width: 768px) 50vw'
        />
        {/* <Keyboard /> */}
      </section>
    </header>
  );
};

export default Home;

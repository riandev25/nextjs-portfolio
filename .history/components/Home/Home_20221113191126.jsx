import Link from 'next/link';
import Image from 'next/future/image';
import { useParallax } from 'react-scroll-parallax';
import styles from './index.module.css';
import DevImage from '../../assets/images/dev-image.svg';
import GithubImage from '../../assets/images/github-neon-fill.png';
import LinkedinImage from '../../assets/images/linkedin-neon-fill.png';
import FacebookImage from '../../assets/images/facebook-neon-fill.png';

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
  // const { ref } = useParallax({
  //   translateY: [-100, 30, 'easeInOut'],
  // });
  return (
    <header className='flex-col md:flex-row flex justify-center items-center max-w-full h-screen px-4 md:px-8 lg:px-20 bg-fixed bg-repeat bg-bg_gear_image'>
      <section
        // ref={ref}
        className='flex flex-col justify-center items-start sm:w-5/12 gap-4 bg-black'
      >
        <div className='gap-2.5 justify-start items-center'>
          <h1
            className={`w-content text-base sm:text-xl font-thin text-white ${styles.typingLet}`}
          >
            Hi there!
          </h1>
          <h1 className='text-lg sm:text-6xl font-bold animate-neon_text'>
            I&apos;m Rian Miguel
          </h1>
          <h1 className='text-base sm:text-xl text-white font-bold'>
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
      {/* <section className='hidden md:flex max-w-2xl h-full justify-center items-center'>
        <Image
          src={DevImage}
          alt='dev-image'
          width={500}
          height={500}
          sizes='(max-width: 768px) 50vw'
        />
      </section> */}
    </header>
  );
};

export default Home;

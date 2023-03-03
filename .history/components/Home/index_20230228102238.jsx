import Link from 'next/link';
import Image from 'next/future/image';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';
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

const Home = () => {
  const { animate, animationHandler } = useScrollAnimate();
  // const { ref } = useParallax({
  //   translateY: [-100, 40, 'easeInOut'],
  //   speed: 5,
  //   onEnter: {  },
  // });
  return (
    <header
      id='Home'
      className={`flex flex-col justify-center items-center max-w-full h-screen bg-bg_gear_image bg-fixed bg-repeat px-6 sm:px-12 lg:px-24 md:flex-row`}
    >
      <Parallax
        delay={2000}
        onEnter={animationHandler}
        translateY={[-100, 40, 'easeInOut']}
      >
        <section
          className={`${
            animate ? 'animate-scroll_left delay-200 visible' : 'invisible'
          } flex flex-col justify-center items-center md:items-start md:max-w-4/12 gap-5`}
        >
          <div className='flex flex-col justify-center items-center gap-2 md:justify-start md:items-start'>
            <h1 className='w-content text-lg sm:text-xl font-thin text-white'>
              Hi there!
            </h1>
            <h1 className='text-3xl font-bold animate-neon_text sm:text-5xl'>
              I&apos;m Rian Miguel
            </h1>
            <h1 className='text-base font-bold text-white sm:text-xl'>
              <span className='text-base font-thin sm:text-xl'>a</span> Full
              Stack Developer
            </h1>
          </div>
          <ul className='flex flex-row items-start gap-4'>
            {CONTACTS.map((item) => {
              if (item.id === 'email') return;
              return (
                <li
                  className='block border rounded-lg p-3 bg-gray-800 border-[#b2fcfb] transition-all hover:scale-110'
                  key={item.id}
                >
                  <Link href={item.link} legacyBehavior>
                    <a className='' target='_blank'>
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
      </Parallax>
      <section className='hidden md:flex w-[40rem] md:w-[42rem] justify-center items-center'>
        <Image
          src={DevImage}
          alt='dev-image'
          width={500}
          height={500}
          sizes='(max-width: 768px) 50vw'
        />
      </section>
    </header>
  );
};

export default Home;

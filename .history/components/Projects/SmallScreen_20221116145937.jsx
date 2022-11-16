import Link from 'next/link';
import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const SmallScreen = ({ title, description, tech, links, image }) => {
  const { animate, animationHandler } = useScrollAnimate();
  return (
    <section
      className={`${
        animate ? 'animate-scroll_bottom delay-200 visible' : 'invisible'
      } w-full bg-gray-800 rounded-md object-cover px-9 py-12 flex flex-col gap-6 md:hidden`}
    >
      <header className='flex flex-col justify-start items-center' dir='ltr'>
        {/* <h2 className='text-neon text-right'>Featured Projects</h2> */}
        <h1 className='text-xl font-bold text-center'>{title}</h1>
      </header>
      <Parallax onEnter={animationHandler}>
        <figure className='relative w-full aspect-[13/8] flex image-filter'>
          <Image
            src={image}
            alt='weather-app'
            sizes='(max-width: 768px) 100vw'
            className='absolute object-cover rounded-lg'
          />
        </figure>
      </Parallax>
      <figcaption className='flex md:bg-gray-800'>
        <p className='text-base font-extralight leading-6'>{description}</p>
      </figcaption>
      <footer className='flex flex-col gap-4'>
        <ul className='flex flex-row justify-start items-center gap-4'>
          {tech.map((item) => {
            return (
              <li key={item} className='font-light border-[neon]'>
                {item}
              </li>
            );
          })}
        </ul>
        <ul className='flex flex-row gap-6'>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.link} legacyBehavior>
                  <a>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`text-white w-${item.id === '2' ? '6' : '5'}`}
                    />
                  </a>                 
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </section>
  );
};

export default SmallScreen;

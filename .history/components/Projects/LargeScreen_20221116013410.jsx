import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const LargeScreen = ({ dir, title, description, tech, links }) => {
  const { animate, animationHandler } = useScrollAnimate();
  return (
    <section
      className='z-20 hidden md:flex flex-col w-[43%] p-0 overflow-visible gap-5'
      dir={dir}
    >
      <div className='flex flex-col items-start'>
        <h2 className='text-neon text-right'>Featured Project</h2>
        <h1 className='text-xl font-bold text-right'>{title}</h1>
      </div>
      <div
        className={`flex bg-gray-800 p-5 ${
          dir === 'rtl' ? 'pl-11' : 'pr-11'
        } rounded-sm w-[28rem] lg:w-[33rem]`}
      >
        <Parallax onChange={animationHandler}>
          <p
            className={`${
              animate
                ? `animate-scroll_${
                    dir === 'rtl' ? 'right' : 'left'
                  } delay-200 visible`
                : 'invisible'
            } text-base font-extralight leading-6`}
          >
            {description}
          </p>
        </Parallax>
      </div>
      <ul className='flex flex-row justify-start items-center gap-4'>
        {tech.map((item) => {
          return (
            <li key={item} className='font-light'>
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
    </section>
  );
};

export default LargeScreen;

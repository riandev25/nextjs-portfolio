import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const PageHeader = ({ title }) => {
  const { animate, animationHandler } = useScrollAnimate();
  return (
    <Parallax onEnter={animationHandler}>
      <div
        className={`${
          animate ? 'animate-scroll_bottom delay-200 visible' : 'invisible'
        }
       relative overflow-visible flex justify-center items-center`}
      >
        <h1 className='z-10 relative w-full flex flex-start bg-gray-700 px-2 text-2xl font-bold animate-neon_text sm:text-4xl'>
          {title}
        </h1>
        <span
          className={`absolute top-1/2 w-${
            title === 'Technologies' ? '48' : '48'
          } h-0.5 bg-white animated-neon_bg sm:w-72`}
        ></span>
      </div>
    </Parallax>
  );
};

export default PageHeader;

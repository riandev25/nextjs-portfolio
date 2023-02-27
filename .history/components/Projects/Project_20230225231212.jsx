import Image from 'next/image';
import SmallScreen from './SmallScreen';
import LargeScreen from './LargeScreen';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const Project = ({ dir, title, description, tech, links, image }) => {
  const { animate, animationHandler } = useScrollAnimate();
  return (
    <div
      className={`${
        animate
          ? `animate-scroll_${
              dir === 'rtl' ? 'left' : 'left'
            } delay-200 visible`
          : 'invisible'
      }  flex flex-row justify-center items-center`}
    >
      <figure
        className={`${
          dir === 'ltr' && 'order-last'
        } hidden relative z-10 w-[32rem] aspect-[16/10] flex-auto hover: md:flex image-filter`}
      >
        <Image
          src={image}
          alt={title}
          // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
          className='absolute object-cover rounded-lg'
        />
      </figure>
      <SmallScreen
        title={title}
        description={description}
        tech={tech}
        links={links}
        image={image}
      />
      <LargeScreen
        dir={dir}
        title={title}
        description={description}
        tech={tech}
        links={links}
        image={image}
        animationHandler={animationHandler}
      />
    </div>
  );
};

export default Project;

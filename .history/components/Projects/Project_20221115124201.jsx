import Image from 'next/image';
import SmallScreen from './SmallScreen';
import LargeScreen from './LargeScreen';
import { useDebugValue } from 'react';

const Project = ({ dir, title, description, tech, links, image }) => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <section
        className={`${
          dir === 'ltr' && 'order-last'
        } hidden relative z-10 w-[32rem] aspect-[16/10] flex-auto md:flex image-filter`}
      >
        <Image
          src={image}
          alt='weather-app'
          className='absolute object-cover rounded-lg'
        />
      </section>
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
      />
    </div>
  );
};

export default Project;

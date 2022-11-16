import Image from 'next/image';
import SmallScreen from './SmallScreen';
import LargeScreen from './LargeScreen';

const Project = ({ title, description, tech, links, image }) => {
  return (
    <div className='flex flex-row justify-center items-center max-w-full'>
      <section className='hidden relative z-10 w-[32rem] aspect-[16/10] flex-auto md:flex image-filter'>
        <Image
          src={image}
          alt='weather-app'
          fill
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
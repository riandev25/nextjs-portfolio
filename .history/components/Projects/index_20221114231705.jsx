import PageHeader from '../PageHeader';
import { Weather } from './Data';
import Project from './Project';

const Projects = () => {
  const {
    WEATHER_TITLE,
    WEATHER_DESCRIPTION,
    WEATHER_TECH,
    WEATHER_LINKS,
    WEATHER_IMAGE,
  } = Weather();
  return (
    <div className='overflow-x-hidden flex flex-col w-full min-h-screen gap-20 justify-center items-center text-white px-6 py-20 sm:px-12 lg:px-24 bg-bg_binary_image bg-fixed'>
      <PageHeader title='Projects' translate='true' />
      <div className='flex flex-col max-w-full gap-20'>
        <Project
          dir='rtl'
          title={WEATHER_TITLE}
          description={WEATHER_DESCRIPTION}
          tech={WEATHER_TECH}
          links={WEATHER_LINKS}
          image={WEATHER_IMAGE}
        />
        <Project
          dir='ltr'
          title={WEATHER_TITLE}
          description={WEATHER_DESCRIPTION}
          tech={WEATHER_TECH}
          links={WEATHER_LINKS}
          image={WEATHER_IMAGE}
        />
      </div>
    </div>
  );
};

export default Projects;

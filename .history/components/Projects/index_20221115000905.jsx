import PageHeader from '../PageHeader';
import { Weather, Portfolio } from './Data';
import Project from './Project';

const Projects = () => {
  const {
    WEATHER_TITLE,
    WEATHER_DESCRIPTION,
    WEATHER_TECH,
    WEATHER_LINKS,
    WEATHER_IMAGE,
  } = Weather();
  const {
    PORTFOLIO_TITLE,
    PORTFOLIO_DESCRIPTION,
    PORTFOLIO_TECH,
    PORTFOLIO_LINKS,
    PORTFOLIO_IMAGE,
  } = Portfolio();
  return (
    <div
      id='projects'
      className='overflow-x-hidden flex flex-col w-full min-h-screen gap-11 justify-center items-center text-white px-6 py-20 sm:px-12 lg:px-24 bg-bg_binary_image bg-fixed'
    >
      <PageHeader title='Projects' />
      <div className='flex flex-col max-w-full gap-20'>
        <Project
          dir='rtl'
          title={PORTFOLIO_TITLE}
          description={PORTFOLIO_DESCRIPTION}
          tech={PORTFOLIO_TECH}
          links={PORTFOLIO_LINKS}
          image={PORTFOLIO_IMAGE}
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
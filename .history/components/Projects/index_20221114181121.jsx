import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import Weather from './Data';
import WeatherImage from '../../assets/images/weather-app.png';
import SmallScreen from './SmallScreen';

// const TECH_WEATHER = ['HTML', 'CSS', 'Javascript'];
// const LINKS_WEATHER = [
//   {
//     id: 1,
//     icon: faSquareArrowUpRight,
//     link: 'https://riandev25.github.io/js-weather-app/dist/',
//   },
//   {
//     id: 2,
//     icon: faGithubAlt,
//     link: 'https://riandev25.github.io/js-weather-app/dist/',
//   },
// ];

const Projects = () => {
  const {
    WEATHER_TITLE,
    WEATHER_DESCRIPTION,
    WEATHER_TECH,
    WEATHER_LINKS,
    WEATHER_IMAGE,
  } = Weather();
  return (
    <div className='overflow-x-hidden pt-4 flex flex-col w-full h-screen gap-11 justify-center items-center text-white px-12 md:px-12 lg:px-24 bg-bg_binary_image bg-fixed'>
      <PageHeader title='Projects' />
      <div className='flex flex-row justify-center items-center max-w-full'>
        <section className='hidden relative z-10 w-[32rem] aspect-[16/10] flex-auto md:flex image-filter'>
          <Image
            src={WeatherImage}
            alt='weather-app'
            fill
            className='absolute object-cover rounded-lg'
          />
        </section>
        <SmallScreen
          title={WEATHER_TITLE}
          description={WEATHER_DESCRIPTION}
          tech={WEATHER_TECH}
          links={WEATHER_LINKS}
        />
      </div>
    </div>
  );
};

export default Projects;

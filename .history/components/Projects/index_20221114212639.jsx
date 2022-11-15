import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import { Weather } from './Data';
import WeatherImage from '../../assets/images/weather-app.png';
import SmallScreen from './SmallScreen';
import LargeScreen from './LargeScreen';
import Project from './Project';

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
    <div className='overflow-x-hidden pt-4 flex flex-col w-full min-h-screen gap-11 justify-center items-center text-white px-6 sm:px-12 lg:px-24 bg-bg_binary_image bg-fixed'>
      <PageHeader title='Projects' />
      <Project
        title={WEATHER_TITLE}
        description={WEATHER_DESCRIPTION}
        tech={WEATHER_TECH}
        links={WEATHER_LINKS}
        image={WEATHER_IMAGE}
      />
    </div>
  );
};

export default Projects;

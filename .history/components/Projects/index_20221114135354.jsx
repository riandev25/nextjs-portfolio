import Link from 'next/link';
import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import { useWindowSize } from '../../lib/hooks/useWindowSize';
import WeatherImage from '../../assets/images/weather-app.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const TECH_WEATHER = ['HTML', 'CSS', 'Javascript'];
const WEATHER = [
  {
    id: 1,
    icon: faSquareArrowUpRight,
    link: 'https://riandev25.github.io/js-weather-app/dist/',
  },
  {
    id: 2,
    icon: faGithubAlt,
    link: 'https://riandev25.github.io/js-weather-app/dist/',
  },
];

const Projects = () => {
  const hidden = useWindowSize(767);

  return (
    <div className='overflow-x-hidden pt-4 flex flex-col w-full h-screen gap-11 justify-center items-center text-white px-8 md:px-20 lg:px-24 bg-bg_binary_image bg-fixed'>
      <PageHeader title='Projects' />
      <div className='flex flex-row justify-center items-center max-w-full'>
        <section className='hidden z-10 w-[32rem] aspect-[16/10] flex-auto md:flex image-filter'>
          <Image
            src={WeatherImage}
            alt='weather-app'
            fill
            className='object-cover rounded-lg'
          />
        </section>
        <section
          className='z-20 w-[43%] flex flex-col overflow-visible gap-5'
          dir='ltr'
        >
          <div className='flex flex-col justify-end items-end' dir='ltr'>
            <h2 className='text-neon text-right'>Featured Project</h2>
            <h1 className='text-xl font-bold text-right'>
              Weather Application
            </h1>
          </div>
          <div className='flex bg-gray-800 p-5 pl-11 rounded-sm w-[28rem] lg:w-[33rem]'>
            <p className='text-right text-sm lg:text-base font-extralight'>
              A fully responsive weather application. I built this project using
              OpenweathermapApi and to enhance my vanilla javascript skills.
              Open first the location of your device for better user experience
            </p>
          </div>
          <ul
            className='flex flex-row justify-end items-center gap-4'
            dir='ltr'
          >
            {TECH_WEATHER.map((item) => {
              return (
                <li key={item} className='font-light'>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className='flex flex-row gap-6'>
            {WEATHER.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.link} legacyBehavior>
                    <a>
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`text-white w-${
                          item.id === '2' ? '6' : '5'
                        }`}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Projects;

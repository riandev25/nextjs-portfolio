import Link from 'next/link';
import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import WeatherImage from '../../assets/images/weather-app.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import Links from './Links';

const TECH_WEATHER = ['HTML', 'CSS', 'Javascript'];
const WEATHER = [
  {
    id: 1,
    icon: faGithubAlt,
    link: 'https://riandev25.github.io/js-weather-app/dist/',
  },
  {
    id: 2,
    icon: faSquareArrowUpRight,
    link: 'https://riandev25.github.io/js-weather-app/dist/',
  },
];

const Projects = () => {
  return (
    <div className='pt-4 flex flex-col w-full h-screen gap-11 justify-center items-center text-white px-20 bg-bg_binary_image bg-fixed'>
      <PageHeader title='Projects' />
      <div className='flex flex-row justify-center items-center bg-yellow-300 '>
        <section className='w-[35rem] h-12 bg-green-100 flex-auto flex'>
          <Image
            src={WeatherImage}
            alt='weather-app'
            fill
            className='object-cover'
          />
        </section>
        <section
          className='w-[28rem] overflow-visible bg-red-400 space-y-4'
          dir='rtl'
        >
          <div className='flex flex-col justify-end items-end' dir='ltr'>
            <h2 className='text-neon text-right'>Featured Project</h2>
            <h1 className='text-xl font-bold text-right'>
              Weather Application
            </h1>
          </div>
          <div className='w-[35rem] bg-gray-800 p-7 pr-5 rounded-md'>
            <p className='text-right'>
              A fully responsive weather application. I built this project to
              enhance vanilla javascript skills and dom manipulation. Open
              location of your device for better user experience.
            </p>
          </div>
          <ul
            className='flex flex-row justify-end items-center gap-4'
            dir='ltr'
          >
            {TECH_WEATHER.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <Links array={WEATHER} />
        </section>
      </div>
    </div>
  );
};

export default Projects;

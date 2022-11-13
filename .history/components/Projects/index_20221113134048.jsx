import Link from 'next/link';
import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import WeatherImage from '../../assets/images/weather-app.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

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
      <div className='flex flex-row justify-center items-center max-w-full'>
        <section className='z-10 relative w-[36rem] aspect-[16/10] flex-auto flex image-filter'>
          <Image
            src={WeatherImage}
            alt='weather-app'
            fill
            className='object-cover absolute rounded-lg'
          />
        </section>
        <section
          className='z-20 w-[23rem] flex flex-col overflow-visible gap-5 lg:w-[26rem]'
          dir='rtl'
        >
          <div className='flex flex-col justify-end items-end' dir='ltr'>
            <h2 className='text-neon text-right'>Featured Project</h2>
            <h1 className='text-xl font-bold text-right'>
              Weather Application
            </h1>
          </div>
          <div className='flex w-[31rem] bg-gray-800 p-5 pl-11 rounded-sm xl:w-[31rem]'>
            <p className='text-right'>
              A fully responsive weather application. I built this project to
              enhance vanilla javascript skills and dom manipulation. Open
              location of your device for better user experience
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
          <ul className='flex flex-row-reverse gap-4'>
            {WEATHER.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.link} legacyBehavior>
                    <a>
                      <FontAwesomeIcon
                        icon={item.icon}
                        className='text-white w-3'
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

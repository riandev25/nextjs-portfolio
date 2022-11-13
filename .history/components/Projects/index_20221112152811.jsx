import Link from 'next/link';
import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import WeatherImage from '../../assets/images/weather-app.png';

const TECH_WEATHER = ['HTML', 'CSS', 'Javascript'];

const LINK_WEATHER = [''];

const Projects = () => {
  return (
    <div className='pt-4 flex flex-col w-full h-screen gap-11 justify-center items-center text-white px-20 bg-bg_binary_image bg-fixed'>
      <PageHeader title='Projects' />
      <div className='bg-yellow-200'>
        <section className='relative w-96 flex'>
          <Image
            src={WeatherImage}
            alt='weather-app'
            fill
            className='object-cover'
          />
        </section>
        {/* <section className='w-5/12'>
          <div>
            <h2>Featured Project</h2>
            <h1>Weather App</h1>
          </div> */}
        {/* <div>
            <p>A fully responsive weather application. I built this project to enhance vanilla javascript skills and dom manipulation. Open location of your device for better user experience.</p>
          </div>
          <ul>
            {TECH_WEATHER.map((item) => {
              return (
                <li key={item}>item</li>
              )
            })}
          </ul>
          <ul>
            <li>
              <Link href=''>
                <a>

                </a>
              </Link>
            </li>
          </ul> */}
        {/* </section> */}
      </div>
    </div>
  );
};

export default Projects;

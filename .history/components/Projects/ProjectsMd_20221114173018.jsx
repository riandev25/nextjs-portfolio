import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsMd = ({ title, tech, links }) => {
  return (
    <section className='w-full bg-bg_weather_image project-filter  object-cover px-9 py-12  flex flex-col gap-6'>
      <div className='flex flex-col justify-start items-center' dir='ltr'>
        <h2 className='text-neon text-right'>Featured Projects</h2>
        <h1 className='text-xl font-bold text-right'>{title}</h1>
      </div>
      <div className='flex md:bg-gray-800'>
        <p className='text-base font-extralight leading-6'>
          A fully responsive weather application. I built this project using
          OpenweathermapApi and to enhance my vanilla javascript skills. Open
          first the location of your device for better user experience
        </p>
      </div>
      <ul className='flex flex-row justify-start items-center gap-4'>
        {tech.map((item) => {
          return (
            <li key={item} className='font-light'>
              {item}
            </li>
          );
        })}
      </ul>
      <ul className='flex flex-row gap-6'>
        {links.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.link} legacyBehavior>
                <a>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-white w-${item.id === '2' ? '6' : '5'}`}
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsMd;

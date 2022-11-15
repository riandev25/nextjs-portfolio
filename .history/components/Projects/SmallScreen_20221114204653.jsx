import Link from 'next/link';
import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SmallScreen = ({ title, description, tech, links }) => {
  return (
    <section className='w-full bg-gray-800 rounded-md object-cover px-9 py-12 flex flex-col gap-6'>
      <header className='flex flex-col justify-start items-center' dir='ltr'>
        {/* <h2 className='text-neon text-right'>Featured Projects</h2> */}
        <h1 className='text-xl font-bold text-right'>{title}</h1>
      </header>
      <section className='relative aspect-[16/10] flex image-filter'>
        <Image
          src={WeatherImage}
          alt='weather-app'
          fill
          className='absolute object-cover rounded-lg'
        />
      </section>
      <div className='flex md:bg-gray-800'>
        <p className='text-base font-extralight leading-6'>{description}</p>
      </div>
      <footer className='flex flex-col gap-4'>
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
      </footer>
    </section>
  );
};

export default SmallScreen;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const LargeScreen = ({ title, description, tech, links, image }) => {
  return (
    <section
      className='z-20 flex flex-col w-[43%] p-0 overflow-visible gap-5'
      dir={'rtl'}
    >
      <div
        className='flex flex-col justify-start items-center md:bg-none md:justify-end md:items-end'
        dir='ltr'
      >
        <h2 className='text-neon text-right'>Featured Project</h2>
        <h1 className='text-xl font-bold text-right'>Weather Application</h1>
      </div>
      <div className='flex md:bg-gray-800 md:p-5 md:pl-11 md:rounded-sm md:w-[28rem] lg:w-[33rem]'>
        <p className='text-base font-extralight leading-6'>
          A fully responsive weather application. I built this project using
          OpenweathermapApi and to enhance my vanilla javascript skills. Open
          first the location of your device for better user experience
        </p>
      </div>
      <ul className='flex flex-row justify-start items-center gap-4'>
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

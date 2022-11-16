import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TechStack = ({ tech, title }) => {
  return (
    <div className='flex flex-col gap-2.5 justify-center items-center'>
      <section>
        <h2 className='text-lg text-gray-800'>{title}</h2>
      </section>
      <section>
        <ul className='grid grid-cols-2 gap-3 md:grid-cols-3'>
          {tech.map((item) => {
            return (
              <li
                key={item.id}
                className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
              >
                <figure className='flex justify-center items-center rounded-l-lg bg-gray-600'>
                  {item.id === 'Tailwind' ||
                  item.id === 'NextJS' ||
                  item.id === 'MongoDB' ||
                  item.id === 'VSCode' ||
                  item.id === 'ExpressJS' ||
                  item.id === 'TypeScript' ? (
                    <Image
                      src={item.icon}
                      alt={item.icon}
                      width={item.id === 'Tailwind' ? 34 : 24}
                      height={item.id === 'Tailwind' ? 34 : 24}
                      sizes='5wv'
                      className='text-white'
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={item.icon}
                      className='text-white w-6'
                    />
                  )}
                </figure>

                <div className='py-3 pl-2'>
                  <span className='col-span-2 text-xs sm:text-sm text-white my-2 md:text-base'>
                    {item.id}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default TechStack;

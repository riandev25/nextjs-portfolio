import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TechStack = ({ array }) => {
  return (
    <ul className='grid grid-cols-2 gap-3 md:grid-cols-3'>
      {array.map((item) => {
        return (
          <li
            key={item.id}
            className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
          >
            <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
              <FontAwesomeIcon icon={item.icon} className='text-white w-6' />
              {(item.id === 'Tailwind' ||
                item.id === 'NextJS' ||
                item.id === 'MongoDB' ||
                item.id === 'VSCode' ||
                item.id === 'ExpressJS' ||
                item.id === 'TypeScript') && (
                <Image
                  src={item.icon}
                  alt={item.icon}
                  width={item.id === 'Tailwind' ? 34 : 24}
                  height={item.id === 'Tailwind' ? 34 : 24}
                  sizes='5wv'
                  className='text-white'
                />
              )}
            </div>

            <div className='py-3 pl-2'>
              <span className='col-span-2 text-sm text-white my-2 md:text-base'>
                {item.id}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TechStack;

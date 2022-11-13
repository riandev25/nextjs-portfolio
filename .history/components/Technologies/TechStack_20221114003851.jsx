import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TechStack = ({ array }) => {
  return (
    <ul className='grid grid-cols-3 gap-3'>
      {array.map((item) => {
        return (
          <li
            key={item.id}
            className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
          >
            <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
              <FontAwesomeIcon icon={item.icon} className='w-6 text-white' />
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
              <span className='col-span-2 text-base text-white my-2 '>
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

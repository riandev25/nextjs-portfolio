import Link from 'next/link';
import Image from 'next/image';
import { images } from '../Home/Home';

const Email = () => {
  return (
    <nav>
      <ul className='flex flex-row gap-4'>
        {images.map((item) => {
          return (
            <li className='' key={item.id}>
              <Link href={item.link} legacyBehavior>
                <a className='block text-white p-3 border rounded-lg border-white'>
                  {!item.name && (
                    <Image
                      className=''
                      src={item.imgSrc}
                      alt={item.id}
                      width={16}
                      height={16}
                      sizes='5vw'
                    />
                  )}
                  rianengracia@gmail.com
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Email;

import Link from 'next/link';
import Image from 'next/image';
import { images } from '../Home/Home';

const Email = () => {
  return (
    <aside className='fixed bottom-64 right-0'>
      <div className='flex justify-center items-center relative rotate-90'>
        <Link href='' legacyBehavior>
          <a className='z-50 text-[#b2fcfb] bg-gray-800 px-2'>
            rianengracia@gmail.com
          </a>
        </Link>
        <div className='w-96 bg-[#b2fcfb] absolute top-1/2 left-0 bg-white h-px'></div>
      </div>
    </aside>
  );
};

export default Email;

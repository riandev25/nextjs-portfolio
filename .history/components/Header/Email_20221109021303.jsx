import Link from 'next/link';
import Image from 'next/image';
import { images } from '../Home/Home';

const Email = () => {
  return (
    <aside className='relative'>
      <Link href='' legacyBehavior>
        <a className='z-50'>rianengracia@gmail.com</a>
      </Link>
      <div className='w-full absolute translate-y-1/2'></div>
    </aside>
  );
};

export default Email;

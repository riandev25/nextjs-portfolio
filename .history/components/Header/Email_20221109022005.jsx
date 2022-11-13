import Link from 'next/link';
import Image from 'next/image';
import { images } from '../Home/Home';

const Email = () => {
  return (
    <aside className='relative overlow-visible'>
      <Link href='' legacyBehavior>
        <a className='z-50'>rianengracia@gmail.com</a>
      </Link>
      <div className='w-96 absolute top-0 translate-y-1/2 bg-white'></div>
    </aside>
  );
};

export default Email;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/future/image';
import DevImage from '../../assets/images/dev-image.svg';

const Home = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen px-20'>
      <section className='w-6/12 pl-auto bg-red-200'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-xl text-white font-bold'>Hello!</h1>
          <h1 className='text-xl text-white font-bold'>Im Rian Miguel</h1>
          <h1 className='text-xl text-white font-bold'>
            A Full Stack Developer
          </h1>
        </div>

        {/* <div>
          <button className='bg-gray-600'>
            <FontAwesomeIcon icon={faGmail} />
          </button>
        </div> */}
      </section>
      <section className='flex max-w-2xl h-full justify-center items-center'>
        <Image
          src={DevImage}
          alt='dev-image'
          width={500}
          height={500}
          sizes='(max-width: 768px) 50vw'
        />
      </section>
    </div>
  );
};

export default Home;

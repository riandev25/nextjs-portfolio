import Image from 'next/future/image';
import DevImage from '../../assets/images/dev-image.svg';

const Home = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <section className='bg-yellow-100 w-6/12 px-auto'>
        <h2>Hello!</h2>
        <h1>Im Rian Miguel</h1>
        <h1>An aspiring Full Stack Developer</h1>
      </section>
      <section className='flex w-full bg-red-300 justify-center items-center'>
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

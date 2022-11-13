import Image from 'next/future/image';
import DevImage from '../../assets/images/dev-image.svg';

const Home = () => {
  return (
    <div className=''>
      <section>
        <h2>Hello!</h2>
        <h1>Im Rian Miguel</h1>
        <h1>An aspiring Full Stack Developer</h1>
      </section>
      <section>
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

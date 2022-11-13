import Link from 'next/link';
import Image from 'next/future/image';
import DevImage from '../../assets/images/dev-image.svg';
import GithubImage from '../../assets/images/github.png';
import LinkedinImage from '../../assets/images/linkedin.png';
import FacebookImage from '../../assets/images/facebook.png';

const Home = () => {
  const images = [
    {
      id: 'github',
      imgSrc: GithubImage,
      link: 'https://github.com/riandev25',
    },
    {
      id: 'linkedin',
      imgSrc: LinkedinImage,
      link: 'https://www.linkedin.com/in/rian-miguel-engracia/',
    },
    {
      id: 'facebook',
      imgSrc: FacebookImage,
      link: 'https://web.facebook.com/rianmiguel.engracia',
    },
  ];

  return (
    <header className='flex justify-center items-center w-full h-screen px-20'>
      <section className='w-6/12 pl-auto'>
        <div className=''>
          <h1 className='text-xl text-white font-bold'>Hello!</h1>
          <h1 className='text-xl text-white font-bold'>Im Rian Miguel</h1>
          <h1 className='text-xl text-white font-bold'>
            A <mark>Full Stack Developer</mark>
          </h1>
        </div>
        <ul>
          {images.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.link} legacyBehavior>
                  <a className='block p-1 bg-gray-800 opacity-50'>
                    <Image
                      className='text-blue-6000'
                      src={item.imgSrc}
                      alt={item.id}
                      width={24}
                      height={24}
                      sizes='5vw'
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
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
    </header>
  );
};

export default Home;

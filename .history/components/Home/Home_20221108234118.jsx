import Link from 'next/link';
import Image from 'next/future/image';
import DevImage from '../../assets/images/dev-image.svg';
import GithubImage from '../../assets/images/github.png';
import LinkedinImage from '../../assets/images/linkedin.png';
import FacebookImage from '../../assets/images/facebook.png';

export const images = [
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

const Home = () => {
  return (
    <header className='flex justify-center items-center w-full h-screen px-20'>
      <section className='w-6/12 space-y-4'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-thin text-white'>Hi there!</h1>
          <h1 className='text-6xl text-white font-bold'>
            I&apos;m Rian Miguel
          </h1>
          <h1 className='text-xl text-white font-bold'>
            <span className='text-xl font-thin'>a</span> Full Stack Developer
          </h1>
        </div>
        <ul className='flex flex-row gap-4'>
          {images.map((item) => {
            if (item.id === 'email') return;
            return (
              <li className='' key={item.id}>
                <Link href={item.link} legacyBehavior>
                  <a className='block text-white p-3 border rounded-lg border-white'>
                    <Image
                      className=''
                      src={item.imgSrc}
                      alt={item.id}
                      width={16}
                      height={16}
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

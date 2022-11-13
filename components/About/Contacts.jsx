import Link from 'next/link';
import Image from 'next/future/image';
import GithubImage from '../../assets/images/github-neon.png';
import LinkedinImage from '../../assets/images/linkedin-neon.png';
import FacebookImage from '../../assets/images/facebook-neon.png';

const CONTACTS = [
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

const Contacts = () => {
  return (
    <nav className='fixed bottom-36 left-16 origin-top-left rotate-90'>
      <ul className='flex justify-center items-center relative gap-4'>
        {CONTACTS.map((item) => {
          return (
            <li
              key={item.id}
              className='flex justify-center items-center -rotate-90 transition-all hover:scale-110'
            >
              <Link href={item.link} legacyBehavior>
                <a className=''>
                  <Image
                    className=''
                    src={item.imgSrc}
                    alt={item.id}
                    width={50}
                    height={50}
                    sizes='5vw'
                  />
                </a>
              </Link>
            </li>
          );
        })}
        <div className='w-96 bg-[#b2fcfb] absolute top-1/2 left-0 h-px'></div>
      </ul>
    </nav>
  );
};

export default Contacts;

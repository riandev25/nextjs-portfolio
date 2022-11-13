import Link from 'next/link';
import Image from 'next/future/image';
import GithubImage from '../../assets/images/github-neon.png';
import LinkedinImage from '../../assets/images/linkedin-neon.png';
import FacebookImage from '../../assets/images/facebook-neon.png';

export const CONTACTS = [
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

const Email = () => {
  return (
    <nav className='fixed bottom-36 right-12 origin-top-right rotate-90'>
      <ul className='flex justify-center items-center relative'>
        {/* <Link href='' legacyBehavior>
          <a className='z-50 transition-all text-[#b2fcfb] bg-gray-700 px-2 hover:text-[#68fffc] hover:scale-110'>
            rianengracia@gmail.com
          </a>
        </Link> */}
        {CONTACTS.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.link} legacyBehavior>
                <a className=''>
                  <Image
                    className=''
                    src={item.imgSrc}
                    alt={item.id}
                    width={20}
                    height={20}
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

export default Email;

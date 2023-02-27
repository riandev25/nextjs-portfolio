import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const Contacts = () => {
  const { animate, animationHandler } = useScrollAnimate();

  const CONTACT_INFO = [
    {
      id: 'github',
      link: 'https://github.com/riandev25',
    },
    {
      id: 'linkedin',
      link: 'https://www.linkedin.com/in/rian-miguel-engracia/',
    },
    {
      id: 'facebook',
      link: 'https://web.facebook.com/rianmiguel.engracia',
    },
  ];

  return (
    <footer
      id='Contacts'
      className={` flex flex-col justify-center items-center w-full h-screen md:h-full gap-28 bg-bg_qr_image bg-fixed py-64 px-6 text-base sm:text-lg lg:text-2xl text-center text-white sm:px-12 lg:px-40 `}
    >
      <div
        className={`${
          animate ? 'animate-scroll_bottom delay-200 visible' : 'invisible'
        } flex flex-col justify-center items-center gap-24 `}
      >
        <p>
          Hi there! Thank you for visiting my portfolio website. It&apos;s still
          a work in progress and any feedback will be appreciated. You can look
          at my{' '}
          <a
            href='https://github.com/riandev25'
            className='underline underline-offset-4 hover:text-neon'
          >
            Github
          </a>{' '}
          for other repositories.
        </p>
        <Parallax onEnter={animationHandler}>
          <p>
            Are you looking for a frontend/full stack developer? I&apos;m
            actively looking for a job. Email me at
            <span className='text-neon'> rianengracia@gmail.com</span>. Thanks!
          </p>
        </Parallax>
      </div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <section className='grid grid-cols-3 divide-x-2'>
          {CONTACT_INFO.map(({ id, link }, i) => {
            return (
              <div
                key={i}
                className='text-neon hover:animate-bounce flex justify-center items-center p-3 font-semibold'
              >
                <Link href={link} className=''>
                  {id}
                </Link>
              </div>
            );
          })}
        </section>
        <section className='flex flex-row gap-2'>
          <FontAwesomeIcon icon={faCopyright} className='w-4' />
          <span>Rian Miguel Engracia 2023</span>
        </section>
      </div>
    </footer>
  );
};

export default Contacts;

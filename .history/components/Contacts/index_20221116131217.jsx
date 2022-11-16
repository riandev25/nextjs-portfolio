import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const Contacts = () => {
  const { animate, animationHandler } = useScrollAnimate();

  return (
    <div
      id='Contacts'
      className={` flex flex-col justify-center items-center w-full h-screen md:h-full bg-bg_qr_image bg-fixed py-64 px-6 text-base sm:text-lg lg:text-2xl text-center text-white sm:px-12 lg:px-40 `}
    >
      <div
        className={`${
          animate ? 'animate-scroll_bottom delay-200 visible' : 'invisible'
        } flex flex-col justify-center items-center gap-24 `}
      >
        <p>
          Hi there! Thank you for visiting my personal website. It&apos;s still
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
            Are you looking for a frontend developer? I&apos;m actively looking
            for a job. Message me in this email:
            <span className='text-neon'> rianengracia@gmail.com</span>. Thanks!
          </p>
        </Parallax>
      </div>
    </div>
  );
};

export default Contacts;

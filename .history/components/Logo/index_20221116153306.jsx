import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';
import Image from 'next/future/image';
import LogoImage from '../../assets/images/logo.svg';
import LogoDark from '../../assets/images/logo-dark.svg';
import LogoLight from '../../assets/images/logo-light.svg';

const Logo = () => {
  const { animate, animationHandler } = useScrollAnimate();
  return (
    <Parallax onEnter={animationHandler}>
      <a
        href='#Home'
        className={`${
          animate ? 'animate-scroll_bottom delay-200 visible' : 'invisible'
        } flex items-center relative max-w-[185px] max-h-[55px]`}
      >
        <Image
          src={LogoImage}
          alt='logo'
          // width={185}
          // height={55}
          className='hidden md:flex'
          sizes='(max-width: 768px) 15vw'
        />
        <Image
          src={LogoDark}
          alt='logo-dark'
          width={50}
          height={50}
          className='flex md:hidden'
          sizes='(max-width: 768px) 15vw'
        />
      </a>
    </Parallax>
  );
};

export default Logo;

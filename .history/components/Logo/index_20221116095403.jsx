import Image from 'next/future/image';
import LogoImage from '../../assets/images/logo.svg';
import LogoDark from '../../assets/images/logo-dark.svg';
import LogoLight from '../../assets/images/logo-light.svg';

const Logo = () => {
  return (
    <div className='flex items-center relative max-w-[185px] max-h-[55px]'>
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
    </div>
  );
};

export default Logo;

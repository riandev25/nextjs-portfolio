import Image from 'next/future/image';
import LogoImage from '../../assets/images/logo.svg';
import {
  faAngleLeft,
  faGear,
  faforward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = () => {
  return (
    <div className='flex items-center relative mr-3 sm:h-9'>
      <Image
        src={LogoImage}
        alt='logo'
        width={130}
        className=''
        sizes='(max-width: 768px) 15vw'
      />
    </div>
  );
};

export default Logo;

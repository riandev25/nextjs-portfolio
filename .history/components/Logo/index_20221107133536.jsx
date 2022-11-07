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
    <div className='relative mr-3 h-24 sm:h-9'>
      <Image src={LogoImage} alt='logo' fill sizes='(max-width: 768px) 15vw' />
    </div>
  );
};

export default Logo;

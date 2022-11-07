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
    <div className='relative mr-3 sm:h-9'>
      <span>
        <Image
          src={LogoImage}
          alt='logo'
          fill
          sizes='(max-width: 768px) 15vw'
        />
      </span>
    </div>
  );
};

export default Logo;

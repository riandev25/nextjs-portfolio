import Image from 'next/future/image';
import LogoImage from '../../assets/images/logo.svg';
import LogoSmall from '../../assets/images/logo-small.svg';
import {
  faAngleLeft,
  faGear,
  faforward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = () => {
  return (
    <div className='flex items-center relative'>
      <Image
        src={LogoImage}
        alt='logo'
        width={200}
        height={62}
        className=''
        sizes='(max-width: 768px) 15vw'
      />
    </div>
  );
};

export default Logo;

import Image from 'next/image';
import LogoImage from '../../assets/images/logo.svg';
import {
  faAngleLeft,
  faGear,
  faforward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = () => {
  return (
    <div>
      <Image src={LogoImage} alt='logo' fill />
    </div>
  );
};

export default Logo;

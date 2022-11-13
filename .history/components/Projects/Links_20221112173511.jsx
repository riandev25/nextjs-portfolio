import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = ({ array }) => {
  array.map((item) => {
    return (
      <ul key={item} className='flex flex-row'>
        <li>
          <Link href={href} passHref>
            <a>
              <FontAwesomeIcon icon={icon} className='text-white w-3' />
            </a>
          </Link>
        </li>
      </ul>
    );
  });
};

export default Links;

// 'https://riandev25.github.io/js-weather-app/dist/'

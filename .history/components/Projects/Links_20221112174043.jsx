import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = ({ array }) => {
  array.map((item) => {
    return (
      <ul key={item.id} className='flex flex-row'>
        <li>
          <Link href={item.link} passHref>
            <a>
              <FontAwesomeIcon icon={item.icon} className='text-white w-3' />
            </a>
          </Link>
        </li>
      </ul>
    );
  });
};

export default Links;

// 'https://riandev25.github.io/js-weather-app/dist/'

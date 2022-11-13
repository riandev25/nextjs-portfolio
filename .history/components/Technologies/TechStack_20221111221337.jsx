import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const TechStack = ({ array }) => {
  array.map((item) => {
    return (
      <li key={item} className='grid grid cols-3'>
        <FontAwesomeIcon
          icon={faCaretRight}
          className='w-3 border-r border-[#b2fcfb]'
        />
        <span className='col-span-2'>{item}</span>
      </li>
    );
  });
};

export default TechStack;

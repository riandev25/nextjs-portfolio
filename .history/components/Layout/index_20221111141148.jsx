import Header from '../Header';
import Email from '../Header/Email';

const Layout = ({ children }) => {
  return (
    <div className='relative w-full h-full bg-gray-700'>
      <Header />
      <Email />
      {children}
    </div>
  );
};

export default Layout;

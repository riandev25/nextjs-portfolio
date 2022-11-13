import Header from '../Header';
import Email from '../Header/Email';

const Layout = ({ children }) => {
  return (
    <div className='relative w-full h-screen bg-gray-800'>
      <Header />
      <Email />
      {children}
    </div>
  );
};

export default Layout;

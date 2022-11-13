import Header from '../Header';
import Email from './Email';

const Layout = ({ children }) => {
  return (
    <div className='relative w-full h-full bg-gray-700' dir='ltr'>
      <Header />
      <Email />
      {children}
    </div>
  );
};

export default Layout;

import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='relative w-full h-screen bg-gray-800'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

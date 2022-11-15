import { useState } from 'react';
import Header from '../Header';
import Email from './Email';

const Layout = ({ children }) => {
  // const [drawer, setDrawer] = useState(false);

  // const onDrawer = () => {
  //   setDrawer(!drawer);
  //   console.log('AAA');
  // };

  return (
    <div className={`relative w-full h-full bg-gray-700`} dir='ltr'>
      <Header />
      <Email />
      {children}
    </div>
  );
};

export default Layout;

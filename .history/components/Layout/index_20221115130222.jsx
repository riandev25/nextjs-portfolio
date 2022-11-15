import { useState } from 'react';
import Header from '../Header';
import Email from './Email';

const Layout = ({ children }) => {
  const [drawer, setDrawer] = useState(false);

  const onDrawer = () => {
    setDrawer(!drawer);
    alert('AAa');
  };

  return (
    <div
      className={`relative w-full h-${!drawer ? 'full' : 'screen'} bg-gray-700`}
      dir='ltr'
    >
      <Header onDrawer={onDrawer} />
      <Email />
      {children}
    </div>
  );
};

export default Layout;

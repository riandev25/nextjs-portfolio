import { createContext, useState, useContext, useMemo } from 'react';
import Header from '../Header';
import Email from './Email';

export const DrawerContext = createContext({
  drawer: '',
  setDrawer: () => {},
});

const Layout = ({ children }) => {
  // const [drawer, setDrawer] = useState(false);

  // const handleClick = () => {
  //   setDrawer(!drawer);
  //   console.log('AAA');
  // };
  const [drawer, setDrawer] = useState(false);
  const value = useMemo(() => ({ drawer, setDrawer }), [drawer]);

  return (
    <DrawerContext.Provider value={value}>
      <div
        className={`relative w-full ${
          drawer ? 'h-screen overflow-hidden' : 'h-full'
        } bg-gray-700`}
        dir='ltr'
      >
        <Header />
        <Email />
        {children}
      </div>
    </DrawerContext.Provider>
  );
};

export default Layout;

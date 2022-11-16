import { createContext, useState, useContext, useMemo } from 'react';
import Header from '../Header';
import Email from './Email';

export const DrawerContext = createContext({
  drawer: '',
  setDrawer: () => {},
});

const Layout = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const value = useMemo(() => ({ drawer, setDrawer }), [drawer]);

  const onDrawerHandler = () => {
    setDrawer(!drawer);
  };

  return (
    <DrawerContext.Provider value={value}>
      <div
        className={`relative w-full ${
          drawer ? 'max-h-screen overflow-hidden' : 'h-full'
        } bg-gray-700`}
        dir='ltr'
      >
        <Header />
        <Email />
        {children}
        <div
          className={`z-[48] absolute h-screen w-full bg-black opacity-60 ${
            drawer
              ? 'transition-all opacity-100 duration-500 translate-x-0'
              : 'transition-all delay-200 translate-x-full'
          }`}
          onClick={onDrawerHandler}
        ></div>
      </div>
    </DrawerContext.Provider>
  );
};

export default Layout;

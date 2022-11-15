import { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer } from '../../store/drawerSlice';

export const useWindowSize = (max) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  let hide;
  if (windowSize <= max) {
    hide = 'hidden';
  } else {
    hide = '';
  }

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('resize', updateWindowSize);
      updateWindowSize();
      return () => window.removeEventListener('resize', updateWindowSize);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return hide;
};

export const useWindowDrawer = (max) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  let hide;
  if (windowSize <= max) {
    hide = true;
  } else {
    hide = false;
  }

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('resize', updateWindowSize);
      updateWindowSize();
      return () => window.removeEventListener('resize', updateWindowSize);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return hide;
};

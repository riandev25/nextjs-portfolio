import { useState, useEffect, Fragment } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';

const useAnimatedLetters = (word) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <AnimatedLetters letterClass={letterClass} strArray={word} idx={15} />
    </Fragment>
  );
};

export default useAnimatedLetters;

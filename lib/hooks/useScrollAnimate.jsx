import { useState } from 'react';

export const useScrollAnimate = () => {
  const [animate, setAnimate] = useState(false);

  const animationHandler = () => {
    if (!animate) {
      setAnimate(true);
    }
  };
  return { animate, animationHandler };
};

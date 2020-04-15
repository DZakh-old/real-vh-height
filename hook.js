import React, { useState, useLayoutEffect } from 'react';

const useFirstScreenHeight = () => {
  const [firstScreenHeight, setfirstScreenHeight] = useState('100vh');

  useLayoutEffect(() => {
    const correctSizing = () => {
      let vh = window.innerHeight;

      if (vh > window.screen.height) {
        vh /= window.devicePixelRatio;
      }

      setfirstScreenHeight(vh);
    };

    const onOrientationchange = () => {
      window.addEventListener('resize', correctSizing, { once: true });
    };

    correctSizing();
    window.addEventListener('orientationchange', onOrientationchange);

    return () => window.removeEventListener('orientationchange', onOrientationchange);
  }, []);

  return firstScreenHeight;
};

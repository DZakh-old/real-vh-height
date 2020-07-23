import { useState, useLayoutEffect } from 'react';

type ScreenHeight = '100vh' | number;

const useScreenHeight = (): ScreenHeight => {
  const [screenHeight, setScreenHeight] = useState<ScreenHeight>('100vh');

  useLayoutEffect(() => {
    const correctSizing = () => {
      setScreenHeight(window.innerHeight);
    };

    const onOrientationchange = () => {
      window.addEventListener('resize', correctSizing, { once: true });
    };

    correctSizing();
    window.addEventListener('orientationchange', onOrientationchange);

    return () => window.removeEventListener('orientationchange', onOrientationchange);
  }, []);

  return screenHeight;
};

export default useScreenHeight;

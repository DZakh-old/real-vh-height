/* global window, document */

function correctSizing() {
  setTimeout(() => {
    let realHeight = window.innerHeight;
    if (realHeight > window.screen.height) {
      realHeight /= window.devicePixelRatio;
    }
    document.documentElement.style.setProperty('--js-real-height', `${Math.round(realHeight)}px`);
  });
}

export function activateRealVhHeight() {
  if (typeof window === 'undefined') {
    return;
  }

  correctSizing();
  window.addEventListener('orientationchange', () => {
    const afterOrientationChange = () => {
      correctSizing();
      window.removeEventListener('resize', afterOrientationChange);
    };
    window.addEventListener('resize', afterOrientationChange);
  });
}

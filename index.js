setTimeout(firstViewportCorrection(), 0);

function firstViewportCorrection() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    correctSizing();
    window.addEventListener('orientationchange', function() {
      const afterOrientationChange = function() {
        correctSizing();
        window.removeEventListener('resize', afterOrientationChange);
      };
      window.addEventListener('resize', afterOrientationChange);
    });
  }
}

function correctSizing() {
  const vh = window.innerHeight;
  if (vh > window.screen.height) vh /= window.devicePixelRatio;
  document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
}

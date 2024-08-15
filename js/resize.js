let currentSketch;

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  script.async = false;
  document.body.appendChild(script);
  return script;
}

function unloadScript(src) {
  const scripts = document.querySelectorAll(`script[src="${src}"]`);
  scripts.forEach(script => script.remove());
}

function setupSketch() {
  const width = window.innerWidth;

  if (width > 800) {
    if (currentSketch !== 'large') {
      if (currentSketch) {
        unloadScript(`../js/${currentSketch}.js`);
      }
      currentSketch = 'large';
      loadScript('../js/perlin_noise_triangle.js');
    }
  } else {
    if (currentSketch !== 'small') {
      if (currentSketch) {
        unloadScript(`../js/${currentSketch}.js`);
      }
      currentSketch = 'small';
      loadScript('../js/perlin_noise_triangle_mobile.js');
    }
  }
}

window.addEventListener('resize', setupSketch);
window.addEventListener('load', setupSketch);

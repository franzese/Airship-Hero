import '../styles/index.scss'; // I'm the only fucking thing working lol
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

document.addEventListener('DOMContentLoaded', () => {
  // init
  const controller = new ScrollMagic.Controller();
  const rootElement = document.querySelector('.hero-tween');
  const panels = rootElement.querySelectorAll('.panel');

  if (panels.length) {
    // define movement of panels
    const wipeAnimation = new TimelineMax()
    .fromTo(panels[1], 1, { opacity: 0 }, { opacity: 1 }) // in from left
    .fromTo(panels[2], 1, { opacity: 0 }, { opacity: 1 }); // in from right

    // create scene to pin and link animation
    var scene = new ScrollMagic.Scene({
    	triggerElement: rootElement,
      offset: -60, // how far above the rootElement the START trigger is
      triggerHook: 0,
    	duration: "200%",
      reverse: true,
    });
    // debugger;
    scene.setPin(rootElement);
    scene.setTween(wipeAnimation);
    scene.addIndicators(); // add indicators (requires plugin)
    scene.addTo(controller);

  } else {
    debugger;
  	throw new Error('Airship Hero panels missing');
  }
});

import '../styles/index.scss';
// import ScrollMagic from 'Modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js';
import ScrollMagic from 'ScrollMagic/ScrollMagic.min.js';
import TimelineMax from 'TimelineMax/TimelineMax.min.js';


// DOM is ready
document.addEventListener('DOMContentLoaded', function(){
  // let wrapper = document.querySelector('.hero');
  // if (wrapper) {
  //   let controller = new ScrollMagic.Controller();
  //   // define movement of panels
  //   var wipeAnimation = new TimelineMax()
  //     .fromTo('.hero section.photo', 1, {x: '-100%'}, {x: '0%', ease: Linear.easeNone})  // in from left
  //     .fromTo('.hero section.blueprint',    1, {x:  '100%'}, {x: '0%', ease: Linear.easeNone})  // in from right
  //     .fromTo('.hero section.zoom', 1, {y: '-100%'}, {y: '0%', ease: Linear.easeNone}); // in from top
  //
  //   // create scene to pin and link animation
  //   new ScrollMagic.Scene({
  //     triggerElement: '.hero',
  //     triggerHook: 'onLeave',
  //     duration: '300%'
  //   })
  //   .setPin('.hero')
  //   .setTween(wipeAnimation)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  // }
});

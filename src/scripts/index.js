import '../styles/index.scss';
// import ScrollMagic from 'Modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js';
import ScrollMagic from 'ScrollMagic/ScrollMagic.min.js';
import TimelineMax from 'TimelineMax/TimelineMax.min.js';


// wait for document ready
document.addEventListener('DOMContentLoaded', function(){
    // // init
    // var controller = new ScrollMagic.Controller();
    //
    // // define movement of panels
    // var wipeAnimation = new TimelineMax()
    //   .fromTo("section.panel.turqoise", 1, {
    //     x: "-100%"
    //   }, {
    //     x: "0%",
    //     ease: Linear.easeNone
    //   }) // in from left
    //   .fromTo("section.panel.green", 1, {
    //     x: "100%"
    //   }, {
    //     x: "0%",
    //     ease: Linear.easeNone
    //   }) // in from right
    //   .fromTo("section.panel.bordeaux", 1, {
    //     y: "-100%"
    //   }, {
    //     y: "0%",
    //     ease: Linear.easeNone
    //   }); // in from top
    //
    // // create scene to pin and link animation
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#pinContainer",
    //   triggerHook: "onLeave",
    //   duration: "300%"
    // });
    // // debugger;
    // scene.setPin("#pinContainer");
    // scene.setTween(wipeAnimation);
    // scene.addIndicators(); // add indicators (requires plugin)
    // scene.addTo(controller);
});

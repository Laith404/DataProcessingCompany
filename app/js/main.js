//import $ from 'jquery'; window.jQuery = $; window.$ = $ // download module jquery (npm i jquery -d )
import _ from 'lodash';


document.addEventListener('DOMContentLoaded', () => {

  (function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("resize", "optimizedResize");
})();


window.addEventListener("optimizedResize", function() {
    menu(); 
});

let header = document.querySelector('.header');
function menu() {
  let mobHeader = document.querySelector('.header-mobile');
  if (window.innerWidth < 1200) {
      header.classList.add('hidden');
      mobHeader.classList.remove('hidden');
  } else {
    header.classList.remove('hidden');
    mobHeader.classList.add('hidden');
  }
}

menu(); 

let hamburger = document.querySelector('.hamburger'),
    nav = document.querySelector('.menu-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  if(hamburger.classList.contains('is-active')){
    nav.classList.add('active');
  }  else {
    nav.classList.remove('active');
  }
})




});
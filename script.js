window.addEventListener("load", slideIn("container", "fadeInUp", "invisible"));

/*var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$('#container').one(animationEnd, slideIn("header", "fadeInRight", "invisible"));

*/

function slideIn(element, animation, remove){
  let el = document.getElementById(element);
  el.classList.remove(remove);
  el.classList.add("animated", animation);

}

slideIn("header", "fadeInRight", "invisible");
slideIn("slogan", "fadeInLeftBig", "invisible");
slideIn("navbar", "fadeInUp", "invisible");

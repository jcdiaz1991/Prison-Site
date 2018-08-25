window.addEventListener("load", slideInLeftBig);

function slideInLeftBig(){
  var header = document.getElementById('header');
  header.style.display ="inherit";
  header.classList.add("animated","fadeInLeftBig","slower","deal-3");
  var nav = document.getElementById('navbar');
  nav.classList.remove('invisible');
  nav.classList.add("animated","fadeInUpBig");
  var slogan = document.getElementById('slogan');
  slogan.classList.remove('invisible');
  slogan.classList.add("animated", "fadeInRight", "delay-5s" );
}

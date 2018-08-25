window.addEventListener("load", slideInLeftBig);

function slideInLeftBig(){
  var header = document.getElementById('header');
  header.style.display ="inherit";
  header.classList.add("animated","fadeInLeftBig","slower","deal-3");
  var nav = document.getElementById('navbar');
  nav.style.display = "inherit"
  nav.classList.add("animated","fadeInUpBig")
}

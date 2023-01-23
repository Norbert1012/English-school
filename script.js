const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('disabled');
    event.preventDefault();
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


var navbar = document.querySelector('nav');

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-active')
  } else {
    navbar.classList.remove('navbar-active')
  }
}




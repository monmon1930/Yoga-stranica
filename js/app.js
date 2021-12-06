const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');
  const navMenu = document.querySelectorAll ('.nav-menu li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

  navMenu.forEach((link,index) => {
    if (link.style.animation) {
      	link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    } 
  });
  });
}

navSlide();

AOS.init({
  offset: 400,
  duration: 1000
});

function expand() {  
  var expandButton = document.getElementsByClassName("expand");
  var i;
  for (i = 0; i < expandButton.length; i++) {
    expandButton[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    }
  }
}

var splide = new Splide( '.splide', {
  type: 'loop',
  perPage: 3,
  rewind : true,
  autoplay: true,
  
} );

splide.mount();





import "./pages/index.css";

const buttonSerteficate = document.querySelector('.button__serteficate');
const buttosSerteficateClose = document.querySelector('.close__cross');
const popUp = document.querySelector('.popup');

const skillsBox = document.querySelector('.skills');
const skillsImg = document.querySelector('.skills__img-container');

let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
};

document.addEventListener("DOMContentLoaded", scrolling, false);

function scrolling(e){
  if (isFullyVisible(skillsBox)) {
    skillsImg.classList.add("active");
    skillsImg.classList.remove("fade");
  }else{
    skillsImg.classList.add("fade");
  }
};


function isFullyVisible(el) {
      const elementBoundary = el.getBoundingClientRect();
 
      const top = elementBoundary.top;
      const bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
};





class Popup{
  constructor(container){
    this.container = container;
  }

  open(container){
    this.container.classList.add('popup_is-opened');
  }

  close(container){
    this.container.classList.remove('popup_is-opened');
  }
};

const popup = new Popup(popUp);

buttonSerteficate.addEventListener('click', function(){
popup.open();
});

buttosSerteficateClose.addEventListener('click', function(){
popup.close();
});
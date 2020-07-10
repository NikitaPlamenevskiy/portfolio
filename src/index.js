const buttonSerteficate = document.querySelector('.button__serteficate');
const buttosSerteficateClose = document.querySelector('.close__cross');
const popUp = document.querySelector('.popup');


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
//Carousel
const carouselBtn = document.getElementsByClassName('carousel_btn');
const carouselItem = document.getElementsByClassName('carousel_item');
document.getElementById('carousel_btn__container').addEventListener('click', (e)=>{
    let i = 0;
    let carouselItemlength = carouselItem.length;
    let iii = e.target.dataset.itemid;
    if (iii == 1){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[0].classList.remove('displayNone');
        carouselItem[0].classList.add('displayBlock');
        carouselBtn[0].classList.add('carousel_btn__active');
    }
    if (iii == 2){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[1].classList.remove('displayNone');
        carouselItem[1].classList.add('displayBlock');
        carouselBtn[1].classList.add('carousel_btn__active');
    }
    if (iii == 3){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[2].classList.remove('displayNone');
        carouselItem[2].classList.add('displayBlock');
        carouselBtn[2].classList.add('carousel_btn__active');
    }
    if (iii == 4){
        for (i = 0; i < carouselItemlength; i++){
            carouselItem[i].classList.add('displayNone');
            carouselItem[i].classList.remove('displayBlock');
            carouselBtn[i].classList.remove('carousel_btn__active');
        }
        carouselItem[3].classList.remove('displayNone');
        carouselItem[3].classList.add('displayBlock');
        carouselBtn[3].classList.add('carousel_btn__active');
    }
  })
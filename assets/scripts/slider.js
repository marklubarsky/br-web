const slider = document.getElementsByClassName('main-slider-items')[0].querySelectorAll('p');
const slideNavigation = document.getElementsByClassName('main-slider-navigation')[0].querySelectorAll('img');

slideNavigation[0].addEventListener('click', prevSlide);
slideNavigation[1].addEventListener('click', nextSlide);

function nextSlide() {
    for (let i=0; i<slider.length; i++){

        if(slider[i].classList.contains('active')){
            slider[i].classList.toggle('active');
            if(i === slider.length-1){
                slider[0].classList.toggle('active');
            } else {
                slider[i+1].classList.toggle('active');
            }
            break;
        }
    }
}

function prevSlide() {
    for (let i=0; i<slider.length; i++){

        if(slider[i].classList.contains('active')){
            slider[i].classList.toggle('active');
            if(i === 0){
                slider[slider.length-1].classList.toggle('active');
            } else {
                slider[i-1].classList.toggle('active');
            }
            break;
        }
    }
}
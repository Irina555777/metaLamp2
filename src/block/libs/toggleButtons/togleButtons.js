//MIXIN toggleButtons
const toggleButtons = document.getElementsByClassName('toggleButtons_container');
const toggleButtonsWrap= document.getElementsByClassName('toggleButtons__wrap');
let OnOff = 1;
const toggleButtonsClick = function(){
    toggleButtonsWrap[0].classList.toggle("toggleButtons__displayNoneOn");
    toggleButtonsWrap[1].classList.toggle("toggleButtons__displayNoneOff");
    if(OnOff == 1){
        OnOff = 0;
    } else {
        OnOff = 1;
    }
}
toggleButtons[0].addEventListener('click', toggleButtonsClick);
toggleButtons[1].addEventListener('click', toggleButtonsClick);
const toggleButtonsClick1 = function(){
    toggleButtonsWrap[2].classList.toggle("toggleButtons__displayNoneOn");
    toggleButtonsWrap[3].classList.toggle("toggleButtons__displayNoneOff");
    if(OnOff == 1){
        OnOff = 0;
    } else {
        OnOff = 1;
    }
}
toggleButtons[2].addEventListener('click', toggleButtonsClick1);
toggleButtons[3].addEventListener('click', toggleButtonsClick1);

import './styles/index.css';

import {mult} from'./modules/calc';
import {sum} from'./modules/calc';

//MIXIN DROPDOWNSUM

//Show dropdown
const dropdownSumBtn = document.getElementsByClassName("dropdownSum_Btn");
const dropdownSumContext = document.getElementsByClassName("dropdownSum_Context");
const dropdownSumWrap = document.getElementsByClassName("dropdownSum__Wrap");
const showDropdownSumContext0 = function(){
    dropdownSumContext[0].classList.toggle("displayNone");
    dropdownSumWrap[0].classList.toggle("borderRadiusBottomNone");
} 
const showDropdownSumContext1 = function(){
    dropdownSumContext[1].classList.toggle("displayNone");
    dropdownSumWrap[1].classList.toggle("borderRadiusBottomNone");
} 
dropdownSumBtn[0].addEventListener('click', showDropdownSumContext0);
dropdownSumBtn[1].addEventListener('click', showDropdownSumContext1);

//Plus and minus Adults
let countAdults = 0;
const BtnMinusAdults = document.getElementById('BtnMinusAdults');
const BtnPlusAdults = document.getElementById('BtnPlusAdults');
const ResultAdults = document.getElementById('ResultAdults');
const BtnMinusAdultsClick = function(){
    countAdults--;
    if (countAdults < 0){
        countAdults = 0
    }
    ResultAdults.innerHTML = countAdults
}
const BtnPlusAdultsClick = function(){
    countAdults++;
    ResultAdults.innerHTML = countAdults
}
BtnMinusAdults.addEventListener('click', BtnMinusAdultsClick);
BtnPlusAdults.addEventListener('click', BtnPlusAdultsClick)

//Plus and minus Children
let countChildren = 0;
const BtnMinusChildren = document.getElementById('BtnMinusChildren');
const ResultChildren = document.getElementById('ResultChildren');
const BtnPlusChildren = document.getElementById('BtnPlusChildren');
const BtnMinushCildrenClick = function(){
    countChildren--;
    if (countChildren < 0){
        countChildren = 0;
    }
    ResultChildren.innerHTML = countChildren
}
const BtnPlushCildrenClick = function(){
    countChildren++;
    ResultChildren.innerHTML = countChildren;
}
BtnMinusChildren.addEventListener('click', BtnMinushCildrenClick);
BtnPlusChildren.addEventListener('click', BtnPlushCildrenClick);

//Plus and minus Babies
let countBabies = 0;
const BtnMinusBabies = document.getElementById('BtnMinusBabies');
const ResultBabies = document.getElementById('ResultBabies');
const BtnPlusBabies = document.getElementById('BtnPlusBabies');
const BtnMinushBabiesClick = function(){
    countBabies--;
    if (countBabies < 0){
        countBabies = 0
    }
    ResultBabies.innerHTML = countBabies;
}
const BtnPlushBabiesClick = function(){
    countBabies++;
    if (countBabies < 0){
        countBabies = 0
    }
    ResultBabies.innerHTML = countBabies;
}
BtnMinusBabies.addEventListener('click', BtnMinushBabiesClick);
BtnPlusBabies.addEventListener('click', BtnPlushBabiesClick);

//Button #dropdownSum_BtnApplay
const dropdownSum_BtnApplay = document.getElementById('dropdownSum_BtnApplay');
//const dropdownSum_Text = document.getElementById('dropdownSum_Text');
const guestsSumId = document.getElementById('guestsSumId');
const dropdownSum_BtnApplayClick = function(){
    let result = countAdults + countChildren + countBabies;
    guestsSumId.innerHTML = 'гостей' + result;
    dropdownSum_BtnClear.classList.remove('dropdownSum_BtnClear__opasity0');
}
dropdownSum_BtnApplay.addEventListener('click', dropdownSum_BtnApplayClick)

//Button dropdownSum_BtnClear
const dropdownSum_BtnClear = document.getElementById('dropdownSum_BtnClear');
const dropdownSum_BtnClearClick = function(){
    countAdults = 0;
    countChildren = 0;
    countBabies = 0;
    ResultAdults.innerHTML = countAdults;
    ResultChildren.innerHTML = countChildren;
    ResultBabies.innerHTML = countBabies;
    guestsSumId.innerHTML = 'сколько гостей'
}
dropdownSum_BtnClear.addEventListener('click', dropdownSum_BtnClearClick)

//Drobdown rooms
//Plus and minus Bedrooms
const roomsSumId = document.getElementById('roomsSumId');
let countBdrooms = 0;
const BtnMinusBedrooms = document.getElementById('BtnMinusBedrooms');
const BtnPlusBedrooms = document.getElementById('BtnPlusBedrooms');
const ResultBedrooms = document.getElementById('ResultBedrooms');
const BtnMinusBedroomsClick = function(){
    countBdrooms--;
    if (countBdrooms < 0){
        countBdrooms = 0
    }
    ResultBedrooms.innerHTML = countBdrooms;
    roomsSumId.innerHTML = countBdrooms + ' спальни, ' + countBeds + ' кровати, ' + countBathroom + ' ванные комнаты ';
}
const BtnPlusBedroomsClick = function(){
    countBdrooms++;
    ResultBedrooms.innerHTML = countBdrooms;
    roomsSumId.innerHTML = countBdrooms + ' спальни, ' + countBeds + ' кровати, ' + countBathroom + ' ванные комнаты ';
}
BtnMinusBedrooms.addEventListener('click', BtnMinusBedroomsClick);
BtnPlusBedrooms.addEventListener('click', BtnPlusBedroomsClick);

//Plus and minus beds
let countBeds = 0;
const BtnMinusBeds = document.getElementById('BtnMinusBeds');
const BtnPlusBeds = document.getElementById('BtnPlusBeds');
const ResultBeds = document.getElementById('ResultBeds');
const BtnMinusBedsClick = function(){
    countBeds--;
    if (countBeds < 0){
        countBeds = 0
    }
    ResultBeds.innerHTML = countBeds;
    roomsSumId.innerHTML = countBdrooms + ' спальни ,' + countBeds + ' кровати, ' + countBathroom + ' ванные комнаты ';
}
const BtnPlusBedsClick = function(){
    countBeds++;
    ResultBeds.innerHTML = countBeds;
    roomsSumId.innerHTML = countBdrooms + ' спальни, ' + countBeds + ' кровати,' + countBathroom + ' ванные комнаты ';
}
BtnMinusBeds.addEventListener('click', BtnMinusBedsClick);
BtnPlusBeds.addEventListener('click', BtnPlusBedsClick);

//Plus and minus bathroom
let countBathroom = 0;
const BtnMinusBathroom = document.getElementById('BtnMinusBathroom');
const BtnPlusBathroom = document.getElementById('BtnPlusBathroom');
const ResultBathroom = document.getElementById('ResultBathroom');
const BtnMinusBathroomClick = function(){
    countBathroom--;
    if (countBathroom < 0){
        countBathroom = 0
    }
    ResultBathroom.innerHTML = countBathroom;
    roomsSumId.innerHTML = countBdrooms + ' спальни, ' + countBeds + ' кровати,' + countBathroom + 'ванные комнаты';
}
const BtnPlusBathroomClick = function(){
    countBathroom++;
    ResultBathroom.innerHTML = countBathroom;
    roomsSumId.innerHTML = countBdrooms + ' спальни,' + countBeds + ' кровати, ' + countBathroom + 'ванные комнаты';
}
BtnMinusBathroom.addEventListener('click', BtnMinusBathroomClick);
BtnPlusBathroom.addEventListener('click', BtnPlusBathroomClick);

//MIXIN DROPDOWNCHECKBOX
const dropdownCheckboxWrap = document.getElementsByClassName('dropdownCheckbox__Wrap');
const dropdownCheckboxContent = document.getElementsByClassName('dropdownCheckbox_content');
const dropdownCheckboxBtn = document.getElementsByClassName('dropdownCheckbox_btn');
const dropdownCheckboxWrapClick0 = function(){
    dropdownCheckboxContent[0].classList.toggle("displayNone");
    dropdownCheckboxBtn[0].classList.toggle("displayNone");
    dropdownCheckboxBtn[1].classList.toggle("displayNone");
}
const dropdownCheckboxWrapClick1 = function(){
    dropdownCheckboxContent[1].classList.toggle("displayNone");
    dropdownCheckboxBtn[2].classList.toggle("displayNone");
    dropdownCheckboxBtn[3].classList.toggle("displayNone");
}
const dropdownCheckboxWrapClick2 = function(){
    dropdownCheckboxContent[2].classList.toggle("displayNone");
    dropdownCheckboxBtn[4].classList.toggle("displayNone");
    dropdownCheckboxBtn[5].classList.toggle("displayNone");
}
dropdownCheckboxWrap[0].addEventListener('click', dropdownCheckboxWrapClick0);
dropdownCheckboxWrap[1].addEventListener('click', dropdownCheckboxWrapClick1);
dropdownCheckboxWrap[2].addEventListener('click', dropdownCheckboxWrapClick2);

//MIXIN toggleButtons
const toggleButtons = document.getElementsByClassName('toggleButtons_container');
const toggleButtonsWrap= document.getElementsByClassName('toggleButtons__wrap');
let OnOff = 1;
const toggleButtonsClick = function(){
    toggleButtonsWrap[0].classList.toggle("toggleButtons__displayNoneOn");
    toggleButtonsWrap[1].classList.toggle("toggleButtons__displayNoneOff");
    if(OnOff == 1){
        OnOff = 0;
        console.log(OnOff);
    } else {
        OnOff = 1;
        console.log(OnOff);
    }
}
toggleButtons[0].addEventListener('click', toggleButtonsClick);
toggleButtons[1].addEventListener('click', toggleButtonsClick);
const toggleButtonsClick1 = function(){
    toggleButtonsWrap[2].classList.toggle("toggleButtons__displayNoneOn");
    toggleButtonsWrap[3].classList.toggle("toggleButtons__displayNoneOff");
    if(OnOff == 1){
        OnOff = 0;
        console.log(OnOff);
    } else {
        OnOff = 1;
        console.log(OnOff);
    }
}
toggleButtons[2].addEventListener('click', toggleButtonsClick1);
toggleButtons[3].addEventListener('click', toggleButtonsClick1);












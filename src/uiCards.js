import './styles/index.css';
import './block/libs/card/card';
import './block/libs/signUp/signUp';
import './block/libs/toggleButtons/togleButtons.js';
import './block/libs/reservation/reservation.js';

//Show dropdown
const dropdownSumBtn4 = document.getElementById('dropdownSum_Btn4');
const dropdownSumContext4 = document.getElementById('dropdownSum_context4');
const dropdownSumWrap4 = document.getElementById('dropdownSum_Wrap4');
const showDropdownSumContext4 = function(){
    dropdownSumContext4.classList.toggle("displayNone");
    dropdownSumWrap4.classList.toggle("borderRadiusBottomNone");
} 
dropdownSumBtn4.addEventListener('click', showDropdownSumContext4);
//Plus and minus Adults
let countAdults2 = 0;
const BtnMinusAdults2 = document.getElementById('BtnMinusAdults2');
const BtnPlusAdults2 = document.getElementById('BtnPlusAdults2');
const ResultAdults2 = document.getElementById('ResultAdults2');
const BtnMinusAdultsClick2 = function(){
    countAdults2--;
    if (countAdults2 <= 0){
        countAdults2 = 0
    }
    ResultAdults2.innerHTML = countAdults2
}
const BtnPlusAdultsClick2 = function(){
    countAdults2++;
    ResultAdults2.innerHTML = countAdults2
}
BtnMinusAdults2.addEventListener('click', BtnMinusAdultsClick2);
BtnPlusAdults2.addEventListener('click', BtnPlusAdultsClick2);
//Plus and minus Children
let countChildren2 = 0;
const BtnMinusChildren2 = document.getElementById('BtnMinusChildren2');
const ResultChildren2 = document.getElementById('ResultChildren2');
const BtnPlusChildren2 = document.getElementById('BtnPlusChildren2');
const BtnMinushCildrenClick2 = function(){
    countChildren2--;
    if (countChildren2 <= 0){
        countChildren2 = 0;
    }
    ResultChildren2.innerHTML = countChildren2
}
const BtnPlushCildrenClick2 = function(){
    countChildren2++;
    ResultChildren2.innerHTML = countChildren2;
}
BtnMinusChildren2.addEventListener('click', BtnMinushCildrenClick2);
BtnPlusChildren2.addEventListener('click', BtnPlushCildrenClick2);
//Plus and minus Babies
let countBabies2 = 0;
const BtnMinusBabies2 = document.getElementById('BtnMinusBabies2');
const ResultBabies2 = document.getElementById('ResultBabies2');
const BtnPlusBabies2 = document.getElementById('BtnPlusBabies2');
const BtnMinushBabiesClick2 = function(){
    countBabies2--;
    if (countBabies2 <= 0){
        countBabies2 = 0
    }
    ResultBabies2.innerHTML = countBabies2;
}
const BtnPlushBabiesClick2 = function(){
    countBabies2++;
    if (countBabies2 < 0){
        countBabies2 = 0
    }
    ResultBabies2.innerHTML = countBabies2;
}
BtnMinusBabies2.addEventListener('click', BtnMinushBabiesClick2);
BtnPlusBabies2.addEventListener('click', BtnPlushBabiesClick2);
//Button #dropdownSum_BtnApplay
const dropdownSum_BtnApplay2 = document.getElementById('dropdownSumBtnApplay2');
const guestsSumId2 = document.getElementById('guestsSumId2');
const dropdownSum_BtnApplayClick2 = function(){
    let result2 = countAdults2 + countChildren2 + countBabies2;
    guestsSumId2.innerHTML = 'гостей' + result2;
    dropdownSum_BtnClear2.classList.remove('dropdownSum_BtnClear__opasity0');
}
dropdownSum_BtnApplay2.addEventListener('click', dropdownSum_BtnApplayClick2);
//Button dropdownSum_BtnClear
const dropdownSum_BtnClear2 = document.getElementById('dropdownSum_BtnClear2');
const dropdownSum_BtnClearClick2= function(){
    countAdults2 = 0;
    countChildren2 = 0;
    countBabies2 = 0;
    ResultAdults2.innerHTML = countAdults2;
    ResultChildren2.innerHTML = countChildren2;
    ResultBabies2.innerHTML = countBabies2;
    guestsSumId2.innerHTML = 'сколько гостей';
}
dropdownSum_BtnClear2.addEventListener('click', dropdownSum_BtnClearClick2);







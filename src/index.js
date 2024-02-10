
import './styles/index.css';

import {mult} from'./modules/calc';
import {sum} from'./modules/calc';

console.log(mult(2,10));
console.log(sum(3,4));

const button = document.getElementById('dropdownSumBtn');
const showDropdownSumContext = function(){
    dropdownSumContextId.classList.toggle("displayNone");
    dropdownSumWrapId.classList.toggle("borderRadiusBottomNone");
} 
button.addEventListener('click', showDropdownSumContext);

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
const dropdownSum_Text = document.getElementById('dropdownSum_Text');
const dropdownSum_BtnApplayClick = function(){
    let result = countAdults + countChildren + countBabies;
    dropdownSum_Text.innerHTML = 'гостей' + '' + result;
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
    dropdownSum_Text.innerHTML = 'сколько гостей'
}
dropdownSum_BtnClear.addEventListener('click', dropdownSum_BtnClearClick)








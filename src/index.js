
import './styles/index.css';

import {mult} from'./modules/calc';
import {sum} from'./modules/calc';
//import './block/libs/dropdownSum/dropdownSum.js';

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
    ResultChildren.innerHTML = countChildren
}
const BtnPlushCildrenClick = function(){
    countChildren++;
    ResultChildren.innerHTML = countChildren
}
BtnMinusChildren.addEventListener('click', BtnMinushCildrenClick);
BtnPlusChildren.addEventListener('click', BtnPlushCildrenClick);









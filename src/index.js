
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

let count = 0;
const BtnMinusAdults = document.getElementById('BtnMinusAdults');
const BtnPlusAdults = document.getElementById('BtnPlusAdults');
const ResultAdults = document.getElementById('ResultAdults');
const BtnMinusAdultsClick = function(){
    count--;
    ResultAdults.innerHTML = count
}
const BtnPlusAdultsClick = function(){
    count++;
    ResultAdults.innerHTML = count
}
BtnMinusAdults.addEventListener('click', BtnMinusAdultsClick);
BtnPlusAdults.addEventListener('click', BtnPlusAdultsClick)







import './styles/index.css';
import './calendar.ts';

//MIXIN DROPDOWNSUM

//Show dropdown
const dropdownSumBtn1 = document.getElementById('dropdownSum_Btn1');
const dropdownSumContext1 = document.getElementById('dropdownSum_context1');
const dropdownSumWrap1 = document.getElementById('dropdownSum_Wrap1');
const showDropdownSumContext1 = function(){
    dropdownSumContext1.classList.toggle("displayNone");
    dropdownSumWrap1.classList.toggle("borderRadiusBottomNone");
} 
dropdownSumBtn1.addEventListener('click', showDropdownSumContext1);

const dropdownSumBtn2 = document.getElementById('dropdownSum_Btn2');
const dropdownSumContext2 = document.getElementById('dropdownSum_context2');
const dropdownSumWrap2 = document.getElementById('dropdownSum_Wrap2');
const showDropdownSumContext2 = function(){
    dropdownSumContext2.classList.toggle("displayNone");
    dropdownSumWrap2.classList.toggle("borderRadiusBottomNone");
} 
dropdownSumBtn2.addEventListener('click', showDropdownSumContext2);

const dropdownSumBtn3 = document.getElementById('dropdownSum_Btn3');
const dropdownSumContext3 = document.getElementById('dropdownSum_context3');
const dropdownSumWrap3 = document.getElementById('dropdownSum_Wrap3');
const showDropdownSumContext3 = function(){
    dropdownSumContext3.classList.toggle("displayNone");
    dropdownSumWrap3.classList.toggle("borderRadiusBottomNone");
} 
dropdownSumBtn3.addEventListener('click', showDropdownSumContext3);

//Plus and minus Adults
let countAdults = 0;
const BtnMinusAdults = document.getElementById('BtnMinusAdults');
const BtnPlusAdults = document.getElementById('BtnPlusAdults');
const ResultAdults = document.getElementById('ResultAdults');
const BtnMinusAdultsClick = function(){
    countAdults--;
    if (countAdults <= 0){
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
let countAdults1 = 0;
const BtnMinusAdults1 = document.getElementById('BtnMinusAdults1');
const BtnPlusAdults1 = document.getElementById('BtnPlusAdults1');
const ResultAdults1 = document.getElementById('ResultAdults1');
const BtnMinusAdultsClick1 = function(){
    countAdults1--;
    if (countAdults1 < 0){
        countAdults1 = 0
    }
    ResultAdults1.innerHTML = countAdults1
}
const BtnPlusAdultsClick1 = function(){
    countAdults1++;
    ResultAdults1.innerHTML = countAdults1
}
BtnMinusAdults1.addEventListener('click', BtnMinusAdultsClick1);
BtnPlusAdults1.addEventListener('click', BtnPlusAdultsClick1)

//Plus and minus Children
let countChildren = 0;
const BtnMinusChildren = document.getElementById('BtnMinusChildren');
const ResultChildren = document.getElementById('ResultChildren');
const BtnPlusChildren = document.getElementById('BtnPlusChildren');
const BtnMinushCildrenClick = function(){
    countChildren--;
    if (countChildren <= 0){
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

let countChildren1 = 0;
const BtnMinusChildren1 = document.getElementById('BtnMinusChildren1');
const ResultChildren1 = document.getElementById('ResultChildren1');
const BtnPlusChildren1 = document.getElementById('BtnPlusChildren1');
const BtnMinushCildrenClick1 = function(){
    countChildren1--;
    if (countChildren1 < 0){
        countChildren1 = 0;
    }
    ResultChildren1.innerHTML = countChildren1
}
const BtnPlushCildrenClick1 = function(){
    countChildren1++;
    ResultChildren1.innerHTML = countChildren1;
}
BtnMinusChildren1.addEventListener('click', BtnMinushCildrenClick1);
BtnPlusChildren1.addEventListener('click', BtnPlushCildrenClick1);

//Plus and minus Babies
let countBabies = 0;
const BtnMinusBabies = document.getElementById('BtnMinusBabies');
const ResultBabies = document.getElementById('ResultBabies');
const BtnPlusBabies = document.getElementById('BtnPlusBabies');
const BtnMinushBabiesClick = function(){
    countBabies--;
    if (countBabies <= 0){
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

let countBabies1 = 0;
const BtnMinusBabies1 = document.getElementById('BtnMinusBabies1');
const ResultBabies1 = document.getElementById('ResultBabies1');
const BtnPlusBabies1 = document.getElementById('BtnPlusBabies1');
const BtnMinushBabiesClick1 = function(){
    countBabies1--;
    if (countBabies1 < 0){
        countBabies1 = 0
    }
    ResultBabies1.innerHTML = countBabies1;
}
const BtnPlushBabiesClick1 = function(){
    countBabies1++;
    if (countBabies1 < 0){
        countBabies1 = 0
    }
    ResultBabies1.innerHTML = countBabies1;
}
BtnMinusBabies1.addEventListener('click', BtnMinushBabiesClick1);
BtnPlusBabies1.addEventListener('click', BtnPlushBabiesClick1);

//Button #dropdownSum_BtnApplay
const dropdownSum_BtnApplay = document.getElementById('dropdownSumBtnApplay');
const guestsSumId = document.getElementById('guestsSumId');
const dropdownSum_BtnApplayClick = function(){
    let result = countAdults + countChildren + countBabies;
    guestsSumId.innerHTML = 'гостей' + result;
    dropdownSum_BtnClear.classList.remove('dropdownSum_BtnClear__opasity0');
}
dropdownSum_BtnApplay.addEventListener('click', dropdownSum_BtnApplayClick)

const dropdownSum_BtnApplay1 = document.getElementById('dropdownSum_BtnApplay1');
const guestsSumId1 = document.getElementById('guestsSumId1');
const dropdownSum_BtnApplayClick1 = function(){
    let result1 = countAdults1 + countChildren1 + countBabies1;
    guestsSumId1.innerHTML = 'гостей' + result1;
    dropdownSum_BtnClear1.classList.remove('dropdownSum_BtnClear__opasity0');
}
dropdownSum_BtnApplay1.addEventListener('click', dropdownSum_BtnApplayClick1)

/*const dropdownSum_BtnApplay2 = document.getElementById('dropdownSum_BtnApplay2');
const guestsSumId2 = document.getElementById('guestsSumId2');
const dropdownSum_BtnApplayClick2 = function(){
    let result2 = countAdults2 + countChildren2 + countBabies2;
    guestsSumId2.innerHTML = 'гостей' + result2;
    dropdownSum_BtnClear2.classList.remove('dropdownSum_BtnClear__opasity0');
}
dropdownSum_BtnApplay2.addEventListener('click', dropdownSum_BtnApplayClick2)*/

//Button dropdownSum_BtnClear
//const dropdownSum_BtnClear1 = document.getElementById('dropdownSum_BtnClear');
const dropdownSum_BtnClear = document.getElementById('dropdownSum_BtnClear');
const dropdownSum_BtnClearClick= function(){
    countAdults = 0;
    countChildren = 0;
    countBabies = 0;
    ResultAdults.innerHTML = countAdults;
    ResultChildren.innerHTML = countChildren;
    ResultBabies.innerHTML = countBabies;
    guestsSumId.innerHTML = 'сколько гостей';
}
dropdownSum_BtnClear.addEventListener('click', dropdownSum_BtnClearClick);
const dropdownSum_BtnClear1 = document.getElementById('dropdownSum_BtnClear1');
const dropdownSum_BtnClearClick1 = function(){
    countAdults1 = 0;
    countChildren1 = 0;
    countBabies1 = 0;
    ResultAdults1.innerHTML = countAdults1;
    ResultChildren1.innerHTML = countChildren1;
    ResultBabies1.innerHTML = countBabies1;
    guestsSumId1.innerHTML = 'сколько гостей';
}
dropdownSum_BtnClear1.addEventListener('click', dropdownSum_BtnClearClick1)

/*const dropdownSum_BtnClear2 = document.getElementById('dropdownSum_BtnClear2');
const dropdownSum_BtnClearClick2 = function(){
    countAdults2 = 0;
    countChildren2 = 0;
    countBabies2 = 0;
    ResultAdults2.innerHTML = countAdults2;
    ResultChildren2.innerHTML = countChildren2;
    ResultBabies2.innerHTML = countBabies2;
    guestsSumId2.innerHTML = 'сколько гостей';
}
dropdownSum_BtnClear2.addEventListener('click', dropdownSum_BtnClearClick2)*/

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
//dropdownCheckboxWrap[0].addEventListener('click', dropdownCheckboxWrapClick0);
dropdownCheckboxWrap[1].addEventListener('click', dropdownCheckboxWrapClick1);
//dropdownCheckboxWrap[2].addEventListener('click', dropdownCheckboxWrapClick2);

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

//RANGE
const rangeMinText = document.getElementById('rangeSlider_minValue');
rangeMinText.innerHTML = document.getElementById('rangeMin').value;
document.getElementById('rangeMin').addEventListener('change', function(){
    rangeMinText.innerHTML = this.value
});

const rangeMaxText = document.getElementById('rangeSlider_maxValue');
rangeMaxText.innerHTML = document.getElementById('rangeMax').value +100;
document.getElementById('rangeMax').addEventListener('change', function(){
    rangeMaxText.innerHTML = +this.value + 100
});

let val = document.querySelector('.rangeSlider_min__wrap input[type="range"]');
let range = val.value;
val.addEventListener("input", function() { 
  let range = val.value + '%';
  val.style.setProperty("--litters-range", range);
});

let val1 = document.querySelector('.rangeSlider_max__wrap input[type="range"]');
let range1 = val.value;
val1.addEventListener("input", function() { 
  let range1 = val1.value + '%';
  val1.style.setProperty("--litters-range1", range1);
});

//PAGINATION
const paginationLi = document.getElementsByClassName('pagination_li');
let totalPages1 = 15;
const list = document.getElementById("list");
const countBtnPlus = document.getElementById('pagination_BtnPlus');
const countBtnMinus = document.getElementById('pagination_BtnMinus');
let count = 0;
const liBtnPlusClick = function(){
    count++;
    list.innerHTML = '';
    if(count == 1){
        list.innerHTML = `<li>${count}</li>
                      <li class='pagination_li__active'>${count + 1}</li>  
                      <li>${count + 2}</li>
                      <li><span>...</span></li>
                      <li>${totalPages1}</li>`
                      countBtnMinus.classList.remove('displayNone');
                      countBtnMinus.classList.add('displayFlex');
    } 
    if(count == 2){
      
        list.innerHTML = `<li>${count - 1}</li>
        <li>${count}</li>  
        <li class='pagination_li__active'>${count + 1}</li>
        <li><span>...</span></li>
        <li>${totalPages1}</li>`  
    } 
    if(count >= 3 && count < 12){
        list.innerHTML = ` 
                      <li>${count - 1}</li>   
                      <li>${count}</li>  
                      <li class='pagination_li__active'>${count + 1}</li> 
                      <li><span>...</span></li>
                      <li>${totalPages1}</li>`
    } 
    if(count == 12){
        list.innerHTML = `
        <li><span>...</span></li>
        <li class='pagination_li__active'>${count + 1}</li>
        <li>${count + 2}</li>  
        <li>${count + 3}</li>`
    }
    if(count == 13){
        list.innerHTML = `
        <li><span>...</span></li>
        <li>${count}</li>
        <li class='pagination_li__active'>${count + 1}</li>  
        <li>${count + 2}</li>`
    }
    if(count == 14){
        list.innerHTML = `
        <li><span>...</span></li>
        <li>${count - 1}</li>
        <li>${count}</li>  
        <li class='pagination_li__active'>${count + 1}</li>`
        countBtnPlus.classList.toggle('displayNone');
        countBtnPlus.classList.toggle('displayFlex');
    }
}
const liBtnMinusClick = function(){
    count--;
    if(count == 13){
        list.innerHTML = `
        <li><span>...</span></li>
        <li>${count}</li>
        <li class='pagination_li__active'>${count + 1}</li>  
        <li>${count + 2}</li>`
        countBtnPlus.classList.add('displayFlex');
        countBtnPlus.classList.remove('displayNone');
    }
    if(count == 12){
        list.innerHTML = `
        <li><span>...</span></li>
        <li class='pagination_li__active'>${count}</li>
        <li>${count + 1}</li>  
        <li>${count + 2}</li>`
    }
    if(count >= 3 && count < 12){
        list.innerHTML = `  
                      <li>${count}</li>  
                      <li class='pagination_li__active'>${count + 1}</li> 
                      <li><span>...</span></li> 
                      <li>${totalPages1}</li>`
    } 
    if(count == 2){
        list.innerHTML = `<li>${count - 1}</li>
        <li>${count}</li>  
        <li class='pagination_li__active'>${count + 1}</li>
        <li><span>...</span></li> 
        <li>${totalPages1}</li>` 
    }
    if(count == 1){
        list.innerHTML = `<li>${count}</li>
        <li class='pagination_li__active'>${count + 1}</li>  
        <li>${count + 2}</li>
        <li><span>...</span></li> 
        <li>${totalPages1}</li>` 
    }
    if(count == 0){
        list.innerHTML = `<li class='pagination_li__active'>${count + 1}</li>
        <li>${count + 2}</li>  
        <li>${count + 3}</li>
        <li><span>...</span></li> 
        <li>${totalPages1}</li>`  
        countBtnMinus.classList.remove('displayFlex'); 
        countBtnMinus.classList.add('displayNone');
    }
    if(count <= 0){
        count = 0
    }
}
countBtnPlus.addEventListener('click', liBtnPlusClick);
countBtnMinus.addEventListener('click', liBtnMinusClick)

import './styles/index.css';
import './calendar.ts';

import {mult} from'./modules/calc';
import {sum} from'./modules/calc';

//MIXIN DROPDOWNSUM

//Show dropdown
const dropdownSumBtn = document.getElementsByClassName("dropdownSum_Btn");
const dropdownSumContext = document.getElementsByClassName("dropdownSum_Context");
const dropdownSumWrap = document.getElementsByClassName("dropdownSum__Wrap");
const showDropdownSumContext2 = function(){
    dropdownSumContext[2].classList.toggle("displayNone");
    dropdownSumWrap[2].classList.toggle("borderRadiusBottomNone");
} 
const showDropdownSumContext3 = function(){
    dropdownSumContext[3].classList.toggle("displayNone");
    dropdownSumWrap[3].classList.toggle("borderRadiusBottomNone");
} 
const showDropdownSumContext4 = function(){
    dropdownSumContext[4].classList.toggle("displayNone");
    dropdownSumWrap[4].classList.toggle("borderRadiusBottomNone");
} 
dropdownSumBtn[2].addEventListener('click', showDropdownSumContext2);
dropdownSumBtn[3].addEventListener('click', showDropdownSumContext3);
dropdownSumBtn[4].addEventListener('click', showDropdownSumContext4);

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
const dropdownSum_BtnApplay = document.getElementById('dropdownSum_BtnApplay');
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

const dropdownSum_BtnClear1 = document.getElementById('dropdownSum_BtnClear1');
const dropdownSum_BtnClearClick1 = function(){
    countAdults1 = 0;
    countChildren1 = 0;
    countBabies1 = 0;
    ResultAdults1.innerHTML = countAdults1;
    ResultChildren1.innerHTML = countChildren1;
    ResultBabies1.innerHTML = countBabies1;
    guestsSumId1.innerHTML = 'сколько гостей'
}
dropdownSum_BtnClear1.addEventListener('click', dropdownSum_BtnClearClick1)

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
                      <li>${count}</li>  
                      <li class='pagination_li__active'>${count + 1}</li> 
                      <li><span>...</span></li>
                      <li>${totalPages1}</li>`
    } 
    if(count == 12){
        list.innerHTML = `<li class='pagination_li__active'>${count + 1}</li>
        <li>${count + 2}</li>  
        <li>${count + 3}</li>`
    }
    if(count == 13){
        list.innerHTML = `<li>${count}</li>
        <li class='pagination_li__active'>${count + 1}</li>  
        <li>${count + 2}</li>`
    }
    if(count == 14){
        list.innerHTML = `<li>${count - 1}</li>
        <li>${count}</li>  
        <li class='pagination_li__active'>${count + 1}</li>`
        countBtnPlus.classList.toggle('displayNone');
        countBtnPlus.classList.toggle('displayFlex');
    }
}
const liBtnMinusClick = function(){
    count--;
    if(count == 13){
        list.innerHTML = `<li>${count}</li>
        <li class='pagination_li__active'>${count + 1}</li>  
        <li>${count + 2}</li>`
    }
    if(count == 12){
        list.innerHTML = `<li class='pagination_li__active'>${count}</li>
        <li>${count + 1}</li>  
        <li>${count + 2}</li>`
    }
    if(count >= 3 && count < 12){
        list.innerHTML = `  
                      <li>${count}</li>  
                      <li class='pagination_li__active'>${count + 1}</li> 
                      <li><span>...</span></li> 
                      <li>${totalPages1}</li>`
                      countBtnPlus.classList.toggle('displayNone');
                      countBtnPlus.classList.toggle('displayFlex');
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
        countBtnMinus.classList.toggle('displayNone');
        //countBtnMinus.classList.toggle('displayFlex');
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

//CALENDAR

/*var Cal = function(divId) {
    //Сохраняем идентификатор div
    this.divId = divId;
    // Дни недели с понедельника
    this.DaysOfWeek = [
      'Пн',
      'Вт',
      'Ср',
      'Чтв',
      'Птн',
      'Суб',
      'Вск'
    ];
    // Месяцы начиная с января
    this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    //Устанавливаем текущий месяц, год
    var d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
  };
  // Переход к следующему месяцу
  Cal.prototype.nextMonth = function() {
    if ( this.currMonth == 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  };
  // Переход к предыдущему месяцу
  Cal.prototype.previousMonth = function() {
    if ( this.currMonth == 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  };
  // Показать текущий месяц
  Cal.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);
  };
  // Показать месяц (год, месяц)
  Cal.prototype.showMonth = function(y, m) {
    var d = new Date()
    // Первый день недели в выбранном месяце 
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    // Последний день выбранного месяца
    , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    // Последний день предыдущего месяца
    , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
    var html = '<table>';
    // Запись выбранного месяца и года
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
    html += '</tr></thead>';
    // заголовок дней недели
    html += '<tr class="days">';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
    // Записываем дни
    var i=1;
    do {
      var dow = new Date(y, m, i).getDay();
      // Начать новую строку в понедельник
      if ( dow == 1 ) {
        html += '<tr>';
      }
      // Если первый день недели не понедельник показать последние дни предыдущего месяца
      else if ( i == 1 ) {
        html += '<tr>';
        var k = lastDayOfLastMonth - firstDayOfMonth+1;
        for(var j=0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      // Записываем текущий день в цикл
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      // закрыть строку в воскресенье
      if ( dow == 0 ) {
        html += '</tr>';
      }
      // Если последний день месяца не воскресенье, показать первые дни следующего месяца
      else if ( i == lastDateOfMonth ) {
        var k=1;
        for(dow; dow < 7; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      i++;
    }while(i <= lastDateOfMonth);
    // Конец таблицы
    html += '</table>';
    // Записываем HTML в div
    document.getElementById(this.divId).innerHTML = html;
  };
  // При загрузке окна
  window.onload = function() {
    // Начать календарь
    var c = new Cal("divCal");			
    c.showcurr();
    // Привязываем кнопки «Следующий» и «Предыдущий»
    getId('btnNext').onclick = function() {
      c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
      c.previousMonth();
    };
  }
  // Получить элемент по id
  function getId(id) {
    return document.getElementById(id);
  }*/









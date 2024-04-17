const infoPrice = document.getElementsByClassName('info_price');
const infoDaySum = document.getElementsByClassName('info_daySum');
const infoSum = document.getElementsByClassName('info_sum');
const discount = document.getElementsByClassName('discount');
const infoServiceFee = document.getElementsByClassName('info_serviceFee');
const totalSum = document.getElementsByClassName('totalSum');
const sumUp = function(){
    const sum =parseInt(infoPrice[0].innerHTML) * parseInt(infoDaySum[0].innerHTML);
    infoSum[0].innerHTML = sum;
}

sumUp();
const totalSumUp = function(){
    const sumAll = parseInt(infoPrice[0].innerHTML) * parseInt(infoDaySum[0].innerHTML)
    - parseInt(discount[0].innerHTML) + parseInt(infoServiceFee[0].innerHTML) + parseInt(infoServiceFee[1].innerHTML);
    totalSum[0].innerHTML = sumAll;
}
totalSumUp();

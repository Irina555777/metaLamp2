import './styles/index.css';
import './block/libs/toggleButtons/togleButtons.js';

const btnSignUp = document.getElementById('btnSignUp');
const btnSignIn = document.getElementById('btnSignIn');
const popUpSignUpWrap = document.getElementById('popUpSignUpWrap');
const popUpSignInWrap = document.getElementById('popUpSignInWrap');
const btnPopUpSignUp = document.getElementById('btnPopUpSignUp');
const btnPopUpSignIn = document.getElementById('btnPopUpSignIn');
const SignUpShow = function(){
    popUpSignUpWrap.classList.remove('displayNone');
    popUpSignInWrap.classList.add('displayNone')
}
const SignInShow = function(){
    popUpSignInWrap.classList.remove('displayNone');
    popUpSignUpWrap.classList.add('displayNone');
}
btnSignUp.addEventListener('click', SignUpShow);
btnSignIn.addEventListener('click', SignInShow);
btnPopUpSignUp.addEventListener('click', SignInShow);
btnPopUpSignIn.addEventListener('click', SignUpShow);
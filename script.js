'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.send-form'),
          btn = form.querySelector('.send-btn'),
          input = form.querySelector('input'),
          out = document.querySelector('.output');


    btn.addEventListener('click', () => {
        console.log(input.value);
        if (~input.value.toLowerCase().indexOf('хуй')){
            out.textContent = 'У Олега маленькая писька';
        }else{
            out.textContent = toLower(input.value);
        }
    });

    function toLower (text){
        return text.toLowerCase();
    }
});

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.send-form'),
          btn = form.querySelector('.send-btn'),
          input = form.querySelector('input'),
          out = document.querySelector('.output');


    btn.addEventListener('click', () => {
        console.log(input.value);
        if (input.value.toLowerCase().replace(/ /g,"") == 'хуй'){
            out.textContent = 'Меньше некуда 🤡';
        }else{
            out.textContent = toLower(input.value);
        }
    });

    function toLower (text){
        return text.toLowerCase();
    }
});

'use strict';

const form = document.querySelector('.send-form'),
      btn = form.querySelector('.send-btn'),
      input = form.querySelector('input'),
      out = document.querySelector('.output');


btn.addEventListener('click', () => {
    console.log(input.value);
    out.textContent = toLower(input.value);
});

function toLower (text){
    return text.toLowerCase();
}


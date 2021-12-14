'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.send-form'),
          btn = form.querySelector('.send-btn'),
          input = form.querySelector('input'),
          out = document.querySelector('.output'),
          audioBtn = document.querySelector('.audio_btn'),
          player = document.querySelector('#player');
    let i = 0;
    player.pause();
    btn.addEventListener('click', inputHandler);

    input.addEventListener('keydown', (event)=>{
        if (event.key == 'Enter'){
            inputHandler();
        }
    });

    audioBtn.addEventListener('click', () => {
        if (i % 2 == 0){
            player.play();
            audioBtn.classList.remove('play');
            audioBtn.classList.add('pause');
        }else{
            player.pause();
            audioBtn.classList.remove('pause');
            audioBtn.classList.add('play');
        }
        i++;
    });


    function inputHandler (){
        console.log(input.value);
        if (input.value.toLowerCase().replace(/ /g,"") == 'хуй'){
            out.textContent = 'Меньше некуда 🤡';
        }else{
            out.textContent = toLower(input.value);
        }
    }

    function toLower (text){
        return text.toLowerCase();
    }
});

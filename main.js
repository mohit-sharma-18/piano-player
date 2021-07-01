const keys = document.querySelectorAll('.key');
let note = document.querySelector(".nowplaying");
let hints = document.querySelectorAll(".hints");


function playMusic(e){
   const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
   const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);
   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
   const keyNote = key.getAttribute("data-note");
   note.innerHTML = keyNote;
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playMusic);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
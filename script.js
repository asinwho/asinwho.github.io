let container = document.getElementById('container');
let reptText = document.getElementById('repeating-text');
let eyeContainer = document.getElementById('eye-container');
let pupil = document.getElementById('pupil');

function followCursor(event) {
 let x = event.clientX;
 let y = event.clientY;
 let centerHor = window.innerWidth / 2;
 let centerVert = window.innerHeight / 2;
 let xNormalized = (x - centerHor) * 3;
 let yNormalized = (y - centerVert) * 3;
 container.style.setProperty('--x', xNormalized + 'px');
 container.style.setProperty('--y', yNormalized + 'px');
}
//add limitation where pupil is moving
document.addEventListener('mousemove', followCursor);

let container1 = document.getElementById('container');
let text = document.getElementById('text');
let newText = 'be not afraid  be not afraid  be not afraid  be not afraid  be not afraid  be not afraid';
//think of a way to detect a page limit
function addText() {
 newText = '  ' + newText;
 text.innerText += newText;
}

setInterval(addText, 1000);

import {width, canvas} from './canvas';

export let controlBox : HTMLDivElement = document.querySelector('#controls');
controlBox.style.width = `${width}px`

export function makeButton (name : string) {
  let button = document.createElement("button");
  button.innerText = name;
  controlBox.appendChild(button);
  return button;
}

import {ctx} from'./canvas';



ctx.lineWidth = 10;
ctx.strokeStyle='black'


canvas.addEventListener("mousedown", function (event){
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}); 

canvas.addEventListener("mousemove", function (event){
  if (event.buttons === 1) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  });

let input = document.createElement('input');
let label = document.createElement('label');
let indicator = document.createElement('div');


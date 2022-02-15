import {ctx, canvas} from './canvas';
import {makeButton} from './controls';


let eraseButton = makeButton ('Eraser');
eraseButton.addEventListener (
  "click",
  function(){
    ctx.strokeStyle = 'white'
  }
)


let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)

let colorInput = document.querySelector("#color-example");
let numberInput = document.querySelector("#number-thing");
let rangeInput : HTMLInputElement = document.querySelector("#Size-range");
rangeInput.min = "1" 
rangeInput.max = "75"
rangeInput.value = "10"
let number = 0;
let text;
let color;
let lineWidth = 10;



rangeInput.addEventListener("input", function (event){
  number = event.target.valueAsNumber;
  //document.querySelector("#box").BrushSize= number /100;
  ctx.lineWidth = number;
});

colorInput.addEventListener("change", function (event) {
  color = event.target.value;
ctx.strokeStyle = color;
});
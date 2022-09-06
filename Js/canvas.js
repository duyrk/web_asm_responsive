var canvas = document.getElementById("myCanvas");
// var context = canvas.getConText("2d");
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.moveTo(50, 75);
ctx.lineTo(75, 100);
ctx.lineTo(50, 125);
ctx.fill();


var canvas1 = document.getElementById("myCanvas1");
// var context = canvas.getConText("2d");
const ctx1 = canvas1.getContext('2d');

ctx1.beginPath();
ctx1.fillStyle = 'white';
ctx1.moveTo(50, 75);
ctx1.lineTo(75, 100);
ctx1.lineTo(50, 125);
ctx1.fill();
var canvas = document.getElementById('myCan');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
var ballsize = 30;
var ballcolor = '#ff0000';
var oldballcolor = '#000000';
var myball = {
x: (ballsize + 5),
y: (ballsize + 5)
};
var movedir = {
x: 5,
y: 5
};
function draw() {
ctx.clearRect(0, 0, w, h);
ctx.beginPath();
ctx.arc(myball.x, myball.y, ballsize, 0, Math.PI * 2, false);
var grd = ctx.createRadialGradient(myball.x, myball.y, 20, myball.x, myball.y, 300);
grd.addColorStop(0, ballcolor);
grd.addColorStop(1, oldballcolor);
ctx.fillStyle = grd;
ctx.shadowColor = '#333';
ctx.shadowBlur = 30;
ctx.shadowOffsetX = 20;
ctx.shadowOffsetY = 20;
ctx.fill();
}
function moveball() {
//var rannum = Math.floor((Math.random()*30)+10);
if (myball.y >= (h - ballsize) || myball.y <= ballsize) {
movedir.y = -movedir.y;
oldballcolor = ballcolor;
ballcolor = '#' + Math.random().toString(16).substr(-6);
}
if (myball.x >= (w - ballsize) || myball.x <= ballsize) {
movedir.x *= -1;
oldballcolor = ballcolor;
ballcolor = '#' + Math.random().toString(16).substr(-6);
}
myball.x += movedir.x;
myball.y += movedir.y;
draw();
requestAnimationFrame(moveball);
}
moveball();
/*
    Patrick Kyoyetera
    Assignment 1: 2D Circle
*/

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvData = context.getImageData(0, 0, canvas.width, canvas.height);
// var 

function process_circle() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var rad = parseInt(document.getElementById("rad").value);

    drawCircle(x, y, rad);
}

function drawCircle (x, y, rad) {
    var step = 1 - rad;
    var xa = 0;
    var ya = rad;

    fillElements(xa, ya, x, y);

    while(xa<=ya) {
        xa++;

        if(step < 0)
            step += 2*xa+1;
        else {
            step += 2*(xa - ya) + 1;
            y--;
        }
        fillElements(xa, ya, x, y);
    }
}

// 
function fillElements(xa, ya, xs, ys) {
    var a = 2;
    context.fillStyle = "#6B0E2A";
    context.fillRect(xs+xa, ys+ya, a, a);
    context.fillRect(xs+xa, ys-ya, a, a);
    context.fillRect(xs-xa, ys+ya, a, a);
    context.fillRect(xs-xa, ys-ya, a, a);
    context.fillRect(xs+ya, ys+xa, a, a);
    context.fillRect(xs-ya, ys+xa, a, a);
    context.fillRect(xs+ya, ys-xa, a, a);
    context.fillRect(xs-ya, ys-xa, a, a);
}
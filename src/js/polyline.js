/*
    Patrick Kyoyetera
    Assignment 1
    2D Polyline using canvas
*/ 

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);
var x_points=[], y_points=[];

document.getElementById("add_point").addEventListener('click', function () {
    x_points.push(parseInt(document.getElementById("x").value));
    y_points.push(parseInt(document.getElementById("y").value));
    x.value = ''; y.value = '';
}, false);

function process_polyline() {
    var len = x_points.length, i;
    for( i = 0; i < len; i++)
        if(i != len-1)
            makeLine(parseInt(x[i]), parseInt(y[i]), parseInt(x[i+1]), parseInt(y[i+1]) );
}

function makeLine(x0, y0, x1, y1) {
    var dx = Math.abs(x0 - x1);
    var dy = Math.abs(y0 - y1);
    var slope=0, yInc, temp, dist, nEast, east;

    if(dy > dx) {
        temp=x0; x0=y0; y0=temp;
        temp=x1; x1=y1; y1=temp;
        temp=dy; dy=dx; dx=temp;
        slope=1;
    }

    if(x0 > x1) {
        temp=x0; x0=x1; x1=temp;
        temp=y0; y0=y1; y1=temp;
    }

    if(y0 > y1) 
        yInc = -1;
    else yInc = 1;

    dist = 2*dy - dx;
    east = 2*dy;
    nEast = 2*(dy - dx);

    while(x0 < x1){
        if(dist <= 0)
            dist += east;
        else {
            dist += nEast;
            y0 += yInc;
        }
        x0++
        if(slope) 
            putPixel(y0, x0);
        else 
            putPixel(x0, y0);
    }
    context.putImageData(canvasData, 0, 0);
}

function putPixel(x, y) {
    var i = (x + y * canvas.width) * 4;
    canvasData.data[i+0] = 107;
    canvasData.data[i+1] = 14;
    canvasData.data[i+2] = 42;
    canvasData.data[i+3] = 255;    
}
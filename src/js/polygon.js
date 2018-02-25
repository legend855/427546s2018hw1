/*
    Patrick Kyoyetera
    Assignment 1
    Polygon 
*/

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);
var x_points = [];
var y_points = [];

document.getElementById("add_point").addEventListener("click", function() {
    x_points.push(parseInt(document.getElementById("x").value));
    y_points.push(parseInt(document.getElementById("y").value));
    x.value=''; y.value='';
}, false);

function process_polygon() {
    // var x = parseInt(document.getElementById("x").value);
    // var y = parseInt(document.getElementById("y").value);
    var i, len = x_points.length;

    // alert(x_points[1] + " " + y_points[1]);

    for( i=0; i<len; i++) 
        if(i != len - 1) 
            makeLine(parseInt(x_points[i]), parseInt(y_points[i]), parseInt(x_points[i+1]), parseInt(y_points[i+1]) );
        else
            makeLine(parseInt(x_points[len-1]), parseInt(y_points[len-1]), parseInt(x_points[0]), parseInt(y_points[0]) );
}

function makeLine (x0, y0, x1, y1) {
    var dx = Math.abs(x0-x1);
    var dy = Math.abs(y0-y1);
    var temp, slope=0, yInc, dist;

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
    else 
        yInc = 1;
    
    dist = 2*dy - dx; 
    deltaEast = 2*dy; 
    deltaN_East = 2*(dy - dx); 

    while(x0 < x1) {
        if(dist <= 0) 
            dist += deltaEast;
        else {
            dist += deltaN_East;
            y0 += yInc;
        }
        x0++;

        if(slope) 
            putPixel(y0, x0);
        else 
            putPixel(x0, y0);
    }
    context.putImageData(canvasData, 0, 0);
}

function putPixel(x, y) {
    var itr = (x + y * canvas.width)*4;
    canvasData.data[itr + 0] = 107;
    canvasData.data[itr + 1] = 14;
    canvasData.data[itr + 2] = 42;
    canvasData.data[itr + 3] = 255;
}
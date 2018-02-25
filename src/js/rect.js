/*
    Patrick Kyoyetera
    Assignment 1
*/


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);

function process_rect() {
    var x0 = parseInt(document.getElementById("x0").value);
    var y0 = parseInt(document.getElementById("y0").value);
    var len = parseInt(document.getElementById("_length").value);    
    var wid = parseInt(document.getElementById("_width").value);

    // alert(x0 + " " + y0 + " " + len + " " + wid + " ");
    
    makePointLines( x0, y0, (x0+len), y0);
    makePointLines((x0+len), y0, (x0+len), (y0+wid) );
    makePointLines((x0+len), (y0+wid), x0, (y0+wid) );
    makePointLines( x0, (y0+wid), x0, y0);
}

function makePointLines(x1, y1, x2, y2) {
    var dx = Math.abs(x2- x1);
    var dy = Math.abs(y2 - y1);
    var slope = 0, temp, inc;

    if( dy > dx ) {
        // Positive X
        temp = x1; x1 = y1; y1 = temp; 
        temp = x2; x2 = y2; y2 = temp;
        temp = dy; dy = dx; dx = temp;
        slope = 1;
    }

    if( x1 > x2 ) {
        temp = x1; x1 = x2; x2 = temp;
        temp = y1; y1 = y2; y2 = temp;
    }

    if( y1 > y2 ) 
        inc = -1;
    else 
        inc = 1;
    
    var d_dist = 2*dy - dx;
    var xInc = 2 * dy;
    var yInc = 2 * (dy - dx);

    while(x1 < x2) {
        if(d_dist <= 0)
            d_dist += xInc;
        else {
            d_dist += yInc;
            y1 += inc;
        }
        x1++;

        if(slope)
            drawPixel(y1, x1);
        else 
            drawPixel(x1, y1);
    }
    context.putImageData(canvasData, 0, 0);
}

function drawPixel(x, y) {
    var a = (x + y * canvas.width) * 4;
    canvasData.data[a+0] = 107;
    canvasData.data[a+1] = 14;
    canvasData.data[a+2] = 42;
    canvasData.data[a+3] = 255;
}
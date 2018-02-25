/*
    Patrick Kyoyetera
    Assignment 1
    2D Line using canvas
*/ 

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
    context.linewidth = 10;
var canvasData = context.getImageData(0,150, canvas.width, canvas.height);
var i, steps, x, y, xInc, yInc;

// clear canvas
function clearArea() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    x1.value = ''; y1.value = '';
    x0.value = ''; y0.value = '';
    location.reload(true);
}

// process input from form
function process_line() {
    // var text = document.getElementById("inputs");
    var x0 = parseInt(document.getElementById("x0").value);
    var y0 = parseInt(document.getElementById("y0").value);
    var x1 = parseInt(document.getElementById("x1").value);
    var y1 = parseInt(document.getElementById("y1").value);
    // alert(x0 + " " + y0 + " " + x1 + " " + y1 + " ");
    // slope=0;
    drawLinePixel(x0, y0, x1, y1);
    
    // context.putImageData(canvasData, x0, y0, 0);
}

// construct line  
function drawLinePixel(x0, y0, x1, y1) {
    var dx = Math.abs(x1-x0);
    var dy = Math.abs(y1-y0);
    var slope = 0;

    if(dy > dx) {
        steps=x0; x0=y0; y0=steps;
        steps=x1; x1=y1; y1=steps;
        steps=dy; dy=dx; dx=steps;
        slope=1;
    }
    
    if(x0>x1) {
        steps = x0; x0 = x1; x2 = steps;
        steps = y0; y0 = y1; y2 = steps;
    }

    (y0 > y1) ? yInc = -1 : yInc = 0;

    var d_dist = 2*dy-dx;
    var d_inc = 2*dy;
    var d_inc2 = 2*(dy-dx);

    while(x0 < x1) {
        if(d_dist <= 0)
            d_dist += d_inc;
        else {
            d_dist += d_inc2;
            y0 += yInc;
        }
        x0++;
        if(slope)
            drawPixel(y0, x0);
        else 
            drawPixel(x0, y0);
    }
    context.putImageData(canvasData, 0, 0);
    /*
    xInc = dx / steps;
    yInc = dy / steps;

    for(i=0; i<steps; i++) {
        x += xInc;
        y += yInc;
        drawPixel(Math.round(x), Math.round(y));
    }
    */
}

// 
function drawPixel(x, y) {
    context.fillStyle = "#6b0e2a";
    var index = (x + y * canvas.width) * 4;
    canvasData.data[index + 0] = 107;
    canvasData.data[index + 1] = 14;
    canvasData.data[index + 2] = 42;
    canvasData.data[index + 3] = 255;
}

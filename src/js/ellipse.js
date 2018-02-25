/*
    Patrick Kyoyetera
    Assignment 1: 2D Ellipse
*/

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);

function process_ellipse() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var l = parseInt(document.getElementById("l").value); // A
    var w = parseInt(document.getElementById("w").value); // B
    var x_new = l, y_new = 0; //x_new: X
    var sqL = l*l, sqW = w*w;
    var twoSqL = 2*sqL, twoSqW = 2*sqW;
    var bothSq = sqL*sqW;
    var sqWx_new = sqW*(x_new*x_new);
    var st_x = twoSqL*x_new, st_y=0;

    while(st_x >= st_y) {
        putPixel(x_new+x, y_new+y);
        putPixel(-x_new+x, y_new+y);    
        putPixel(-x_new+x, -y_new+y);
        putPixel(x_new+x, -y_new+y);
        y_new++;
        st_y += twoSqL;
        ro = sqWx_new + sqL *y_new*y_new - st_y + sqL;

        if(2*ro + sqW - st_x > 0) {
            x_new--;
            st_x -= twoSqW;
            sqWx_new = sqW*x_new*x_new;
        }
    }
    x_new=0; y_new=w; ro=0;
    var sqL_yNew = l*y_new*y_new;
    st_x = 0; st_y = twoSqL*y_new;

    while(st_x>st_y) {
        putPixel(x_new+x, y_new+y);
        putPixel(-x_new+x, y_new+y);
        putPixel(-x_new+x, -y_new+y);
        putPixel(x_new+x, -y_new+y);
        x_new++;
        st_x+= twoSqW;
        ro = sqL_yNew + sqW*x_new*x_new + st_y, + sqL;
        if(2*ro + sqW - st_x > 0 ) {
            y_new--;
            st_y -= twoSqL;
            sqWx_new = sqL*y_new*y_new;
        }
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




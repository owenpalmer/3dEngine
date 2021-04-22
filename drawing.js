var ctx = document.getElementById("c").getContext('2d');

function drawlinesimple(x1, y1, x2, y2, color = 'black') {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.strokeStyle = color;
}

function drawline(array) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(array[0][0], array[0][1]);
    ctx.lineTo(array[1][0], array[1][1]);
    ctx.stroke();
}

function drawline3d(array, axis1, axis2) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(array[0][axis1], array[0][axis2]);
    ctx.lineTo(array[1][axis1], array[1][axis2]);
    ctx.stroke();
}

function drawpoint(x, y, note = "") {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.font = "30px Arial";
    ctx.fillText(note, x, y);
    ctx.strokeStyle = 'black';

}

function drawgrid(inc) {
    var canvas = document.getElementById('c');
    var width = canvas.width;
    var height = canvas.height;

    for (i = 0; i < (width / inc); i++) {
        drawlinesimple(i * inc, 0, i * inc, height, "gray");
    }
    for (i = 0; i < (height / inc); i++) {
        drawlinesimple(0, i * inc, width, i * inc, "gray");
    }
}

drawgrid(100);

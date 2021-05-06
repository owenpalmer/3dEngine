var ctx = document.getElementById("c").getContext('2d');
var canvas = document.getElementById("c");

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

function drawline3d(array, axis1, axis2, color = "red") {
    ctx.strokeStyle = color;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(array[0][axis1], array[0][axis2]);
    ctx.lineTo(array[1][axis1], array[1][axis2]);
    ctx.stroke();
}

function drawFace(array, axis1, axis2, color = "red") {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillStyle = "#" + randomColor;
    ctx.fillStyle = "black";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (point = 0; point < array.length; point++) {
        if (point == array.length - 1) {
            n = 0;
        } else {
            n = point + 1;
        }
        if (point == 0) {
            ctx.moveTo(array[point][axis1], array[point][axis2]);
        } else {
            ctx.lineTo(array[point][axis1], array[point][axis2]);
        }
        ctx.lineTo(array[n][axis1], array[n][axis2]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawObject(object, axis1, axis2, color = "red") {
    points = object.points;
    faces = object.faces;
    compiledfaces = [];
    zeroDimension = Math.abs((axis1 + axis2) - 3);
    // console.log(zeroDimension);
    // zeroDimension = 2;
    orderedList = [];

    for (let face = 0; face < faces.length; face++) {
        compiledface = [];
        for (i = 1; i <= faces[face][0]; i++) {
            pointindex = faces[face][i];
            compiledface.push(points[pointindex]);
        }
        compiledfaces.push(compiledface);
    }
    compiledfaces = JSON.parse(JSON.stringify(compiledfaces));
    // console.log(compiledfaces);
    for (let face = 0; face < compiledfaces.length; face++) {
        sum = 0;
        listForMax = [];
        // console.log(compiledfaces[face]);
        for (let point = 0; point < compiledfaces[face].length; point++) {
            sum += compiledfaces[face][point][zeroDimension];
            listForMax.push(compiledfaces[face][point][zeroDimension]);
        }
        average = sum / compiledfaces[face].length;
        //Experimental
        // average = Math.max.apply(null, listForMax);
        orderedList.push({ average: average, faceindex: face });
    }

    orderedList.sort((a, b) => { return a.average - b.average; });

    for (let face = 0; face < orderedList.length; face++) {
        faceindex = orderedList[face].faceindex;
        array = compiledfaces[faceindex];
        drawFace(array, axis1, axis2, color);
    }

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


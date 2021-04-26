drawgrid(100);

console.log(importedObj);

for (time = 0; time < 500; time++) {
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rotateObjectPoints(importedObj, 501, 501, .2, 0, 1);

        drawObject(importedObj, 0, 2);

    }, 60 * time)

}


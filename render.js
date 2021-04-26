drawgrid(100);

translateObject(importedObj.points, 0, 0, 0)

for (time = 0; time < 500; time++) {
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rotateObject(importedObj.points, 500, 500, 1, 0, 1);

        drawObject(importedObj, 0, 2);

    }, 100 * time)
}

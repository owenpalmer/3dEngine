drawgrid(100);
translateObject(importedObj.points, 160, 200, 180)

// for (f = 0; f < 5; f++) {
//     console.log(importedObj.faces[f]);
//     for (i = 1; i <= importedObj.faces[f][0]; i++) {
//         pointindex = importedObj.faces[f][i];
//         console.log(importedObj.points[pointindex]);
//     }
// }


rotateObject(importedObj.points, 300, 300, 0, 0, 1);
rotateObject(importedObj.points, 300, 300, 60, 1, 2);
drawObject(importedObj, 0, 1);

// drawObject(square1, 0, 1);
// drawObject(square2, 0, 1);


// drawObject(square1, 0, 2, "blue");
// drawObject(square2, 0, 2, "blue");

for (time = 0; time < 500; time++) {
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawgrid(100);
        rotateObject(importedObj.points, 300, 300, 2, 0, 2);
        // rotateObject(importedObj.points, 500, 500, 1, 0, 2);

        drawObject(importedObj, 0, 1);

    }, 40 * time)
}

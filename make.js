function mkline(x1, y1, x2, y2) {
    return [
        [x1, y1],
        [x2, y2]
    ];
}

function mktriangle(x1, y1, x2, y2, x3, y3) {
    triangle = [
        mkline(x1, y1, x2, y2),
        mkline(x1, y1, x3, y3),
        mkline(x3, y3, x2, y2),
    ];
    return triangle;
}

function mk3dtriangle(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    triangle = [
        mkline(x1, y1, x2, y2),
        mkline(x1, y1, x3, y3),
        mkline(x3, y3, x2, y2),
    ];
    return triangle;
}

// function makeGridObject(size, number, z) {
//     points = [];
//     faces = [];
//     start = number / -2;
//     end = number / 2;

//     for (x = start; x <= end; x++) {
//         for (y = start; y <= end; y++) {
//             points.push([x * size, y * size, z]);

//         }

//     }

//     for (point = 0; point < points.length; point++) {
//         if(number%)
//         faces.push([4,]);
//     }

//     return { points: points, faces: faces }
// }

// coolpoints = makeGridObject(100, 6, 0).points;
// for (let i = 0; i < coolpoints.length; i++) {
//     drawpoint(coolpoints[i][0], coolpoints[i][1]);
// }
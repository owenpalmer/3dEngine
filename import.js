function importPLY(file) {
    lines = file.replace(/\r/g, "").split(/\n/)

    polygons = [];
    points = [];
    allXPoints = [];
    allYPoints = [];
    allZPoints = [];

    //amount of faces and verts
    for (i = 0; i < 10; i++) {
        sub = lines[i].substring(0, 12);
        if (sub == 'element vert') {
            verts = parseInt(lines[i].split(" ")[2]);
        }
        if (sub == 'element face') {
            faces = parseInt(lines[i].split(" ")[2]);
        }
    }

    //find verts and faces start indexs
    vertsindex = lines.length - faces - 1 - verts;
    facesindex = lines.length - faces - 1;

    // console.log(vertsindex);
    // console.log(lines[vertsindex]);
    // console.log(lines[facesindex]);

    //populate and index point arrays
    for (v = vertsindex; v < facesindex; v++) {
        sep = lines[v].split(" ");
        points.push(
            [
                parseFloat(sep[0]),
                parseFloat(sep[1]),
                parseFloat(sep[2]),
            ]
        );
        allXPoints.push(parseFloat(sep[0]));
        allYPoints.push(parseFloat(sep[1]));
        allZPoints.push(parseFloat(sep[2]));
    }

    minX = (Math.min.apply(Math, allXPoints));
    minY = (Math.min.apply(Math, allYPoints));
    minZ = (Math.min.apply(Math, allZPoints));

    for (let p = 0; p < points.length; p++) {
        points[p][0] = (points[p][0] + Math.abs(minX)) * 100;
        points[p][1] = (points[p][1] + Math.abs(minY)) * 100;
        points[p][2] = (points[p][2] + Math.abs(minZ)) * 100;
    }

    //populate polygons array
    for (f = facesindex; f < lines.length - 1; f++) {
        sep = lines[f].split(" ");
        polygon = new Array();
        for (p = 1; p <= parseInt(sep[0]); p++) {
            polygon[p - 1] = points[sep[p]];
            // console.log(polygon[p - 1]);
        }
        polygons.push(polygon);

    }
    polygons = JSON.parse(JSON.stringify(polygons))
    return polygons;

}

// importedObj = importPLY(cubePLY);
// importedObj = importPLY(monke);
importedObj = importPLY(blob);
console.log(importedObj);
// document.write(JSON.stringify(importedObj));
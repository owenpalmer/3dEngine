function importPLY(file) {
    lines = file.replace(/\r/g, "").split(/\n/)

    faces = [];
    points = [];
    allXPoints = [];
    allYPoints = [];
    allZPoints = [];

    //amount of faces and verts
    for (i = 0; i < 10; i++) {
        sub = lines[i].substring(0, 12);
        if (sub == 'element vert') {
            numberOfVertices = parseInt(lines[i].split(" ")[2]);
        }
        if (sub == 'element face') {
            numberOfFaces = parseInt(lines[i].split(" ")[2]);
        }
    }

    //find verts and faces start indices
    vertsindex = lines.length - numberOfFaces - 1 - numberOfVertices;
    facesindex = lines.length - numberOfFaces - 1;

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

    //moves all points to positive values and scales them by 100
    for (let p = 0; p < points.length; p++) {
        points[p][0] = (points[p][0] + Math.abs(minX)) * 100;
        points[p][1] = (points[p][1] + Math.abs(minY)) * 100;
        points[p][2] = (points[p][2] + Math.abs(minZ)) * 100;
    }

    //populate faces array
    for (f = facesindex; f < lines.length - 1; f++) {
        seperated = lines[f].split(" ");
        for (pointindex = 0; pointindex < seperated.length; pointindex++) {
            seperated[pointindex] = parseInt(seperated[pointindex]);
        }
        faces.push(seperated);
    }
    faces = JSON.parse(JSON.stringify(faces))
    return { "points": points, "faces": faces };

}

// importedObj = importPLY(cubePLY);
// importedObj = importPLY(blob);
importedObj = importPLY(monke);
console.log(importedObj);

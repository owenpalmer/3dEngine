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
        points[p][0] = points[p][0] * 100;
        points[p][1] = points[p][1] * 100;
        points[p][2] = points[p][2] * 100;
    }

    //create the origin at the median of all points
    origin = createObjectOriginFromPoints(points);

    //set all point coorinates relative to the origin
    for (let p = 0; p < points.length; p++) {
        points[p][0] = points[p][0] - origin[0];
        points[p][1] = points[p][1] - origin[1];
        points[p][2] = points[p][2] - origin[2];
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
    return { points: points, faces: faces, origin, transformations: [], display: { wireframe: 0 } };

}

function createObjectOriginFromPoints(points) {
    sumOfx = 0;
    sumOfy = 0;
    sumOfz = 0;
    for (let p = 0; p < points.length; p++) {
        sumOfx += points[p][0];
        sumOfy += points[p][1];
        sumOfz += points[p][2];
    }
    x = sumOfx / points.length;
    y = sumOfy / points.length;
    z = sumOfz / points.length;
    return [x, y, z];
}

cube = importPLY(cube);
monke = importPLY(monke);
blob = importPLY(blob);
newblob = importPLY(newblob);
dude = importPLY(dude);
grid = importPLY(grid);
tree = importPLY(tree);


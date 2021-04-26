function toDegrees(num) {
    return num * (180 / Math.PI);
}

function toRadians(num) {
    return num * (Math.PI / 180);
}

function rotatePoint(oX, oY, rX, rY, rotDeg) {
    //PP
    if (rX >= oX && rY >= oY) {
        rotDeg = rotDeg * -1;
        Xposneg = 1;
        Yposneg = 1;
    }
    //NN
    if (rX < oX && rY < oY) {
        rotDeg = rotDeg * -1;
        Xposneg = -1;
        Yposneg = -1;
    }
    //PN
    if (rX >= oX && rY < oY) {
        Xposneg = 1;
        Yposneg = -1;
    }
    //NP
    if (rX < oX && rY >= oY) {
        Xposneg = -1;
        Yposneg = 1;
    }

    opo = Math.abs(oY - rY);
    adj = Math.abs(oX - rX);

    drawpoint(oX, oY, "O");
    drawpoint(rX, rY, "R");

    hypo = Math.sqrt(opo ** 2 + adj ** 2);

    current_angle = toDegrees(Math.atan(opo / adj));
    next_angle = current_angle + rotDeg;

    testY = (Math.sin(toRadians(next_angle)) * hypo);
    testX = (Math.cos(toRadians(next_angle)) * hypo);

    x = oX + (testX * Xposneg);
    y = oY + (testY * Yposneg);
    return [x, y];
}

function rotateAllPoints(array, oX, oY, deg, axis1, axis2) {
    //loops over all entities
    for (ent = 0; ent < array.length; ent++) {
        //loops over all points in the entity
        for (point = 0; point < array[ent].length; point++) {
            rot = rotatePoint(oX, oY, array[ent][point][axis1], array[ent][point][axis2], deg);
            array[ent][point][axis1] = rot[0];
            array[ent][point][axis2] = rot[1];
        }
    }
}

function toDegrees(num) {
    return num * (180 / Math.PI);
}

function toRadians(num) {
    return num * (Math.PI / 180);
}

function rotatePoint(oX, oY, rX, rY, rotDeg) {
    Xposneg = Math.sign((rX + .1) - oX);
    Yposneg = Math.sign((rY + .1) - oY);
    rotDeg = rotDeg * (Math.sign(Xposneg * Yposneg) * -1);
    // //PP
    // if (rX >= oX && rY >= oY) {
    //     rotDeg = rotDeg * -1;
    //     Xposneg = 1;
    //     Yposneg = 1;
    // }
    // //NN
    // if (rX < oX && rY < oY) {
    //     rotDeg = rotDeg * -1;
    //     Xposneg = -1;
    //     Yposneg = -1;
    // }
    // //PN
    // if (rX >= oX && rY < oY) {
    //     Xposneg = 1;
    //     Yposneg = -1;
    // }
    // //NP
    // if (rX < oX && rY >= oY) {
    //     Xposneg = -1;
    //     Yposneg = 1;
    // }

    opo = Math.abs(oY - rY);
    adj = Math.abs(oX - rX);

    // drawpoint(oX, oY, "O");
    // drawpoint(rX, rY, "R");

    hypo = Math.sqrt(opo ** 2 + adj ** 2);

    current_angle = toDegrees(Math.atan(opo / adj));
    next_angle = current_angle + rotDeg;

    testY = (Math.sin(toRadians(next_angle)) * hypo);
    testX = (Math.cos(toRadians(next_angle)) * hypo);

    x = oX + (testX * Xposneg);
    y = oY + (testY * Yposneg);
    return [x, y];
}

function rotateObject(array, oX, oY, deg, axis1, axis2) {
    for (point = 0; point < array.length; point++) {
        rot = rotatePoint(oX, oY, array[point][axis1], array[point][axis2], deg);
        array[point][axis1] = rot[0];
        array[point][axis2] = rot[1];
    }
}
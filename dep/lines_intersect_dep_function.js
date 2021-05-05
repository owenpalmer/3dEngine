function lines_intersect_dep(line1, line2, draw = 0) {
    if (draw) {
        drawpoint(line1[0][0], gety(line1[0][0], line2), "");
        drawpoint(line1[1][0], gety(line1[1][0], line2), "");
        drawpoint(line2[0][0], gety(line2[0][0], line1), "");
        drawpoint(line2[1][0], gety(line2[1][0], line1), "");
    }

    line1point1result = line1[0][1] - gety(line1[0][0], line2);
    line1point2result = line1[1][1] - gety(line1[1][0], line2);
    line2point1result = line2[0][1] - gety(line2[0][0], line1);
    line2point2result = line2[1][1] - gety(line2[1][0], line1);

    line1result = line1point1result * line1point2result;
    line2result = line2point1result * line2point2result;

    if (line1point1result == 0 || line1point2result == 0 || line2point1result == 0 || line2point2result == 0) {
        return 1;
    }

    if (Math.sign(line1result) == -1 && Math.sign(line2result) == -1) {
        return 1;
    } else {
        return 0;
    }

}
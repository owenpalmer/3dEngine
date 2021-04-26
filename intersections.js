function gety(x, line) {
    y2 = line[1][1];
    x2 = line[1][0];
    y1 = line[0][1];
    x1 = line[0][0];
    //first find the slope by dividing the change in y by the change in x
    slope = (y1 - y2) / (x1 - x2);
    //find the y-intercept by using the equation: y = mx + d. Or in this case rewritten as: d = y - mx  (d is the y-intercept, yes I know :)
    y_intercept = y2 - (slope * x2);
    //find the Y value by inputing slope(m), X(x), and the y-intercept(d) into y = mx + d.
    y = (slope * x) + y_intercept;
    return y;
}

function mkline(x1, y1, x2, y2) {
    return [
        [x1, y1],
        [x2, y2]
    ];
}

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

function lines_intersect(line1, line2) {
    L1_x1 = line1[0][0];
    L1_y1 = line1[0][1];
    L1_x2 = line1[1][0];
    L1_y2 = line1[1][1];

    L2_x1 = line2[0][0];
    L2_y1 = line2[0][1];
    L2_x2 = line2[1][0];
    L2_y2 = line2[1][1];

    p = where_lines_intersect(line1, line2);

    in_line_1_box = 0;
    in_line_2_box = 0;

    if (is_between(L1_x1, p[0], L1_x2) && is_between(L1_y1, p[1], L1_y2)) {
        in_line_1_box = 1;
    }
    if (is_between(L2_x1, p[0], L2_x2) && is_between(L2_y1, p[1], L2_y2)) {
        in_line_2_box = 1;
    }
    if (!in_line_1_box || !in_line_2_box) {
        return 0;
    }
    return 1;
}

function where_lines_intersect(line1, line2) {
    L1_x1 = line1[0][0];
    L1_y1 = line1[0][1];
    L1_x2 = line1[1][0];
    L1_y2 = line1[1][1];

    L2_x1 = line2[0][0];
    L2_y1 = line2[0][1];
    L2_x2 = line2[1][0];
    L2_y2 = line2[1][1];

    if (L1_x1 == L1_x2) {
        y = gety(L1_x1, line2);
        return [L1_x1, y];
    }
    if (L2_x1 == L2_x2) {
        y = gety(L2_x1, line1);
        return [L2_x1, y];
    }

    slope1 = (L1_y1 - L1_y2) / (L1_x1 - L1_x2);
    yint1 = L1_y2 - (slope1 * L1_x2);

    slope2 = (L2_y1 - L2_y2) / (L2_x1 - L2_x2);
    yint2 = L2_y2 - (slope2 * L2_x2);

    x = ((yint2 - yint1) / (slope1 - slope2));
    y = gety(x, line1);
    return [x, y];

}

function is_between(bread, cheese, bread2) {
    if (cheese == bread || cheese == bread2) {
        return 1;
    }
    if ((cheese >= bread && cheese >= bread2) || (cheese <= bread && cheese <= bread2)) {
        return 0;
    }
    return 1;
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

triangle = mktriangle(100, 100, 150, 300, 500, 600);

triangle = [
    [
        [100, 100],
        [300, 250],
    ],
    [
        [300, 250],
        [150, 400],
    ],
    [
        [150, 400],
        [100, 100],
    ],
];

height = 300;

pyramid = [
    [
        [0, 0, 0],
        [300, 0, 0],
    ],
    [
        [300, 0, 0],
        [300, 300, 0],
    ],
    [
        [300, 300, 0],
        [0, 300, 0],
    ],
    [
        [0, 300, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 0],
        [150, 150, height],
    ],
    [
        [300, 0, 0],
        [150, 150, height],
    ],
    [
        [300, 300, 0],
        [150, 150, height],
    ],
    [
        [0, 300, 0],
        [150, 150, height],
    ],
];

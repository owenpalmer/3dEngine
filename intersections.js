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
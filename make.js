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
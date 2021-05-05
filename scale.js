function scaleObject(array, x = 0, y = 0, z = 0) {
    for (let point = 0; point < array.length; point++) {
        array[point][0] = array[point][0] * (x + 1);
        array[point][1] = array[point][1] * (y + 1);
        array[point][2] = array[point][2] * (z + 1);
    }
}
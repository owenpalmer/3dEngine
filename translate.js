function translatePoint(array, x = 0, y = 0, z = 0) {
    array[0] += x;
    array[1] += y;
    array[2] += z;
    return array;
}

function translateObject(array, x = 0, y = 0, z = 0) {
    for (let poly = 0; poly < array.length; poly++) {
        for (let point = 0; point < array[poly].length; point++) {
            array[poly][point][0] = array[poly][point][0] + x;
            array[poly][point][1] = array[poly][point][1] + y;
            array[poly][point][2] = array[poly][point][2] + z;
        }
    }
}

function translateEntity(array, entityIndex, x = 0, y = 0, z = 0) {
    for (let point = 0; point < array[entityIndex].length; point++) {
        array[entityIndex][point] = translatePoint(array[entityIndex][point], x, y, z);
    }
}

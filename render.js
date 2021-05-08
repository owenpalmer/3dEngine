worldOriginX = canvas.width / 2;
worldOriginY = canvas.height / 2;


function renderScene(scene) {
    for (let obj = 0; obj < scene.objects.length; obj++) {
        renderObject(scene.objects[obj], scene);
    }
}

function renderObject(object, scene) {
    newobject = JSON.parse(JSON.stringify(object));

    //Apply zoom
    zoom = scene.navTransforms.zoom;
    scaleObjectFromWorldOrigin(newobject.points, zoom, zoom, zoom);

    //Apply orbit rotation
    rotatePoints(newobject.points, 0, 0, scene.navTransforms.orbitZ, 0, 1);
    rotatePoints(newobject.points, 0, 0, scene.navTransforms.orbitY, 1, 2);

    //Center newobject on screen
    translatePoints(newobject.points, worldOriginX, worldOriginY, 0);
    translatePoint(newobject.origin, worldOriginX, worldOriginY, 0);

    //Apply pan
    translatePoints(newobject.points, scene.navTransforms.panX, scene.navTransforms.panY, 0);
    translatePoint(newobject.origin, scene.navTransforms.panX, scene.navTransforms.panY, 0);

    drawObject(newobject, 0, 1);

}

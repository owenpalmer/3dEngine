// rotatePoints(grid.points, 0, 0, .0001, 0, 2);
// translatePoints(grid.points, 100, 100, 0);

mouseInfo = {
    gridsquare: null,
}

renderScene(defaultScene);


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        // y: canvas.height - (evt.clientY - rect.top)
        y: evt.clientY - rect.top
    };
}

function mouseOrbit(evt, downX, downY, startNav) {
    mousePos = getMousePos(canvas, evt);
    defaultScene.navTransforms.orbitZ = startNav.orbitZ + ((downX - (mousePos.x)));
    defaultScene.navTransforms.orbitY = startNav.orbitY + ((downY - (mousePos.y)));

    renderScene(defaultScene);
}

function mousePan(evt, downX, downY, startNav) {
    mousePos = getMousePos(canvas, evt);
    defaultScene.navTransforms.panX = startNav.panX - ((downX - (mousePos.x)));
    defaultScene.navTransforms.panY = startNav.panY + ((downY - (mousePos.y)));

    renderScene(defaultScene);
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'z') {
        toggleWireframe();
    }
});

canvas.addEventListener('mousedown', function (evt) {
    mousePos = getMousePos(canvas, evt);

    pressedMouse = true;

    canvas.onmouseup = function (something) {
        pressedMouse = false;
    }

    downX = mousePos.x;
    downY = mousePos.y;

    startNav = JSON.parse(JSON.stringify(defaultScene.navTransforms));


    canvas.onmousemove = function (e) {
        if (pressedMouse == true) {
            if (evt.button == 0) {
                mouseOrbit(e, downX, downY, startNav);
            }
        }
        if (pressedMouse == true) {
            if (evt.button == 2) {
                mousePan(e, downX, downY, startNav);
            }
        }
    }

}, false);
window.addEventListener('contextmenu', function (e) { e.preventDefault(); });

canvas.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        defaultScene.navTransforms.zoom += .1;
        renderScene(defaultScene);
    } else {
        if (defaultScene.navTransforms.zoom > .15) {
            defaultScene.navTransforms.zoom -= .1;
        }
        renderScene(defaultScene);
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function toggleWireframe() {
    defaultScene.display.wireframe = Math.abs(defaultScene.display.wireframe - 1);
    renderScene(defaultScene);
}
renderScene(defaultScene);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        // y: canvas.height - (evt.clientY - rect.top)
        y: evt.clientY - rect.top
    };
}

function mouseMoveFunction(evt, downX, downY, startOrbitZ, startOrbitY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mousePos = getMousePos(canvas, evt);

    defaultScene.navTransforms.orbitZ = startOrbitZ + ((downX - (mousePos.x)));
    defaultScene.navTransforms.orbitY = startOrbitY + ((downY - (mousePos.y)) * .7);

    renderScene(defaultScene);
}

canvas.addEventListener('mousedown', function (evt) {
    mousePos = getMousePos(canvas, evt);

    pressedMouse = true;

    canvas.onmouseup = function (evt) {
        pressedMouse = false;
    }

    downX = mousePos.x;
    downY = mousePos.y;

    startOrbitZ = defaultScene.navTransforms.orbitZ;
    startOrbitY = defaultScene.navTransforms.orbitY;

    canvas.onmousemove = function (evt) {
        if (pressedMouse == true) {
            mouseMoveFunction(evt, downX, downY, startOrbitZ, startOrbitY);
        }
    }

}, false);

canvas.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        defaultScene.navTransforms.zoom += .1;
        renderScene(defaultScene);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        defaultScene.navTransforms.zoom -= .1;
        renderScene(defaultScene);
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}
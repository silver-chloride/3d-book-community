const html = document.querySelector('html');
const book = document.querySelector('.book');

html.addEventListener('mousedown', mouseDown);
html.addEventListener('mouseup', mouseUp);
html.addEventListener('mousemove', mouseMove);

html.addEventListener('touchstart', mouseDown);
html.addEventListener('touchend', mouseUp);
html.addEventListener('touchmove', mouseMove);

html.addEventListener('contextmenu', contextMenu);

let isMouseDown = false;
let isContextMenu = false;

let downX;
let downY;

let moveX;
let moveY;

let bookX = 0;
let bookY = 0;

function mouseDown(e) {
    downX = e.pageX;
    downY = e.pageY;

    isMouseDown = isContextMenu ? false : true;
    isContextMenu = false;
}

function mouseUp() {
    isMouseDown = false;

    bookX = moveX;
    bookY = moveY;
}

function contextMenu() {
    isContextMenu = true;
}

function mouseMove(e) {
    if (isMouseDown) {
        moveX = (downX - e.pageX) + bookX;
        moveY = (downY - e.pageY) + bookY;

        console.log(moveX, moveY, bookX, bookY);

        book.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    }
}
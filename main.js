const html = document.querySelector('html');
const book = document.querySelector('.book');

html.addEventListener('mousedown', mouseDown);
html.addEventListener('mouseup', mouseUp);
html.addEventListener('mousemove', mouseMove);

html.addEventListener('touchstart', touchStart);
html.addEventListener('touchend', touchEnd);
html.addEventListener('touchmove', touchMove);

html.addEventListener('contextmenu', contextMenu);

let isMouseDown = false;
let isContextMenu = false;

let downX;
let downY;

let moveX;
let moveY;

let bookX = 45;
let bookY = 45;

book.style.transform = `rotateX(${bookY}deg) rotateY(${bookX}deg)`;

function mouseDown(e) {
    downX = e.pageX;
    downY = e.pageY;

    isMouseDown = isContextMenu ? false : true;
    isContextMenu = false;
}

function touchStart(e) {
    downX = e.touches[0].pageX;
    downY = e.touches[0].pageY;

    isMouseDown = isContextMenu ? false : true;
    isContextMenu = false;
}

function mouseUp() {
    isMouseDown = false;

    bookX = moveX;
    bookY = moveY;
}

function touchEnd() {
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

        book.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    }
}

function touchMove(e) {
    if (isMouseDown) {
        moveX = (downX - e.touches[0].pageX) + bookX;
        moveY = (downY - e.touches[0].pageY) + bookY;

        book.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    }
}
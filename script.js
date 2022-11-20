let body = document.getElementsByTagName('body')[0];

let disappearAfter = 500; // trailing length
let appearAfter = 40; // (inverse) number of dots
let CIRCLE_DIAMETER = 1; // rem

let joinLines = () => {
    let totalItems = document.querySelectorAll('div.item');
}

let createElement = (x = window.innerWidth / 2, y = window.innerHeight / 2) => {

    let newItem = document.createElement('div');
    newItem.classList.add('item');

    newItem.style.setProperty('top', `calc(${y}px - ${CIRCLE_DIAMETER / 2}rem`);
    newItem.style.setProperty('left', `calc(${x}px - ${CIRCLE_DIAMETER / 2}rem`);
    newItem.style.setProperty('width', `${CIRCLE_DIAMETER}rem`);
    newItem.style.setProperty('height', `${CIRCLE_DIAMETER}rem`);

    body.appendChild(newItem);
    setTimeout(() => body.removeChild(newItem), disappearAfter);
}

let handleMouseMove = (e) => {
    createElement(e.x, e.y);
    joinLines();
    removeListener();
}

let removeListener = () => {
    body.removeEventListener('mousemove', handleMouseMove)
    setTimeout(() => addListener(), appearAfter)
}

let addListener = () => {
    body.addEventListener('mousemove', handleMouseMove);
}

addListener();
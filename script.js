let main = document.getElementsByTagName('main')[0];
let header = document.getElementsByTagName('header')[0];

let trailingLength = document.getElementById('trailingLength');
let numberOfDots = document.getElementById('numberOfDots');
let circleSize = document.getElementById('circleSize');

let disappearAfter = 300; // circles will disappear after n seconds —
                          // propotional to trailing length
let appearAfter =
    50; // circles with appear after n seconds — inverse to number of dots
let CIRCLE_DIAMETER = 1.5; // rem

let setToDefault =
    () => {
      disappearAfter = 300;
      appearAfter = 50;
      CIRCLE_DIAMETER = 1.5;
    }

let createElement =
    (x = window.innerWidth / 2, y = window.innerHeight / 2) => {
      let newItem = document.createElement('div');
      newItem.classList.add('item');

      newItem.style.setProperty('top',
                                `calc(${y}px - ${CIRCLE_DIAMETER / 2}rem`);
      newItem.style.setProperty('left',
                                `calc(${x}px - ${CIRCLE_DIAMETER / 2}rem`);
      newItem.style.setProperty('width', `${CIRCLE_DIAMETER}rem`);
      newItem.style.setProperty('height', `${CIRCLE_DIAMETER}rem`);

      main.appendChild(newItem);
      setTimeout(() => main.removeChild(newItem), disappearAfter);
    }

let handleMouseMove =
    (e) => {
      createElement(e.x, e.y);
      removeListener();
    }

let removeListener =
    () => {
      main.removeEventListener('mousemove', handleMouseMove)
      setTimeout(() => addListener(), appearAfter)
    }

let addListener = () => { main.addEventListener('mousemove', handleMouseMove); }

setToDefault();
addListener();

header.addEventListener('mouseover', () => removeListener());

circleSize.addEventListener('change',
                            () => { CIRCLE_DIAMETER = circleSize.value / 2; });

trailingLength.addEventListener(
    'change', () => { disappearAfter = trailingLength.value; });

numberOfDots.addEventListener(
    'change', () => { appearAfter = numberOfDots.max - numberOfDots.value; });
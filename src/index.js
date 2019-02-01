const fruitButtons = document.getElementById('fruit-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');
const fruitArray = ['apple', 'banana', 'pear', 'blueberry', 'orange', 'grape'];


function makeSegment(fruit2) {
    const segment = document.createElement('span');
    segment.classList.add('segment', fruit2);
    bugBody.appendChild(segment);
}

function dance(fruit) {
    const selected = '.segment.' + fruit;
    const segments = document.querySelectorAll(selected);
    const dancing = document.querySelectorAll('.dance');
    dancing.forEach(function(element) {
        element.classList.remove('dance');
    });
    segments.forEach(function(element) {
        element.classList.add('dance');
    });
}

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.textContent = fruit;
    fruitButton.classList.add('fruit-button', fruit);
    fruitButtons.appendChild(fruitButton);

    fruitButton.addEventListener('click', function() {
        makeSegment(fruit);
    });
}

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const danceButton = document.createElement('button');
    danceButton.value = fruit;
    danceButton.textContent = fruit;
    danceButton.classList.add('fruit-button', fruit);
    danceButtons.appendChild(danceButton);

    danceButton.addEventListener('click', function() {
        dance(fruit);
    });
}


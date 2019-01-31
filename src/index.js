const fruitButtons = document.getElementById('fruit-buttons');
const bugBody = document.getElementById('bug-body');
const fruitArray = ['apple', 'banana', 'pear', 'blueberry', 'orange', 'grape'];

function makeSegment(fruit) {
    const segment = document.createElement('span');
    segment.classList.add('segment', fruit);
    bugBody.appendChild(segment);
}

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.textContent = fruit;
    fruitButton.classList.add('fruit-button', fruit);
    fruitButtons.appendChild(fruitButton);

    fruitButton.addEventListener('click', function(event) {
        makeSegment(fruit);
    });
}


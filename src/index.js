const fruitButtons = document.getElementById('fruit-buttons');
const bugBody = document.getElementById('bug-body');
const danceButtons = document.getElementById('dance-buttons');
const fruitArray = ['apple', 'banana', 'pear', 'blueberry', 'orange', 'grape'];


function makeSegment(fruit2) {
    const segment = document.createElement('span');
    segment.classList.add('segment', fruit2);
    bugBody.appendChild(segment);
}

//move a class of segment up when button is clicked
function dance(fruit) {
    const selected = '.segment.' + fruit;
    const segments = document.querySelectorAll(selected);
    console.log(segments);


    //write for loop here to add class to every item selected;
    segments.forEach(function(element) {
        element.classList.add('dance');
    });

    // const activeSegments = danceButtons.querySelectorAll('dance');
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
        //call function
        dance(fruit);
    });
}


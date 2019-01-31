const fruitButtons = document.getElementById('fruit-buttons');
const fruitArray = ['apple', 'banana', 'pear', 'blueberry', 'orange', 'grape'];

for(let i = 0; i < fruitArray.length; i++) {
    const fruit = fruitArray[i];
    console.log(fruit);
    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.textContent = fruit;
    fruitButton.classList.add('fruit-button', fruit);
    console.log(fruitButton);
    fruitButtons.appendChild(fruitButton);
}

// console.log('fruit button', fruitButtons);

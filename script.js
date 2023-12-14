var slider = document.getElementById("myRange");
var drawContainer = document.getElementById("draw-container");
var matrixSize = document.getElementById("matrix-size");
let isLeftMouseButtonDown = false;

// Create the grid
function createGrid(value) {
    drawContainer.innerHTML = ''; // Clean the actual grid

    for (let i = 1; i <= value; i++) {
        const newLine = document.createElement("div");
        newLine.classList.add('line');
        drawContainer.appendChild(newLine);

        for (let j = 1; j <= value; j++) {
            const newItem = document.createElement("div");
            newItem.classList.add('item');
            newLine.appendChild(newItem);
        }    
    }

    addMouseOverEventToItems();
}

// Creates a random number between 0 and max (for rgb use)
function randomColor(max) {
    return Math.floor(Math.random() * max);
}

// Mouseover to paint it with black color and unpaint it if not clicked
function addMouseOverEventToItems() {
    document.querySelectorAll('div.item').forEach(item => {
        item.addEventListener('mouseover', function() {
            if (isLeftMouseButtonDown) { 
                item.style.backgroundColor = "rgb(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255);
            } else {
                item.style.backgroundColor = "";
            }
        });
    });
}

// Listeners to track the mouse left button click
document.addEventListener('mousedown', function(event) {
    if (event.button === 0) {
        isLeftMouseButtonDown = true;
    }
});

document.addEventListener('mouseup', function(event) {
    if (event.button === 0) {
        isLeftMouseButtonDown = false;
    }
});

// Create a grid based on the slider value
slider.oninput = function() {
    createGrid(slider.value);
    let sliderLabel = slider.value + "x" + slider.value;
    matrixSize.innerHTML = sliderLabel;
}

// Create the initial grid
createGrid(slider.value);
matrixSize.innerHTML = '16x16';

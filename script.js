//selecting container div
const container = document.getElementById("container")

//asking user for number of squares per side
let number;
do {
    number = prompt("Enter number of squares per side (less than or equal to 100):","16") || 16;
} while (number > 100 || number < 1);


//loop to create the Grid
for (let i = 0; i < number; i++) {
    const div = document.createElement("div")
    div.setAttribute("class", "row")

    for (let j = 0; j < number; j++) {
        const square = document.createElement("div")
        square.className = "square";
        square.setAttribute("style", "width: 100%; height:100%")
        div.appendChild(square)
    }
    container.appendChild(div)
}

let randomColor = true;
const randomBtn = document.getElementById("random");
const squares = document.querySelectorAll(".square");
const brushColor = document.getElementById("brushColor")
brushColor.textContent = `${randomColor? "Random" : "Black"}`


randomBtn.addEventListener("click", () => {
    randomColor = !randomColor;
    brushColor.textContent = `${randomColor? "Random" : "Black"}`
});

// Add the mousedown event to the document to track if the mouse is pressed
document.addEventListener("mousedown", () => {
    mousePressed = true; // Mouse is pressed
});

// Add the mouseup event to reset the state when the mouse button is released
document.addEventListener("mouseup", () => {
    mousePressed = false; // Mouse is no longer pressed
});

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        if(mousePressed){

            if (randomColor) {
                const min = 5;
                const max = 250;
                const randomRedValue = Math.floor(Math.random() * (max - min + 1)) + min
                const randomGreenValue = Math.floor(Math.random() * (max - min + 1)) + min
                const randomBlueValue = Math.floor(Math.random() * (max - min + 1)) + min
                square.setAttribute("style", `background-color: rgb(${randomRedValue},${randomGreenValue},${randomBlueValue})`)
            }
            else {
                    square.setAttribute("style", `background-color: black`)
            }
        }
    })
}
)

//resetting the grid color to white
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    squares.forEach((square) => {
        square.setAttribute("style", `background-color:white`)
    })
})


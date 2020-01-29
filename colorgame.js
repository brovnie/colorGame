var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change color diplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change display
    messageDisplay.textContent = ""; 
    // change to new color
    this.textContent = "New Colors";
    //change colors of squere
    for(var i = 0; i < squares.length; i++){
        //change each color to match given
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squeres
    squares[i].style.background = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of clicked suqere
        var clickedColor = this.style.background;
        //Compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given
    squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = []
    //add num random colors to arrey
    for(var i = 0; i < num; i++){
        //get random color push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256); 
    //pick a "blue" from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
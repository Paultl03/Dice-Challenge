
// First Dice
var randomNumber1 = Math.floor(Math.random() * 6) +1; // Random number between 1 & 6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // Creates images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //Finds first dice image

image1.setAttribute("src" , randomDiceImage);//Sets first image to random dice number image


// Second Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]; //Finds second dice image

image2.setAttribute("src" , randomDiceImage2); //Sets second image to random dice number image


// Random Winner Results

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"; //Change h1 when Player 1 wins using .innerHTML
    }
    else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"; //Change h1 when Player 2 wins using .innerHTML
    }
    else 
    document.querySelector("h1").innerHTML = "Draw!"; //Change h1 when both playes tie using .innerHTML
  



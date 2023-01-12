

// First dice
var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";

var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute('src', randomDiceImg1);



// Second dice
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute('src', randomDiceImg2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It is a tie";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
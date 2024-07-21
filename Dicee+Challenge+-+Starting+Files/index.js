
var player1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage =  "images/" +  "dice" + player1 + ".png";

var randomImageSource = randomDiceImage;

 var atribut = document.querySelectorAll("img")[0];
 
atribut.setAttribute("src" , randomImageSource);

//player 2

var player2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage =  "images/" +  "dice" + player2 + ".png";

var randomImageSource = randomDiceImage;

 var atribut = document.querySelectorAll("img")[1];
 
atribut.setAttribute("src" , randomImageSource);


 //mencari pemenangnya
if  (player1 > player2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Win!";
}

else if (player1 < player2){
    document.querySelector("h1").innerHTML = " Player 2 Win!🚩 ";
}

else {
    document.querySelector("h1").innerHTML = "draw!";

}


 
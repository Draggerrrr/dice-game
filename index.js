let randomNumber1 = Math.random();
randomNumber1 = randomNumber1  * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;



let randomNumber2 = Math.random();
randomNumber2 = randomNumber2  * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}


document.querySelector(".img1").setAttribute("src","./dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./dice"+randomNumber2+".png");

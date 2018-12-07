"use strict";

function rollDice1(){
    
    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 4) + 1;
    let d2 = Math.floor(Math.random() * 4) + 1;
    let diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML= "The number you got is = "  + diceTotal+".";
   
    
}
function rollDice2(){
    
    let die3 = document.getElementById("die3");
    let die4 = document.getElementById("die4");
    let status = document.getElementById("status");
    let d3 = Math.floor(Math.random() * 6) + 1;
    let d4 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d3 + d4;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    status.innerHTML= "The number you got is = "  + diceTotal+".";
}

function rollDice3(){
    let die5 = document.getElementById("die5");
    let die6 = document.getElementById("die6");
    let status = document.getElementById("status");
    let d5 = Math.floor(Math.random() * 8) + 1;
    let d6 = Math.floor(Math.random() * 8) + 1;
    let diceTotal = d5 + d6;
    die5.innerHTML = d5;
    die6.innerHTML = d6;
    status.innerHTML= "The number you got is = "  + diceTotal+".";

}
       
console.log(rollDice1());
console.log(rollDice2());
console.log(rollDice3());

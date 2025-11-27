
let btn=document.getElementById("btn");
let sumEl=document.getElementById("sum");   
let cardsEl=document.getElementById("cards");
let messageEl=document.getElementById("message");
let newBtn=document.getElementById("new-card-btn");
let playerEl=document.getElementById("player-el");

let player={
    name:"Meenesh",
    chips: 125
};

let cards=[];
let sum= 0;
let hasBlackJack=false;
let isAlive=false;
let msg="";
playerEl.textContent= player.name + ": $" + player.chips;


function getRandomcard() {
   let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber===1){
        return 11;
    }else if (randomNumber>10){
        return 10;
    }else 
    return randomNumber;
}

function renderGame() {
       cardsEl.textContent = "Cards: " ;
        for(let i=0;i<cards.length;i++){
            cardsEl.textContent +=cards[i]+"  ";
        } 
        
        sumEl.textContent= "Sum: "+ sum ;
        if (sum <=20){
            msg="Do You Want to Draw a New Card?";
        } else if(sum===21){
            msg="wohoo! You've got Blackjack !";
            hasBlackJack=true;
        } else {
        msg="You're out of game";
            isAlive=false;
        }

        messageEl.textContent=msg;
}

function newCard() {
    if(isAlive===true&&hasBlackJack===false){
      let card = getRandomcard();
       sum += card;
       cards.push(card);
        renderGame();
    } 
    
}

function startGame() {
    isAlive=true;
    let firstCard=getRandomcard();
    let secondCard=getRandomcard();
    cards=[firstCard,secondCard];
    sum= firstCard + secondCard;
    renderGame();
}

btn.addEventListener("click",startGame);
newBtn.addEventListener("click" , newCard);
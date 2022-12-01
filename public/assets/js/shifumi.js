// let btnReset = document.getElementById('buttonReset'); //déclaration du bouton reset via l'id.
// let btnStart = document.getElementById('buttonStart'); //déclaration du bouton start via l'id.
// let timer = document.getElementById('time'); //déclaration du timer via l'id.

// let scorePlayer = document.getElementById('scorePlayer'); //déclaration du compteur de point du joueur via l'id.
// let scoreIa = document.getElementById('scoreIa'); //déclaration du compteur de point de l'ordinateur via l'id.

let message = document.getElementById('message');//déclaration du message de défaite ou de victoire via l'id.
// let cardevent = document.getElementById('event'); //déclaration pour changement de couleur de la card via l'id.

let scissorPlayer = document.getElementById('imgScissors');//déclaration du button ciseau du joueur via l'id.
let paperPlayer = document.getElementById('imgPaper');//déclaration du button feuille du joueur via l'id.
let rockPlayer = document.getElementById('imgRock');//déclaration du button pierre  du joueur via l'id.

let scissorIa = document.getElementById('imgScissorsIa');//déclaration du button ciseau de l'ordinateur via l'id.
let paperIa = document.getElementById('imgPaperIa');//déclaration du button feuille de l'ordinateur via l'id.
let rockIa = document.getElementById('imgRockIa');//déclaration du button pierre  de l'ordinateur via l'id.

// let scissorIa = 1;
// let paperIa = 2;
// let rockIa = 3;

//Choix Ordinateur
function randomIaChoose(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
let random = randomIaChoose(1,4);
// console.log(random); 
    if(random == 1){
        return 'Ciseaux';
        }else if(random == 2){
        return 'Feuille';  
    }else{
        return 'Pierre';
    }

//Choix Player
function playerVsIa(player, ia) {
    //Player choose scissors
    if(player == scissorPlayer && ia== 1) {
        message.innerHTML = "Vous êtes à égalité"
        }else if(player == scissorPlayer && ia== 2){
        message.innerHTML = "Vous avez gagné cette manche !"
    }else {
        message.innerHTML = "Vous avez perdu cette manche !"
    }
    //PLayer choose paper
    if(player == paperPlayer && ia == 1){
        message.innerHTML = "Vous avez perdu cette manche !"
        }else if(player == paperPlayer && ia== 2){
        message.innerHTML = "Vous êtes à égalité"
    }else{
        message.innerHTML = "Vous avez gagné cette manche !"
    }
    //Player choose rock
    if(player == rockPlayer && ia == 1) {
        message.innerHTML = "Vous avez gagné cette manche !"
    } else if(player == rockPlayer && ia == 2){
        message.innerHTML = "Vous avez perdu cette manche !"
    }else{
        message.innerHTML = "Vous êtes à égalité"
    }
}

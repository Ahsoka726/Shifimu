let btnReset = document.getElementById('buttonReset'); //déclaration du bouton reset via l'id.


let scorePlayer = document.getElementById('scorePlayer'); //déclaration du compteur de point du joueur via l'id.
let scoreIa = document.getElementById('scoreIa'); //déclaration du compteur de point de l'ordinateur via l'id.

let message = document.getElementById('message');//déclaration du message de défaite ou de victoire via l'id.
// let cardevent = document.getElementById('event'); //déclaration pour changement de couleur de la card via l'id.

let scissor = document.getElementById('imgScissors');//déclaration du button ciseau du joueur via l'id.
let paper = document.getElementById('imgPaper');//déclaration du button feuille du joueur via l'id.
let rock = document.getElementById('imgRock');//déclaration du button pierre  du joueur via l'id.

// let scissorIa = document.getElementById('imgScissorsIa');//déclaration du button ciseau de l'ordinateur via l'id.
// let paperIa = document.getElementById('imgPaperIa');//déclaration du button feuille de l'ordinateur via l'id.
// let rockIa = document.getElementById('imgRockIa');//déclaration du button pierre  de l'ordinateur via l'id.

//Choix Ordinateur
function randomIaChoose(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function scissorChoose(){
    let random = randomIaChoose(1,4);
    let ciseauxValue = scissor.value;
    if (ciseauxValue == random ) {
        message.innerHTML="Vous êtes à égalité"
    } else if(ciseauxValue && random == 2) {
        message.innerHTML="Vous avez gagné cette manche !"
        return victoryPlayer();
    } else{
        message.innerHTML="Vous avez perdu cette manche !"
        return victoryIa();
    }
}

function paperChoose(){
    let random = randomIaChoose(1,4);
    let feuilleValue = paper.value;
    if (feuilleValue == random ) {
        message.innerHTML="Vous êtes à égalité"
    } else if(feuilleValue && random == 1) {
        message.innerHTML="Vous avez perdu cette manche !"
        return victoryIa();
    } else{
        message.innerHTML="Vous avez gagné cette manche !"
        return victoryPlayer();
    }
}

function rockChoose () {
    let random = randomIaChoose(1,4);
    let pierreValue = rock.value;
    if (pierreValue == random ) {
        message.innerHTML="Vous êtes à égalité"
    } else if(pierreValue && random == 2) {
        message.innerHTML="Vous avez perdu cette manche !"
        return victoryIa();
    } else{
        message.innerHTML="Vous avez gagné cette manche !"
        return victoryPlayer();
    }
}

scissor.addEventListener('click', scissorChoose)
paper.addEventListener('click', paperChoose)
rock.addEventListener('click', rockChoose )



//Fonction compteur pour IA et Player
    let victoryIa = () => {
        scoreIa.textContent++;
      };
      
    let victoryPlayer = () => {
        scorePlayer.textContent++;
      };

//Evenement bouton reset
btnReset.addEventListener('click', () =>{
    scoreIa.textContent = 0;
    scorePlayer.textContent = 0;
    message.innerHTML ="";
})

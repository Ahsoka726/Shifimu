let btnReset = document.getElementById('buttonReset'); //déclaration du bouton reset via l'id.
// let btnStart = document.getElementById('buttonStart'); //déclaration du bouton start via l'id.
// let timer = document.getElementById('time'); //déclaration du timer via l'id.

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

// let scissorIa = 0;
// let paperIa = 0;
// let rockIa = 0;

//Choix Ordinateur
function randomIaChoose(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function scissorchoose(){
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

function paperchoose(){
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

scissor.addEventListener('click', scissorchoose)
paper.addEventListener('click', paperchoose)
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

    // if(random == 1){
    //    let scissorIa = random;
    //     }else if(random == 2){
    //    let paperIa = random;  
    // }else{
    //    let rockIa = random;
    // }

    // console.log(random);



// console.log(random); 

// Choix Player
// function playerVsIa(player, ia) {
//     // scissorPlayer = Number(scissorPlayer.value);
//     // paperPlayer =  Number(paperPlayer.value);
//     // rockPlayer =  Number(rockPlayer.value);

//     // Player choose scissors
//     if(player == scissorPlayer && ia== 1) {
//         message.innerHTML = "Vous êtes à égalité";
//         }else if(player == scissorPlayer && ia== 2){
//         message.innerHTML = "Vous avez gagné cette manche !";
//         return victoryPlayer();
//     }else {
//         message.innerHTML = "Vous avez perdu cette manche !";
//         return victoryIa();
//     }

//     //PLayer choose paper
//     if(player == paperPlayer && ia == 1){
//         message.innerHTML = "Vous avez perdu cette manche !";
//         return victoryIa()
//         }else if(player == paperPlayer && ia== 2){
//         message.innerHTML = "Vous êtes à égalité";
//     }else{
//         message.innerHTML = "Vous avez gagné cette manche !";
//         return victoryPlayer();
//     }

//     //Player choose rock
//     if(player == rockPlayer && ia == 1) {
//         message.innerHTML = "Vous avez gagné cette manche !";
//         return victoryPlayer();
//     } else if(player == rockPlayer && ia == 2){
//         message.innerHTML = "Vous avez perdu cette manche !";
//         return victoryIa()
//     }else{
//         message.innerHTML = "Vous êtes à égalité";
//     }
// }

// let ia = random;//déclaration de la variable ia pour random.
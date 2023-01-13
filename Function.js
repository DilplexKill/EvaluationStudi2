
// bool qui joue ? true joueur un false joueur 2
let  playerOneIsActive ;

//integer score
let  scorePlayerOne = 0;
let  scorePlayerTwo = 0;
let  currentScrore = 0;

//initialisation du nombres de face au dé
const nbrFaceDes = 6;

//Récuperer les éléments du dom
//btn
btnNewGame = document.querySelector('.btn_NewGame');
btnLancer = document.querySelector('.btn_Lancer');
btnValiderScore = document.querySelector('.btnValiderScore');

//récupération des txt
playerOne = document.querySelector('.playerOne');
playerTwo = document.querySelector('.playerTwo');

scorePlayerOneTxt = document.querySelector('.scorePlayerOne');
scorePlayerTwoTxt = document.querySelector('.scorePlayerTwo');

currentScroreOneTxt = document.querySelector('.currentScoreOne');
currentScroreTwoTxt = document.querySelector('.currentScoreTwo');

//récuperation des images des dés
imageD = document.querySelector(".imgD");

//message intuitif pour les joueurs
message = document.querySelector(".message");

//le boutton new game initialise les variables et rend possible de lancer les dés
btnNewGame.addEventListener("click",()=> {
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    currentScrore = 0;
    playerOneIsActive = true;
    SizeName();
    console.log(playerOneIsActive);
    AfficheScorePlayerOne();
    AfficheScorePlayerTwo();
    btnLancer.disabled = false;
    btnValiderScore.disabled = false;
})

//permet de changer de joueur et de valider le score courant
btnValiderScore.addEventListener("click",()=> {
    if(playerOneIsActive === true)
    {
        scorePlayerOne += currentScrore;
        currentScrore = 0;
        AfficheScorePlayerOne();
        AfficheCurrentScoreOne();
        if(scorePlayerOne >= 100)
        {
            Message(scorePlayerOne,randomScore,true);
        }
        else
        {
            playerOneIsActive = false;
            SizeName();
        }
    }
    else
    {
        scorePlayerTwo += currentScrore;
        currentScrore = 0;
        AfficheScorePlayerTwo();
        AfficheCurrentScoreTwo();
        if(scorePlayerTwo >= 100)
        {
            Message(scorePlayerTwo,randomScore,false);
        }
        else
        {
            playerOneIsActive = true;
            SizeName();
        }
    }
})

//permet de lancer les dés et d incrémenter le score courant
btnLancer.addEventListener("click", ()=> {
    randomScore = Math.floor((Math.random() * nbrFaceDes) + 1);

    if(playerOneIsActive === true)
    {
        if(randomScore === 1)
        {
            playerOneIsActive = false;
            currentScrore = 0;
            SizeName();
        }
        else
        {
            currentScrore += randomScore;
        }
        Message(scorePlayerOne,randomScore,true)
        AfficheD(randomScore);
        AfficheCurrentScoreOne();
    }
    else
    {
        if(randomScore === 1)
        {
            playerOneIsActive = true;
            currentScrore = 0;
            SizeName();
        }
        else
        {
            currentScrore += randomScore;
        }
        Message(scorePlayerTwo,randomScore,false)
        AfficheD(randomScore);
        AfficheCurrentScoreTwo();
    }
})

//permet d afficher le score du joueur 1
function AfficheScorePlayerOne () {
    scorePlayerOneTxt.innerHTML = scorePlayerOne;
}

//permet d afficher le score du joueur 2
function AfficheScorePlayerTwo () {
    scorePlayerTwoTxt.innerHTML = scorePlayerTwo;
}

//Affiche le score courrant
function AfficheCurrentScoreOne() {

        currentScroreOneTxt.innerHTML = currentScrore;
}

function AfficheCurrentScoreTwo() {

    currentScroreTwoTxt.innerHTML = currentScrore;
}

//modifie la taille du joueur qui joue et réinitialise celle de celui qui ne joue pas
function SizeName(){
    if(playerOneIsActive === true)
    {

        playerOne.style.fontWeight = 'bold';
        playerOne.style.color = 'rgba(0, 0, 0, 1)';

        playerTwo.style.fontWeight = 'normal';
        playerTwo.style.color = 'rgba(0, 0, 0, 0.16)';
    }
    else
    {

        playerTwo.style.fontWeight = 'bold';
        playerTwo.style.color = 'rgba(0, 0, 0, 1)';

        playerOne.style.fontWeight = 'normal';
        playerOne.style.color = 'rgba(0, 0, 0, 0.16)';
    }
}

//affichage des dés en fonction du resultat (prend en parametre score qui est le resultat du D)
function AfficheD(Score){
    switch (Score)
    {
        case 1:
            imageD.src="./Images/face1.JPG";
            break;

        case 2:
            imageD.src="./Images/face2.JPG";
            break;

        case 3:
            imageD.src="./Images/face3.JPG";
            break;

        case 4:
            imageD.src="./Images/face4.JPG";
            break;

        case 5:
            imageD.src="./Images/face5.JPG";
            break;

        case 6:
            imageD.src="./Images/face6.JPG";
            break;
    }
}

//message en fonction de la situation
function Message(scoreFinale,resultatD,Joueur1) {
    if(Joueur1 === true)
    {
        if(scoreFinale >= 100)
        {
            message.innerHTML ="Tu as gagné joueur 1";
            btnLancer.disabled = true;
            btnValiderScore.disabled = true;
        }
        else
        {
            if(resultatD === 1)
            {
                message.innerHTML = "Passe ton tour tu as fait 1";
            }
            else
            {
                message.innerHTML = "";
            }
        }
    }
    else
    {
        if(scoreFinale >= 100)
        {
            message.innerHTML = "Tu as gagné joueur 2";
            btnLancer.disabled = true;
            btnValiderScore.disabled = true;
        }
        else
        {
            if(resultatD === 1)
            {
                message.innerHTML = "Passe ton tour tu as fait 1";
            }
            else
            {
                message.innerHTML = "";
            }
        }
    }
}
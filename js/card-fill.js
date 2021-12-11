// Nombres de cartas
var names=['Ghost','Werewolf','Skull','Vampire','Pumpkin','Zombie','Ears','Witch','Devil','Movie theater','Heavy','Light','Near','Far','Fast','Slow','Strong','Weak','Big','Small','Afraid','Brave','high','Library','Body','Head','Torso','Chest','Shoulder','Arm','Elbow','Hand','Mall','Belly','Waist','Back','Leg','Sing','Thigh','Knee','Foot','Farmer','Priest','Waiter','Right','Left','Street','Sun rise','Sunset','Between','Front of','Behind','Next to','Drug Store','Pikachu','Doggy'];

let Seccions=16 //numero de secciones que hay en la loteria


// Variables de selecion de carta e item 
let numberCard;


// array para almacenar las cartas ya usadas
let repeat=[];

// Creacion del DOM
let item=document.getElementById("card");


// const cardFill=()=>{

// }
for(let NItem=1; NItem<=Seccions; NItem++){
   

    do{
        numberCard=Math.floor(Math.random()*56+1);

    }while(repeat.find(N=>N==numberCard));//evitar  que se repita el numero
    
    repeat.push(numberCard);

    // Anexo de template
    item.innerHTML+=`<div class="item">
                        <img src="/Images/${numberCard}.jpg" alt="img"/>
                        <h2 >${names[numberCard]}</h2>
                        <span>${numberCard}</span>
                     </div>`;
    
}
repeat=[];
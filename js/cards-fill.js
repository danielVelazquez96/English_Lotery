//nombres de cartas
names=['Ghost','Werewolf','Skull','Vampire','Pumpkin','Zombie','Ears','Witch','Devil','Movie theater','Heavy','Light','Near','Far','Fast','Slow','Strong','Weak','Big','Small','Afraid','Brave','high','Library','Body','Head','Torso','Chest','Shoulder','Arm','Elbow','Hand','Mall','Belly','Waist','Back','Leg','Sing','Thigh','Knee','Foot','Farmer','Priest','Waiter','Right','Left','Street','Sun rise','Sunset','Between','Front of','Behind','Next to','Drug Store','Pikachu','Doggy'];
// Variable de DOM
let items;


for(let card=1; card<=56; card++){

items=document.getElementById(`items-${card}`);

items.innerHTML=`<img src="/Images/${card}.jpg" alt="img" />
                <h2 >${names[card-1]}</h2>
                <span>${card}</span>`

}


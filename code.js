let cp1 = 1;
let cp2 = 1;
let arr = [];

for (let i = 1; i <= 100; i++) {
    arr[i] = document.querySelector(`#ind${i}`);
}
arr[cp1].innerText += "\nP1";
arr[cp2].innerText += "\nP2";
let dice=document.querySelector(".dice");
let turn=document.querySelector(".turn");
//first ladder
let LO1= document.querySelector("#ind5");
const lopen1= document.createElement('p');
lopen1.className = 'ls';
lopen1.innerText="LO1";
LO1.appendChild(lopen1);
let LC1= document.querySelector("#ind87");
const lClose1= document.createElement('p');
lClose1.className = 'ls';
lClose1.innerText="LC1";
LC1.appendChild(lClose1);
//second ladder
let LO2= document.querySelector("#ind18");
const lopen2= document.createElement('p');
lopen2.className = 'ls';
lopen2.innerText="LO2";
LO2.appendChild(lopen2);
let LC2= document.querySelector("#ind45");
const lClose2= document.createElement('p');
lClose2.className = 'ls';
lClose2.innerText="LC2";
LC2.appendChild(lClose2);
//third ladder
let LO3= document.querySelector("#ind51");
const lopen3= document.createElement('p');
lopen3.className = 'ls';
lopen3.innerText="LO3";
LO3.appendChild(lopen3);
let LC3= document.querySelector("#ind79");
const lClose3= document.createElement('p');
lClose3.className = 'ls';
lClose3.innerText="LC3";
LC3.appendChild(lClose3);
//first snake
let SO1= document.querySelector("#ind98");
const sopen1= document.createElement('p');
sopen1.className = 'ls';
sopen1.innerText="SO1";
SO1.appendChild(sopen1);
let SC1= document.querySelector("#ind7");
const sClose1= document.createElement('p');
sClose1.className = 'ls';
sClose1.innerText="SC1";
SC1.appendChild(sClose1);
//second snake
let SO2= document.querySelector("#ind69");
const sopen2= document.createElement('p');
sopen2.className = 'ls';
sopen2.innerText="SO2";
SO2.appendChild(sopen2);
let SC2= document.querySelector("#ind33");
const sClose2= document.createElement('p');
sClose2.className = 'ls';
sClose2.innerText="SC2";
SC2.appendChild(sClose2);
//write snake and ladder
function defi(){
    sClose2.innerText="SC2";
    SC2.appendChild(sClose2);
    sopen2.innerText="SO2";
    SO2.appendChild(sopen2);
    sClose1.innerText="SC1";
    SC1.appendChild(sClose1);
    sopen1.innerText="SO1";
    SO1.appendChild(sopen1);
    lClose3.innerText="LC3";
    LC3.appendChild(lClose3);
    lopen3.innerText="LO3";
    LO3.appendChild(lopen3);
    lClose2.innerText="LC2";
    LC2.appendChild(lClose2);
    lopen2.innerText="LO2";
    LO2.appendChild(lopen2);
    lClose1.innerText="LC1";
    LC1.appendChild(lClose1);
    lopen1.innerText="LO1";
    LO1.appendChild(lopen1);
}
//working
function diceRoll(){
    let val = Math.floor(Math.random() * 6) + 1;
    dice.innerText=`${val}`;
    return val;
}
let bool = true;
function player1(itsTime){
    if(cp1+itsTime>100){
        turn.innerText="P2 turns";
        bool=false;
        return;
    }
    arr[cp1].innerText = `${cp1}`;
    if(cp1+itsTime==100){
        turn.innerText="Game ends,winner P1";
        return;
    }
    cp1=cp1+itsTime;
    if(cp1==5)cp1=87;
    if(cp1==18)cp1=45;
    if(cp1==51)cp1=79;
    if(cp1==98)cp1=7;
    if(cp1==69)cp1=33;
    arr[cp1].innerText += "\nP1";
    if(cp1==cp2 && cp1!=1){
        arr[cp2].innerText=cp2 + "\nP1";
        cp2=1;
        arr[cp2].innerText += "P2";
    }
    if(itsTime==6){
        turn.innerText= "aggain P1 turn";
        setTimeout(()=>{
            itsTime=diceRoll();
            player1(itsTime);
        },2000);
    }
    turn.innerText="P2 turn";
    bool=false;
    defi();
}
function player2(itsTime){
    if(cp2+itsTime>100){
        turn.innerText="P1 turns";
        return;
    }
    arr[cp2].innerText=`${cp2}`;
    if(cp2+itsTime==100){
        turn.innerText="Game ends,winner P2";
        return;
    }
    cp2=cp2+itsTime;
    if(cp2==5)cp2=87;
    if(cp2==18)cp2=45;
    if(cp2==51)cp2=79;
    if(cp2==98)cp2=7;
    if(cp2==69)cp2=33;
    arr[cp2].innerText += "\nP2";
    
    if(cp1==cp2 && cp1!=1){
        arr[cp1].innerText=cp1 + "\nP2";
        cp1=1;
        arr[cp1].innerText += "\nP1";
    }
    if(itsTime==6){
        turn.innerText= "aggain P2 turn";
        setTimeout(()=>{
            itsTime=diceRoll();
            player2(itsTime);
        },2000);
    }
    turn.innerText="P1 turn";
    bool=true;
    defi();
}
dice.addEventListener("click",()=>{
    let itsTime=diceRoll();
    if(bool){ 
        player1(itsTime);
    }else{
        player2(itsTime);
    }
});

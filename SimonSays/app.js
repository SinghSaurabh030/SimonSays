let h3=document.querySelector('h3');
let body=document.querySelector('body');
let buttonColor=['yellow','red','purple','green'];

let gameSeq=[];
let userSeq=[];
let level=0;
let start=false;
let maxScore=0;

body.addEventListener('keypress', function(){
    if(start==false){
        start=true;
        level++;
        h3.innerText=`Level ${level}`;
        flashup();
    }
});


function flash(btnClr){
    let btn=document.querySelector(`.${btnClr}`);
    btn.classList.add('Blimp');
    setTimeout(function(){
        btn.classList.remove('Blimp');
    },250);
    gameSeq.push(`${btnClr}`);
    console.log(gameSeq);
}


function flashup(){

    let rndIdx=Math.floor(Math.random()*3);
    let btnClr=buttonColor[rndIdx];
    flash(btnClr);
    
}

function checkMove(currBtn){
    let idx=userSeq.length-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            userSeq=[];
            level++;
            h3.innerText=`Level ${level}`;
            setTimeout(flashup,1000);
        }
    }
    else{
        maxScore=Math.max(maxScore,level-1);
        h3.innerHTML=`Game Over,Your Score Was <b>${level-1}!</b> Press Any Key To Start & Highest Score Till Now Is ${maxScore}`;
        resetAll();
    }
}

function userFlash(){
    userSeq.push(`${this.id}`);
    let currBtn=this;
    currBtn.classList.add('userFlash');
    setTimeout(function(){
        currBtn.classList.remove('userFlash');
    },250);
    console.log(userSeq);
    checkMove(currBtn);

}

let btns=document.querySelectorAll('.box');
for(let btn of btns){
    btn.addEventListener('click',userFlash);
}

function resetAll(){
    start=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}

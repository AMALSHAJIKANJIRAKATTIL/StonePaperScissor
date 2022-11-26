let images=['paper.png','rock.png','Scissor.png']
let totalturns=0;
let playerscore=0;
let computerscore=0;
function startgame(){
    let turns=document.querySelector('#turn').value;
    turns=parseInt(turns)
    
    if(!turns){
        alert('Enter how many number of turns!!!')
    }else{
       
        let div = document.querySelector('.gamescreen');
        div.style.display = "flex";
        totalturns=turns;
        let startbutton=document.querySelector('.start');
        startbutton.setAttribute("disabled", "");

        let restartbutton=document.querySelector('.restart');
        restartbutton.removeAttribute('disabled')
    }
}

function restart(){
    location.reload();
}

function random(){
    let index=Math.floor(Math.random()* images.length);
    let imagesel=images[index];
    document.querySelector('#computerimage').src=`./src/${imagesel}`;
    return imagesel;
}

let buttonclicked='';

function rock(){
    buttonclicked='rock.png';
    document.querySelector('#playerimage').src=`./src/rock.png`;
}

function paper(){
    buttonclicked='paper.png';
    document.querySelector('#playerimage').src=`./src/paper.png`;
}
function scissor(){
    buttonclicked='Scissor.png';
    document.querySelector('#playerimage').src=`./src/Scissor.png`;
}
function clicked(){
    if(totalturns>0){
    let user=buttonclicked;
    let computer=random();
    console.log(user,computer,totalturns)
    let result=document.querySelector('.result');
    let playerboard=document.querySelector('.playerscore');
    let computerboard=document.querySelector('.computerscore');
    
    
    if(user===computer){
        console.log('DRAW')
        result.textContent='DRAW!';
    }else if((user==='rock.png' && computer==='Scissor.png') || (user==='paper.png' && computer==='rock.png') || (user==='Scissor.png' && computer==='paper.png')){
        result.textContent='WIN!';
        playerscore++;
    }else{
        result.textContent='LOSE!';
        computerscore++;
    }
    playerboard.textContent=`YOUR SCORE : ${playerscore}`;
    computerboard.textContent=`COMPUTER SCORE : ${computerscore}`;
    }
    totalturns--;
    
}



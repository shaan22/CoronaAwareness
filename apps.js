var scores,roundscores,activeplayer;
scores=[0,0];
roundscore=1;
activeplayer=0;
document.querySelector('.dice').style.display='none';
document.getElementById('Score-0').textContent='0';
document.getElementById('Score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    switch(dice){
    case 1 :diceDom.src='http://www.clker.com/cliparts/X/w/P/Y/q/H/dice-1-md.png';
            break;
            case 2:diceDom.src='http://www.clker.com/cliparts/X/V/S/C/I/x/dice-2-md.png';
            break;
            case 3:diceDom.src='http://www.clker.com/cliparts/8/u/t/L/K/e/dice-3-md.png';

            break;
            case 4:diceDom.src='http://www.clker.com/cliparts/D/j/Z/R/5/P/dice-4-md.png';
            break;
            case 5:diceDom.src='http://www.clker.com/cliparts/U/N/J/F/T/x/dice-5-md.png';
            break;
            case 6:diceDom.src='http://www.clker.com/cliparts/Y/O/V/X/F/D/dice-6-md.png';
            break;

                
    }
    if(dice!==1){
        roundscore +=dice;
        document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }
    else{
        activeplayer===0 ? activeplayer=1 :activeplayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active' );
       
    }
});

document.querySelector('.btn-hold'),addEventListener('click',function(){
    scores[activeplayer]+=roundscore;
    this.document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    
    
});


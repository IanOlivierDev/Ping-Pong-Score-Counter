let redBtn = document.querySelector('#redBtn');
let blueBtn = document.querySelector('#blueBtn');

let scoreToWin = document.querySelector('#scoreToWin');
let scoreToWinValue = scoreToWin.value;
scoreToWin.addEventListener('change', function(event){
    scoreToWinValue = scoreToWin.value;
});

let scoreOneCount = 0;
redBtn.addEventListener('click', function(event){
    scoreOneCount +=  1;
    document.querySelector('#score1').innerText = scoreOneCount;  
    if (scoreOneCount === parseInt(scoreToWinValue))
    {
        document.querySelector('.winner').style.backgroundColor = 'red';
        document.querySelector('h3').innerText = 'Red Team is the winner!';
        document.querySelector('.winner').style.display = 'block';
        redBtn.disabled = true;
        blueBtn.disabled = true;
    }  
});

let scoreTwoCount = 0;
blueBtn.addEventListener('click', function(event){
    scoreTwoCount +=  1;
    document.querySelector('#score2').innerText = scoreTwoCount;
    if (scoreTwoCount === parseInt(scoreToWinValue))
    {
        document.querySelector('.winner').style.backgroundColor = 'blue';
        document.querySelector('h3').innerText = 'Blue Team is the winner!';
        document.querySelector('.winner').style.display = 'block';
        blueBtn.disabled = true;
        redBtn.disabled = true;
    }
});

let reset = document.querySelector('#reset');
reset.addEventListener('click', function(event){
    scoreOneCount = 0;
    scoreTwoCount = 0;
    document.querySelector('#score1').innerText = 0;
    document.querySelector('#score2').innerText = 0;
    document.querySelector('.winner').style.display = 'none';
    blueBtn.disabled = false;
    redBtn.disabled = false;
});


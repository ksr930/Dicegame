var scores, roundScore, activePlayer, gameplaying;
function init() {

    scores = [0, 0]
    activePlayer = 0;
    roundScore = 0;
    gameplaying = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}





init();




document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameplaying) {

        var dice = Math.floor(Math.random() * 6) + 1;
        var dicedom = document.querySelector('.dice');
        dicedom.style.display = 'block';
        dicedom.src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore


        }
        else {
            nextplayer();
        }


    }


})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
            gameplaying = false;
        }
        else {
            nextplayer();
        }

    }

})




function nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = "none"
}

document.querySelector('.btn-new').addEventListener('click', init);




















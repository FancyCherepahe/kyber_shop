const enemyMoveDisplayDiv = document.querySelector('.enemy-move-div');
const enemyMoveText = document.getElementById('enemy-move-text');

const enemyLightsaberBlade = document.querySelector(".lightsaber-game-2")
const yourLightsaberBlade = document.querySelector(".lightsaber-game-1")

function startGame() {
    enemyMoveDisplayDiv.style.display = 'flex';
    enemyLightsaberBlade.style.animationName = 'none';

    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
        enemyMoveText.textContent = 'Enemy will Attack!';
        enemyLightsaberBlade.style.animationName = 'swing';
        enemyLightsaberBlade.style.animationDuration = '1.5s';
        setTimeout(() => {
            enemyLightsaberBlade.style.animationName = 'none';
            enemyLightsaberBlade.style.animationDuration = '2s';
        }, 2000);
    }
    else {
        enemyMoveText.textContent = 'Enemy will Defend!';
        enemyLightsaberBlade.style.animationName = 'defend';
        setTimeout(() => {
            enemyLightsaberBlade.style.animationName = 'none';
        }, 2000);
    }
}

function attack() {
    yourLightsaberBlade.style.animationName = 'yourSwing';
    setTimeout(() => {
        yourLightsaberBlade.style.animationName = 'none';;
    }, 2000);
}
    
function block() {
    yourLightsaberBlade.style.animationName = 'yourBlock';
    yourLightsaberBlade.style.animationDuration = '1.5s';
    setTimeout(() => {
        yourLightsaberBlade.style.animationName = 'none';
        yourLightsaberBlade.style.animationDuration = '2s';
    }, 2000);
}    

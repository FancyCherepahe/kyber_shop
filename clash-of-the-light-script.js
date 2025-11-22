const enemyMoveDisplayDiv = document.querySelector('.enemy-move-div');
const enemyMoveText = document.getElementById('enemy-move-text');

const enemyLightsaberBlade = document.querySelector(".lightsaber-game-2");
const yourLightsaberBlade = document.querySelector(".lightsaber-game-1");

const enemyHealthBar = document.querySelector('.health-bar-fill-2');

let enemyHealthBarWidth = 200;

let gameRunning = true;

function startGame() {
    enemyMoveDisplayDiv.style.display = 'flex';
    const healthBar1 = document.querySelector('.health-bar-fill-2'); // Enemy
    const healthBar2 = document.querySelector('.health-bar-fill-1'); // Player
    const enemyMoveText = document.getElementById('enemy-move-text');
    const enemyLightsaberBlade = document.querySelector('.lightsaber-game-2');
    const yourLightsaberBlade = document.querySelector('.lightsaber-game-1');

    function getHealthWidth(bar) {
        return parseInt(window.getComputedStyle(bar).width);
    }

    function enemyAction() {
        const random = Math.floor(Math.random() * 3); // 0 = idle, 1 = attack, 2 = defend

        if (random === 1) {
            enemyMoveText.textContent = 'Enemy will Attack!';
            enemyLightsaberBlade.style.animationName = 'swing';
            enemyLightsaberBlade.style.animationDuration = '1.5s';

            const currentWidth = getHealthWidth(healthBar2);
            const newWidth = Math.max(currentWidth - 15, 0);
            healthBar2.style.width = newWidth + 'px';

        } else if (random === 2) {
            enemyMoveText.textContent = 'Enemy will Defend!';
            enemyLightsaberBlade.style.animationName = 'defend';
            enemyLightsaberBlade.style.animationDuration = '1.5s';
        } else {
            enemyMoveText.textContent = 'Enemy is idle...';
            enemyLightsaberBlade.style.animationName = 'none';
        }

        setTimeout(() => {
            enemyLightsaberBlade.style.animationName = 'none';
        }, 1000);
    }

    function loopGame() {
        const width1 = getHealthWidth(healthBar1);
        const width2 = getHealthWidth(healthBar2);

        if (width1 > 0 && width2 > 0 && gameRunning) {
            enemyAction();
            setTimeout(loopGame, 1000);
        } else {
            enemyMoveText.textContent = 'Game Over!';
            gameRunning = false;
        }
    }

    loopGame();

    // Make attack/block globally accessible
    window.attack = function () {
        if (!gameRunning) return;

        yourLightsaberBlade.style.animationName = 'yourSwing';
        yourLightsaberBlade.style.animationDuration = '1.5s';

        const currentWidth = getHealthWidth(healthBar1);
        const newWidth = Math.max(currentWidth - 20, 0);
        healthBar1.style.width = newWidth + 'px';

        setTimeout(() => {
            yourLightsaberBlade.style.animationName = 'none';
        }, 1000);
    };

    window.block = function () {
        if (!gameRunning) return;

        yourLightsaberBlade.style.animationName = 'yourBlock';
        yourLightsaberBlade.style.animationDuration = '1.5s';

        setTimeout(() => {
            yourLightsaberBlade.style.animationName = 'none';
        }, 1000);
    };
}
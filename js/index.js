import LevelManager from "./levelmanager.js";
import Ghost from "./ghost.js";

var game = new Phaser.Game(685,700, Phaser.AUTO, "", {preload: preload, create:create, update:update, render:render});
var humanArr = [], gameTextArr = [];
var scoreText, levelText, loseText, winText, countdownText;
var score = 0, currentLevel=0;
var loadTimer;
var loadingLevel = false,gameover=false;
var finishText, finalScoreText;

let levelManager = new LevelManager(game,new Ghost(humanArr,increaseScore));

function increaseScore(){
  score += 1;
}

function preload(){
  for (let i = 0; i < levelManager.levels.length; i++) {
    game.load.image("level"+levelManager.levels[i].name, levelManager.levels[i].background);
  }
  game.load.spritesheet("boy", "assets/george.png", 48, 48);
  game.load.spritesheet("ghost", "assets/boo.png", 52, 40);
}

function create(){
  game.physics.startSystem(Phaser.Physics.P2JS);
  levelManager.loadLevel(levelManager.levels[currentLevel]);

  scoreText = this.add.text(15, 20, "", {fontSize: "16px", align:"center"});
  levelText = this.add.text(15, 50, "", {fontSize: "16px", align:"center"});
  countdownText = this.add.text(15, 80, "", {fontSize: "16px", align:"center"});
  loseText = this.add.text(game.world.centerX-45, game.world.centerY-100, "", {fontSize: "20px", align:"center"});
  winText = this.add.text(game.world.centerX-45, game.world.centerY-100, "", {fontSize: "20px", align:"center"});
  gameTextArr = [scoreText, levelText, loseText, winText, countdownText];
  scoreText.setText("Score: " + score);
}

//function introduces a small delay before loading the next level (win) or resetting the current level (lose)
function winLose(win){
  loadTimer = game.time.create();
  loadTimer.add(Phaser.Timer.SECOND * 1, ()=>{
    let previousLevel = currentLevel;
    if(win){
      currentLevel++;
    }
    else{
      score -= humanArr.length * Math.ceil(currentLevel/2);
      if(score<0){
        score = 0;
      }
    }
    if(currentLevel < levelManager.levels.length){
      for (let i = 0; i < gameTextArr.length; i++) {
        gameTextArr[i].setText("");
      }
      levelManager.unloadLevel(levelManager.levels[previousLevel]);
      levelManager.loadLevel(levelManager.levels[currentLevel]);
      for (let i = 0; i < gameTextArr.length; i++) {
        game.world.bringToTop(gameTextArr[i]);
      }
    }
    else{
      loadFinish();
      gameover = true;
    }
    loadTimer.destroy();
    loadingLevel = false;
  }, this);
  loadTimer.start();
  loadingLevel = true;
}

//loads a finish screen with end score
function loadFinish(){
  for (let i = 0; i < gameTextArr.length; i++) {
    gameTextArr[i].setText("");
  }
  levelManager.unloadLevel(levelManager.levels[currentLevel-1]);
  finalScoreText = game.add.text(230, 200, "", {size: "10px", fill: "#FFFFFF", align:"center"});
  finishText = game.add.text(200, 300, "", {size: "10px", fill: "#FFFFFF", align:"center"});
  finalScoreText.setText("Your score is " + score);
  finishText.setText("Thanks for playing!");
  game.world.bringToTop(finalScoreText);
  game.world.bringToTop(finishText);
}

//handling collision between ghost and human

function update(){
  levelManager.ghost.reset();
  if(!gameover && !loadingLevel){
    //ghost controls
    levelManager.ghost.update(game);

    //call human update function for each human
    for(let i=0; i<humanArr.length; i++){
      humanArr[i].update();
    }

    //if there is no more humans on screen, unload current level first, then load next level
    if(!loadingLevel){
      if(humanArr.length == 0){//winning condition
        levelManager.timer.stop();
        winLose(true);
      }
      else if(levelManager.timer.expired && humanArr.length >0){//losing condition
        winLose(false);
      }
    }
  }
}

function render(){
  if(!gameover){
    levelText.setText("Level: " + (currentLevel+1));
    scoreText.setText("Score: " + score);
  }
  if (levelManager.timer.running) {
    countdownText.setText("Time left: "+(levelManager.timerEvent.delay - levelManager.timer.ms)/1000);
  }
  else if(levelManager.timer.expired && humanArr.length > 0){
    loseText.setText("You lose!");
    game.world.bringToTop(loseText);
  }
  else{
    winText.setText("You win!");
  }
}

var game = new Phaser.Game(685,700, Phaser.AUTO, '', {preload: preload, create:create, update:update, render:render});
var upBody, downBody, leftBody, rightBody;
var hitboxArr = [], humanArr = [], gameTextArr = [];
var ghostX, ghostY;
var scoreText, levelText, loseText, winText, countdownText;
var score = 0, currentLevel=0;
var timer, timerEvent, loadTimer, loadLevelEvent;
var loadingLevel = false,gameover=false;
var finishText, finalScoreText;

function preload(){
  for (var i = 0; i < levels.length; i++) {
    game.load.image('level'+i, levels[i].background);
  }
  game.load.spritesheet('boy', 'assets/george.png', 48, 48);
  game.load.spritesheet('girl', 'assets/betty.png', 48, 48);
  game.load.spritesheet('ghost', 'assets/boo.png', 52, 40);
}

function create(){
  game.physics.startSystem(Phaser.Physics.P2JS);
  loadLevel(currentLevel);

  scoreText = this.add.text(15, 20, "", {fontSize: '16px', align:"center"});
  levelText = this.add.text(15, 50, "", {fontSize: '16px', align:"center"});
  countdownText = this.add.text(15, 80, "", {fontSize: '16px', align:"center"});
  loseText = this.add.text(game.world.centerX-45, game.world.centerY-100, "", {fontSize: '20px', align:"center"});
  winText = this.add.text(game.world.centerX-45, game.world.centerY-100, "", {fontSize: '20px', align:"center"});
  gameTextArr = [scoreText, levelText, loseText, winText, countdownText];
  scoreText.setText("Score: " + score);
}

function endTimer(){
  timer.stop();
}

//function introduces a small delay before loading the next level (win) or resetting the current level (lose)
function winLose(win){
  loadTimer = game.time.create();
  loadLevelEvent = loadTimer.add(Phaser.Timer.SECOND * 1, ()=>{
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
    if(currentLevel < levels.length){
      unloadLevel(previousLevel);
      loadLevel(currentLevel);
      game.world.bringToTop(ghost);
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
  unloadLevel(currentLevel-1);
  finalScoreText = game.add.text(230, 200, "", {size: "10px", fill: "#FFFFFF", align:"center"});
  finishText = game.add.text(200, 300, "", {size: "10px", fill: "#FFFFFF", align:"center"});
  finalScoreText.setText("Your score is " + score);
  finishText.setText("Thanks for playing!");
  game.world.bringToTop(finalScoreText);
  game.world.bringToTop(finishText);
}

//handling collision between ghost and human
function ghostCollision(body, bodyB, shapeA, shapeB, equation){
  var humanIndex = -1;
  for(var i=0; i<humanArr.length; i++){
    if(body == humanArr[i].sprite.body || bodyB == humanArr[i].sprite.body){
      humanIndex = i;
      i=humanArr.length;
    }
  }
  if(humanIndex > -1){//ghost collided with a human
    if((shapeB.constructor.name == 'Box' && bodyB.parent.sprite.key == 'boy') || (shapeB.constructor.name == 'Box' && bodyB.parent.sprite.key == 'girl')) {
      score += 1;
      humanArr[humanIndex].sprite.kill();
      humanArr[humanIndex].sprite.destroy();
      humanArr.splice(humanIndex, 1);
    }
    else if(shapeB.constructor.name == 'Convex'){//when human sees ghost,he runs in opposite direction
      if(humanArr[humanIndex].direction == 'up'){
        humanArr[humanIndex].direction = 'down';
        humanArr[humanIndex].speed = 140;
      }
      else if(humanArr[humanIndex].direction == 'down'){
        humanArr[humanIndex].direction = 'up';
        humanArr[humanIndex].speed = 140;
      }
      else if(humanArr[humanIndex].direction == 'right'){
        humanArr[humanIndex].direction = 'left';
        humanArr[humanIndex].speed = 140;
      }
      else if(humanArr[humanIndex].direction == 'left'){
        humanArr[humanIndex].direction = 'right';
        humanArr[humanIndex].speed = 140;
      }
    }
  }
}

function update(){
  if(ghost.body != null){
    ghost.body.velocity.x = 0;
    ghost.body.velocity.y = 0;
  }
  for(var i=0; i<humanArr.length; i++){
    humanArr[i].sprite.body.velocity.x = 0;
    humanArr[i].sprite.body.velocity.y = 0;
  }
  if(!gameover && !loadingLevel){
    //ghost controls
    cursors = game.input.keyboard.createCursorKeys();
    if (cursors.left.isDown){
      ghost.body.velocity.x = -120;
      ghost.animations.play('left');
    }
    else if (cursors.right.isDown){
      ghost.body.velocity.x = 120;
      ghost.animations.play('right');
    }
    if (cursors.up.isDown){
      ghost.body.velocity.y = -120;
      ghost.animations.play('up');
    }
    else if (cursors.down.isDown){
      ghost.body.velocity.y = 120;
      ghost.animations.play('down');
    }
    else{
      ghost.animations.stop();
    }

    //call human update function for each human
    for(var i=0; i<humanArr.length; i++){
      humanArr[i].update();
    }

    //if there is no more humans on screen, unload current level first, then load next level
    if(!loadingLevel){
      if(humanArr.length == 0){//winning condition
        timer.stop();
        winLose(true);
      }
      else if(timer.expired && humanArr.length >0){//losing condition
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
  if (timer.running) {
    countdownText.setText("Time left: "+(timerEvent.delay - timer.ms)/1000);
  }
  else if(timer.expired && humanArr.length > 0){
    loseText.setText("You lose!");
    game.world.bringToTop(loseText);
  }
  else{
    winText.setText("You win!");
  }
}

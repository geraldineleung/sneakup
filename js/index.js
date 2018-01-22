var game = new Phaser.Game(685,700, Phaser.AUTO, '', {preload: preload, create:create, update:update, render:render});
var upBody, downBody, leftBody, rightBody;
var hitboxArr = [], humanArr = [];
var ghostX, ghostY;
var ghostText, humanText, scoreText, levelText, loseText, winText, countdownText;
var score = 0, currentLevel=0;
var timer, timerEvent;

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

  // Create a custom timer
  timer = game.time.create();
  // Create a delayed event 10s from now
  timerEvent = timer.add(Phaser.Timer.SECOND * 10, endTimer, this);
  // Start the timer
  timer.start();

  ghostX = 350;
  ghostY = 30;

  ghost = game.add.sprite(ghostX, ghostY, 'ghost');
  ghost.scale.setTo(0.6,0.6);
  game.physics.p2.enable(ghost, false);//true means the hitbox is visible
  ghost.body.immovable = true;
  ghost.animations.add('left', [2], 10, true);
  ghost.animations.add('right', [3], 10, true);
  ghost.animations.add('up', [1], 10, true);
  ghost.animations.add('down', [0], 10, true);
  ghost.body.fixedRotation = true;

  ghostText = this.add.text(game.world.centerX, game.world.centerY, "", {size: "12px", fill: (0,0,0), align:"center"});
  humanText = this.add.text(game.world.centerX-100, game.world.centerY-100, "", {size: "12px", fill: (0,0,0), align:"center"});
  scoreText = this.add.text(10, 10, "", {size: "12px", fill: (0,0,0), align:"center"});
  levelText = this.add.text(10, 40, "", {size: "12px", fill: (0,0,0), align:"center"});
  loseText = this.add.text(200, 200, "", {size: "12px", fill: (0,0,0), align:"center"});
  winText = this.add.text(200, 200, "", {size: "12px", fill: (0,0,0), align:"center"});
  countdownText = this.add.text(10, 100, "", {size: "12px", fill: (0,0,0), align:"center"});
  scoreText.setText("Score: " + score);
  levelText.setText("Level: " + currentLevel);
  //losing condition: when ghost is in contact with triangle body shape of human
  ghost.body.onBeginContact.add(ghostCollision, this);
}

function endTimer(){
  timer.stop();
}

function ghostCollision(body, bodyB, shapeA, shapeB, equation){
  var humanIndex = -1;
  for(var i=0; i<humanArr.length; i++){
    if(body == humanArr[i].sprite.body || bodyB == humanArr[i].sprite.body){
      humanIndex = i;
      i=humanArr.length;
    }
  }
  if(humanIndex > -1){//collided with a human
    if((shapeB.constructor.name == 'Box' && bodyB.parent.sprite.key == 'boy') || (shapeB.constructor.name == 'Box' && bodyB.parent.sprite.key == 'girl')) {
      ghostText.setText("Boo!");
      score += 1;
      scoreText.setText("Score: " + score);
      humanArr[humanIndex].sprite.kill();
      humanArr.splice(humanIndex, 1);
      console.log(humanArr);
    }
    else if(shapeB.constructor.name == 'Convex'){//human sees ghost

      if(humanArr[humanIndex].direction == 'up'){
        humanArr[humanIndex].direction = 'down';
        humanArr[humanIndex].speed = 100;
      }
      else if(humanArr[humanIndex].direction == 'down'){
        humanArr[humanIndex].direction = 'up';
        humanArr[humanIndex].speed = 100;
      }
      else if(humanArr[humanIndex].direction == 'right'){
        humanArr[humanIndex].direction = 'left';
        humanArr[humanIndex].speed = 100;
      }
      else if(humanArr[humanIndex].direction == 'left'){
        humanArr[humanIndex].direction = 'right';
        humanArr[humanIndex].speed = 100;
      }

    }
  }
}

function update(){
  ghost.body.velocity.x = 0;
  ghost.body.velocity.y = 0;

  //ghost controls
  cursors = game.input.keyboard.createCursorKeys();
  if (cursors.left.isDown){
    ghost.body.velocity.x = -80;
    ghost.animations.play('left');
  }
  else if (cursors.right.isDown){
    ghost.body.velocity.x = 80;
    ghost.animations.play('right');
  }
  if (cursors.up.isDown){
    ghost.body.velocity.y = -80;
    ghost.animations.play('up');
  }
  else if (cursors.down.isDown){
    ghost.body.velocity.y = 80;
    ghost.animations.play('down');
  }
  else{
    ghost.animations.stop();
  }

  //call human update function for each human
  for(var i=0; i<humanArr.length; i++){
      humanArr[i].update();
  }

  //if there is no more humans on screen, load next unload current level first, then load next level
  if(timer.running && humanArr.length == 0){
    unloadLevel(currentLevel);
    // timer.destroy();
    currentLevel +=1;
    loadLevel(currentLevel);
    game.world.bringToTop(ghost);
    game.world.bringToTop(scoreText);
    game.world.bringToTop(levelText);
    game.world.bringToTop(countdownText);
  }
  else if(timer.expired && humanArr.length >0){//losing condition
    unloadLevel(currentLevel);
    loadLevel(currentLevel);
    game.world.bringToTop(ghost);
    game.world.bringToTop(scoreText);
    game.world.bringToTop(levelText);
    game.world.bringToTop(countdownText);
  }
}

function render(){
  if (timer.running) {
    countdownText.setText((timerEvent.delay - timer.ms)/1000);
    // game.debug.text(((timerEvent.delay - timer.ms)/1000), 10, 100, "#ff0");
    if(humanArr.length == 0){ //display winning message if timer is still running and there is no more humans
      console.log("You win!");
      winText.setText("You reached the next level!");
    }
  }
  else if(timer.expired && humanArr.length > 0){
      console.log("You lose!");
      loseText.setText("You lose!");
      game.world.bringToTop(loseText);
      // game.debug.text("Done!", 10, 100, "#0f0");
  }
}

var game = new Phaser.Game(685,700, Phaser.AUTO, '', {preload: preload, create:create, update:update, render:render});
var upBody, downBody, leftBody, rightBody;
var hitboxArr = [], humanArr = [];
var ghostX, ghostY;
var ghostText, humanText, scoreText, levelText;
var score = 0, level=1;

function preload(){
  game.load.image('room', 'assets/room.png');
  game.load.spritesheet('boy', 'assets/george.png', 48, 48);
  game.load.spritesheet('girl', 'assets/betty.png', 48, 48);
  game.load.spritesheet('ghost', 'assets/boo.png', 52, 40);
}

function create(){
  game.physics.startSystem(Phaser.Physics.P2JS);
  game.add.sprite(0,0, 'room');

  for(var i=0; i<level; i++){
      humanArr[i] = new human('boy', game.world.randomX, game.world.randomY);
  }

  // boy2 = new human('boy', game.world.centerX - 50, game.world.centerY - 250);
  // girl2 = new human('girl', game.world.centerX + 50, game.world.centerY - 100);
  // humanArr.push(boy1, boy2, girl1, girl2);

  ghostX = 327;
  ghostY = 30;

  ghost = game.add.sprite(ghostX, ghostY, 'ghost');
  ghost.scale.setTo(0.6,0.6);
  game.physics.p2.enable(ghost, true);//true means the hitbox is visible
  ghost.body.immovable = true;
  ghost.animations.add('left', [2], 10, true);
  ghost.animations.add('right', [3], 10, true);
  ghost.animations.add('up', [1], 10, true);
  ghost.animations.add('down', [0], 10, true);
  ghost.body.fixedRotation = true;

  hitbox1 = game.add.graphics(100,470);
  hitbox1.drawRect(0,0,200,210);
  hitboxArr.push(hitbox1);

  hitbox2 = game.add.graphics(100,65);
  hitbox2.drawRect(0,0,200,130);
  hitboxArr.push(hitbox2);

  hitbox3 = game.add.graphics(585,65);
  hitbox3.drawRect(0,0,200,130);
  hitboxArr.push(hitbox3);

  hitbox4 = game.add.graphics(585,455);
  hitbox4.drawRect(0,0,200,180);
  hitboxArr.push(hitbox4);

  hitbox5 = game.add.graphics(342,475);
  hitbox5.drawRect(0,0,160,95);
  hitboxArr.push(hitbox5);

  hitbox6 = game.add.graphics(183,205);
  hitbox6.drawRect(0,0,20,50);
  hitboxArr.push(hitbox6);

  hitbox7 = game.add.graphics(503,205);
  hitbox7.drawRect(0,0,20,50);
  hitboxArr.push(hitbox7);

  hitbox8 = game.add.graphics(503,300);
  hitbox8.drawRect(0,0,20,50);
  hitboxArr.push(hitbox8);

  hitbox9 = game.add.graphics(183,300);
  hitbox9.drawRect(0,0,20,50);
  hitboxArr.push(hitbox9);

  hitbox10 = game.add.graphics(630,560);
  hitbox10.drawRect(0,0,35,35);
  hitboxArr.push(hitbox10);

  hitbox11 = game.add.graphics(595,180);
  hitbox11.drawRect(0,0,60,75);
  hitboxArr.push(hitbox11);

  hitbox12 = game.add.graphics(600,230);
  hitbox12.drawRect(0,0,20,20);
  hitboxArr.push(hitbox12);

  for(var i=0; i<hitboxArr.length; i++){
    game.physics.p2.enable(hitboxArr[i], false);
    hitboxArr[i].body.static = true;
  }
  ghostText = this.add.text(game.world.centerX, game.world.centerY, "", {size: "12px", fill: (0,0,0), align:"center"});
  humanText = this.add.text(game.world.centerX-100, game.world.centerY-100, "", {size: "12px", fill: (0,0,0), align:"center"});
  scoreText = this.add.text(10, 10, "", {size: "12px", fill: (0,0,0), align:"center"});
  levelText = this.add.text(10, 40, "", {size: "12px", fill: (0,0,0), align:"center"});
  scoreText.setText("Score: " + score);
  levelText.setText("Level: " + level);
  //losing condition: when ghost is in contact with triangle body shape of human
  ghost.body.onBeginContact.add(ghostCollision, this);

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

      if(humanArr.length == 0){
        level += 1;
      }
    }
    else if(shapeB.constructor.name == 'Convex'){
      // humanText.setText("Ahhhhh!");

      if(humanArr[humanIndex].direction == 'up'){
        humanArr[humanIndex].direction = 'down';
        humanArr[humanIndex].speed = 50;
      }
      else if(humanArr[humanIndex].direction == 'down'){
        humanArr[humanIndex].direction = 'up';
        humanArr[humanIndex].speed = 50;
      }
      else if(humanArr[humanIndex].direction == 'right'){
        humanArr[humanIndex].direction = 'left';
        humanArr[humanIndex].speed = 50;
      }
      else if(humanArr[humanIndex].direction == 'left'){
        humanArr[humanIndex].direction = 'right';
        humanArr[humanIndex].speed = 50;
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



}

function render(){
  // game.debug.reset();
  // for(var i=0; i<hitboxes.children.length; i++){
  //   // hitboxes.children[i].body.collides(ghostCollisionGroup);
  //   game.debug.body(hitboxes.children[i]);
  // }
  // game.debug.spriteInfo(ghost);
}

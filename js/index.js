var game = new Phaser.Game(685,700, Phaser.AUTO, '', {preload: preload, create:create, update:update, render:render});
var hitbox1, hitbox2, hitbox3;
var upBody, downBody, leftBody, rightBody;
function preload(){
  game.load.image('room', 'assets/room.png');
  game.load.spritesheet('boy', 'assets/george.png', 48, 48);
  game.load.spritesheet('girl', 'assets/betty.png', 45, 48);
  game.load.spritesheet('ghost', 'assets/boo.png', 52, 40);
}

var hitboxArr = [];
var boyX, boyY, ghostx, ghostY;
var hitboxCollisionGroup, ghostCollisionGroup, boyCollisionGroup;

function create(){
  // game.world.setBounds(0,0,685,700);
  game.physics.startSystem(Phaser.Physics.P2JS);
  game.add.sprite(0,0, 'room');

  boyX = game.world.centerX;
  boyY = game.world.centerY - 200;
  ghostX = 327;
  ghostY = 30;

  boy = game.add.sprite(boyX, boyY, 'boy');
  game.physics.p2.enable(boy, true);
  //create triangular body shapes around boy sprite
  boy.body.clearShapes();
  upBody = [{"shape": [-15,-20, 60,-20, 25,50]}];
  downBody = [{"shape": [25,0, 63,70, -13,70]}];
  leftBody = [{"shape": [-30,-15, 40,25, -30,60]}];
  rightBody = [{"shape": [0,25, 70,-15, 70,60]}];

  //set up boy movements
  boy.body.immovable = true;
  boy.body.fixedRotation = true;
  boy.animations.add('left', [1,5,9,13], 5, true);
  boy.animations.add('right', [3,7,11,15], 5, true);
  boy.animations.add('up', [2,6,10,14], 5, true);
  boy.animations.add('down', [0,4,8,12], 5, true);

  girl = game.add.sprite(game.world.centerX - 100, game.world.centerY - 100, 'girl');
  game.physics.p2.enable(girl);
  girl.body.immovable = true;
  girl.animations.add('left', [1,5,9,13], 5, true);
  girl.animations.add('right', [3,7,11,15], 5, true);
  girl.animations.add('up', [2,6,10,14], 5, true);
  girl.animations.add('down', [0,4,8,12], 5, true);
  girl.body.fixedRotation = true;

  ghost = game.add.sprite(ghostX, ghostY, 'ghost');
  ghost.scale.setTo(0.6,0.6);
  game.physics.p2.enable(ghost, true);//true means the hitbox is visible
  ghost.body.immovable = true;
  ghost.animations.add('left', [2], 10, true);
  ghost.animations.add('right', [3], 10, true);
  ghost.animations.add('up', [1], 10, true);
  ghost.animations.add('down', [0], 10, true);
  ghost.body.fixedRotation = true;
  console.log(boy);
  console.log(ghost);

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
    game.physics.p2.enable(hitboxArr[i], true);
    hitboxArr[i].body.static = true;
  }
  this.text = this.add.text(10, 10, "", {size: "12px", fill: (0,0,0), align:"center"});
  console.log("something");
}

function update(){
  ghost.body.velocity.x = 0;
  ghost.body.velocity.y = 0;

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
  boy.body.velocity.x = 0;
  boy.body.velocity.y = 0;

  if(boy.animations.play('up')){
    boy.body.velocity.y = -50;//TODO testing
    if(boy.currentBody != upBody){
      boy.body.clearShapes();
      boy.body.loadPolygon(null, upBody);
    }
    boy.currentBody = upBody;//saving some performance, here
  }
  else if(boy.animations.play('down')){
    boy.body.velocity.y = 10;
    if(boy.currentBody != downBody){
      boy.body.clearShapes();
      boy.body.loadPolygon(null, downBody);
    }
    boy.currentBody = downBody;
  }
  else if(boy.animations.play('left')){
    boy.body.velocity.x = -10;
    if(boy.currentBody != leftBody){
      boy.body.clearShapes();
      boy.body.loadPolygon(null, leftBody);
    }
    boy.currentBody = leftBody;
  }
  else if(boy.animations.play('right')){
    boy.body.velocity.x = 10;
    if(boy.currentBody != rightBody){
      boy.body.clearShapes();
      boy.body.loadPolygon(null, rightBody);
    }
    boy.currentBody = rightBody;
  }
  if(boy.body.data.shapes.length < 2){
    boy.body.addRectangle(20,20);
  }
  boy.body.data.shapes[0].sensor = true;

  girl.body.velocity.x = 0;
  girl.body.velocity.y = 310;
  girl.animations.play('down');

  // this.text.setText("Level: \nScore: ");

}

function render(){
  // game.debug.reset();
  // for(var i=0; i<hitboxes.children.length; i++){
  //   // hitboxes.children[i].body.collides(ghostCollisionGroup);
  //   game.debug.body(hitboxes.children[i]);
  // }
  game.debug.spriteInfo(ghost);
}

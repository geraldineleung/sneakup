var game = new Phaser.Game(685,700, Phaser.AUTO, '', {preload: preload, create:create, update:update, render:render});
var upBody, downBody, leftBody, rightBody;
var hitboxArr = [];
var ghostX, ghostY;

function preload(){
  game.load.image('room', 'assets/room.png');
  game.load.spritesheet('boy', 'assets/george.png', 48, 48);
  game.load.spritesheet('girl', 'assets/betty.png', 45, 48);
  game.load.spritesheet('ghost', 'assets/boo.png', 52, 40);
}

function create(){
  // game.world.setBounds(0,0,685,700);
  game.physics.startSystem(Phaser.Physics.P2JS);
  game.add.sprite(0,0, 'room');

  boy1 = new human('boy', game.world.centerX, game.world.centerY - 200);
  boy2 = new human('boy', game.world.centerX - 50, game.world.centerY - 250);

  girl1 = new human('girl', game.world.centerX, game.world.centerY - 100);
  girl2 = new human('girl', game.world.centerX + 50, game.world.centerY - 100);

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
  // console.log(boy);
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
    game.physics.p2.enable(hitboxArr[i], false);
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

  boy1.update();
  boy2.update();

  girl1.update();
  girl2.update();

  

  // this.text.setText("Level: \nScore: ");

}

function render(){
  // game.debug.reset();
  // for(var i=0; i<hitboxes.children.length; i++){
  //   // hitboxes.children[i].body.collides(ghostCollisionGroup);
  //   game.debug.body(hitboxes.children[i]);
  // }
  // game.debug.spriteInfo(ghost);
}

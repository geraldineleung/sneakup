var levels = [
  {//1st level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:1,
    timer: 10,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//2nd level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:2,
    timer: 11,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//3rd level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:3,
    timer: 11,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//4th level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:4,
    timer: 12,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//5th level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:5,
    timer: 14,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//6th level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:6,
    timer: 17,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//7th level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:7,
    timer: 18,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//8th level
    background:"assets/room.png",
    textPanel: {x:8, y:15, width:150, height:100},
    humans:8,
    timer: 20,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  }
];

//initial position of human in first level
var initialX = 342;
var initialY = 350;

//array of human spawn positions for each level
var positions = [{x:initialX, y: initialY}, {x:initialX-200, y: initialY+250}, {x:initialX+200, y: initialY-200}, {x:initialX-200, y: initialY-200}, {x:initialX-150, y: initialY+150},
      {x:initialX+200, y: initialY+200}, {x:initialX+260, y: initialY+275}, {x:initialX, y: initialY+300}, {x:initialX+50, y: initialY+50}, {x:initialX+260, y: initialY}];

var ghost, textBackground;
function loadLevel(index){
  var level = levels[index];
  level.sprite = game.add.sprite(0,0, 'level'+index);
  timer = game.time.create();
  // Create a delayed event t seconds from now
  timerEvent = timer.add(Phaser.Timer.SECOND * level.timer, endTimer, this);
  // Start the timer
  timer.start();
  ghost = game.add.sprite(levels[index].ghostPosition.x, levels[index].ghostPosition.y, 'ghost');
  ghost.scale.setTo(0.6,0.6);
  game.physics.p2.enable(ghost, false);//true means the hitbox is visible
  ghost.body.immovable = true;
  ghost.animations.add('left', [2], 10, true);
  ghost.animations.add('right', [3], 10, true);
  ghost.animations.add('up', [1], 10, true);
  ghost.animations.add('down', [0], 10, true);
  ghost.body.fixedRotation = true;
  ghost.body.onBeginContact.add(ghostCollision, this);

  textBackground = game.add.graphics(level.textPanel.x, level.textPanel.y);
  textBackground.beginFill(0xFFFFFF);
  textBackground.drawRect(0,0, level.textPanel.width, level.textPanel.height);
  textBackground.endFill();
  textBackground.alpha = 0.8;

  //draw hitboxes for each level on load
  for (let i = 0; i < level.hitboxes.length; i++) {
    let hitbox = game.add.graphics(level.hitboxes[i].x,level.hitboxes[i].y);
    hitbox.drawRect(0,0,level.hitboxes[i].width,level.hitboxes[i].height);
    game.physics.p2.enable(hitbox, false);
    hitbox.body.static = true;
    hitboxArr.push(hitbox);
  }
  //create number of humans based on level number
  for(let i=0; i<levels[index].humans; i++){
    humanArr[i] = new human('boy', positions[i].x, positions[i].y);
  }
}

//removes background, hitboxes, human and ghost sprites
function unloadLevel(index){
  var level = levels[index];
  level.sprite.destroy();
  ghost.destroy();
  timer.destroy();
  for (let i = 0; i < gameTextArr.length; i++) {
    gameTextArr[i].setText("");
  }

  while(hitboxArr.length > 0){
    let hitbox = hitboxArr.pop();
    hitbox.body.destroy();
    hitbox.destroy();
  }
  while(humanArr.length > 0){
    let human = humanArr.pop();
    human.sprite.body.destroy();
    human.sprite.destroy();
  }
  textBackground.destroy();
}

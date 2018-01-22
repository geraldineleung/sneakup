var levels = [
  {//1st level
    background:"assets/room.png",
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
    humans:2,
    timer: 15,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//3rd level
    background:"assets/room.png",
    humans:3,
    timer: 20,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//4th level
    background:"assets/room.png",
    humans:4,
    timer: 25,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//5th level
    background:"assets/room.png",
    humans:5,
    timer: 30,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//6th level
    background:"assets/room.png",
    humans:6,
    timer: 35,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//7th level
    background:"assets/room.png",
    humans:7,
    timer: 40,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//8th level
    background:"assets/room.png",
    humans:8,
    timer: 45,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//9th level
    background:"assets/room.png",
    humans:9,
    timer: 50,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//10th level
    background:"assets/room.png",
    humans:10,
    timer: 55,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//11th level
    background:"assets/room.png",
    humans:11,
    timer: 60,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//12th level
    background:"assets/room.png",
    humans:12,
    timer: 65,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//13th level
    background:"assets/room.png",
    humans:13,
    timer: 70,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//14th level
    background:"assets/room.png",
    humans:14,
    timer: 75,
    ghostPosition: {x:350, y:30},
    hitboxes:[{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}]
  },
  {//15th level
    background:"assets/room.png",
    humans:15,
    timer: 80,
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
      {x:initialX+200, y: initialY+200}, {x:initialX+260, y: initialY+275}, {x:initialX, y: initialY+300}, {x:initialX+50, y: initialY+50}, {x:initialX+260, y: initialY},
      {x:initialX+280, y: initialY-50}, {x:initialX+75, y: initialY+50}, {x:initialX-180, y: initialY+50}, {x:initialX, y: initialY-160}, {x:initialX-40, y: initialY+120}];

var ghost;
function loadLevel(index){
  var level = levels[index];
  level.sprite = game.add.sprite(0,0, 'level'+index);
  if(index > 0){ //load ghost at each new level
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

    timer = game.time.create();
    // Create a delayed event t seconds from now
    timerEvent = timer.add(Phaser.Timer.SECOND * level.timer, endTimer, this);
    // Start the timer
    timer.start();
  }

  //draw hitboxes for each level on load
  for (let i = 0; i < level.hitboxes.length; i++) {
    let hitbox = game.add.graphics(level.hitboxes[i].x,level.hitboxes[i].y);
    hitbox.drawRect(0,0,level.hitboxes[i].width,level.hitboxes[i].height);
    game.physics.p2.enable(hitbox, false);
    hitbox.body.static = true;
    hitboxArr.push(hitbox);
  }
  //create humans based on level number
  for(let i=0; i<levels[index].humans; i++){
    humanArr[i] = new human('boy', positions[i].x, positions[i].y);
    console.log("current level is: "+currentLevel);
  }
}

//removes background, hitboxes, human and ghost sprites
function unloadLevel(index){
  var level = levels[index];
  level.sprite.destroy();
  ghost.destroy();
  timer.destroy();
  countdownText.destroy();
  while(hitboxArr.length > 0){
    let hitbox = hitboxArr.pop();
    hitbox.body = null;
    hitbox.destroy();
  }
}

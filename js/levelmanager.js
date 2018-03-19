import Level from "./level.js";
import Human from "./human.js";

export default class LevelManager{

  constructor(game,ghost){
    this.ghost = ghost;
    this.humans = ghost.humans;
    this.timer;
    this.timerEvent;
    this.textBackground;
    this.hitboxArr = [];
    this.game = game;
    this.levels = [new Level(1,10), new Level(2,11), new Level(3,11), new Level(4,12), new Level(5,14), new Level(6,17), new Level(7,18), new Level(8,20)];
    for (let i = 0; i < this.levels.length; i++) {
      this.levels[i].name = i+1;
    }
  }

  loadLevel(level){
    level.sprite = this.game.add.sprite(0,0, "level"+level.name);
    this.timer = this.game.time.create();
    // Create a delayed event t seconds from now
    this.timerEvent = this.timer.add(Phaser.Timer.SECOND * level.timeLimit,()=>{this.timer.stop();}, this);
    // Start the timer
    this.timer.start();
    this.ghost.load(this.game,level);
  
    this.textBackground = this.game.add.graphics(level.textPanel.x, level.textPanel.y);
    this.textBackground.beginFill(0xFFFFFF);
    this.textBackground.drawRect(0,0, level.textPanel.width, level.textPanel.height);
    this.textBackground.endFill();
    this.textBackground.alpha = 0.8;
  
    //draw hitboxes for each level on load
    for (let i = 0; i < level.hitboxes.length; i++) {
      let hitbox = this.game.add.graphics(level.hitboxes[i].x,level.hitboxes[i].y);
      hitbox.drawRect(0,0,level.hitboxes[i].width,level.hitboxes[i].height);
      this.game.physics.p2.enable(hitbox, false);
      hitbox.body.static = true;
      this.hitboxArr.push(hitbox);
    }
    //create number of humans based on level number
    for(let i=0; i<level.humans; i++){
      this.humans[i] = new Human(this.game, level.positions[i].x, level.positions[i].y);
    }
  }
  //removes background, hitboxes, human and ghost sprites
  unloadLevel(level){
    level.sprite.destroy();
    this.ghost.destroy();
    this.timer.destroy();
  
    while(this.hitboxArr.length > 0){
      let hitbox = this.hitboxArr.pop();
      hitbox.body.destroy();
      hitbox.destroy();
    }
    while(this.humans.length > 0){
      let human = this.humans.pop();
      human.sprite.body.destroy();
      human.sprite.destroy();
    }
    this.textBackground.destroy();
  }
}
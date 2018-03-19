export default class Ghost{
  constructor(humans,increaseScore){
    this.sprite;
    this.humans = humans;
    this.increaseScore = increaseScore;
  }
  load(game,level){
    this.sprite = game.add.sprite(level.ghostPosition.x, level.ghostPosition.y, "ghost");
    this.sprite.scale.setTo(0.6,0.6);
    game.physics.p2.enable(this.sprite, false);//true means the hitbox is visible
    this.sprite.body.immovable = true;
    this.sprite.animations.add("left", [2], 10, true);
    this.sprite.animations.add("right", [3], 10, true);
    this.sprite.animations.add("up", [1], 10, true);
    this.sprite.animations.add("down", [0], 10, true);
    this.sprite.body.fixedRotation = true;
    this.sprite.body.onBeginContact.add(this.ghostCollision, this);
  }

  ghostCollision(body, bodyB, shapeA, shapeB){
    let humanIndex = -1;
    for(let i=0; i<this.humans.length; i++){
      if(body == this.humans[i].sprite.body || bodyB == this.humans[i].sprite.body){
        humanIndex = i;
        i=this.humans.length;
      }
    }
    if(humanIndex > -1){//ghost collided with a human
      if((shapeB.constructor.name == "Box" && bodyB.parent.sprite.key == "boy") || (shapeB.constructor.name == "Box" && bodyB.parent.sprite.key == "girl")) {
        this.increaseScore();
        this.humans[humanIndex].sprite.kill();
        this.humans[humanIndex].sprite.destroy();
        this.humans.splice(humanIndex, 1);
      }
      else if(shapeB.constructor.name == "Convex"){//when human sees ghost,he runs in opposite direction
        if(this.humans[humanIndex].direction == "up"){
          this.humans[humanIndex].direction = "down";
          this.humans[humanIndex].speed = 140;
        }
        else if(this.humans[humanIndex].direction == "down"){
          this.humans[humanIndex].direction = "up";
          this.humans[humanIndex].speed = 140;
        }
        else if(this.humans[humanIndex].direction == "right"){
          this.humans[humanIndex].direction = "left";
          this.humans[humanIndex].speed = 140;
        }
        else if(this.humans[humanIndex].direction == "left"){
          this.humans[humanIndex].direction = "right";
          this.humans[humanIndex].speed = 140;
        }
      }
    }
  }
  reset(){
    if(this.sprite.body != null){
      this.sprite.body.velocity.x = 0;
      this.sprite.body.velocity.y = 0;
    }
  }
  update(game){
    let cursors = game.input.keyboard.createCursorKeys();
    if (cursors.left.isDown){
      this.sprite.body.velocity.x = -120;
      this.sprite.animations.play("left");
    }
    else if (cursors.right.isDown){
      this.sprite.body.velocity.x = 120;
      this.sprite.animations.play("right");
    }
    if (cursors.up.isDown){
      this.sprite.body.velocity.y = -120;
      this.sprite.animations.play("up");
    }
    else if (cursors.down.isDown){
      this.sprite.body.velocity.y = 120;
      this.sprite.animations.play("down");
    }
    else{
      this.sprite.animations.stop();
    }
  }
  destroy(){
    this.sprite.destroy();
  }
}
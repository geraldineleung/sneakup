export default class Human{
  constructor(game, humanX, humanY){
    this.humanX = humanX;
    this.humanY = humanY;
    this.game = game;
    this.speed = 110;
    this.direction = "up";
    this.defaultMTimer = Math.floor(Math.random() * 360) + 60;
    this.movementTimer = this.defaultMTimer;

    this.sprite = this.game.add.sprite(humanX, humanY, "boy");
    this.game.physics.p2.enable(this.sprite);
    //create triangular body shapes around boy sprite
    this.sprite.body.clearShapes();
    this.bodies = {
      up: [{"shape": [-15,-30, 60,-30, 25,40]}],
      down: [{"shape": [25,0, 63,70, -13,70]}],
      left: [{"shape": [-30,-15, 40,25, -30,60]}],
      right: [{"shape": [0,25, 70,-15, 70,60]}]
    };

    //set up boy movements
    this.sprite.body.immovable = true;
    this.sprite.body.fixedRotation = true;
    this.sprite.animations.add("left", [1,5,9,13], 5, true);
    this.sprite.animations.add("right", [3,7,11,15], 5, true);
    this.sprite.animations.add("up", [2,6,10,14], 5, true);
    this.sprite.animations.add("down", [0,4,8,12], 5, true);
    this.randomizeDirection();
  }

  randomizeDirection(){
    var rnd = Math.floor(Math.random() * 4);
    //randomly generate a number from 0 to 3, 0 would be up, 1 down, 2 left, 3 right
    if(rnd == 0){
      this.direction = "up";
    }
    else if(rnd == 1){
      this.direction = "down";
    }
    else if(rnd == 2){
      this.direction = "left";
    }
    else if(rnd == 3){
      this.direction = "right";
    }
  }

  loadAnimations(direction){
    this.sprite.animations.play(direction);
    if(this.currentBody != this.bodies[direction]){
      this.sprite.body.clearShapes();
      this.sprite.body.loadPolygon(null, this.bodies[direction]);
    }
    this.currentBody = this.bodies[direction];//saving some performance, here
  }

  update(){
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    this.movementTimer--;
    if(this.movementTimer <= 0){
      this.movementTimer = this.defaultMTimer;
      this.randomizeDirection();
    }
    if(this.direction == "up"){
      this.sprite.body.velocity.y = -this.speed;
    }
    else if(this.direction == "down"){
      this.sprite.body.velocity.y = this.speed;
    }
    else if(this.direction == "left"){
      this.sprite.body.velocity.x = -this.speed;
    }
    else if(this.direction == "right"){
      this.sprite.body.velocity.x = this.speed;
    }
    this.loadAnimations(this.direction);
    //add a new body shape (rectangle) around human sprite
    if(this.sprite.body.data.shapes.length < 2){
      this.sprite.body.addRectangle(40,40);
    }
    //first boody shape (triangular) has a sensor
    this.sprite.body.data.shapes[0].sensor = true;
  }
}

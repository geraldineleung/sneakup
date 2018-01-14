function human(type, humanX, humanY){
  this.type = type;
  this.humanX = humanX;
  this.humanY = humanY;
  this.speed = 10;
  this.direction = 'up';
  this.defaultMTimer = Math.floor(Math.random() * 420) + 60;
  this.movementTimer = this.defaultMTimer;

  if(type == 'boy'){
    this.sprite = game.add.sprite(humanX, humanY, 'boy');
  }
  else if (type == 'girl') {
    this.sprite = game.add.sprite(humanX, humanY, 'girl');
  }
  game.physics.p2.enable(this.sprite);
  //create triangular body shapes around boy sprite
  this.sprite.body.clearShapes();
  upBody = [{"shape": [-15,-30, 60,-30, 25,40]}];
  downBody = [{"shape": [25,0, 63,70, -13,70]}];
  leftBody = [{"shape": [-30,-15, 40,25, -30,60]}];
  rightBody = [{"shape": [0,25, 70,-15, 70,60]}];

  //set up boy movements
  this.sprite.body.immovable = true;
  this.sprite.body.fixedRotation = true;
  this.sprite.animations.add('left', [1,5,9,13], 5, true);
  this.sprite.animations.add('right', [3,7,11,15], 5, true);
  this.sprite.animations.add('up', [2,6,10,14], 5, true);
  this.sprite.animations.add('down', [0,4,8,12], 5, true);

  this.randomizeDirection = function(){
    var rnd = Math.floor(Math.random() * 4);

    //randomly generate a number from 0 to 3, 0 would be up, 1 down, 2 left, 3 right
    if(rnd == 0){
      this.direction = 'up';
    }
    else if(rnd == 1){
      this.direction = 'down';
    }
    else if(rnd == 2){
      this.direction = 'left';
    }
    else if(rnd == 3){
      this.direction = 'right';
    }
  };

  this.randomizeDirection();

  this.update = function(){
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    this.movementTimer--;
    if(this.movementTimer <= 0){
      this.movementTimer = this.defaultMTimer;
      this.randomizeDirection();
    }

    this.sprite.animations.play(this.direction);
    if(this.direction == 'up'){
      this.sprite.body.velocity.y = -this.speed;
      if(this.currentBody != upBody){
        this.sprite.body.clearShapes();
        this.sprite.body.loadPolygon(null, upBody);
      }
      this.currentBody = upBody;//saving some performance, here
    }
    else if(this.direction == 'down'){
      this.sprite.body.velocity.y = this.speed;
      if(this.currentBody != downBody){
        this.sprite.body.clearShapes();
        this.sprite.body.loadPolygon(null, downBody);
      }
      this.currentBody = downBody;
    }
    else if(this.direction == 'left'){
      this.sprite.body.velocity.x = -this.speed;
      if(this.currentBody != leftBody){
        this.sprite.body.clearShapes();
        this.sprite.body.loadPolygon(null, leftBody);
      }
      this.currentBody = leftBody;
    }
    else if(this.direction == 'right'){
      this.sprite.body.velocity.x = this.speed;
      if(this.currentBody != rightBody){
        this.sprite.body.clearShapes();
        this.sprite.body.loadPolygon(null, rightBody);
      }
      this.currentBody = rightBody;
    }
    //add a new body shape (rectangle) around human sprite
    if(this.sprite.body.data.shapes.length < 2){
      this.sprite.body.addRectangle(40,40);
    }
    //first boody shape (triangular) has a sensor
    this.sprite.body.data.shapes[0].sensor = true;
  };
}

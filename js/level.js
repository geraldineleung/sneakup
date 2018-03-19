export default class Level{
  constructor(humans,timeLimit){
    this.name = "";
    this.humans = humans;
    this.timeLimit = timeLimit;
    this.background = "assets/room.png";
    this.textPanel =  {x:8, y:15, width:150, height:100};
    this.ghostPosition = {x:350, y:30};
    this.hitboxes = [{x:100, y:470, width:200, height:210}, {x:100, y:65, width:200, height:130},{x:585, y:65, width:200, height:130},
      {x:585, y:455, width:200, height:180},{x:342, y:475, width:160, height:95},{x:183, y:205, width:20, height:50},
      {x:503, y:205, width:20, height:50},{x:503, y:300, width:20, height:50},{x:183, y:300, width:20, height:50},
      {x:630, y:560, width:35, height:35},{x:595, y:180, width:60, height:75},{x:600, y:230, width:20, height:20}];
    this.initialX = 342;
    this.initialY = 350;
  
    //array of human spawn positions for each level
    this.positions = [{x:this.initialX, y: this.initialY}, {x:this.initialX-200, y: this.initialY+250}, {x:this.initialX+200, y: this.initialY-200}, {x:this.initialX-200, y: this.initialY-200}, {x:this.initialX-150, y: this.initialY+150},
      {x:this.initialX+200, y: this.initialY+200}, {x:this.initialX+260, y: this.initialY+275}, {x:this.initialX, y: this.initialY+300}, {x:this.initialX+50, y: this.initialY+50}, {x:this.initialX+260, y: this.initialY}];

  }
  
  //initial position of human in first level
  
  // var ghost, textBackground;

}

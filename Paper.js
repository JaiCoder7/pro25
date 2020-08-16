class Paper extends BaseClass{
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("sprites/paper.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}
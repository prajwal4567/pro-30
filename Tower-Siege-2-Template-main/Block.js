class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      //image(this.image,this.body.position.x,this.body.position.y);
      if(this.body.speed<3){
        
       }else{
         World.remove(world,this.body);
         World.remove(world,this.image);
         push();
         this.image.visiblity=this.image.visiblity-5;
         tint(255,this.visiblity);
         World.remove(world,this.body);
         World.remove(world,this.image);
         pop();
       }
    }
}
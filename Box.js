class Box {

constructor(x,y,width,height){
var options = {
    isStatic: true
}
this.body = Bodies.rectangle (x,y,width,height,options);
this.width=width;
this.height=height;
(world.add,this.body)
}

display(){
var pos = this.body.position
push ();
translate (pos.x,pos.y);
rotate (this.body.angle);
fill ("red");
rectMode(CENTER);
rect(0,0,width.this,height.this);
pop ();
}
}
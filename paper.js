class paper{
    constructor(x,y){
        var options={
            'restitution':0.3,
            'density':1.2,
            'friction':0,
        } 
           this.x = x;
           this.y = y;
           this.image = loadImage("paper.png");
           World.add(world,this.body);
        }  
     display(){
            push()
            translate(this.body.position.x,this.body.position.y);
            rotate(angle);  
            imageMode(CENTER);
            image(this.image,0,0,);
            pop()    
    }
}
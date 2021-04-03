class Umbrella{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.image = loadImage('walking_1.png');
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y+100,500,500);
    }
}
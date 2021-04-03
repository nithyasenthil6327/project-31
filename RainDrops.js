class RainDrop{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': false
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body)
        
    }

    display(){
        var pos = this.body.position;

        //translate(this.body.position.x, this.body.position.y);
        push();
        fill(0,200,200);
        circle(pos.x,pos.y,5);
        pop();
        if(pos.y>800){
            Body.setPosition(this.body,{x:this.x,y:this.y})
        }
    }
}
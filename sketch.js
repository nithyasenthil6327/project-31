const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var rain = [];
var umbrella;
var strikeImg1,strikeImg2,strikeImg3,strikeImg4;


function preload(){
    strikeImg1 = loadImage('1.png');
    strikeImg2 = loadImage('2.png');
    strikeImg3 = loadImage('3.png');
    strikeImg4 = loadImage('4.png');
    
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0;i<100;i++){
        rain.push(new RainDrop(Math.round(random(0,400)),Math.round(random(0,100))))
    }
   
    umbrella = new Umbrella(200,490,100);
    


    
}

function draw(){
    background(0,0,0)
    Engine.update(engine);
    umbrella.display();
    for(var i=0;i<rain.length;i++){
        rain[i].display();
    }

    Lightning()
    drawSprites();
}   



function Lightning()
{
  
  if(frameCount %60 === 0){
    var strike = createSprite(Math.round(random(100,300)),0,50,50);
    switch(Math.round(random(1,4))){
        case 1:  strike.addImage(strikeImg1);
        break;
          
        case 2:  strike.addImage(strikeImg2);
        break;
         
        case 3:  strike.addImage(strikeImg3);
        break;

        case 4:  strike.addImage(strikeImg4);
        break;
         
        default: break;
      }
   
      strike.lifetime = 10;
  }

}
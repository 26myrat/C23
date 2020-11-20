const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700, 320, 70, 70)
    box2 = new Box(920, 320, 70, 70)
    box3 = new Box(700,240,70,70); 
    box4 = new Box(920,240,70,70);
    ground = new Ground(600, height, 1200, 20)
    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(810,180,300, PI/2);
    pig1 = new Pig(810, 350)
    bird = new Bird()
}
function draw(){
    background(0);
    Engine.update(engine);
    text(box2.body.angle, 50, 100)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    //log1.display();
    //log2.display();
    pig1.display();
    bird.display();
}

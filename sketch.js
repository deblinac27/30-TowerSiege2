const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var block;
var polygon;
function preload(){
  polygon_img = loadImage("hexagon.png")
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 390, 800, 10);
  stand1 = new Ground(300, 260, 200, 10);
  stand2 = new Ground(630, 200, 230, 10);

  //first stand, level 1
  block1 = new Box(230, 235, 30, 40);
  block2 = new Box(265, 235, 30, 40);
  block3 = new Box(300, 235, 30, 40);
  block4 = new Box(335, 235, 30, 40);
  block5 = new Box(370, 235, 30, 40);
  
  //first stand, level 2
  block6 = new Box(247, 192, 30, 40);
  block7 = new Box(282, 192, 30, 40);
  block8 = new Box(317, 192, 30, 40);
  block9 = new Box(352, 192, 30, 40);
  
  //first stand, level 3
  block10 = new Box(264, 149, 30, 40);
  block11 = new Box(299, 149, 30, 40);
  block12 = new Box(334, 149, 30, 40);

  //first stand, level 4
  block13 = new Box(281, 106, 30, 40);
  block14 = new Box(316, 106, 30, 40);

  //first stand, level 5
  block15 = new Box(298, 63, 30, 40);

  //second stand, level 1
  block16 = new Box(570, 175, 30, 40);
  block17 = new Box(605, 175, 30, 40);
  block18 = new Box(640, 175, 30, 40);
  block19 = new Box(675, 175, 30, 40);

  //second stand, level 2
  block20 = new Box(587, 132, 30, 40);
  block21 = new Box(622, 132, 30, 40);
  block22 = new Box(657, 132, 30, 40);
 
  //second stand, level 3
  block23 = new Box(604, 89, 30, 40);
  block24 = new Box(639, 89, 30, 40);
  //second stand, level 4
  block25 = new Box(621, 46, 30, 40);

  var polygon_options={
    restitution: 0.05,
    mass:5
  }
  polygon = Bodies.circle(50,200,20,polygon_options);
  console.log(polygon);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon, {x:100, y:200});
}

function draw() {
  background(201, 245, 235);  
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  
  fill(255, 133, 133);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill(255, 176, 133);
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill(255, 249, 133);
  block10.display();
  block11.display();
  block12.display();
  fill(176, 255, 133);
  block13.display();
  block14.display();
  fill(133, 212, 255);
  block15.display();
  fill(255, 133, 133);
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  fill(255, 176, 133);
  block20.display();
  block21.display();
  block22.display();
  fill(255, 249, 133);
  block23.display();
  block24.display();
  fill(176, 255, 133);
  block25.display();



  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}
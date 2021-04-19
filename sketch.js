
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7
var world,boy,stone,elastic

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

mango1=new mango(1100,100,30);
mango2=new mango(1200,100,30)
mango3=new mango(1050,100,30)
mango4=new mango(950,100,30)
mango5=new mango(1000,200,30)
mango6=new mango(1000,250,30)
mango7=new mango(1000,220,30)

treeObj=new tree(1050,580);

groundObject=new Ground(width/2,600,width,20);

stone=new Stone(250,10,50)

elastic=new Launcher(stone.body,{x:235,y:420})	
	Engine.run(engine);

}
function draw() {

  background(230);
  //Add code for displaying text here!
fill ("black") 
textSize(20)
text("Press Space to play again",50,50,400)

  image(boy ,200,340,200,300);
  

treeObj.display();

mango1.display();
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()

groundObject.display();

stone.display()

elastic.display()
detectCollision(stone,mango1)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)
detectCollision(stone,mango6)
detectCollision(stone,mango7)

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	elastic.fly()
}
function detectCollision(stone,mango){
mangoPos=mango.body.position
stonePos=stone.body.position
var distance=dist(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
			elastic.attach(stone.body)
	}
}
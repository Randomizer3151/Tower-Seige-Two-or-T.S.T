const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

slingshot = new SlingShot(bird.body,{x:200, y:50});
slingshot.display();

noStroke();
textSize(35)
fill("white")
text("Launch the hexagonal cube at the towers" )
 
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode===32){

slingshot.attach(bird.body);
}

}
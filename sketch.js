var dog,happyDog,database,foodS,foodStock;
var dog1Img,dog2Img;
function preload()
{
  dog1Img = loadImage("images/dogImg.png");
  dog2Img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  dog = createSprite(200,200);
  dog.addImage(dog1Img);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dog2Img);
}
  drawSprites();
  textSize(20);
  stroke(4);
  fill("Green");
  text("Note : Press Up arrow to feed Drago Milk !" , 100,100);

}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {
  
  if(x<=0){
 x = 0;

  }else{
    x = x-1;
  }


  database.ref("/").update({
    Food:x
  })
}


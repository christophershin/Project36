class Food{

contructor(){

    var foodStock;
}
getfoodStock();
updateFoodStock();
deductFood();

  foodStock=createSprite(500,200,20,40)
  foodStock=loadImage("Images/Milk.png")
  
 display(){
var x=80, y=100;

imageMode(CENTER)
image(this.image,720,220, 70,70)

if (this.foodStock!=0){
    for(var i=0;i<this.foodStock;1++){
        if(i%10==0){
            x=80
            y=y+50
        }
        image(this.image, x,y,50,50)
        x=x+30
    }
}
    
}

}


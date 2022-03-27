class Ship{

    constructor(x,y,w,h, boatPos){
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(x,y,w,h)
        this.boatPosition=boatPos
        this.image=loadImage("assets/boat.png")
        World.add(world,this.body)
    }


    display(){

        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,this.boatPosition,this.width,this.height)
        pop();
        
    }





}
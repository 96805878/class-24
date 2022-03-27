
class Cannonball{

    constructor(x,y){
     
        this.radius=30

        var cannonballOptions={

            isStatic:true

        }


        this.body=Bodies.circle(x,y,this.radius,cannonballOptions)
        World.add(world,this.body)
        this.image=loadImage("assets/cannonball.png")

    }

    shoot(){
        
        var angle=cannon.angle-30;
        //C0nverting to radians
        var radAngle=angle*(3.14/180);
        var velocity=p5.Vector.fromAngle(radAngle)
        velocity.mult(0.5)
        Body.setStatic(this.body,false);
        Body.setVelocity(this.body,{
            x: velocity.x * (180/3.14),
            y: velocity.y * (180/3.14) });
    }
    
    display(){


        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();

        


    }
        





}

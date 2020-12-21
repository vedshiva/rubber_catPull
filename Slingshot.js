class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.img1 = loadImage ("sprites/sling1.png");
        this.img2 = loadImage ("sprites/sling2.png");
        this.img3 = loadImage ("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.img1, 200, 20);
        image(this.img2, 170, 20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke (48,22,8)
            strokeWeight(10);
            if (pointA.x < 220){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            image (this.img3, pointA.x-30,pointA.y-10,15,30)
            }else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
            image (this.img3, pointA.x+25,pointA.y-10,15,30)
            }
        }
    }
    
}
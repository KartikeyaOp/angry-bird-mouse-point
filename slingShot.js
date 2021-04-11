class SlingShot{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.1
        }
        this.pointB=pointB
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA=null
    }
    Display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        push()
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        }
    }
}
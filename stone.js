class Stone{
    constructor(x,y,r){
                var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
                }
                this.x=x
                this.y=y              
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body)
this.image=loadImage("images/stone.png")
    }
    display(){
        var position=this.body.position
        push ()
        translate (position.x,position.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS)
        imageMode (CENTER)
        image(this.image,0,0,this.r,this.r)
        stroke ("white")
        fill ("black")
                 pop ()
    }
}


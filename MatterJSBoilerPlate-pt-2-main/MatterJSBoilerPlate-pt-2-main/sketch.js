
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(550, 600);

    var plane_options={
		isStatic: true
      }

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	
	plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);

    block1=Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,block1);

    block2=Bodies.rectangle(400,400,150,20,plane_options);
    World.add(world,block2);

	//particula 1
	var particle_options = {
		restitution:0.4,
		friction:0.02
	  }
	
	  particle1 = Bodies.circle(220,10,50,particle_options);
	  World.add(world,particle1);
	 
	  //particula 2
	
	  particle2 = Bodies.circle(230,10,50,particle_options);
	  World.add(world,particle2);

	  //particula 3

	  particle3 = Bodies.circle(240,10,50,particle_options);
	  World.add(world,particle3);

	  //particula 4

	  particle4 = Bodies.circle(250,10,50,particle_options);
	  World.add(world,particle4);

     //particula 5

	  particle5 = Bodies.circle(260,10,50,particle_options);
	  World.add(world,particle5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  ellipse(particle1.position.x,particle1.position.y,50);
  
  ellipse(particle2.position.x,particle2.position.y,50);

  ellipse(particle3.position.x,particle3.position.y,50);

  ellipse(particle4.position.x,particle4.position.y,50);

  ellipse(particle5.position.x,particle5.position.y,50);

  drawSprites();


  
 
}




let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(20,24,40);
  // mostrare un testo bianco che mi dice 
  // le coordinate del mouse sul foglio da disegno
  fill(255) //bianco
  textSize(20);
  text("mouseX:" + mouseX + ",  mouseY:" + mouseY ,20,20)

  push();


  //stelle
  strokeWeight(0);

  //ciclo 1 specifica stella a, 40
  for(let i=0; i < 120; i++) {
    let starX = (i*37) % width + (i%3)*5;
    let starY = ((i*73) % height) + (i%7);
    //operatore modulo %
    //stella a quando i è pari
    if (i % 2 == 0){
      //stella tipo a
      fill(255, 255, 150);
      ellipse(starX, starY, 1);
    //stelle b per ogni i divisibile per 3
    } else if(i % 3 == 0 ){
      //stella b
      fill(200,100,155);
      ellipse(starX, starY, 1.5);
    } else {
      //stella c
      fill(255,255,100);
      ellipse(starX, starY, 2.8)
    }

  }

  pop();

  //contesto di disegno
  push ();
  fill(220);
  stroke(40);
  rectMode(CENTER);

  //Sabbia
  fill(200, 200, 150)
  rect(100,600, 800, 450);

  //triangolo piramide 1
    fill(200, 150, 0)
  triangle (xRocket-200,yRocket+90, xRocket-120, 
    yRocket+10, xRocket-50, yRocket+90);

    fill(200, 110, 0)
  triangle (xRocket-50,yRocket+90, +80, 
    yRocket+10, xRocket+10, yRocket+90);

    //triangolo piramide 2
  fill(200, 150, 0)
  triangle (180,+400, 250,+340, 320,+400);

  fill(200, 110, 0)
  triangle (320,+400, 250,+340, 360,+400);

  
  //cactus
  fill(40, 150, 70);
  strokeWeight(0);
rect(300, 500, 30, 150, 20);
rect(265, 485, 15, 40, 20);
rect(335, 475, 15, 60, 20);
//orizzontale che unisce
rect(300, 500, 85, 15, 20);

//luna
fill(200, 200, 200)
 ellipse (xRocket-90, yRocket-250, 70, 70);

 //fettina che copre luna
 noStroke();
 fill(20,24,40); // colore uguale allo sfondo per fare fettina luna
ellipse(xRocket -70, yRocket - 250, 70, 70);

  //finire il contesto
  
}

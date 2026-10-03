let fondos = [];
let pantalla = 0;

function preload() {

  for (let i = 0; i < 4; i++) {
    fondos[i] = loadImage("/assets/pantalla/pantalla" + i + ".jpeg");
  }

}

function setup() {

  createCanvas(800, 450);

}

function draw() {

  image(fondos[pantalla], 0, 0, 800, 450);
  
   if (pantalla== 0 ||pantalla==1){
      fill(255, 217, 155);
    rect(350, 380, 100, 50);

    fill(0);
    textSize(20);
    text("avanzar", 360, 410);

  }
 

}
  function mousePressed() {
  if (pantalla == 0||pantalla==1) {

    if (mouseX > 350 && mouseX < 450 &&
        mouseY > 380 && mouseY < 430) {

      pantalla++;
    }
  }
     else if (pantalla == 2) {

    // Acusar a Le Bon
    if (mouseX > 100 && mouseX < 280 &&
        mouseY >380 && mouseY < 420) {

      pantalla = 3;
    }
    }
  }
  

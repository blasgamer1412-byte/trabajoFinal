let intentos = 6;
let objetos = [];
let fondo;
let fondo2;
let imagenesOcultas = [];
let imagenesEncontradas = [];

function preload(){
fondo2 = loadImage("assets/fondo2.jpg");
fondo = loadImage("assets/fondo.jpg");
  imagenesOcultas[0] = loadImage("assets/objetos_ocultos/barco.png");
  imagenesOcultas[1] = loadImage("assets/objetos_ocultos/mono.png");
  imagenesOcultas[2] = loadImage("assets/objetos_ocultos/juez.png");
  imagenesOcultas[3] = loadImage("assets/objetos_ocultos/papeles.png");

  imagenesEncontradas[0] = loadImage("assets/objetos_encontrados/barco.png");
  imagenesEncontradas[1] = loadImage("assets/objetos_encontrados/mono.png");
  imagenesEncontradas[2] = loadImage("assets/objetos_encontrados/juez.png");
  imagenesEncontradas[3] = loadImage("assets/objetos_encontrados/papeles.png");


}

function setup() {
  createCanvas(800, 400);
  objetos[0] = new Objeto(60, 160, imagenesOcultas[0], imagenesEncontradas[0]);
  objetos[1] = new Objeto(250, 200, imagenesOcultas[1], imagenesEncontradas[1]);
  objetos[2] = new Objeto(450, 270, imagenesOcultas[2], imagenesEncontradas[2]);
  objetos[3] = new Objeto(400, 160, imagenesOcultas[3], imagenesEncontradas[3]);
}



function draw() {
  image(fondo, 0, 0,600, 400);
    image(fondo2, 600, 0,100, 400);
  for (let i = 0; i < objetos.length; i++) {
    objetos[i].mostrar();
  }
}
function mousePressed() {

  for (let i = 0; i < objetos.length; i++) {

    objetos[i].revisarClick(mouseX, mouseY);

  }

}

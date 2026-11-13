let juego;
let inicioFondo;
let fondo;
let fondo2;
let imagenesOcultas = [];
let imagenesEncontradas = [];
let imagenVictoria;
let imagenDerrota;
let imagenBoton;
let imagencreditos;
let imagenInstrucciones;

function preload() {
  inicioFondo = loadImage("assets/menu.jpg");
  fondo = loadImage("assets/fondo.jpg");
  fondo2 = loadImage("assets/fondo2.jpg");
  imagenVictoria = loadImage("assets/victoria.jpg");
  imagenDerrota = loadImage("assets/derrota.jpg");
  imagencreditos = loadImage("assets/creditos.jpg");
  imagenBoton = loadImage("assets/boton.png");
  imagenInstrucciones = loadImage("assets/instrucciones.jpg");

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
  juego = new Juego(fondo, fondo2, inicioFondo, imagenesOcultas, imagenesEncontradas, imagenVictoria, imagenDerrota, imagencreditos, imagenBoton, imagenInstrucciones);
}

function draw() {
  juego.draw();
}

function mousePressed() {
  juego.mousePressed();
}

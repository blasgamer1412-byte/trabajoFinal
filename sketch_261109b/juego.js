class Juego {

  constructor(fondo, fondo2, imagenesOcultas, imagenesEncontradas) {
    this.intentos = 6;

    this.fondo = fondo;
    this.fondo2 = fondo2;
    this.imagenesOcultas = imagenesOcultas;
    this.imagenesEncontradas = imagenesEncontradas;

    this.objetos = [];
    this.objetos[0] = new Objeto(60, 160, this.imagenesOcultas[0], this.imagenesEncontradas[0]);
    this.objetos[1] = new Objeto(250, 200, this.imagenesOcultas[1], this.imagenesEncontradas[1]);
    this.objetos[2] = new Objeto(450, 270, this.imagenesOcultas[2], this.imagenesEncontradas[2]);
    this.objetos[3] = new Objeto(400, 160, this.imagenesOcultas[3], this.imagenesEncontradas[3]);
  }

  draw() {
    image(this.fondo, 0, 0, 600, 400);
    image(this.fondo2, 600, 0, 100, 400);

    for (let i = 0; i < this.objetos.length; i++) {
      this.objetos[i].mostrar();
    }
  }

  mousePressed() {
    for (let i = 0; i < this.objetos.length; i++) {
      this.objetos[i].revisarClick(mouseX, mouseY);
    }
  }
}
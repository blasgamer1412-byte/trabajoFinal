class Juego {

  constructor(fondo, fondo2, inicioFondo, imagenesOcultas, imagenesEncontradas, imagenVictoria, imagenDerrota, imagenBoton) {
    this.estado = "inicio";
    this.intentos = 6;

    this.fondo = fondo;
    this.fondo2 = fondo2;
    this.inicioFondo = inicioFondo;
    this.imagenesOcultas = imagenesOcultas;
    this.imagenesEncontradas = imagenesEncontradas;
    this.imagenVictoria = imagenVictoria;
    this.imagenDerrota = imagenDerrota;
    this.imagenBoton = imagenBoton;

    this.botonX = 260;
    this.botonY = 250;
    this.botonAncho = 280;
    this.botonAlto = 45;

    this.objetos = [];
    this.objetos[0] = new Objeto(60, 160, this.imagenesOcultas[0], this.imagenesEncontradas[0]);
    this.objetos[1] = new Objeto(270, 200, this.imagenesOcultas[1], this.imagenesEncontradas[1]);
    this.objetos[2] = new Objeto(520, 270, this.imagenesOcultas[2], this.imagenesEncontradas[2]);
    this.objetos[3] = new Objeto(400, 160, this.imagenesOcultas[3], this.imagenesEncontradas[3]);
  }

  draw() {
    if (this.estado == "inicio") {
      this.pantallaInicio();
    } else if (this.estado == "jugando") {
      this.pantallaJuego();
    } else if (this.estado == "victoria") {
      this.pantallaVictoria();
    } else if (this.estado == "derrota") {
      this.pantallaDerrota();
    }
  }

  pantallaInicio() {
    image(this.inicioFondo, 0, 0, 800, 400);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Encontrá los objetos ocultos", width / 2, 120);
    this.dibujarBoton("Comenzar");
  }

  pantallaJuego() {
    image(this.fondo, 0, 0, 700, 400);
    image(this.fondo2, 700, 0, 100, 400);

    for (let i = 0; i < this.objetos.length; i++) {
      this.objetos[i].mostrar();
    }

    fill(255);
    textAlign(LEFT, CENTER);
    textSize(16);
    text("Intentos: " + this.intentos, 35, 40);
  }

  pantallaVictoria() {
    image(this.imagenVictoria, 0, 0, 800, 400);
    fill(0, 0, 0, 80);
    rect(0, 0, 800, 400);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("¡Ganaste!", width / 2, 120);
    textSize(20);
    text("Encontraste todos los objetos", width / 2, 180);
    this.dibujarBoton("Jugar de nuevo");
  }

  pantallaDerrota() {
    image(this.imagenDerrota, 0, 0, 800, 400);
    fill(0, 0, 0, 80);
    rect(0, 0, 800, 400);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("Perdiste", width / 2, 120);
    textSize(20);
    text("Te quedaste sin intentos", width / 2, 180);
    this.dibujarBoton("Reintentar");
  }

  dibujarBoton(texto) {
    image(this.imagenBoton, this.botonX, this.botonY, this.botonAncho, this.botonAlto);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(texto, this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  areaDelBoton() {
    return mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonY && mouseY < this.botonY + this.botonAlto;
  }


  mousePressed() {
    if (this.estado == "inicio") {

      if (this.areaDelBoton()) {
        this.estado = "jugando";
      }

    } else if (this.estado == "jugando") {

      this.clickEnJuego();

    } else {
      if (this.areaDelBoton()) {
        this.reiniciar();
      }
    }
  }

  clickEnJuego() {
    let acierto = false;

    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].revisarClick(mouseX, mouseY)) {
        acierto = true;
      }
    }

    if (acierto == false) {
      this.intentos--;
    }

    if (this.todosEncontrados()) {
      this.estado = "victoria";
    } else if (this.intentos <= 0) {
      this.estado = "derrota";
    }
  }

  todosEncontrados() {
    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].encontrado == false) {
        return false;
      }
    }
    return true;
  }

  reiniciar() {
    this.intentos = 6;
    for (let i = 0; i < this.objetos.length; i++) {
      this.objetos[i].encontrado = false;
    }
    this.estado = "inicio";
  }
}

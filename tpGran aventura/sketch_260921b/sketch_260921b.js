/*TP FINAL PARTE #1 COMISIÓN 2
ALUMNOS:
- Agorreca Celeste Geraldine 122576/5
- Blas Romero
Video explicativo:
*/

let fondos = [];
let texto = [];
let imagenBoton;

let pantalla = 0;

let minTexto;
let maxTexto;

let textoActual;

let musicaFondo;

function preload() {
  for (let i = 0; i < 6; i++) {
    fondos[i] = loadImage("assets/pantalla" + i + ".jpg");
  }
  imagenBoton = loadImage("assets/boton.png");
}

function setup() {
  createCanvas(800, 450);
  textSize(20);
  textWrap(WORD);

  minTexto = 0;
  maxTexto = 0;

  textoActual = 0;

  // inicio
  texto[0] = 'Dupin y su amigo leen en el periódico sobre un asesinato doble.';
  texto[1] = 'Dupin consigue permiso para examinar la escena del crimen.';
  texto[2] = 'Llega a la calle Morgue. Los cuerpos de Madame L Espanaye y su hija tienen heridas de una fuerza imposible.\nDecide cómo investigar';

  // acusa a le bon
  texto[3] = 'El empleado que había entregado dinero a Madame L Espanaye días antes. Sin más pruebas, la policía se apura a acusarlo.\n¿Seguir investigando por tu cuenta?';
  // habla con el marinero
  texto[4] = 'El marinero, temiendo que su orangután escapado sea vinculado al crimen, se acerca a tantear a Dupin. Se encubre esa posibilidad.';
  // anuncio en el diario
  texto[5] = 'Luego de analizar la escena del crimen y reconocer que fue producto de un orangután, publicó un anuncio en el periódico donde dice haber capturado un orangután y da una recompensa por su devolución.';

  texto[6] = 'Dupin repara en que ningún testigo coincide en qué idioma hablaba el asesino. Esa contradicción lo lleva a sospechar de algo no humano.';
  texto[7] = 'Todas las miradas están puestas en Le Bon, mientras las demás pruebas quedan enterradas bajo la acusación fácil.\nNotas las inconsistencias';
  texto[8] = 'El marinero atraído por el anuncio, se presenta ante Dupin antes de que la policía conecte los hechos por su cuenta.';

  // Final heroico
  texto[9] = 'La verdad se revela, un orangután escapado cometió los asesinatos. Le Bon es liberado y el marinero asume su responsabilidad por negligencia.';
  // Final trágico
  texto[10] = 'Le Bon es condenado injustamente. El verdadero responsable nunca enfrenta las consecuencias, y la verdad no llega a saberse.';
  // Final clásico
  texto[11] = 'El marinero confiesa todo voluntariamente a Dupin. Capturan al animal sin que nadie más salga herido, y Le Bon queda libre de inmediato.';
}

function draw() {
  background(0);

  image(fondos[pantalla], 0, 0, 800, 450);
  cajaTexto(texto[pantalla], 0, 290, 800, 300);

  if (pantalla == 0 || pantalla == 1) {
    boton(320, 380, 180, 40, "Avanzar");
  }
  if (pantalla == 2){
    boton(100, 380, 180, 40, "Acusa a Le Bon");
    boton(310, 380, 180, 40, "Habla con el marinero");
    boton(520, 380, 180, 40,"Anuncio en el diario");
  }
  if (pantalla == 3){
    boton(200, 380, 180, 40, "Sí");
    boton(400, 380, 180, 40, "No");
  }
  if (pantalla == 4){
    boton(320,380,180,40,"Avanzar");
  }
  if (pantalla == 5){
    boton(320,380,180,40,"Avanzar");
  }
}

function mousePressed() {
  if (pantalla == 0 || pantalla == 1) {
    if (areaDelBoton(320, 380, 180, 40)) {
      pantalla++;
    }
  } else if (pantalla == 2) {
    // Acusar a Le Bon
    if (areaDelBoton(100, 380, 180, 40)) {
      pantalla = 3;
    }
    // Habla con el marinero
    if (areaDelBoton(310,380,180,40)){
      pantalla = 4;
    }
    // Anuncio en el diario
    if (areaDelBoton(520,380,280,40)){
      pantalla = 5;
    }
  }
}

function areaDelBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function boton(x, y, w, h, txt) {
  push();
  image(imagenBoton, x, y, w, h);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text(txt, x + w / 2, y + h / 2);
  pop();
}

function cajaTexto(txt, x, y, w, h) {
  push();
  noStroke();
  fill(0, 0, 0, 200);
  rect(x, y, w, h);

  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);
  text(txt, x + 25, y + 20, w - 50, h - 50);
  pop();
}

/*TP FINAL PARTE #1 COMISIÓN 2
ALUMNOS:
- Agorreca Celeste Geraldine 122576/5
- Blas Romero
Video explicativo:
*/
let imagenmenu;
let fondos = [];
let texto = [];
let imagenBoton;
let pantalla = -1;
let musicaFondo;
let MovY=0;


let Final=[];
let tiempoPantalla12 = 0;
let frame3=0;
let tiempoFrameFinal = 0;
let posX=-20; 

let tiempoInicioFinal = 0;
let duracionFinal = 4000;
function preload() {
  for (let i = 0; i < 13; i++) {
    fondos[i] = loadImage("assets/pantalla" + i + ".jpg");
  }
  imagenBoton = loadImage("assets/boton.png");
   for(let j=0;j<9;j++){
 Final[j]=loadImage("assets/final3/mono"+j+".png");}
 imagenmenu= loadImage("assets/menu/menu.jpg");
}

function setup() {
  createCanvas(800, 450);
  
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
  texto[7] = 'Todas las miradas están puestas en Le Bon, mientras las demás pruebas quedan enterradas bajo la acusación fácil.\n¿Notas las inconsistencias?';
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
  
  
  if (pantalla == -1) {
    image(imagenmenu, 0, 0, 800, 450);
    push();
    fill(255);
    textSize(28);
    fill(255, 230, 180);
    text("LOS CRÍMENES DE LA CALLE MORGUE", 150, 80);
    pop();

    
    boton(310, 320, 180, 40, "Iniciar aventura");
  } 
  

  else {

  image(fondos[pantalla], 0, 0, 800, 450);
  
  if (pantalla != 12) {
  cajaTexto(texto[pantalla], 0, 290, 800, 300);
  }
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
  if (pantalla == 6){
    boton(320, 380, 180, 40, "Avanzar");
  }
  if (pantalla == 7){
    boton(200, 380, 180, 40, "Sí");
    boton(400, 380, 180, 40, "No");  
  }
  if (pantalla == 8){
    boton(320, 380, 180, 40, "Avanzar");
  }
 

  }
  
if (pantalla == 9 || pantalla == 10 || pantalla == 11) {
  if (millis() - tiempoInicioFinal >= duracionFinal) {
    pantalla = 12;
     tiempoPantalla12 = millis();
    tiempoFrameFinal = millis();
    frame3 = 0;
    posX = 0;
    MovY = 0;
  }
}
if(pantalla==12){
  

 boton(600, 380, 180, 40, "volver a empezar");
 MovY=MovY+0.5;
 fill(255);
 textSize(20);
 text ("El autor del libro es Edgar Allan Poe\n" +
    "La fecha de publicación fue en 1841\n" +
    "El género del cuento es de misterio y policial",
    200, MovY );
    
 // Esperar 2 segundos antes de mostrar el mono
  if (millis() - tiempoPantalla12 >= 2000) {

    // Cambiar de imagen cada 200 milisegundos
    if (millis() - tiempoFrameFinal >= 200) {
      frame3++;

      if (frame3 >= 9) {
        frame3 = 0;
      }

      tiempoFrameFinal = millis();
    }

    // Dibujar el mono
    image(Final[frame3], posX, 250, 150, 200);

    // Mover el mono hacia la derecha
    posX = posX +1;
  }
}    
    
}


function mousePressed() {
  if (pantalla == -1) {
    if (areaDelBoton(310, 320, 180, 40)) {
      pantalla = 0;
    }
  } 
  
  else if (pantalla == 0 || pantalla == 1) {
    if (areaDelBoton(320, 380, 180, 40)) {
      pantalla++;
    }
  // Decide cómo investigar
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
  // Seguir investigando por tu cuenta
  } else if (pantalla == 3) {
    // sí
    if (areaDelBoton(200,380,180, 40)){
      pantalla = 6;
    }
    // no
    if (areaDelBoton(400, 380, 180, 40)){
      pantalla = 7;
    }
  // Ruta marinero
  }else if (pantalla == 4) {
    if (areaDelBoton(400, 380, 180, 40)){
      pantalla = 7;
    }
  // notas las inconsistencias
  }else if (pantalla == 7) {
    if (areaDelBoton(200,380,180, 40)){
      pantalla = 6;
    }
    // FINAL TRÁGICO
    if (areaDelBoton(400, 380, 180, 40)){
      pantalla = 10;
      tiempoInicioFinal = millis();
    }
  // Ruta diario
  } else if (pantalla == 5) {
    if (areaDelBoton(320, 380, 180, 40)){
      pantalla = 8;
    }
  // FINAL HEROICO
  } else if (pantalla == 6) {
    if (areaDelBoton(320, 380, 180, 40)){
      pantalla = 9;
      tiempoInicioFinal = millis();
    }
  // FINAL CLÁSICO
  } else if (pantalla == 8){
    if (areaDelBoton(320, 380, 180, 40)){
      pantalla = 11;
      tiempoInicioFinal = millis();
      
    
   }
  }
  else if (pantalla==12){
  if (areaDelBoton(600, 380, 180, 40)){
      pantalla = -1;
      MovY=0;
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

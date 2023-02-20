function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  reconocimiento = ml5.imageClassifier("MobileNet", modeloListo)
}
function draw(){
  image(video, 0, 0, 300, 300);
  reconocimiento.classify(video, resultadoObtenido)
}
function modeloLiasto(){
  console.log("modelo listo");
}
function resultadoObtenido(){
  if(!error && resultado[0].confidence > 0.5 && resultadoAnterior != resultado[0].label){
    document.getElementById("objeto").innerHTML =  resultado[0].label;
    document.getElementById("confianza").innerHTML =  resultado[0].confidence;
    hablar(resultado[0].label)
    resultadoAnterior = resultado[0].label;
  }
}

function hablar(mensaje){
  var leerEnVozAlta = window.speechSynthesis;
  var lectura = new SpeechSynthesisUtterance(mensaje);
  lectura.lang = "en-US";
  leerEnVozAlta.speak(lectura);  
}


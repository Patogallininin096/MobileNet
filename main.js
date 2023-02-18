function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}
function draw(){
  Image(video, 0, 0, 300, 300);
}




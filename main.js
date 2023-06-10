function setup(){
video = createCapture(VIDEO);
video.size(400,400);
video.position(10,50);

canvas = createCanvas(600,500);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet Is Intialized')
}

function gotPoses(){

}
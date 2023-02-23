difference = 0;
rightWristX = 0;
leftWristX = 0;
let lore;
function preload() {
    lore = loadFont('Lore.woff');
}

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 450);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  textFont(lore);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "Tamanho da fonte = " + difference +"px";
textSize(difference);
fill('#FFE787');

text('PZG', 50, 400);

}

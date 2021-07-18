var noseX = 0;
var noseY = 0;

function preload()
{
nehbkg = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function draw()
{
image(video, 0, 0, 300; 300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY, 20);
image(nehbkg, noseX, noseY, 30,30);
}

function setup()
{
canvas = createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size (300, 300);
video.hide();
poseNet=ml5.poseNet(video,modelLodad)
poseNet.on("pose", gotposes)
}

function modelLodad()
{
//console.log("modelLodad");
}

function gotposes(result)
{
if(result.length> 0)
{
console.log (result);
}
}
function take_snapshot()
{
save("h.png");
}

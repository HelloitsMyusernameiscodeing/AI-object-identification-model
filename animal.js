img="";

function preload()
{
img=loadImage('Animal.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw()
{
    image(img,0 ,0 ,640,420);
    
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error, results){
    if(error){
      console.log(error);  
    }
    console.log(results);
}
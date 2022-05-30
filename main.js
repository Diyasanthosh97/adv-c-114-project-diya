function preload(){
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}
function takepic(){
    save("clown nose_filter.jpg");
}
function draw(){
}
var radius = 300;
var pupilRadius = 200;



function setup() {
createCanvas(600,600);
background(255, 42, 187);
}

function draw() {
    var eyeX = width/2;
    var eyeY = height/2;
    var pupilX = eyeX;
    var pupilY = eyeY;
    
//    noStroke();
    fill(255);
    ellipse(eyeX, eyeY, radius, radius);
//    pupilX = mouseX;
    

    var d = dist(eyeX, eyeY, mouseX, mouseY);
//    if(d>radius/2){
        fill(0);
        var pupilX = map(mouseX, 0, windowWidth, eyeX-pupilRadius/5, eyeX+pupilRadius/5);
        var pupilY = map(mouseY, 0, windowHeight, eyeY-pupilRadius/5, eyeY+pupilRadius/5);
        ellipse(pupilX, pupilY, pupilRadius, pupilRadius);
//    }
}
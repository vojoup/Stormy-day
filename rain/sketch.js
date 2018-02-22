let p = [];
let t;
let frames = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 500; i++) {
        p.push(new particle(random(width), random(-200, -100), random(4, 10)));
    }
}

function draw() {
    frames++;
    background(200, 53);
    for (let i = 0; i < 500; i++) {
        p[i].fall();
        p[i].show();
    }
    if (frames % 221 === 0) {
        t = new thunder(random(width/4, width*3/4), 0, random(width/4, width*3/4), random(height));
        t.show();
        console.log("THUNDER!!!!");
        delete t;
    }
}

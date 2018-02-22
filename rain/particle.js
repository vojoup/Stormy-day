class particle {
    constructor(x, y, yspeed) {
        this.x = x;
        this.y = y;
        this.yspeed = yspeed;
    }

    show() {
        strokeWeight(2);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + 10);
    }

    fall() {
        this.y += this.yspeed;
        if (this.y > height) {
            this.y = random(-500, -50);
        }
    }
}
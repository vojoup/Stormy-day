class thunder {
    constructor(x1, y1, x2, y2) {
        this.xStart = x1;
        this.yStart = y1;
        this.xEnd = x2;
        this.yEnd = y2;
    }

    show() {
        stroke(255, 255, 0);
        strokeWeight(6);
        line(this.xStart, this.yStart, this.xStart + 100, this.yStart + 100);
        line(this.xStart + 100, this.yStart + 100, this.xStart - 127, this.yStart + 120);
        line(this.xStart - 127, this.yStart + 120, this.xEnd, this.yEnd);
        strokeWeight(2);
    }
}
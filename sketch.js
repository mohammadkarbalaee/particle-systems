let numOfParticles = 1;
let velocity = 6;

particles = [];

function setup() {
    createCanvas(window.innerWidth - 1000, window.innerHeight - 35);
}

function draw() {
    background(255, 255, 255);
    //controllable, quantity of particles
    for (let i = 0; i < numOfParticles; i++) {
        let p = new Particle();
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {

    constructor() {
        this.x = 270;
        this.y = 30;
        //velocity of particles controllable
        this.vx = random(-1, 1);
        this.vy = random(velocity, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.8;
    }

    show() {
        noStroke();
        fill(255, 89, 38, this.alpha);
        ellipse(this.x, this.y, 15);
    }
}

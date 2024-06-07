const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let speed = 0.1;
let esquerda = false;
let direita = false;
let cima = false;
let baixo = false;


function moveBall() {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            cima = true;
            esquerda = false;
            direita = false;
            baixo = false;

        }
        else if (event.key === 'ArrowDown') {
            cima = false;
            esquerda = false;
            direita = false;
            baixo = true;
        }
        else if (event.key === 'ArrowLeft') {
            cima = false;
            esquerda = true;
            direita = false;
            baixo = false;
        }
        else if (event.key === 'ArrowRight') {
            cima = false;
            esquerda = false;
            direita = true;
            baixo = false;
        };
    });
};

function speedAnimation() {
    window.addEventListener('keydown', () => {
        speed += 1;
    });
};

function collision() {
    if(x < 50 || x > 450 || y < 50 || y > 450) {
        x = 50;
        y = 50;
        speed = 0.1;
        esquerda = false;
        direita = false;
        cima = false;
        baixo = false;
    }
};

function moveAnimation() {
    if (cima) {
        y -= speed;
    }
    if (direita) {
        x += speed;
    }
    if (esquerda) {
        x -= speed;
    }
    if (baixo) {
        y += speed;
    }
};

function draw(event) {
    event.save();
    event.clearRect(0, 0, canvas.width, canvas.height);
    event.beginPath();
    event.arc(x, y, 49, 0, 2 * Math.PI);
    event.fillStyle = 'blue';
    event.fill();
    event.restore();
    event.closePath();
}

function animate() {
    moveBall();
    moveAnimation();
    collision();
    draw(ctx);
    window.requestAnimationFrame(animate);
};

speedAnimation();
animate();
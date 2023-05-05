const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// Contains all the methods that we need to draw the things in this project
const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}
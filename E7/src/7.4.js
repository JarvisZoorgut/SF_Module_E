const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 300, 300);

// Обычный прямоугольник
ctx.strokeStyle = "yellow";
ctx.strokeRect(10, 20, 30, 40);

// Залитый прямоугольник
ctx.fillStyle = "green";
ctx.fillRect(70, 10, 50, 50);
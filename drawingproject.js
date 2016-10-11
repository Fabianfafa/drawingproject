var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

// Square
canvas.beginPath();
canvas.fillStyle = "white";
canvas.fill();
canvas.fillRect(3,264,398,372);

// retcangle
canvas.beginPath();
canvas.fillStyle = "navy";
canvas.fill();
canvas.fillRect(3,634,900,900);

//retcangle
canvas.beginPath();
canvas.fillStyle = "navy";
canvas.fill();
canvas.fillRect(3,100,900,164);

//retcangle
canvas.beginPath();
canvas.fillStyle = "black";
canvas.fill();
canvas.fillRect(399,264,10,372);

//Square
canvas.beginPath();
canvas.fillStyle = "red";
canvas.fill();
canvas.fillRect(409,264,900,372);

//circle
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(68,180,50,0,2*Math.PI,true);
canvas.fill();

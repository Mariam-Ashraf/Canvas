var add = document.getElementById("add-btn");
var num = -1;

add.addEventListener("click", function(e) {
    e.preventDefault();
    var heightInput = document.getElementById("height-num").value;

    if (heightInput != "" && heightInput > 0 && heightInput <= 600) {
        heightInput = parseInt(heightInput);
        var colorInput = document.getElementById("color").value;
        createCanvas();
        drawColumn(heightInput, colorInput);
    } else {
        alert("Invalid Input");
    }
});

function createCanvas() {
    var c = document.createElement("canvas");
    c.className = "myCanvas";
    c.width = "50";
    c.height = "600";
    c.style = "margin-right: 20px;";
    document.getElementById("output-canvas").append(c);
    num++;
}

function drawColumn(height, color) {
    var canvas = document.getElementsByClassName("myCanvas")[num];
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = color;
    ctx.fillRect(0, canvas.height - height, canvas.width, height);

    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(height, canvas.width / 2, canvas.height - 20);
}
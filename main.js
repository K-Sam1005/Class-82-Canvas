var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

var color = "red";
var width_of_the_line = 1;

document.addEventListener('mousedown', my_mouseDown);
function my_mouseDown(e){
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width").value;

    mouseEvent = "mousedown";
}

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener('mouseleave', my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener('mouseup', my_mouse_up);
function my_mouse_up(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener('mousemove', my_mouseMove);
function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;

        console.log("Last Position of x and y coordinates =");
        console.log("x = "+last_position_of_x+" y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);



        console.log("Current Position Of x and y coordinates = ");
        console.log("x = "+current_position_of_mouse_x+" y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function cleararea(){
    ctx.clearRect(0 , 0 , canvas.width,canvas.height);
}
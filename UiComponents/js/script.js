

// get a handle to the canvas context
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var npcImage = new Image();
npcImage.src = "./img/Fire.png";

var sprite = new Image();
sprite.src = "./img/Animation.png"; // Frames 1 to 6


// Default GamerInput is set to None
var gamerInput = new GamerInput("None"); //No Input

function GameObject(name, image, health)
{
    this.name = name;
    this.image = image;
    this.health = health;
    this.x = 0;
    this.y = 0;
}

function drawHealthbar()
{
    var width = 50;
    var height = 20;
    var max = 100;
    var val = gameobjects[0].health;

    // Draw the background
    context.fillStyle = "#000000";
    context.clearRect(gameobjects[0].x, gameobjects[0].y-20, canvas.width, canvas.height);
    context.fillRect(gameobjects[0].x, gameobjects[0].y-20, width, height);


    // Draw the fill
    context.fillStyle = "#00FF00";

    if (gameobjects[0].health < 50)
    {
        context.fillStyle = "#FFFF00";
    }
    if (gameobjects[0].health < 25)
    {
        context.fillStyle = "#FF0000";
    }
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(gameobjects[0].x, gameobjects[0].y-20, fillVal * width, height);
}
// Update Heads Up Display with Weapon Information
function weaponSelection()
{
    var selection = document.getElementById("equipment").value;
    var active = document.getElementById("active");
    if (active.checked == true) {
        document.getElementById("HUD").innerHTML = selection + " active ";
        console.log("Equipment Active");
    } else {
        document.getElementById("HUD").innerHTML = selection + " selected ";
        console.log("Equipment Selected");
    }
}


// Array of Weapon Options
var options = [{
    "text": "Select an equipment",
    "value": "No equipment",
    "selected": true
},
{
    "text": "Extinguisher",
    "value": "Fire Extinguisher"
},
{
    "text": "Hose",
    "value": "Fire Hose"
},
{
    "text": "Blanket",
    "value": "Fire Blanket"
}
];

var selectBox = document.getElementById('equipment');

for (var i = 0; i < options.length; i++) {
    var option = options[i];
    selectBox.options.add(new Option(option.text, option.value, option.selected));
}

// Each time this function is called a GameObject
// is create based on the arguments
// In JavaScript you can consider everything an Object
// including functions


// Drawing a HealthBar on Canvas, for our player
// The GamerInput is an Object that holds the Current
// GamerInput (Left, Right, Up, Down)
function GamerInput(input)
{
    this.action = input;
}

//this function acts when we push down the Y button
function buttonOnClickUp()
{
    gamerInput = new GamerInput("Up");
}
// this acts when pushing X 

function buttonOnClickLeft()
{
    gamerInput = new GamerInput("Left");
}

function buttonOnClickRight()
{
    gamerInput = new GamerInput("Right");
}

function buttonOnClickDown()
{    
    gamerInput = new GamerInput("Down");
}

function buttonNotPushed()
{
    gamerInput = new GamerInput("None");
    console.log("Action stoped");
}

var moveUp = document.getElementById("buttonUp");

moveUp.addEventListener("mousedown",buttonOnClickUp);
moveUp.addEventListener("mouseup",buttonNotPushed);

var moveDown = document.getElementById("buttonDown");

moveDown.addEventListener("mousedown",buttonOnClickDown);
moveDown.addEventListener("mouseup",buttonNotPushed);

var moveLeft = document.getElementById("buttonLeft");

moveLeft.addEventListener("mousedown", buttonOnClickLeft);
moveLeft.addEventListener("mouseup", buttonNotPushed);

var moveRight = document.getElementById("buttonRight");

moveRight.addEventListener("mousedown", buttonOnClickRight);
moveRight.addEventListener("mouseup", buttonNotPushed);

// Default Player
var player = new GameObject("Player", "Animation.png", 100);

// Gameobjects is a collection of the Actors within the game
var gameobjects = [player, new GameObject("NPC", "Fire.png", 100)];

gameobjects[1].x = 250;
gameobjects[1].y = 250;
// Process keyboard input event
function input(event) {
    // Take Input from the Player
    // console.log("Input");
    // console.log("Event type: " + event.type);
   

    if (event.type === "keydown") {
        switch (event.keyCode) {
            case 37:
                gamerInput = new GamerInput("Left");
                break; //Left key
            case 38:
                gamerInput = new GamerInput("Up");
                break; //Up key
            case 39:
                gamerInput = new GamerInput("Right");
                break; //Right key
            case 40:
                gamerInput = new GamerInput("Down");
                break; //Down key
            default:
                gamerInput = new GamerInput("None"); //No Input
        }
    }
    else
    {
        gamerInput = new GamerInput("None"); //No Input
    }
    // console.log("Gamer Input :" + gamerInput.action);
}

function update() {
    // Iterate through all GameObjects
    // Updating position and gamestate
    // console.log("Update");
    

        if (gamerInput.action === "Up")
        {
            gameobjects[0].y -= 3;
         
        }
   
        if (gamerInput.action === "Right")
        {
            gameobjects[0].x += 3;

        }
        if (gamerInput.action === "Left")
        {
            gameobjects[0].x -= 3;   

        }    
    if (gamerInput.action === "Down")
        {
            gameobjects[0].y += 3;   

        }

    if (250 < gameobjects[0].x + 50 && gameobjects[0].x < 350 && gameobjects[0].y + 50 > 250 && gameobjects[0].y < 350)
    {
        console.log("You Got Burned !!!!");
        gameobjects[0].health--;
    }

    for (i = 0; i < gameobjects.length; i++)
    {
        console.log(gameobjects[i].x);
        console.log(gameobjects[i].y);
    }

}


// Draw GameObjects to Console
// Modify to Draw to Screen
function draw()
{
    // Clear Canvas
    // Iterate through all GameObjects
    // Draw each GameObject

    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    for (i = 0; i < gameobjects.length; i++)
    {
        if (gameobjects[i].health > 0)
        {
            // console.log("Image :" + gameobjects[i].img);
        }
    }

    drawHealthbar();


    context.drawImage(npcImage, gameobjects[1].x, gameobjects[1].y);


    animate();


}

// Total Frames
var frames = 6;
// Current Frame
var currentFrame = 0;
// X axis to Draw from
//var sprite_x = 0;

// Initial time set
var initial = new Date().getTime();
//var current; // current time


function animate()
{
    current = new Date().getTime(); // update current
    if (current - initial >= 500) { // check is greater that 500 ms
        currentFrame = (currentFrame + 1) % frames; // update frame
        initial = current; // reset initial
    }
    // Draw sprite frame
    context.drawImage(sprite, (sprite.width / 6) * currentFrame, 0, 100, 100, gameobjects[0].x, gameobjects[0].y, 50, 50);

    context.font = '36pt Orbitron';

}
function gameloop()
{
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);

// Handle Keypressed
window.addEventListener('keyup', input);
window.addEventListener('keydown', input);


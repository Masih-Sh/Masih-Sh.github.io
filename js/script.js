

// get a handle to the canvas context
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var npcImage = new Image();
npcImage.src = "./img/PHIL.png";

var npc1Image = new Image();
npc1Image.src = "./img/COLM.png";

var tableImage = new Image();
tableImage.src = "./img/TABLE.png";

var sprite = new Image();
sprite.src = "./img/CHEFRIGHT.png"; 

var blue = new Image();
blue.src = "./img/BLUENEW.png";

var red = new Image();
red.src = "./img/REDNEW.png";

var purple = new Image();
purple.src = "./img/PURPLENEW.png";

var orange = new Image();
orange.src = "./img/ORANGENEW.png";

var green = new Image();
green.src = "./img/GREENNEW.png";

var stove = new Image();
stove.src = "./img/STOVE.png";

var food = new Image();
food.src = "./img/FOOD.png";

//blue ingredient pick up boolean
var blue1IsPicked = new Boolean(false);
var blue2IsPicked = new Boolean(false);

var blue1IsDroppedOven1 = new Boolean(false);
var blue1IsDroppedOven2 = new Boolean(false);

var blue2IsDroppedOven1 = new Boolean(false);
var blue2IsDroppedOven2 = new Boolean(false);

//red ingredient pick up boolean
var red1IsPicked = new Boolean(false);
var red2IsPicked = new Boolean(false);

var red1IsDroppedOven1 = new Boolean(false);
var red1IsDroppedOven2 = new Boolean(false);

var red2IsDroppedOven1 = new Boolean(false);
var red2IsDroppedOven2 = new Boolean(false);

//purple ingredient pick up boolean
var purple1IsPicked = new Boolean(false);
var purple2IsPicked = new Boolean(false);

var purple1IsDroppedOven1 = new Boolean(false);
var purple1IsDroppedOven2 = new Boolean(false);

var purple2IsDroppedOven1 = new Boolean(false);
var purple2IsDroppedOven2 = new Boolean(false);


//orange ingredient pick up boolean
var orange1IsPicked = new Boolean(false);
var orange2IsPicked = new Boolean(false);

var orange1IsDroppedOven1 = new Boolean(false);
var orange1IsDroppedOven2 = new Boolean(false);

var orange2IsDroppedOven1 = new Boolean(false);
var orange2IsDroppedOven2 = new Boolean(false);


//green ingredient pick up boolean
var green1IsPicked = new Boolean(false);
var green2IsPicked = new Boolean(false);

var green1IsDroppedOven1 = new Boolean(false);
var green1IsDroppedOven2 = new Boolean(false);

var green2IsDroppedOven1 = new Boolean(false);
var green2IsDroppedOven2 = new Boolean(false);

////////////////////////////////////////////////
var mat1Oven1Dropped = new Boolean(false);
var mat2Oven1Dropped = new Boolean(false);
var mat3Oven1Dropped = new Boolean(false);
var mat4Oven1Dropped = new Boolean(false);
///////////////////////////////////////////
var mat1Oven2Dropped = new Boolean(false);
var mat2Oven2Dropped = new Boolean(false);
var mat3Oven2Dropped = new Boolean(false);
var mat4Oven2Dropped = new Boolean(false);
///////////////////////////////////////////
var oven1CookingFinished = new Boolean(false);
var oven2CookingFinished = new Boolean(false);
///////////////////////////////////////////////
var order1PickedUp = new Boolean(false);
var order2PickedUp = new Boolean(false);
///////////////////////////////////////////////////
var order1Dropped = new Boolean(false);
var order2Dropped = new Boolean(false);
///////////////////////////////////////////////////

// Default GamerInput is set to None
var gamerInput = new GamerInput("None"); //No Input

function GameObject(name, image)
{
    this.name = name;
    this.image = image;
       
    this.x = parseInt(localStorage.getItem('Xlocation'));

    if(isNaN(this.x))
    {
       this.x = 0;
       localStorage.setItem('Xlocation',0);
    }
  
    this.y = parseInt(localStorage.getItem('Ylocation'));

    if(isNaN(this.y))
    {
       this.y = 0;
       localStorage.setItem('Ylocation',0);
    }    
}

function drawTheOrderBar1()
{
    context.beginPath();
    context.fillStyle = "green";
    if(green1IsDroppedOven1 == true || green2IsDroppedOven1 == true)
    {
        context.fillStyle = "white";
        mat1Oven1Dropped = true;
    }
    context.rect(gameobjects[20].x, gameobjects[20].y-3, 3,3);
    context.fill();

    context.beginPath();
    context.fillStyle = "red";
    if(red1IsDroppedOven1 == true || red2IsDroppedOven1 == true)
    {
        context.fillStyle = "white";
        mat2Oven1Dropped = true;

    }
    context.rect(gameobjects[20].x+4, gameobjects[20].y-3, 3,3);
    context.fill();

    context.beginPath();
    context.fillStyle = "purple";
    if(purple1IsDroppedOven1 == true || purple2IsDroppedOven1 == true)
    {
        context.fillStyle = "white";
        mat3Oven1Dropped = true;

    }
    context.rect(gameobjects[20].x+8, gameobjects[20].y-3, 3,3);
    context.fill();

    context.beginPath();
    context.fillStyle = "blue";
    if(blue1IsDroppedOven1 == true || blue2IsDroppedOven1 == true) //|| blue2IsDroppedOven1 == true)
    {
        context.fillStyle = "white";
        mat4Oven1Dropped = true;
    }
    context.rect(gameobjects[20].x+12, gameobjects[20].y-3, 3,3);    
    context.fill();
}

function drawTheOrderBar2()
{
    context.beginPath();
    context.fillStyle = "red";
    if(red1IsDroppedOven2 == true || red2IsDroppedOven2 == true)
    {
        context.fillStyle = "white";
        mat1Oven2Dropped = true;

    }
    context.rect(gameobjects[21].x, gameobjects[21].y-3, 3,3);
    context.fill();

    context.beginPath();
    context.fillStyle = "green";
    if(green1IsDroppedOven2 == true || green2IsDroppedOven2 == true)
    {
        context.fillStyle = "white";
        mat2Oven2Dropped = true;

    }
    context.rect(gameobjects[21].x+4, gameobjects[21].y-3, 3,3);
    context.fill();

    context.beginPath();
    context.fillStyle = "orange";
    if(orange1IsDroppedOven2 == true || orange2IsDroppedOven2 == true)
    {
        context.fillStyle = "white";
        mat3Oven2Dropped = true;

    }
    context.rect(gameobjects[21].x+8, gameobjects[21].y-3, 3,3);
    context.fill();

    context.beginPath();
    context.fillStyle = "purple";
    if(purple1IsDroppedOven2 == true || purple2IsDroppedOven2 == true)
    {
        context.fillStyle = "white";
        mat4Oven2Dropped = true;
    }   
    context.rect(gameobjects[21].x+12, gameobjects[21].y-3, 3,3);
    context.fill();
}

function drawCookingBar1()
{
    var width = 20;
    var height = 3;
    var max = 60;
    var val = cookingTime1;

    // Draw the background
    context.fillStyle = "#00FF00";//"#000000";
    context.clearRect(gameobjects[20].x , gameobjects[20].y+24, canvas.width, canvas.height);
    context.fillRect(gameobjects[20].x , gameobjects[20].y+20, width, height);

    // Draw the fill
    context.fillStyle = "#000000";//"#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(gameobjects[20].x, gameobjects[20].y+20, fillVal * width, height);
}
function drawCookingBar2()
{
    var width = 20;
    var height = 3;
    var max = 60;
    var val = cookingTime2;

    // Draw the background
    context.fillStyle = "#00FF00";//"#000000";
    context.clearRect(gameobjects[21].x , gameobjects[21].y+24, canvas.width, canvas.height);
    context.fillRect(gameobjects[21].x , gameobjects[21].y+20, width, height);

    // Draw the fill
    context.fillStyle = "#000000";//"#00FF00";
   
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(gameobjects[21].x, gameobjects[21].y+20, fillVal * width, height);
}
////////////////////////////////////
function drawEatingBar1()
{
    var width = 20;
    var height = 3;
    var max = 60;
    var val = cookingTime1;

    // Draw the background
    context.fillStyle = "#00FF00";//"#000000";
    context.clearRect(gameobjects[3].x+5, gameobjects[3].y+14, canvas.width, canvas.height);
    context.fillRect(gameobjects[3].x+5 , gameobjects[3].y+14, width, height);

    // Draw the fill
    context.fillStyle = "#000000";//"#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(gameobjects[3].x+5, gameobjects[3].y+14, fillVal * width, height);
}
function drawEatingBar2()
{
    var width = 20;
    var height = 3;
    var max = 60;
    var val = cookingTime1;

    // Draw the background
    context.fillStyle = "#00FF00";//"#000000";
    context.clearRect(gameobjects[4].x+5 , gameobjects[4].y+14, canvas.width, canvas.height);
    context.fillRect(gameobjects[4].x+5 , gameobjects[4].y+14, width, height);

    // Draw the fill
    context.fillStyle = "#000000";//"#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(gameobjects[4].x+5, gameobjects[4].y+14, fillVal * width, height);
}
// Update Heads Up Display with Weapon Information
//var xhttp = new XMLHttpRequest();
//xhttp.onreadystatechange = function() {
//if (this.readyState == 4 && this.status == 200) {
 // Typical action to be performed when the document is ready:
 //document.getElementById("demo").innerHTML = xhttp.responseText;
 //var response = JSON.parse(xhttp.responseText);
 //console.log(response.FireEquipment[0].power);
//}
//};
//xhttp.open("GET", "./data/FireEquipment.json", true);
//xhttp.send();

//function actionSelection()
//{
    
    //var selection = document.getElementById("equipment").value;
    //var active = document.getElementById("active");
    //if (active.checked == true) {
        //document.getElementById("HUD").innerHTML = selection + " active ";
        //console.log("Equipment Active");
   // } else {
       // document.getElementById("HUD").innerHTML = selection + " selected ";
       // console.log("Equipment Selected");
    //}
//}


// Array of Weapon Options
//var options = [{
    //"text": "Select an Action",
    //"value": "No action",
    ////"selected": true
//},
//{
    //"text": "Picking Up",
    //"value": "Picked"
//},
//{
    //"text": "Droping Down",
    //"value": "Droped"
//}
//];

//var selectBox = document.getElementById('equipment');

//for (var i = 0; i < options.length; i++) {
   // var option = options[i];
    ////selectBox.options.add(new Option(option.text, option.value, option.selected));
//}

function updateXLocation() 
{
    
var current_Xlocation = localStorage.getItem('Xlocation');  
localStorage.setItem('Xlocation', parseInt(gameobjects[0].x));  
 }
function updateYLocation() 
{
var current_Ylocation = localStorage.getItem('Ylocation');  
localStorage.setItem('Ylocation', parseInt(gameobjects[0].y));  
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

//creating gameobjects
var player = new GameObject("Player", "CHEFRIGHT.png");
var npc1 = new GameObject("NPC1", "PHIL.png");
var npc2 = new GameObject("NPC2", "COLM.png");
var philTable = new GameObject("PhilTable","TABLE.png");
var colmTable = new GameObject("ColmTable","TABLE.png");
var ingredients1Table = new GameObject("RedTable","TABLE.png");
var ingredients2Table = new GameObject("PurpleTable","TABLE.png");
var ingredients3Table = new GameObject("OrangeTable","TABLE.png");
var ingredients4Table = new GameObject("GreenTable","TABLE.png");
var ingredients5Table = new GameObject("BlueTable","TABLE.png");
var ingredientBlue1 = new GameObject("blue","BLUE.png");
var ingredientBlue2 = new GameObject("blue","BLUE.png");
var ingredientRed1 = new GameObject("red","RED.png");
var ingredientRed2 = new GameObject("red","RED.png");
var ingredientPurple1 = new GameObject("purple","PURPLE.png");
var ingredientPurple2 = new GameObject("purple","PURPLE.png");
var ingredientOrange1 = new GameObject("orange","ORANGE.png");
var ingredientOrange2 = new GameObject("orange","ORANGE.png");
var ingredientGreen1 = new GameObject("green","GREEN.png");
var ingredientGreen2 = new GameObject("green","GREEN.png");
var stove1 = new GameObject("stove","STOVE.png");
var stove2 = new GameObject("stove","STOVE.png");
var order1 = new GameObject("food","FOOD.png");
var order2 = new GameObject("food","FOOD.png");


var cookingTime1 = 120;
var cookingTime2 = 120;

function init()
{
    //npcs
gameobjects[1].x = 200;
gameobjects[1].y = 45;

gameobjects[2].x = 200;
gameobjects[2].y = 95;

//tables
gameobjects[3].x = 170;
gameobjects[3].y = 57;

gameobjects[4].x = 170;
gameobjects[4].y = 107;

gameobjects[5].x = 100;
gameobjects[5].y = 25;

gameobjects[6].x = 40;
gameobjects[6].y = 25;

gameobjects[7].x = 135;
gameobjects[7].y = 135;

gameobjects[8].x = 85;
gameobjects[8].y = 135;

gameobjects[9].x = 35;
gameobjects[9].y = 135;

//blue ingredient
gameobjects[10].x = 40;
gameobjects[10].y = 135;

gameobjects[11].x = 52;
gameobjects[11].y = 135;

//red ingredient
gameobjects[12].x = 90;
gameobjects[12].y = 135;

gameobjects[13].x = 102;
gameobjects[13].y = 135;

//purple ingredient
gameobjects[14].x = 140;
gameobjects[14].y = 135;

gameobjects[15].x = 152;
gameobjects[15].y = 135;

//orange ingredient
gameobjects[16].x = 45;
gameobjects[16].y = 25;

gameobjects[17].x = 57;
gameobjects[17].y = 25;

//green ingredient
gameobjects[18].x = 105;
gameobjects[18].y = 25;

gameobjects[19].x = 117;
gameobjects[19].y = 25;

//stoves
gameobjects[20].x = 10;
gameobjects[20].y = 50;

gameobjects[21].x = 10;
gameobjects[21].y = 100;

//ready food
if(oven1CookingFinished == true)
{
    gameobjects[22].x = 25;
    gameobjects[22].y = 50;
}

if(oven2CookingFinished == true)
{
    gameobjects[23].x = 25;
    gameobjects[23].y = 100;
}
}

// Gameobjects is a collection of the Actors within the game
var gameobjects = [player,npc1,npc2,philTable,colmTable,ingredients1Table,ingredients2Table,
                    ingredients3Table,ingredients4Table,ingredients5Table,ingredientBlue1,ingredientBlue2,ingredientRed1,ingredientRed2,
                    ingredientPurple1,ingredientPurple2,ingredientOrange1,ingredientOrange2,ingredientGreen1,ingredientGreen2,
                    stove1,stove2,order1,order2];

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
    if(mat1Oven1Dropped == true && mat2Oven1Dropped == true && mat3Oven1Dropped == true && mat4Oven1Dropped == true)
    {
        cookingTime1--;
    }
    if(mat1Oven2Dropped == true && mat2Oven2Dropped == true && mat3Oven2Dropped == true && mat4Oven2Dropped == true)
    {
        cookingTime2--;
    }
    if(cookingTime1 == 0)
    {
        oven1CookingFinished = true;
    }
    if(cookingTime2 == 0)
    {
        oven2CookingFinished = true;
    }
    updateXLocation();
    updateYLocation();

        if (gamerInput.action === "Up")
        {
            gameobjects[0].y -= 1;         
        }   
        if (gamerInput.action === "Right")
        {
            sprite.src = "./img/CHEFRIGHT.png"; 
            gameobjects[0].x += 1;
        }
        if (gamerInput.action === "Left")
        {
            gameobjects[0].x -= 1;
            sprite.src = "./img/CHEFLEFT.png"; 

        }    
    if (gamerInput.action === "Down")
        {
            gameobjects[0].y += 1;
        }
///////////////////////////////////////////
if ( gameobjects[10].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[10].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[10].y && gameobjects[0].y+12.5 < gameobjects[10].y+3)
{
    blue1IsPicked = true;
}    
if(blue1IsPicked == true)
{
    gameobjects[10].x = gameobjects[0].x + 4;
    gameobjects[10].y = gameobjects[0].y + 15;
}

if ( gameobjects[11].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[11].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[11].y && gameobjects[0].y+12.5 < gameobjects[11].y+3)
{
     blue2IsPicked = true;
}    
if(blue2IsPicked == true)
{
    gameobjects[11].x = gameobjects[0].x + 4;
    gameobjects[11].y = gameobjects[0].y + 15;
}
//////////////////////////////////////////////////
if ( gameobjects[12].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[12].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[12].y && gameobjects[0].y+12.5 < gameobjects[12].y+3)
{
    red1IsPicked = true;
}    
if(red1IsPicked == true)
{
    gameobjects[12].x = gameobjects[0].x + 4;
    gameobjects[12].y = gameobjects[0].y + 15;
}
if ( gameobjects[13].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[13].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[13].y && gameobjects[0].y+12.5 < gameobjects[13].y+3)
{
    red2IsPicked = true;
}    
if(red2IsPicked == true)
{
    gameobjects[13].x = gameobjects[0].x + 4;
    gameobjects[13].y = gameobjects[0].y + 15;
}
/////////////////////////////////////////////////////////////////////
if ( gameobjects[14].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[14].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[14].y && gameobjects[0].y+12.5 < gameobjects[14].y+3)
{
    purple1IsPicked = true;
}    
if(purple1IsPicked == true)
{
    gameobjects[14].x = gameobjects[0].x + 4;
    gameobjects[14].y = gameobjects[0].y + 15;
}
if ( gameobjects[15].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[15].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[15].y && gameobjects[0].y+12.5 < gameobjects[15].y+3)
{
    purple2IsPicked = true;
}    
if(purple2IsPicked == true)
{
    gameobjects[15].x = gameobjects[0].x + 4;
    gameobjects[15].y = gameobjects[0].y + 15;
}
/////////////////////////////////////////////
if ( gameobjects[16].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[16].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[16].y && gameobjects[0].y+12.5 < gameobjects[16].y+3)
{
    orange1IsPicked = true;
}    
if(orange1IsPicked == true)
{
    gameobjects[16].x = gameobjects[0].x + 4;
    gameobjects[16].y = gameobjects[0].y + 15;
}
if ( gameobjects[17].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[17].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[17].y && gameobjects[0].y+12.5 < gameobjects[17].y+3)
{
    orange2IsPicked = true;
}    
if(orange2IsPicked == true)
{
    gameobjects[17].x = gameobjects[0].x + 4;
    gameobjects[17].y = gameobjects[0].y + 15;
}
//////////////////////////////////////////////////
if ( gameobjects[18].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[18].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[18].y && gameobjects[0].y+12.5 < gameobjects[18].y+3)
{
    green1IsPicked = true;
}    
if(green1IsPicked == true)
{
    gameobjects[18].x = gameobjects[0].x + 4;
    gameobjects[18].y = gameobjects[0].y + 15;
}
if ( gameobjects[19].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[19].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[19].y && gameobjects[0].y+12.5 < gameobjects[19].y+3)
{
    green2IsPicked = true;
}    
if(green2IsPicked == true)
{
    gameobjects[19].x = gameobjects[0].x + 4;
    gameobjects[19].y = gameobjects[0].y + 15;
}
///////////////////////////////////////////////////////////
//checking the droping of our ingredient into the oven
/////////////////////////////////////////////////////
if ( gameobjects[20].x< gameobjects[10].x +20 && gameobjects[10].x <gameobjects[20].x+20 &&
    gameobjects[10].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    blue1IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[10].x +20 && gameobjects[10].x <gameobjects[21].x+20 &&
    gameobjects[10].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    blue1IsDroppedOven2 = true;
}

if ( gameobjects[20].x< gameobjects[11].x +20 && gameobjects[11].x <gameobjects[20].x+20 &&
    gameobjects[11].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    blue2IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[11].x +20 && gameobjects[11].x <gameobjects[21].x+20 &&
    gameobjects[11].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    blue2IsDroppedOven2 = true;
}
/////////////////////////////////////////////////
if ( gameobjects[20].x< gameobjects[12].x +20 && gameobjects[12].x <gameobjects[20].x+20 &&
    gameobjects[12].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    red1IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[12].x +20 && gameobjects[12].x <gameobjects[21].x+20 &&
    gameobjects[12].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    red1IsDroppedOven2 = true;
}

if ( gameobjects[20].x< gameobjects[13].x +20 && gameobjects[13].x <gameobjects[20].x+20 &&
    gameobjects[13].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    red2IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[13].x +20 && gameobjects[13].x <gameobjects[21].x+20 &&
    gameobjects[13].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    red2IsDroppedOven2 = true;
}
/////////////////////////////////////////////////
if ( gameobjects[20].x< gameobjects[14].x +20 && gameobjects[14].x <gameobjects[20].x+20 &&
    gameobjects[14].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    purple1IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[14].x +20 && gameobjects[14].x <gameobjects[21].x+20 &&
    gameobjects[14].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    purple1IsDroppedOven2 = true;
}

if ( gameobjects[20].x< gameobjects[15].x +20 && gameobjects[15].x <gameobjects[20].x+20 &&
    gameobjects[15].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    purple2IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[15].x +20 && gameobjects[15].x <gameobjects[21].x+20 &&
    gameobjects[15].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    purple2IsDroppedOven2 = true;
}
/////////////////////////////////////////////////////
if ( gameobjects[20].x< gameobjects[16].x +20 && gameobjects[16].x <gameobjects[20].x+20 &&
    gameobjects[16].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    orange1IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[16].x +20 && gameobjects[16].x <gameobjects[21].x+20 &&
    gameobjects[16].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    orange1IsDroppedOven2 = true;
}

if ( gameobjects[20].x< gameobjects[17].x +20 && gameobjects[17].x <gameobjects[20].x+20 &&
    gameobjects[17].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    orange2IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[17].x +20 && gameobjects[17].x <gameobjects[21].x+20 &&
    gameobjects[17].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    orange2IsDroppedOven2 = true;
}
////////////////////////////////////////////////////////
if ( gameobjects[20].x< gameobjects[18].x +20 && gameobjects[18].x <gameobjects[20].x+20 &&
    gameobjects[18].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    green1IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[18].x +20 && gameobjects[18].x <gameobjects[21].x+20 &&
    gameobjects[18].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    green1IsDroppedOven2 = true;
}

if ( gameobjects[20].x< gameobjects[19].x +20 && gameobjects[19].x <gameobjects[20].x+20 &&
    gameobjects[19].y > gameobjects[20].y && gameobjects[0].y< gameobjects[20].y)
{
    green2IsDroppedOven1 = true;
}
if ( gameobjects[21].x< gameobjects[19].x +20 && gameobjects[19].x <gameobjects[21].x+20 &&
    gameobjects[19].y > gameobjects[21].y && gameobjects[0].y< gameobjects[21].y)
{
    green2IsDroppedOven2 = true;
}
///////////////////////////////////////
//order pick up////////////////////////
///////////////////////////////////////
if ( gameobjects[22].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[22].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[22].y && gameobjects[0].y+12.5 < gameobjects[22].y+3)
{
    order1PickedUp = true;
}    
if(order1PickedUp == true)
{
    gameobjects[22].x = gameobjects[0].x + 3;
    gameobjects[22].y = gameobjects[0].y + 12;
}
if ( gameobjects[23].x< gameobjects[0].x+7 && gameobjects[0].x+7 <gameobjects[23].x+6 &&
    gameobjects[0].y+12.5 > gameobjects[23].y && gameobjects[0].y+12.5 < gameobjects[23].y+3)
{
    order2PickedUp = true;
}    
if(order2PickedUp == true)
{
    gameobjects[23].x = gameobjects[0].x + 3;
    gameobjects[23].y = gameobjects[0].y + 12;
}
/////////////////////////////////////////
///////order droping/////////////////////
/////////////////////////////////////////
if(gameobjects[3].x< gameobjects[0].x+9 && gameobjects[0].x+7 <gameobjects[3].x+8 &&
    gameobjects[0].y+13.5 > gameobjects[3].y && gameobjects[0].y+13.5 < gameobjects[3].y+4)
{
    order1Dropped = true;
    
}
if(order1Dropped == true)
{
    gameobjects[22].x = 180;
    gameobjects[22].y = 55;
}
if(gameobjects[4].x< gameobjects[0].x+9 && gameobjects[0].x+7 <gameobjects[4].x+8 &&
    gameobjects[0].y+13.5 > gameobjects[4].y && gameobjects[0].y+13.5 < gameobjects[4].y+4)
{
    order2Dropped = true;
    
}
if(order2Dropped == true)
{
    gameobjects[23].x = 180;
    gameobjects[23].y = 105;
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
    //context.drawImage(image2,0,1000);
    drawCookingBar1();
    drawCookingBar2();
    drawEatingBar1();
    drawEatingBar2();

    context.drawImage(sprite, gameobjects[0].x, gameobjects[0].y);
    context.drawImage(npcImage, gameobjects[1].x, gameobjects[1].y);
    context.drawImage(npc1Image, gameobjects[2].x, gameobjects[2].y);
    context.drawImage(tableImage, gameobjects[3].x, gameobjects[3].y);
    context.drawImage(tableImage, gameobjects[4].x, gameobjects[4].y);
    context.drawImage(tableImage, gameobjects[5].x, gameobjects[5].y);
    context.drawImage(tableImage, gameobjects[6].x, gameobjects[6].y);
    context.drawImage(tableImage, gameobjects[7].x, gameobjects[7].y);
    context.drawImage(tableImage, gameobjects[8].x, gameobjects[8].y);
    context.drawImage(tableImage, gameobjects[9].x, gameobjects[9].y);

    if(blue1IsDroppedOven1 == false && blue1IsDroppedOven2 == false)
    {
        context.drawImage(blue, gameobjects[10].x, gameobjects[10].y);
    }   
    if(blue2IsDroppedOven1 == false && blue2IsDroppedOven2 == false)
    {
        context.drawImage(blue, gameobjects[11].x, gameobjects[11].y);
    }
    if(red1IsDroppedOven1 == false && red1IsDroppedOven2 == false)
    {
        context.drawImage(red, gameobjects[12].x, gameobjects[12].y);
    }
    if(red2IsDroppedOven1 == false && red2IsDroppedOven2 == false)
    {
        context.drawImage(red, gameobjects[13].x, gameobjects[13].y);
    }
    if(purple1IsDroppedOven1 == false && purple1IsDroppedOven2 == false)
    {
        context.drawImage(purple, gameobjects[14].x, gameobjects[14].y);
    }    
    if(purple2IsDroppedOven1 == false && purple2IsDroppedOven2 == false)
    {
        context.drawImage(purple, gameobjects[15].x, gameobjects[15].y);
    }
    if(orange1IsDroppedOven1 == false && orange1IsDroppedOven2 == false)
    {
        context.drawImage(orange, gameobjects[16].x, gameobjects[16].y);
    }
    if(orange2IsDroppedOven1 == false && orange2IsDroppedOven2 == false)
    {
        context.drawImage(orange, gameobjects[17].x, gameobjects[17].y);
    }
    if(green1IsDroppedOven1 == false && green1IsDroppedOven2 == false)
    {
        context.drawImage(green, gameobjects[18].x, gameobjects[18].y);
    }
    if(green2IsDroppedOven1 == false && green2IsDroppedOven2 == false)
    {
        context.drawImage(green, gameobjects[19].x, gameobjects[19].y);
    }
    context.drawImage(stove, gameobjects[20].x, gameobjects[20].y);
    context.drawImage(stove, gameobjects[21].x, gameobjects[21].y);

    if(oven1CookingFinished == true)
    {
        context.drawImage(food,gameobjects[22].x,gameobjects[22].y);
    }
    if(oven2CookingFinished == true)
    {
        context.drawImage(food,gameobjects[23].x,gameobjects[23].y);
    }
   
    drawTheOrderBar1();  
    drawTheOrderBar2()

}

// Total Frames
//var frames = 6;
// Current Frame
//var currentFrame = 0;
// X axis to Draw from
//var sprite_x = 0;

// Initial time set
//var initial = new Date().getTime();
//var current; // current time


//function animate()
//{
    //current = new Date().getTime(); // update current
    //if (current - initial >= 500) { // check is greater that 500 ms
        //currentFrame = (currentFrame + 1) % frames; // update frame
        //initial = current; // reset initial
    //}
    // Draw sprite frame
    //context.drawImage(sprite, (sprite.width / 6) * currentFrame, 0, 100, 100, gameobjects[0].x, gameobjects[0].y, 50 , 50);

    //context.font = '36pt Orbitron';

//}
function gameloop()
{
    init();
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);

// Handle Keypressed
window.addEventListener('keyup', input);
window.addEventListener('keydown', input);


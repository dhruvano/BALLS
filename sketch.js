var ball;
var position, database;

function setup(){
    database=firebase.database();
    console.log(database)
    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";

  var ballPosition= database.ref('ball/position')
  ballPosition.on("value", readPosition, showError);
}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

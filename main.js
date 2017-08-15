// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var accelerate=document.getElementById('accelerate');
var more=document.getElementById('more_balls');
var contexture=document.getElementById('contexture');
var btn_height=more.getBoundingClientRect().height;
var ball_Count=document.querySelector('p');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-btn_height;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Shape(x,y,velX,velY,exists){
  this.x=x;
  this.y=y;
  this.velX=velX;
  this.velY=velY;
  this.exists=exists;  
}

function Ball(x,y,velX,velY,exists,color,size){
  Shape.call(this,x,y,velX,velY,exists);
  this.color=color;
  this.size=size;
}
Ball.prototype=Object.create(Shape.prototype);
Ball.prototype.constructor=Ball;

Ball.prototype.draw=function(){
  ctx.beginPath();
  ctx.fillStyle=this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
  ctx.fill();
}

Ball.prototype.update=function(){
  if ((this.x+this.size)>=width){
	  this.velX=-(this.velX);
  }
  if ((this.x-this.size)<=0){
	  this.velX=-(this.velX);
  }
  if ((this.y+this.size)>=height||(this.y-this.size)<=0){
	  this.velY=-(this.velY);
  }
  this.x+=this.velX;
  this.y+=this.velY;
}

Ball.prototype.collisionDetect=function(){
  for(var j=0;j<balls.length;j++){
	if (balls[j].exists===true){
    if(this!==balls[j]){
	  var dx=this.x-balls[j].x;
      var dy=this.y-balls[j].y;
      var distance=Math.sqrt(dx*dx+dy*dy);
   
      if (distance<this.size+balls[j].size){
        balls[j].color=this.color='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
      }	  
	}
	}
  } 
}


function timeDoor(x,y,exists){
  Shape.call(this,x,y,exists);
  this.velX=20;
  this.velY=20;
  this.color='white';
  this.size=10;  
}
timeDoor.prototype=Object.create(Shape.prototype);
timeDoor.prototype.constructor=timeDoor;

timeDoor.prototype.draw=function(){
  ctx.beginPath();
  ctx.strokeStyle=this.color;
  ctx.lineWidth=3;
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
  ctx.stroke();
}
timeDoor.prototype.checkBounds=function(){
  if(this.x+this.size>width){
    this.x -= 20;
  }	  
  if (this.x-this.size<0){
	this.x+=20;  
  }
  if (this.y+this.size>height){
	this.y-=20;  
  }
  if (this.y-this.size<0){
	this.y+=20;  
  }
}
timeDoor.prototype.setControls=function(){
  var _this=this;
  window.onkeydown=function(e){
    if (e.keyCode===65){
	  _this.x-=_this.velX;	
	} else if (e.keyCode===68){
	  _this.x+=_this.velX;	
	} else if (e.keyCode===87){
	  _this.y-=_this.velY;	
	} else if (e.keyCode===83){
	  _this.y+=_this.velY;	
	}
  }  
}
timeDoor.prototype.collisionDetect=function(){
  for(var j=0;j<balls.length;j++){
    if(balls[j].exists){
	  var dx=this.x-balls[j].x;
      var dy=this.y-balls[j].y;
      var distance=Math.sqrt(dx*dx+dy*dy);
   
      if (distance<this.size+balls[j].size){
        balls[j].color='rgba(0,0,0,0)';
		balls[j].exists=false;
		numberOfDisplayed-=1;
      }	  
	}
  }   	
}

var balls=[];
var numberOfBalls=25;
var maxVelocity=7;
var transparency=0.25;
var numberOfDisplayed=numberOfBalls;

var time_door;
var timeDoorAdded=false;

function loop(){
  ctx.fillStyle='rgba(0,0,0,'+transparency+')';
  ctx.fillRect(0,0,width,height);
  
  if (timeDoorAdded===false){
  while(balls.length<numberOfBalls){
    var ball=new Ball(
	  random(0,width),
	  random(0,height),
	  random(-maxVelocity,maxVelocity),
	  random(-maxVelocity,maxVelocity),
	  true,
	  'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')',
	  random(10,20)
	);
	balls.push(ball);
  }  
  
  for(var i=0; i<balls.length;i++){
	balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();	
  }
  ball_Count.textContent='Ball Count: '+numberOfDisplayed;
  }else{
	time_door.draw();
    time_door.checkBounds();
    time_door.collisionDetect();
  
    for (var i=0; i<balls.length; i++){
	  if (balls[i].exists){
        balls[i].draw();
	    balls[i].update();
	    balls[i].collisionDetect();
      }	
    }
    ball_Count.textContent='Ball Count: '+numberOfDisplayed;	
  }
  
  requestAnimationFrame(loop);
}

loop();

/*
function loop_timeDoorAdded(){
  ctx.fillStyle='rgba(0,0,0,'+transparency+')';
  ctx.fillRect(0,0,width,height);  	
  
  time_door.draw();
  time_door.checkBounds();
  time_door.collisionDetect();
  
  for (var i=0; i<balls.length; i++){
	if (balls[i].exists){
      balls[i].draw();
	  balls[i].update();
	  balls[i].collisionDetect();
    }	
  }
  
  requestAnimationFrame(loop_timeDoorAdded);
}
*/

var accelerate=document.getElementById('accelerate');
var more=document.getElementById('more_balls');
var contexture=document.getElementById('contexture');
var timedoor=document.getElementById('timedoor');

more.onclick=function(){
  numberOfBalls+=5;
  numberOfDisplayed+=5
  //loop();
  if (timeDoorAdded){
	for (var i=0; i<5; i++){
	  var ball= new Ball(
      random(0,width), 
	  random(0,height),
	  random(-maxVelocity,maxVelocity),
	  random(-maxVelocity,maxVelocity),
	  true,
	  'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')',
	  random(10,20)
      )	;  
	  balls.push(ball);
	}
  }
} 

accelerate.onclick=function(){
  maxVelocity+=3;	
  loop();
}

contexture.onclick=function(){
  if (transparency===0.25){
    transparency=0;
	contexture.textContent='Restoration';
  }
  else{
	transparency=0.25;
    contexture.textContent='Colorful Contexture';	
  }
}

timedoor.onclick=function(){
  timeDoorAdded=true;
  time_door=new timeDoor(50,50,true);
  time_door.setControls();
  alert('Press the "W", "S", "A" and "D" on the keyboard to move the the time door upward, downward, left and right, respectively.');
  
}

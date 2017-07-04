var font,
	vehicles = [];

function preload() {
  font = loadFont('scripts/HussarBdExt.otf');

}


function setup(){
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent("presentation");
	textSize(200);
	background("#FF8362");
	textFont(font);
	textAlign(CENTER);
	fill(255);
	noStroke();
	
	var points = font.textToPoints('Hello !', width/4, height/2);

	for (var i = 0; i < points.length; i++) {
		var vehicle = new Vehicle(points[i].x, points[i].y);
		vehicles.push(vehicle);

	}
}

function draw(){

	background("#FF8362");

	for (var i = 0; i < vehicles.length; i++) {
		//var pt = points[i];
		var v = vehicles[i];
		v.update();
		v.behavior();
		v.show();

	}
}

function mousePressed(){
	remove();
}

function Vehicle(x, y){
	this.pos = createVector(random(width), random(height));
	this.vel = p5.Vector.random2D();
	this.acc = createVector();
	this.target = createVector(x, y);
	this.r = 8;
	this.maxspeed = 10;
	this.maxforce = 1;

	this.show = function(){
		stroke(255);
    	strokeWeight(8);
    	point(this.pos.x, this.pos.y);
	}

	this.update = function(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}

	this.behavior = function(){
		var arrive = this.arrive(this.target);
		this.applyForce(arrive);

		var mouse = createVector(mouseX, mouseY);
		var flee = this.flee(mouse);
		this.applyForce(flee);
	}

	this.flee = function(target){
		var desired = p5.Vector.sub(target, this.pos);
		var d = desired.mag();
		if (d < 100) {
			desired.setMag(this.maxspeed);
			desired.mult(-1);
			var steer = p5.Vector.sub(desired, this.vel);
			steer.limit(this.maxforce);
			return steer;
		} else {
			return (createVector(0,0));
		}
	}

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.arrive = function(target){
		var desired = p5.Vector.sub(target, this.pos);
		var d = desired.mag();
		var speed = this.maxspeed;
		if (d < 100) {
			speed = map(d, 0, 100, 0, this.maxspeed);
		}
		desired.setMag(speed);
		var steer = p5.Vector.sub(desired, this.vel);
		steer.limit(this.maxforce);
		return steer;
	}
}
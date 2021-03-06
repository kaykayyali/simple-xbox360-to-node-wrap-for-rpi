var xbox = require('node-xboxdrv');
var options = {

};
var controller = new xbox(pid,vid, options);

// Main buttons
controller.on('a',function(){
	console.log("HIT A");
});
controller.on('b',function(){
	console.log("HIT B");
});
controller.on('x',function(){
	console.log("HIT X");
});
controller.on('y',function(){
	console.log("HIT Y");
});

// D Pad
controller.on('dUp',function(){
	console.log("HIT D UP");
});
controller.on('dDown',function(){
	console.log("HIT D DOWN");
});
controller.on('dLeft',function(){
	console.log("HIT D LEFT");
});
controller.on('dRight',function(){
	console.log("HIT D RIGHT");
});

// Analogs
controller.on('rightX',function(data){
	if (is_tolerable(data)) {
		console.log("Moved right x", data);
		console.log("TOLERANCE LEVEL PASSED ", axis_tolerance);
	}
});
controller.on('leftX',function(data){
	if (is_tolerable(data)) {
		console.log("Moved left x", data);
		console.log("TOLERANCE LEVEL PASSED ", axis_tolerance);
	}
});
controller.on('rightY',function(data){
	if (is_tolerable(data)) {
		console.log("Moved right y", data);
		console.log("TOLERANCE LEVEL PASSED ", axis_tolerance);
	}
});
controller.on('leftY',function(data){
	if (is_tolerable(data)) {
		console.log("Moved left y", data);
		console.log("TOLERANCE LEVEL PASSED ", axis_tolerance);
	}
});

// Analog - Click
controller.on('leftDown',function(){
	console.log("HIT Left Stick down");
});
controller.on('rightDown',function(){
	console.log("HIT D Right Stick down");
});

// Bumpers
controller.on('leftBumper',function(){
	console.log("HIT Left bumper");
});
controller.on('rightBumper',function(){
	console.log("HIT D Right bumper");
});

// Triggers
controller.on('leftTrigger',function(data){
	if (is_tolerable(data)) {
		console.log("Moved Left Trigger", data);
		console.log("TOLERANCE LEVEL PASSED ", axis_tolerance);
	}
});controller.on('rightTrigger',function(data){
	if (is_tolerable(data)) {
		console.log("Moved Right Trigger", data);
		console.log("TOLERANCE LEVEL PASSED ", axis_tolerance);
	}
});

// Home, Start, Back
controller.on('home',function(){
	console.log("HIT home");
});
controller.on('start',function(){
	console.log("HIT start");
});
controller.on('back',function(){
	console.log("HIT back");
});
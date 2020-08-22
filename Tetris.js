(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Tetris_atlas_1", frames: [[625,312,202,89],[0,0,313,313],[0,315,202,89],[315,0,308,310],[625,403,202,89],[625,0,308,310],[0,406,202,89],[315,312,308,310],[935,0,83,69],[829,312,128,128],[935,71,83,69],[829,442,126,127],[935,142,83,69],[625,494,126,127],[935,213,83,69],[0,497,126,127]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.yellowCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFBB3").s().p("AhwATIgDgDIgigiIErACIgiAgIgEADg");
	this.shape.setTransform(-39.275,-52.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#787800").s().p("Ah0gOIADgEIAAAAIDgAAIAEADIAjAgIkrACg");
	this.shape_1.setTransform(-39.2,-26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D800").s().p("AiUCXIgBktIAiAjIADADIAADhIAAAAIgEADIggAjIAAAAgABzBzIgDgCIAAjhIADgEIAiggIABEpg");
	this.shape_2.setTransform(-39.25,-39.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F000").s().p("AhwBxIAAjhIAAAAIDhAAIAAAAIAADhg");
	this.shape_3.setTransform(-39.325,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-54.5,30.000000000000004,30.2);


(lib.StartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// playAgain
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-20.65,-9.15,0.205,0.205);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-32.35,-33.65,0.205,0.205);

	this.instance_2 = new lib.CachedBmp_12();
	this.instance_2.setTransform(-20.65,-9.2,0.205,0.205);

	this.instance_3 = new lib.CachedBmp_11();
	this.instance_3.setTransform(-32.35,-33.4,0.205,0.205);

	this.instance_4 = new lib.CachedBmp_14();
	this.instance_4.setTransform(-20.65,-9.15,0.205,0.205);

	this.instance_5 = new lib.CachedBmp_13();
	this.instance_5.setTransform(-32.35,-33.65,0.205,0.205);

	this.instance_6 = new lib.CachedBmp_16();
	this.instance_6.setTransform(-20.65,-9.45,0.205,0.205);

	this.instance_7 = new lib.CachedBmp_15();
	this.instance_7.setTransform(-32.85,-34.15,0.205,0.205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-34.1,64.19999999999999,64.3);


(lib.redCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D80000").s().p("AiUCXIgBktIAhAiIAEAEIAADhIAAAAIgEADIggAjIAAAAgABzBzIgDgCIAAjhIADgEIAiggIABEpg");
	this.shape.setTransform(-39.25,-39.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBB3B3").s().p("AhwATIgEgEIghghIErACIgiAgIgEADg");
	this.shape_1.setTransform(-39.275,-52.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F00000").s().p("AhwBxIAAjhIAAAAIDhAAIAAAAIAADhg");
	this.shape_2.setTransform(-39.325,-39.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780000").s().p("Ah0gOIADgEIAAAAIDgAAIAEADIAjAgIkrACg");
	this.shape_3.setTransform(-39.2,-26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-54.5,30.000000000000004,30.2);


(lib.purpleCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#500078").s().p("Ah0gOIADgEIAAAAIDgAAIAEADIAjAgIkrACg");
	this.shape.setTransform(-39.2,-26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B3FB").s().p("AhwATIgDgDIgigiIErACIgiAgIgEADg");
	this.shape_1.setTransform(-39.275,-52.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9000D8").s().p("AiUCXIgBktIAiAjIADADIAADhIAAAAIgEADIggAjIAAAAgABzBzIgDgCIAAjhIADgEIAiggIABEpg");
	this.shape_2.setTransform(-39.25,-39.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A000F0").s().p("AhwBxIAAjhIAAAAIDhAAIAAAAIAADhg");
	this.shape_3.setTransform(-39.325,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-54.5,30.000000000000004,30.2);


(lib.playAgain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// playAgain
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-20.7,-19.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-32.4,-33.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-20.7,-19.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(-32.4,-33.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-20.7,-19.95,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(-32.4,-33.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(-20.7,-19.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_7();
	this.instance_7.setTransform(-32.9,-34.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-34.2,64,64);


(lib.orangeCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#785000").s().p("Ah0gOIADgEIAAAAIDgAAIAEADIAjAgIkrACg");
	this.shape.setTransform(-39.2,-26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE3B3").s().p("AhwATIgDgDIgigiIErACIgiAgIgEADg");
	this.shape_1.setTransform(-39.275,-52.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D89000").s().p("AiUCXIgBktIAiAjIADADIAADhIAAAAIgEADIggAjIAAAAgABzBzIgDgCIAAjhIADgEIAiggIABEpg");
	this.shape_2.setTransform(-39.25,-39.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0A000").s().p("AhwBxIAAjhIAAAAIDhAAIAAAAIAADhg");
	this.shape_3.setTransform(-39.325,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-54.5,30.000000000000004,30.2);


(lib.navyCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3FB").s().p("AhwATIgDgDIgigiIErABIgiAgIgEAEg");
	this.shape.setTransform(-0.725,-14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000078").s().p("Ah0gPIAEgDIAAAAIDgAAIADADIAjAgIkqACg");
	this.shape_1.setTransform(-0.65,11.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000F0").s().p("AhvBwIAAjfIgBAAIAAgBIDhAAIAAABIAADfg");
	this.shape_2.setTransform(-0.775,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000D8").s().p("AiVCWIAAkrIAiAjIACACIABAAIAADgIAAAAIgDADIghAjIgBAAgAB0BzIgEgDIAAjgIAEgDIAhghIABEog");
	this.shape_3.setTransform(-0.7,-1.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-16.4,30,30.099999999999998);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIBiQgRgGgNgLQgOgLgIgPQgIgPAAgSQgBgSAIgOIAKgNIAMgNIAcgbQAQgOAPgIQAMgHAOgEQASgHATgBQAegCAbAKIAIACQAUAJALALQAIAKAFAMQAEALABANQABAXgMAYQgRAjgkAXQghAWgoAFIgWABQgZAAgVgHgAgDhWQgnAJgbAbQgEAFgBADIgCAGQgBACgEACIgGACQgCACgDAEIgFAGIgDACIgEACQgGAEgDAHQgFAKgBAKQgBAMAEAKQAGATASAOQAQAMAWAEQAXAGAZgDQAXgDAWgJQAagLATgUQAUgUAKgZQAGgOAAgPQAAgRgIgNQgLgSgdgKQgUgHgWAAQgQAAgRAFg");
	this.shape.setTransform(0.0024,0.0001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-10.5,26.6,21.1);


(lib.greenCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007800").s().p("Ah0gOIADgEIAAAAIDgAAIAEADIAjAgIkrACg");
	this.shape.setTransform(-39.2,-26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00D800").s().p("AiUCXIgBktIAiAjIADADIAADhIAAAAIgEADIggAjIAAAAgABzBzIgDgCIAAjhIADgEIAiggIABEpg");
	this.shape_1.setTransform(-39.25,-39.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3FBB3").s().p("AhwATIgDgDIgigiIErACIgiAgIgEADg");
	this.shape_2.setTransform(-39.275,-52.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00F000").s().p("AhwBxIAAjhIAAAAIDhAAIAAAAIAADhg");
	this.shape_3.setTransform(-39.325,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-54.5,30.000000000000004,30.2);


(lib.buttonPressing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("Ah+AaQg0gOAAgTQAAgSAxgOQAJAJAXAHQApAOA4AAQA5AAApgOQAWgHALgJIAAABQAwANAAASQAAATg1AOQg0AOhKAAQhJAAg1gOg");
	this.shape.setTransform(-0.1,3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhhAsQgXgIgJgIIAAgjIgBgEIABgEIAAgBIAAAAQAEgQAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAAIAAAsIAAAAQgLAIgWAIQgpANg5AAQg4AAgpgNg");
	this.shape_1.setTransform(-0.1,-2.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AgKAnQhAgBgvgMIgHgCQgvgNgBgSIAAAAQAAgSAtgNIAEAAIAAAIQAKAIAWAIIAOAEIAJACQAfAHAmAAIABAAIAEAAIAKAAQAzgBAlgMQAOgFAKgFIAIgFIAAAAIAAAAIAFAAIAAAAIAXABQANAHACAIQAGANgSAKQgIAHgTAGQgNAEgQADQgrAJg5AAIgRAAg");
	this.shape_2.setTransform(-0.3388,3.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAAA5IgEAAIgBAAQgnAAgfgHIgIgCIgOgEQgXgIgJgIIAAgIIAAgbIgBgDIAAgBIABgEQAEgRAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAsIgBABIAAAAIgIAFQgKAFgOAFQglAMgzABg");
	this.shape_3.setTransform(-0.1,-2.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AgEAoQhCgBgxgNIgGgCQgwgNgCgRIAAgBQAAgSAvgNIACACQAEALAJAMIAGADQALAEAPAFQAhAHArABIARAAIAZgBIAmgFIAWgEIAEgBIAFgCIAJgEIAFgCIAMgHIAAAAIABAAIADgBIABAAQAKgFAFgGQANAGAFAGQAMAMgMALQgFAJgUAIQgNAEgQADQgsALg6ABIgSAAg");
	this.shape_4.setTransform(-0.4061,3.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgJA5QgqgBghgJQgPgEgMgFIgGgDQgIgMgEgLIAAgTIgBgEIAAAAIABgEQAEgRAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAsIgBABIgBAAIAAAAIgMAIIgFACIgJADIgFACIgEABIgWAGIgmAFIgZABIgJAAIgJAAg");
	this.shape_5.setTransform(-0.1,-1.0875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6666").s().p("Ah2AbIgHgCQgxgNgCgRIAAgCQAAgSAwgNIABADQACAOAEANIAGAEQALAEAQAFQAhAKAsABIALABIACAAIAFAAIAjgCQAcgDAYgGIAIgDQASgFAJgIIABABIABAAIADgCIABAAQAFgMACgMQANAFAHAFQATAMgGAMQgDAKgVAIQgMAFgRAFQgtALg7ABIgTABQhEgBgxgMg");
	this.shape_6.setTransform(-0.328,3.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AAAA5IgDAAIgKAAQgsgCgigKQgPgEgLgGIgGgEQgEgNgCgOIAAgLIgBgEIABgEQAEgRAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAsIgCACIgBAAIgBAAQgKAHgRAGIgIADQgYAHgcACIgjACIgFAAg");
	this.shape_7.setTransform(-0.1,-0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6666").s().p("Ah+AaQg0gOAAgTQAAgSAxgOIAAAlQAJAHAXAIQApANA4AAQA5AAApgNQAWgIALgHIAAAAIAAgkQAwANAAASQAAATg1AOQg0AOhKAAQhJAAg1gOg");
	this.shape_8.setTransform(-0.1,3.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AhhAsQgXgIgJgIIAAgkIgBgDIABgEIAAgBIAAAAQAEgQAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAAIAAAJIAAAjIAAAAQgLAIgWAIQgpANg5AAQg4AAgpgNg");
	this.shape_9.setTransform(-0.1,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-8.6,35.8,16.4);


(lib.buttonPressed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("Ah+AaQg0gOAAgTQAAgSAxgOIAAAlQAJAHAXAIQApANA4AAQA5AAApgNQAWgIALgHIAAAAIAAgkQAwANAAASQAAATg1AOQg0AOhKAAQhJAAg1gOg");
	this.shape.setTransform(-0.1,3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhhAsQgXgIgJgIIAAgkIgBgDIABgEIAAgBIAAAAQAEgQAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAAIAAAJIAAAjIAAAAQgLAIgWAIQgpANg5AAQg4AAgpgNg");
	this.shape_1.setTransform(-0.1,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-5,35.8,12.8);


(lib.buttonGlow2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0A000").s().p("Ag0AjQgHgCgBgFQgBgGAEgFIAJgEIAMgFQA6gfAVgJQAIgDAEABQAFABABAFQACAEgDAEQgCADgHADQgTAIgcAOIgtAYQgGADgEAAIgBAAg");
	this.shape.setTransform(-28.0199,14.023,1,1,29.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0A000").s().p("ABrBaQgGgCgCgFQgBgGAFgEIAJgEIALgGQA8ggAUgJQAJgDADABQAFABACAFQABAEgCAFQgCACgIADQgTAIgcAPIguAZQgGADgEAAIgBgBgAibBOIg1gNQgHgBgDgCQgFgFADgGQACgGAHgBIA7AOQAEAAACACQAGAEgBAHQgCAHgHABgABTA8QgEgCgCgEQgDgEADgFIADgEIALgOIARgRIAFgFIAEgDQAHgDAFADQAGAGgDAHIgSAQQgJAIgFAJIgHAIQgEAEgEAAIgCAAgAhhAsQgEgCgEgHIghg7QgKgTgDgLQgBgFABgDQACgGAGgBQAGgBADAFQACABACAJQABAFAFAKIAlBCIADAIQABAFgFAEQgDABgDAAIgDAAgAAuArQgFgCgBgEQgBgDAEgJIAbg7QAQgiANgOQAEgHAGAAQAEgBAEADQADAEgBAEQAAADgGAHQgKAMgOAeIgcA8QgEAIgDACIgEABIgEgBgAiaAjIgMgKIgLgKIgQgPIgEgHQgCgEADgFQADgDAFgBQADAAADADIAFAEIARARIAQANIADAEQAEAHgFAFQgEADgDAAQgDAAgCgBgAgcARQgEgEAAgJIAAg6IgCgPQAAgEACgEQAEgFAGABQAFABADAFIABAPIABBCQABADgBADQgBAGgFABIgDABQgEAAgDgDgAANAQQgEgCgBgEQgBgEACgGIAfhPQACgFADgEQAFgDAFACQAGAEAAAFIghBWQgDAHgDACQgDACgDAAIgDgBgAhHABIgEgDQgEgKgFgVIgEgQQgCgHABgFQABgIAHAAIABAAQAIABABAGIABADQABAJAHAYIADALIAEAJQAAAGgGACIgFABQgDAAgCgCg");
	this.shape_1.setTransform(-7.6135,3.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-5.5,49.300000000000004,20.8);


(lib.buttonGlow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttonGlow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F000").s().p("ACCBmQgGgCgCgFQgBgGAFgFIAJgEIALgFQA8ggAUgJQAJgDADABQAFABACAFQABAEgCAEQgCADgIADQgTAIgcAPIguAYQgFADgEAAIgCAAgAiyBkIg2gNQgGgBgDgDQgFgEACgHQADgFAGgBIA8AOQAEAAACACQAGAEgCAHQgBAGgHABgABzArQgFgBgCgEQgCgEACgFIADgEIAMgPIARgPIAFgFIAEgDQAGgEAGAEQAGAFgEAHIgRAQQgJAIgGAJIgHAIQgDADgEAAIgCAAgAiuAmIgLgKIgMgKIgQgQIgEgFQgBgFACgEQADgEAFgBQADAAAEADIAEAFIASARIAPAMIAEAEQAEAHgGAFQgDADgDAAQgDAAgDgBgAhlAiQgEgCgEgHIghg7QgKgTgDgLQgBgGABgDQACgFAGgBQAGgBADAEQACACACAIQABAGAFAKIAlBBIADAIQABAGgFADQgCACgDAAIgEAAgABFAfQgEgCgBgEQgBgDADgJIAcg6QAQgjAMgOQAFgHAGAAQAEgBADAEQAEADgBAEQgBAEgFAGQgKAMgPAeIgbA8QgEAIgEACIgEABIgEgBgAg+AcIgDgEQgFgKgFgTIgEgQQgCgIABgFQABgHAIAAIABgBQAHABACAHIAAADQABAIAHAXIAEALQADAGAAAEQAAAGgFADIgFABQgDAAgDgDgAAaAXQgFgCgBgEQgBgEADgIIAehNQACgGADgDQAGgDAFACQAFAEAAAFIghBWQgDAHgDACQgCABgDAAIgDAAgAgQAGQgDgDAAgIIAAg7IgCgPQAAgFACgDQADgFAGAAQAGABACAGIACAPIAABDQABADgBACQAAAGgGABIgCABQgFAAgDgEg");
	this.shape.setTransform(0.0115,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-10.2,49.1,20.5);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("Ah+AaQg0gOAAgTQAAgSAxgOQAJAJAXAHQApAOA4AAQA5AAApgOQAWgHALgJIAAABQAwANAAASQAAATg1AOQg0AOhKAAQhJAAg1gOg");
	this.shape.setTransform(-0.1,3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhhAsQgXgIgJgIIAAgjIgBgEIABgEIAAgBIAAAAQAEgQAhgLQAngNA1AAQA3AAAmANQAhALAFAQIAAAAIAAAsIAAAAQgLAIgWAIQgpANg5AAQg4AAgpgNg");
	this.shape_1.setTransform(-0.1,-2.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-8.6,35.8,16.4);


(lib.blueCube = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3FBFB").s().p("AhwATIgDgDIgigiIErACIgiAgIgEADg");
	this.shape.setTransform(-39.275,-52.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007878").s().p("Ah0gOIADgEIAAAAIDgAAIAEADIAjAgIkrACg");
	this.shape_1.setTransform(-39.2,-26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00D8D8").s().p("AiUCXIgBktIAiAjIADADIAADhIAAAAIgEADIggAjIAAAAgABzBzIgDgCIAAjhIADgEIAiggIABEpg");
	this.shape_2.setTransform(-39.25,-39.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00F0F0").s().p("AhwBxIAAjhIAAAAIDhAAIAAAAIAADhg");
	this.shape_3.setTransform(-39.325,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-54.5,30.000000000000004,30.2);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.yellowShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.yellowCube("synched",0);
	this.instance.setTransform(-73.2,-63.85,1,1,0,0,0,-39.2,-39.5);

	this.instance_1 = new lib.yellowCube("synched",0);
	this.instance_1.setTransform(-103.2,-63.85,1,1,0,0,0,-39.2,-39.5);

	this.instance_2 = new lib.yellowCube("synched",0);
	this.instance_2.setTransform(-103.2,-94.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_3 = new lib.yellowCube("synched",0);
	this.instance_3.setTransform(-73.2,-94.05,1,1,0,0,0,-39.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.2,-109.1,60,60.39999999999999);


(lib.Scene_1_bubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bubble
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990033").ss(1,1,1).p("AhHAwQgCgBgCgCQgDgDgDgDQgGgJgBgLIAAgLQAQgiAmAAQArgBAhggQAJgJANAAQAKAFAGAHQAMAQgEAbQgCANgGAJQgNAXghABQgKABgIAFQgEACgEAEQgEAEgDAEQgCAGgEADQgCABgBABQgCACgDABQgKAEgLgEQgDgBgEgCQgBAAAAAAQgBgBgCgBQgMgHgKgKQgDgDgDgD");
	this.shape.setTransform(392.2071,601.866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990033").ss(1,1,1).p("AhTAsQADAEAEADQAMAMANAHQAFADABABQADABAEABQABAAABABQALADAKgEQADgBADgCQACgCABgBQAFgEACgFQABgCAAAAQADgEADgDQADgCACgCQACgCADgCQAJgFALgBQADAAACAAQAhgDAOgYQABgCABgCQAFgIACgNQABgCAAgDQADgbgMgQQgCgCgCgCQgGgGgIgFQgDAAgDAAQgLACgIAIQgBABgCABQgkAjgvAAQgBAAgCAAQgpACgSAlIAAAJQAAACAAACQACAMAHAKQADAEADADQABABAAAAQACABACAC");
	this.shape_1.setTransform(391.3133,600.1442);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990033").ss(1,1,1).p("AhdAwQAEAEAEAEQANAOAQAIQAFADABABQADABAEABQABABABAAQANADALgEQADgBAEgCQACgCACgBQAEgEADgHQABgBABgBQADgEADgEQACgBACgCQADgCADgCQAKgHANgBQADAAACAAQAlgEAQgZQABgDABgCQAGgJACgPQABgCAAgDQAEgegNgSQgCgCgCgCQgHgHgJgFQgDgBgDAAQgNACgJAIQgCABgBACQgoAng1AAQgCAAgBAAQguACgUApQAAABAAAAIAAALQAAABAAACQABAOAIALQADAEAEADQABABABABQACABACAB");
	this.shape_2.setTransform(390.4207,598.4067);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#990033").ss(1,1,1).p("AhmA1QADAFAFAEQAPAPARAJQAFAEABAAQAEACAEABQABABACAAQAOAEANgFQADgBAEgDQACgCACgBQAFgFADgGQABgCABAAQADgFAEgEQACgCACgCQADgCADgCQALgIAOgCQAEAAADAAQAogDASgcQABgDACgDQAGgKADgPQAAgDABgDQAEghgOgVQgCgCgDgCQgHgIgKgGQgDgBgEAAQgOACgKAJQgCABgCACQgsArg6ABQgCAAgBAAQgzACgXAuQAAAAAAABIAAALQAAACAAACQACAPAJAMQADAEAEAEQABABABABQACABACAC");
	this.shape_3.setTransform(389.5283,596.6691);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#990033").ss(1,1,1).p("AhwA6QAEAFAFAFQAQAQATALQAGADABAAQAEADAEABQACAAABAAQAQAFAOgFQAEgBAEgDQACgCADgCQAFgFADgHQABgBABgBQADgFAFgFQACgCACgCQADgDADgCQANgJAPgBQAEAAADgBQAsgDAUgeQABgDACgDQAHgLADgRQABgEAAgDQAFgkgPgWQgDgDgCgDQgIgIgLgGQgDgBgEgBQgQACgLAKQgCABgCACQgwAvhBACQgBAAgCAAQg3ABgZAzQAAABAAAAIAAANQAAACAAACQACARAJAMQAEAFAFAEQAAABABAAQADACACAC");
	this.shape_4.setTransform(388.622,594.9125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#990033").ss(1,1,1).p("Ah5BAQAEAFAFAEQASATAUALQAGADABABQAFACAFABQABABACAAQARAFAPgFQAEgCAFgDQADgCACgCQAGgFAEgIQAAgBABgBQAEgGAEgEQADgCACgDQADgDAEgCQANgKARgCQAEAAADAAQAxgDAVghQACgDABgEQAIgMADgSQABgEAAgDQAGgngQgZQgDgDgCgDQgJgJgLgGQgEgCgEAAQgSABgMALQgCABgCACQg1A0hGABQgBAAgCAAQg9ACgbA3QAAABAAABIAAAOQABACAAACQACASAKANQAEAFAFAFQABABAAAAQADACADAC");
	this.shape_5.setTransform(387.73,593.194);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#990033").ss(1,1,1).p("AiDBEQAEAFAGAGQATATAWAMQAHAEABABQAEACAGACQABAAACABQATAFAQgGQAFgCAFgDQADgCADgDQAFgFAFgIQAAgBABgCQAEgGAFgFQACgCADgCQADgDAEgDQAOgKATgDQAEAAAEAAQA0gEAWgjQADgDACgEQAIgNAEgUQAAgDABgEQAGgqgSgbQgCgDgDgDQgJgKgMgHQgEgCgFgBQgTACgNALQgDACgCACQg4A4hMABQgCAAgCAAQhBACgdA7QAAACAAABIAAAPQAAACAAADQADATAKAOQAEAFAGAFQABABABABQACACADAC");
	this.shape_6.setTransform(386.8362,591.4565);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#990033").ss(1,1,1).p("AiNBKQAFAFAGAGQAUAVAYANQAHAEABABQAFACAGACQACAAACABQAUAGARgGQAFgCAGgEQADgDADgCQAGgGAFgIQABgCABgBQAEgGAFgGQACgCADgCQADgEAEgDQAQgLATgDQAFAAAEAAQA4gEAYglQADgEACgEQAJgPAEgUQABgEAAgEQAHgtgTgdQgCgDgDgEQgKgKgNgIQgEgCgFgBQgUACgPALQgDACgCADQg9A8hRABQgCAAgCAAQhGACggBAQAAACAAABIAAAQQABADAAACQACAUAMAPQAEAGAGAFQABABABABQADACADAD");
	this.shape_7.setTransform(385.9442,589.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#990033").ss(1,1,1).p("AiXBOQAFAGAGAGQAWAXAaAOQAHAEABAAQAGAEAGABQACABACAAQAVAHATgHQAFgCAGgEQAEgDADgDQAGgGAFgIQABgCABgBQAFgHAFgGQACgCADgDQAEgDAEgDQARgNAVgDQAEAAAFAAQA7gEAbgoQACgDADgFQAKgQAEgVQABgFAAgEQAIgwgUgfQgDgEgDgDQgKgMgOgIQgFgCgFgCQgWACgQANQgDACgCADQhBA/hWADQgDAAgCAAQhLABgiBFQAAABAAACIAAARQABADAAADQADAVAMAQQAEAGAGAFQABACACABQADACADAC");
	this.shape_8.setTransform(385.0523,587.9565);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#990033").ss(1,1,1).p("AigBTQAFAHAGAGQAYAYAbAPQAIAFABAAQAGADAGACQACABACAAQAXAHAVgHQAFgCAGgFQAEgDAEgDQAGgGAFgJQABgCACgBQAEgHAGgGQACgDADgDQAEgDAEgDQASgOAWgDQAFgBAFAAQBAgEAcgqQADgEACgEQALgRAEgXQABgFABgFQAIgzgVggQgDgEgEgEQgKgMgPgJQgFgDgGgBQgXABgRAOQgDACgDADQhEBEhcACQgDAAgCAAQhQACgkBJQAAACAAABIAAATQAAADAAADQADAWANARQAFAHAGAFQACABABACQADACAEAD");
	this.shape_9.setTransform(384.1603,586.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#990033").ss(1,1,1).p("AiqBYQAGAHAGAHQAZAZAeAQQAHAFACAAQAGAEAHACQACAAACABQAYAHAWgHQAGgDAGgEQAFgDADgDQAHgHAFgKQACgBABgCQAFgIAFgGQADgDADgCQAEgEAFgEQASgOAYgDQAFgBAFAAQBEgEAegsQADgFACgEQAMgSAEgZQABgFABgFQAJg2gWgiQgDgFgEgEQgLgNgQgKQgFgCgGgCQgYACgTAOQgDACgDADQhJBIhhADQgDAAgCAAQhWACglBNQAAACAAACIAAAUQAAADAAADQADAYAOASQAFAGAHAGQABABABACQAEACAEAD");
	this.shape_10.setTransform(383.2934,584.4875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#990033").ss(1,1,1).p("Ai0BdQAGAHAHAHQAbAbAfARQAHAFACABQAGADAIACQACABACABQAaAIAXgJQAGgCAHgFQAFgDADgDQAIgIAFgJQACgCABgCQAFgIAGgHQADgDADgCQAEgFAFgDQAUgPAZgEQAFgBAGAAQBHgEAgguQADgFADgFQALgTAGgaQABgFAAgGQAJg5gWgkQgEgFgEgFQgLgNgRgKQgFgDgGgCQgaACgUAOQgDADgDADQhNBNhoACQgCAAgDAAQhaACgoBSQAAACAAACIAAAVQAAAEABADQADAZAPATQAFAHAHAGQABABABABQAEADAEAD");
	this.shape_11.setTransform(382.3786,582.7439);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#990033").ss(1,1,1).p("Ai9BiQAGAHAHAHQAcAdAhASQAIAFACABQAGADAIACQACABACABQAcAIAYgIQAHgDAHgFQAFgEAEgDQAIgHAFgLQACgCABgCQAFgIAHgHQADgDADgDQAEgEAFgEQAVgQAagEQAGgBAGAAQBLgEAigxQADgFADgFQAMgUAGgbQABgGABgGQAJg8gXgmQgEgFgEgFQgMgOgSgLQgFgDgHgCQgbABgVAQQgDADgEADQhRBRhtACQgCAAgDAAQhfACgqBXQAAACAAACIAAAXQAAADAAADQAEAaAPAUQAGAIAHAGQABABABACQAFADAEAD");
	this.shape_12.setTransform(381.4867,581.0125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#990033").ss(1,1,1).p("AjHBnQAHAIAHAHQAeAfAiASQAIAGACAAQAHAEAIACQADABACABQAdAJAagKQAGgCAIgFQAFgEAEgEQAIgIAGgKQACgCABgCQAGgJAGgHQADgDAEgEQAEgEAFgEQAWgRAcgEQAGgBAGgBQBPgEAkgzQADgFADgFQANgVAGgdQABgGABgHQAKg/gYgnQgEgGgFgFQgMgPgSgLQgHgEgGgCQgdABgWARQgEADgDADQhVBVhzADQgDAAgDAAQhkACgsBbQAAACAAADIAAAXQAAAEABADQAEAcAQAVQAFAHAIAHQABABACACQAEADAFAD");
	this.shape_13.setTransform(380.5949,579.2689);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#990033").ss(1,1,1).p("AjRBsQAHAIAIAIQAfAgAkAUQAIAFACAAQAIAFAIACQADABACAAQAfAKAagKQAHgCAJgGQAFgEAEgEQAJgIAGgLQACgCABgCQAGgJAHgIQADgDADgDQAFgFAFgEQAXgTAdgEQAHgBAGAAQBTgEAlg2QAEgFADgGQAOgWAGgeQABgHABgGQALhCgagqQgEgGgFgFQgMgQgUgMQgGgDgHgDQgeACgXARQgEADgEADQhZBZh4AEQgDAAgDAAQhpACgvBfQAAADAAACIAAAZQAAAEABADQAEAdARAWQAGAIAHAHQACABABACQAFADAFAE");
	this.shape_14.setTransform(379.7031,577.5125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#990033").ss(1,1,1).p("AjbBxQAIAIAIAJQAgAhAmAVQAJAGACAAQAHAEAJADQADABACAAQAhAKAcgKQAHgDAJgFQAFgFAFgEQAIgIAHgMQACgCABgCQAGgKAHgIQADgDAEgDQAFgFAFgEQAZgUAegEQAHgBAGgBQBXgEAng4QAEgFADgGQAPgXAGggQACgHABgHQALhFgbgrQgEgHgFgGQgNgQgVgMQgGgEgIgDQgfACgYARQgFAEgEAEQhdBdh9ADQgEAAgDAAQhuACgwBkQAAADAAADIAAAaQAAAEAAADQAFAeARAXQAGAIAIAHQACACACACQAFADAEAE");
	this.shape_15.setTransform(378.8113,575.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#990033").ss(1,1,1).p("AjkB2QAHAIAJAJQAhAjAoAVQAJAHACAAQAIAEAKADQACABADABQAhAKAegLQAHgDAJgGQAHgEAEgEQAJgJAHgMQACgCABgDQAHgKAHgIQADgDAEgEQAFgFAGgEQAZgUAggFQAHgCAHAAQBagEApg6QAEgGAEgGQAPgYAHghQABgHABgIQAMhIgcgtQgEgHgFgGQgOgRgVgNQgHgEgIgDQghABgZATQgFADgEAEQhhBiiDADQgEAAgDAAQhzACgzBpQAAADAAADIAAAbQABAEAAAEQAFAfASAYQAGAIAIAIQACABACACQAFAEAFAE");
	this.shape_16.setTransform(377.9174,574.0564);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#990033").ss(1,1,1).p("AjuB7QAIAJAJAJQAjAkApAXQAKAGACAAQAIAFAKADQADAAACABQAjALAfgLQAIgDAJgGQAHgFAFgEQAJgJAHgNQACgCACgDQAGgKAIgIQADgEAEgEQAFgFAGgFQAagVAigFQAHgBAHgBQBegEArg8QAEgGAEgHQAQgZAHgiQABgIABgHQANhLgdgwQgFgHgFgGQgOgSgWgNQgHgEgIgEQgjABgaAUQgFADgEAFQhmBliJAEQgDAAgEAAQh3ACg1BtQAAADAAADIAAAdQAAAEABAEQAEAgATAZQAHAJAJAHQABACACACQAFAEAGAE");
	this.shape_17.setTransform(377.0133,572.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#990033").ss(1,1,1).p("Aj3CAQAIAJAJAJQAkAmArAYQAKAGACAAQAJAGAKACQADABADABQAkAMAggMQAJgDAJgHQAHgFAFgEQAKgKAHgMQACgDACgCQAGgLAIgJQAEgEAEgDQAFgGAGgFQAcgWAigFQAIgCAHAAQBigEAtg/QAEgGAEgHQARgaAHgkQACgIABgIQANhOgegxQgFgIgFgGQgPgTgXgOQgIgEgIgEQgkACgbAUQgFADgFAFQhpBpiPAFQgDAAgEAAQh9ACg3BxQAAAEAAADIAAAdQABAFAAAEQAFAhAUAaQAHAJAJAIQABACACACQAGAEAFAE");
	this.shape_18.setTransform(376.1215,570.5625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#990033").ss(1,1,1).p("AkBCFQAJAJAJAKQAmAoAtAYQAKAHACAAQAJAFAKADQADABADABQAmAMAigMQAIgDAKgHQAHgFAGgFQAJgKAIgNQACgCACgDQAHgLAIgKQADgDAEgEQAGgGAGgFQAdgXAkgGQAIgBAHgBQBngEAuhBQAFgHADgHQASgbAHglQACgIABgIQAOhRgfg0QgFgHgGgHQgPgTgYgPQgIgFgIgEQgmACgcAUQgGAEgEAFQhuBuiUAEQgEAAgDAAQiCACg5B2QAAAEAAADIAAAfQAAAEABAFQAFAjAUAaQAHAKAKAIQACACACACQAFAEAGAE");
	this.shape_19.setTransform(375.2298,568.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#990033").ss(1,1,1).p("AkACuQgHgGgHgFQgrgmgGg5IAAgoQA8h6CGgCQCfgCB0h1QAhgeAugCQAkASAWAbQAtA4gQBgQgIAygVAiQgvBRh0AFQg4ADgoAoQgMAMgLARQgPAZgUAOQgKAHgJAEQgjAMgngMQgOgEgNgHQgCAAgBgCQg1gbglgnQgNgNgLgM");
	this.shape_20.setTransform(374.3348,567.0875);

	this.instance = new lib.button("synched",0);
	this.instance.setTransform(378.1,568.65,1,1,0,0,0,-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},126).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20},{t:this.instance}]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.redShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.redCube("synched",0);
	this.instance.setTransform(-130.8,-63.85,1,1,0,0,0,-39.2,-39.5);

	this.instance_1 = new lib.redCube("synched",0);
	this.instance_1.setTransform(-100.8,-63.85,1,1,0,0,0,-39.2,-39.5);

	this.instance_2 = new lib.redCube("synched",0);
	this.instance_2.setTransform(-70.8,-94.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_3 = new lib.redCube("synched",0);
	this.instance_3.setTransform(-100.8,-94.05,1,1,0,0,0,-39.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.8,-109.1,90.00000000000001,60.39999999999999);


(lib.purpleShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.purpleCube("synched",0);
	this.instance.setTransform(-69.2,15.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_1 = new lib.purpleCube("synched",0);
	this.instance_1.setTransform(-9.2,15.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_2 = new lib.purpleCube("synched",0);
	this.instance_2.setTransform(-39.2,-15.15,1,1,0,0,0,-39.2,-39.5);

	this.instance_3 = new lib.purpleCube("synched",0);
	this.instance_3.setTransform(-39.2,15.05,1,1,0,0,0,-39.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-30.2,90,60.4);


(lib.personJumpRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head("synched",0);
	this.instance.setTransform(0,-17.25,1,1,0,-0.0009,179.9991);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSCsQgHAAgEgKIgEgOQgCgNgHgWQAAgEgDgDIgLgmIABgBIgNgcIgBgDQgBgGABgEQAAgDAFAAQADgBACACIAEACQACADADAIIAHAPQAIAWAHAVIARA9QACAGgBADQgCAFgCACIgCABIgCgBgAhHCiQgCgBgBgEIAAgEIAFgLIAHgPQALgUANgTIAjg0IAGgGQAEgCAEAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAEAFgFAKQgDAGgFAGQgHAKgMAUQgEACgBAEIgVAhIgBAAIgOAbIgCADQgEAFgDACIgCABQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBgAATAcQgFgBgCgGIgBgFIgBgFIgLimQgBgLAEgEQADgDADABQAFAAAFAIIACAMIAAASIABAAIAAAIIAAACQADBEAHA+IAAAGIAAAEIgBAEIAAABQgEAHgFAAIgCAAgABUALQgBgDgCgJIgFgPQgBgFgJgYIgJgTIgGgKIgUgaQgFgHgBgFQgBgGAEgDQACgEAHADIAIAIIAUAdIAKAOIAGAQQAMAZAEAOIADAPIACAJQgDAIgFgBIgBAAQgFAAgEgEgAhfgGQgFgBgBgHQABgEAEgGIARggIAIgOIAMgNQARgVALgKIAMgJIAIgGQAIgCACAFQACAFgCAGIgKAIIgMALQgEADgQATIgPARIgGAJIgOAeQgFAIgDACQgDADgDAAIgDgBg");
	this.shape.setTransform(-0.35,10.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-27.8,26.6,55.7);


(lib.personJumpLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head("synched",0);
	this.instance.setTransform(0,-17,1,1,0.0009);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhECpIgDgGIABgJIANg7QAEgUAIgWIADgOQADgIADgDIADgDQADgBADAAQADAAABADQABADgBAGIgBAEIgKAbIABABIgJAkQgCADAAAEQgFAWgCAMIgCAPQgEAIgHABIgCABIgCgBgAAvCmQgCgCgDgGIgCgDIgJgcIgBgBIgOghQgBgEgDgDQgIgUgFgLQgEgGgDgHQgDgJAFgFQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQADAAADACIAFAIQANAaAMAcQAJATAIAWIAGAOIABALIgBAEIgDAFIgDACIgDgBgAgYAYIAAgBIgBgEIAAgFIAAgFQAHg+ADhEIAAgCIAAgJIABAAIAAgSIACgMQAFgHAFAAQACgBADADQAFAEgBAKIgLCnIgBAFIgBAFQgCAGgFAAIgCABQgFAAgEgHgAhkAGQgEAAgCgGQABgDACgHIAEgPQAFgOAPgYIAHgPIALgNIAXgbQAEgGAEgCQAHgCACAFQADADgBAGQgBAEgGAHIgXAYIgGAJIgLATIgNAbIgGAQIgEALQgDAEgGAAIgCgBgABcgFQgDgDgFgIIgOgdIgGgKIgPgQQgQgTgEgEIgMgKIgKgJQgDgFADgGQACgEAIABIAIAGIAMAJQALAKARAWIAMAMIAIAPIARAfQAEAHABAEQgBAGgFABIgDABQgDAAgDgCg");
	this.shape.setTransform(-0.15,10.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-27.5,26.6,55.1);


(lib.orangeShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.orangeCube("synched",0);
	this.instance.setTransform(-147.75,-15.15,1,1,0,0,0,-39.2,-39.5);

	this.instance_1 = new lib.orangeCube("synched",0);
	this.instance_1.setTransform(-87.75,15.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_2 = new lib.orangeCube("synched",0);
	this.instance_2.setTransform(-117.75,15.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_3 = new lib.orangeCube("synched",0);
	this.instance_3.setTransform(-147.75,15.05,1,1,0,0,0,-39.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.8,-30.2,90.00000000000001,60.4);


(lib.navyShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.navyCube("synched",0);
	this.instance.setTransform(7.95,64.1);

	this.instance_1 = new lib.navyCube("synched",0);
	this.instance_1.setTransform(37.95,64.1);

	this.instance_2 = new lib.navyCube("synched",0);
	this.instance_2.setTransform(67.95,34);

	this.instance_3 = new lib.navyCube("synched",0);
	this.instance_3.setTransform(67.95,64.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,17.6,90,60.199999999999996);


(lib.greenShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.greenCube("synched",0);
	this.instance.setTransform(-147.75,-94.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_1 = new lib.greenCube("synched",0);
	this.instance_1.setTransform(-87.75,-63.85,1,1,0,0,0,-39.2,-39.5);

	this.instance_2 = new lib.greenCube("synched",0);
	this.instance_2.setTransform(-117.75,-94.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_3 = new lib.greenCube("synched",0);
	this.instance_3.setTransform(-117.75,-63.85,1,1,0,0,0,-39.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.8,-109.1,90.00000000000001,60.39999999999999);


(lib.blueShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.blueCube("synched",0);
	this.instance.setTransform(-147.15,-32.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_1 = new lib.blueCube("synched",0);
	this.instance_1.setTransform(-117.15,-32.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_2 = new lib.blueCube("synched",0);
	this.instance_2.setTransform(-57.15,-32.05,1,1,0,0,0,-39.2,-39.5);

	this.instance_3 = new lib.blueCube("synched",0);
	this.instance_3.setTransform(-87.15,-32.05,1,1,0,0,0,-39.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.2,-47.1,119.99999999999999,30.200000000000003);


(lib.Scene_1_person = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// person
	this.instance = new lib.head("synched",0);
	this.instance.setTransform(312,616.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhoCiIgDgCQgDgCgBgEIAAgDQAAgEAEgIIAKgUQALgTAKgOQAIgMAJgJIAZgYQAHgJAHABQAEABADAEQABADgBADQAAAEgGAFIgTASIgNAPQgJAKgIAMIgGALIgIANIgHAQIgDAGIgCAEIgDACIgDACIgCAAIgCAAgABYCWQgFgBgFgHIgRgXIAAAAIgYgcIgGgFIgYgZQgGgEgDgGQgFgIAFgEQABgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAEgBAFACQADACADAEQAWAUAUAXIAcAhIAJAMQAFAGAAAEQAAAEgEADQgDACgDAAIgCAAgAgQAgIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgNQAEgHAEAAQAEgBADADQAEAEgBAKIgLCnIgBAFIgBAFQgBAGgFABIgCAAQgGAAgDgHgABqgaQgEgCgFgIIgQgYIgGgIQgHgIgHgGIgXgTIgNgHQgJgFgBgDQgCgEACgGQADgFAGABQAEAAAFADIAPAIQAKAIAUARIAKALIAJALIAUAdIADAIQAAAGgFADIgFABIgEgBgAhzgwQgEgDAAgEQAAgGAGgGQAKgKATgQIAhgXQAOgKAMgDQAHgCAEABQAEABACAHQABAEgFAFIgJADIgUALIgZARQgTAOgNAPQgGAGgFABIAAAAQgDAAgDgCg");
	this.shape.setTransform(311.05,643.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABoCUQgEAAgFgGIgRgTIgBAAIgYgWQgCgDgDgBQgOgOgJgFQgFgEgEgFQgGgGACgGQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQADgCAEABIAGAFIAoAhIAcAbIAJAKIAFAJQACAEgCAEQgCADgCAAIgBAAgAhgCQIgDgDQgCgCgBgEIAAgCIgBgCQAAgEAEgIIAKgPQALgOAKgKQAIgIAJgGQALgHAOgGQAIgFAHAEQADACADAFQACAEgBAEQgBADgFACIgTAKIgOAJQgJAGgHAJIgHAIIgHALIgIALIgDAFIAAACIgCABIgDACIgDAAIgEgCgAgHAuIgBgBIAAgEIgBgEIABgGQAIhLAChTIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgCAAQgEAAgDgHgABrghIgRgQIgGgFQgGgEgIgDQgSgGgFgBIgNAAQgIgBgCgBQgCgDACgIQADgGAHgDQADgBAGAAIAOABQALABATAIIALAFIAJAHIATATQADADAAADQAAAGgEAFQgFAFgFABQgEAAgEgGgAh4gtQgEAAgCgEQgDgDABgEQABgFAJgFQALgHAXgLIAmgNQAQgGAMgBQAHAAADADQAFACgBAGQAAAFgFADQgBABgJAAIgWAGIgdAKQgVAJgRALQgHADgEAAIgBAAg");
	this.shape_1.setTransform(314.6708,640.4403);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACBCUQgGAAgHgGIgYgTIgBAAIgigWQgCgDgFgBQgUgOgMgFQgHgEgGgFQgHgGACgGQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBABAAQADgCAGABIAJAFIA3AhIAnAbIANAKQAGAGACADQACAEgDAEQgDADgDAAIAAAAgAh+CBIgEgDQgDgCAAgDIgBgBIgBgCQAAgDAFgGIAOgMQANgMAOgIQALgGALgFQAOgGATgFQAKgDAJADQAFABADAEQADAEgBACQgCADgGACIgZAIIgSAHQgMAFgKAHIgIAHQgHAEgDAEIgKAJIgEAEIgBABIgBACIgEABIgEAAIgGgBgAgOAuIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgMQADgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgEABIgCAAQgGAAgDgHgABrgFQgEgBgEgHIgRgVIgGgHIgNgLQgSgLgFgCIgMgEQgIgCgCgCQgDgEADgHQACgGAGgCIAJACIANAEQALAFATANIALAHIAJALIATAYQADAEAAAEQABAGgFAEQgEADgEAAIgBAAgAiGgJQgCgCABgEQACgHAJgGQALgLAYgRIAmgYQAPgLANgEQAGgBADABQAEACgBAHQAAAFgFAEIgKAEQgFACgRAJIgdATQgWAPgRAQQgJAGgDABQgDAAgDgEg");
	this.shape_2.setTransform(322.7983,640.4903);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABYCZQgFgBgEgHIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKQABAFgEADQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAgAhbCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAgMApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABqABQgEgBgEgIIgRgbIgGgJIgNgOIgXgUIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgEABIgFgBgAh1gfQgCgCABgFQACgGAHgFQALgLAVgPIAigVQAOgKALgDQAGgBADACQAEACgBAGQgBAFgEAEIgJADQgFABgPAJIgaAQQgUAOgQAOQgHAGgDAAQgDAAgCgDg");
	this.shape_3.setTransform(330.4108,643.8875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgABaB7IgTgSIgBAAIgdgSQgBgEgFgBQgQgLgLgFQgHgDgEgEQgGgGAGgGQAAgCADgCQAEgCAGAAIAIAEIAvAcQARALAQANIAKAIQAEAGABADQABAEgFAFQgEAEgDAAIgCAAQgFAAgFgEgAgXArIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgMQAEgIAGAAQACgBADADQAEAEgBALIgKCmIgBAFIgBAFQgCAGgFABIgCAAQgFAAgEgHgABygaQgFAAgFgHIgTgUIgHgHIgQgKIgagLIgPgEQgJgBgDgCQgDgEADgHQADgGAHgCQAEgBAGACIAQADQANAEAWAMIANAHIAKAKIAWAWQAEAFABADQAAAGgFAEQgGAEgEAAIgBAAgAiAgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_4.setTransform(338.4104,643.6875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABYCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAgAhbCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgAgMApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABqABQgEgBgEgIIgRgbIgGgJIgNgOIgXgUIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgEABIgFgBgAh1gfQgCgCABgFQACgGAHgFQALgLAVgPIAigVQAOgKALgDQAGgBADACQAEACgBAGQgBAFgEAEIgJADQgFABgPAJIgaAQQgUAOgQAOQgHAGgDAAQgDAAgCgDg");
	this.shape_5.setTransform(347.3108,644.5375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_6.setTransform(354.3308,644.3375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABXCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhcCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgNApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABpABQgEgBgEgIIgRgbIgGgJIgNgOQgSgRgFgDIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgFABIgEgBgAhtg4IgFgDQgCgCgBgEQAAgEADgEIAGgGQAUgOAXgJIAJgEIAOgBIAQgBQAGgBADACQAGACAAAHQAAAGgGADIgHABIgaACIgQAGIgMAGQgKAGgJAHQgHAFgEAAIgBAAg");
	this.shape_7.setTransform(363.7989,644.0875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABXCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhcCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgNApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABpABQgEgBgEgIIgRgbIgGgJIgNgOIgXgUIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgFABIgEgBgAhtg4IgFgDQgCgCgBgEQAAgEADgEIAGgGQAUgOAXgJIAJgEIAOgBIAQgBQAGgBADACQAGACAAAHQAAAGgGADIgHABIgaACIgQAGIgMAGQgKAGgJAHQgHAFgEAAIgBAAg");
	this.shape_8.setTransform(385.8989,644.2875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_9.setTransform(396.0308,644.4875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABwCZQgDgBgEgFIgCgCIgOgYIgBgBIgWgcQAAgDgEgDQgMgRgIgIIgJgLQgFgIAEgFQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAEgBAEACIAGAHIAkAsIAYAiIAIAMIAEAKIAAAEIgDAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAgAhxB1IgEgBIgDgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBQgBgCAGgGIAOgLQAPgMAOgIIAVgNIAhgPQAKgEAIAAQAEAAADACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCADgGACIgYALIgSAJIgWAOIgJAHIgKAIIgKAIIgEAEIgBABIgCABIgEACIgEABIgFAAgAALApIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgFAAgEgHgABvgEQgEgCgCgHIgLgYIgEgIIgLgMQgOgOgEgDIgLgGQgIgEgBgCQgCgFAFgGQADgFAHAAQADAAAFADIAMAGQAKAHAPAQIAJAJIAGAMQAFAJAHARQACAFAAAEQgBAGgGADQgEABgDAAIgDAAgAh9g5IgCgDQAAgCADgDQADgEAHgEIANgGQAigPAhgJIANgDIAPgCIAQgBQAHgBABACQAEADgHAGQgHAHgIACIgIACIgbABIgXAHIgSAGQgQAFgQAHQgMAFgEAAIgBAAg");
	this.shape_10.setTransform(417.88,640.6875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah8ClIgEgCQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgCgCAFgKIALgTQAMgTAMgPIATgWIAfgeQAJgIAJgCQAFgCAFACQACADgBACQgBAEgGAFIgXAWIgQARQgLALgIAMIgHAMIgJAOIgIANQgBAFgBABIgCACIgBACIgEAEIgDADQgDgBgDABIgEABIgBAAgABZB+QgEgBgDgEIgCgCIgOgTIgCAAIgVgXQgBgCgDgCQgNgOgIgGIgJgJQgEgGAEgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAFIAjAjIAZAcIAHAJIAEAIIAAADIgDAEIgEABIgBAAgAgLAdIgBgBIAAgEIgBgEIABgGQAGg/AEhFIgDAEQgHAJgIAFIgIAEIgbAJIgWANIgRAMIgfAWQgOALgDAAIgCgEIADgHQAEgFAHgHIANgKQAhgaAggTIANgHIAPgFIAPgGQAFgCACABIABgSIABgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgACEgfQgEgCgGgHIgWgYIgIgIIgSgMIgagRIgOgGQgKgEgCgCQgEgFABgGQABgFAHAAQADAAAHADIAOAGQAOAHAWAQIAOAJIAMAMIAZAaQAFAFABAEQACAGgEADQgDACgDAAIgEgBg");
	this.shape_11.setTransform(413.2308,642.1708);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah2ClIgEgCQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAABAAQAAgBAAAAQgCgCAFgKIALgTQAMgTAMgPIATgWIAfgeQAJgIAJgCQAFgCAFACQACADgBACQgBAEgGAFIgXAWIgQARQgLALgIAMIgHAMIgJAOIgIANQgBAFgBABIgCACIgBACIgEAEIgDADQgDgBgDABIgEABIgBAAgABfCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAgFAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgCAAQgEAAgDgHgABuAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh1gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAEABgBAIIgFAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_12.setTransform(405.2813,642.9208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABcCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAhwB7QgCgEAAgEQgBgPAFgNQAGgNALgJQAGgFAKgFQAggRARgGQAJgDAEABQAFADABAFQABAFgEADIgHAEQgQAFghASIgOAJQgNALAAASIAAAKQgCAFgGABIgCAAQgEAAgDgEgAgIAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh4gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_13.setTransform(405.585,642.9125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABcCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAhkCiQgFgDgBgGQgBgIAGgKQAgg4AmgtQAFgGAEgCQAGAAADAEQAEAFgBAFQgBAGgGAGQgVAXgjA2QgJAPgEAIIgFAIQgDADgDAAIgDgBgAgIAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh4gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_14.setTransform(400.335,642.9125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABjCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCgBgAh+B4QgCgDAAgGQgBgQAEgIQAGgNAYgLQAigPAMgDIAegIQAMgEAGADQACACABAEQABAFgDADQgBADgGACIgtAMIgeAMIgKAFQgNAGgCAHIgBALQAAAHgCAEQgCAEgGABQgFAAgDgEgAgBAdIgBgBIAAgEIgBgEIABgGQAFg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgCAAQgFAAgCgHgAByAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgDABQgDAAgEgCgAhxgTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAEADQAFABgBAIIgFAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_15.setTransform(393.015,642.9125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABcCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAhJCeQgEgBgBgEQgCgEAEgJIAMgdQAPgjAVghQAEgGADgCQAFgBAFADQAEADgBAFQAAADgDAGQgaAmgUA2QgEALgFACIgDAAIgEgBgAgIAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh4gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_16.setTransform(386.735,642.9125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag8CMIgLgLIgDgEQgHgKAFgKQACgHAIgGIAhgiIAJgGQAFgBADADQAEADgBAGQAAADgFAGIgVAUIgRATQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIABACQAHAIAGAEIAEAEQADAFgCAFQgCAFgGABIgBAAQgFAAgHgHgABCCRQgCgBgDgEIgCgCIgKgUIgBgBIgRgXQAAgDgDgCIgPgVIgHgKQgDgGADgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQACgBAEACIAEAFIAbAmQAKANAJAPIAGAKIADAJIAAADIgDAEIgDABIgBAAgAgPAwIAAgBIgBgEIAAgFIAAgFQAHg+ADhEIAAgCIAAgJIABAAIAAgSIACgMQADgHAGAAQADgBADADQAEAEgBAKIgLCnIgBAFIgBAFQgCAGgEAAIgCAAQgFAAgEgGgABlASQgEgDgEgIIgPgcIgGgKIgOgQQgQgTgFgEIgMgKIgKgJQgCgFADgGQACgEAHABIAIAGIANAJQALAKARAWIAMAMIAIAPIARAeQAEAHAAAEQAAAGgFABIgDABQgDAAgDgCgAhwgLQgDgDABgEQACgGAHgDIAMgCQASgCAUgHQAEgBABgBIADgEQAIgMAFgQIAHgXQACgFACgCQAFgEAGADQAFADAAAGIgBAHIgIAXQgEAPgFAIIgHALQgEAIgCABIgJACIgTAFIggAHIgIABQgEgBgCgEg");
	this.shape_17.setTransform(382.5857,645.2892);

	this.instance_1 = new lib.personJumpLeft("synched",0);
	this.instance_1.setTransform(379.85,632);
	this.instance_1._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhgCjIgDgFIAAgFIAEgLIAHgOQAMgVANgTIAjg0IAHgHQAEgCADABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAEAFgEAJIgJANQgIAKgNATQgDADgBAEQgSAbgDAGIgCAAIgOAcIgCADQgDAFgEABIgBABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgABDCfQgFgCgEgLQgUg2gagmQgDgGAAgDQgBgFAEgDQAFgDAFABQADACAEAGQAVAhAPAjIAMAdQAEAJgCAEQgBAEgEABIgEABIgDAAgAAAAkQgFgBgCgGIgCgFIAAgFIgMimQgBgLAFgEQADgDADABQAFAAAEAIIACAMIAAASIAAAAIAAAIIAAACQAEBEAGA+IABAGIgBAEIAAAEIgBABQgDAHgFAAIgBAAgAh0ABQgFgBAAgGQABgEADgGIARggIAJgOIALgNQASgVALgKIAMgJIAIgGQAIgCACAFQADAFgDAGIgKAIIgMALQgEADgRATIgOARIgGAJIgPAeQgEAIgDACQgDACgDAAIgEgBgABngTIgfgTIgOgJIgMgMQgVgTgJgLIgIgNIgGgIQgBgIAFgBQAFgDAGADQACACAGAIIAKAMQADAFASARIAQAPIAJAHIAdAQQAHAFADADQADAGgCAEQgCAFgGAAQgEgBgGgEg");
	this.shape_18.setTransform(314.165,582.9625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag1CQQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIADgIIAFgKIARgbIAZglIAFgEIAEgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQADADgDAHIgGAJQgFAGgJAOQgCACgBADIgPAXIgBAAIgJATIgCACIgFAFIgBABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAA3COQgDgCAAgGIABgIIADgSIAAgEQAAgCgDgDIgSgSIgKgLQgDgFABgCQAAgEADgCQAEgCADADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIACAEIAXAWIAKALQAEAGgCADIgCADIgCAFIgCARQAAAGgBABQgBAEgDAAIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAQA3QgFAAgCgGIgCgFIAAgFIgLinQgBgKAFgEQACgDADABQAFAAAEAHIACAMIABASIAAAAIAAAJIAAACQAEBEAGA+IABAFIgBAFIAAAEIgBABQgDAGgFAAIgCAAgAhjAUQgFgBAAgGQABgEADgHIARgeIAJgPIALgMQASgWALgKIAMgJIAIgGQAIgBACAEQADAGgDAFIgKAJIgMAKQgEAEgRATIgOAQIgGAKIgPAcQgEAIgDADQgDACgDAAIgEgBgABZgEIgcgEQgMgFgJgMQgHgKgGgPIgDgHIgDgNQgEgPABgFQAAgHADgDQAEgEAEABQAFABADAFIABAIQACAXANAXQAFAJAEADQAFAEAJABIAQACQAKACACAHQABADgCAEQgCADgDABIgFABIgEgBg");
	this.shape_19.setTransform(312.4667,584.6268);

	this.instance_2 = new lib.personJumpRight("synched",0);
	this.instance_2.setTransform(312.5,572.1);
	this.instance_2._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABPCnQgGgDgFgMQgXg/gegsQgEgHAAgDQgBgGAFgEQAFgDAGABQADACAGAIQAYAlASApIAOAiQAEALgCAEQgCAEgEACIgEABIgEAAgAhgCkIgDgGIAAgEIAEgMIAHgPIAZgpIAjg2IAHgHQAEgCADABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAEAFgEAKIgJANQgIAKgNAUQgDADgBAEIgVAiIgCABIgOAcIgCADQgDAGgEABIgBABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAAAAiQgFgBgCgGIgCgFIAAgFIgMimQgBgLAFgEQADgDADABQAFAAAEAIIACAMIAAASIAAAAIAAAIIAAACQAEBEAGA+IABAGIgBAEIAAAEIgBABQgDAHgFAAIgBAAgAh0AAQgFgBAAgHQABgEADgGIARggIAJgOIALgNQASgVALgKIAMgJIAIgGQAIgCACAFQADAFgDAGIgKAIIgMALQgEADgRATIgOARIgGAJIgPAeQgEAIgDACQgDACgDAAIgEAAgABngVIgfgTIgOgJIgMgMQgVgTgJgLIgIgNIgGgIQgBgIAFgBQAFgDAGADQACACAGAIIAKAMQADAFASARIAQAPIAJAHIAdAQQAHAFADADQADAGgCAEQgCAFgGAAQgEgBgGgEg");
	this.shape_20.setTransform(439.565,582.0825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_21.setTransform(599.6808,583.8875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_22.setTransform(612.3808,584.0875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABXCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhcCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgAgNApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABpABQgEgBgEgIIgRgbIgGgJIgNgOIgXgUIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgFABIgEgBgAhtg4IgFgDQgCgCgBgEQAAgEADgEIAGgGQAUgOAXgJIAJgEIAOgBIAQgBQAGgBADACQAGACAAAHQAAAGgGADIgHABIgaACIgQAGIgMAGQgKAGgJAHQgHAFgEAAIgBAAg");
	this.shape_23.setTransform(650.2989,584.1375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag1CMQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIADgIIAFgKIARgbIAZglIAFgEIAEgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQADADgDAHIgGAJQgFAGgJAOQgCACgBADIgPAXIgBAAIgJATIgCACIgFAFIgBABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAA3CKQgDgCAAgGIABgIIADgSIAAgEQAAgCgDgDIgSgSIgKgLQgDgFABgCIAAgCQgDADgEgBQgFAAgCgGIgCgFIAAgFIgLinQgBgKAFgEQACgDADABQAFAAAEAHIACAMIABASIAAAAIAAAJIAAACQAEBEAGA+IABAFIgBAFIAAAEIgBABIAAAAIAAAAQAEgCADADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIACAEIAXAWIAKALQAEAGgCADIgCADIgCAFIgCARQAAAGgBABQgBAEgDAAIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAhjAYQgFgBAAgGQABgEADgHIARgeIAJgPIALgMQASgWALgKIAMgJIAIgGQAIgBACAEQADAGgDAFIgKAJIgMAKQgEAEgRATIgOAQIgGAKIgPAcQgEAIgDADQgDACgDAAIgEgBgABZAAIgcgEQgMgFgJgMQgHgKgGgPIgDgHIgDgNQgEgPABgFQAAgHADgDQAEgEAEABQAFABADAFIABAIQACAXANAXQAFAJAEADQAFAEAJABIAQACQAKACACAHQABADgCAEQgCADgDABIgFAAIgEAAg");
	this.shape_24.setTransform(757.3667,584.8268);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag1CMQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIADgIIAFgKIARgbIAZglIAFgEIAEgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQADADgDAHIgGAJQgFAGgJAOQgCACgBADIgPAXIgBAAIgJATIgCACIgFAFIgBABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAA3CKQgDgCAAgGIABgIIADgSIAAgEQAAgCgDgDIgSgSIgKgLQgDgFABgCIAAgCQgDADgEgBQgFAAgCgGIgCgFIAAgFIgLinQgBgKAFgEQACgDADABQAFAAAEAHIACAMIABASIAAAAIAAAJIAAACQAEBEAGA+IABAFIgBAFIAAAEIgBABIAAABIAAgBQAEgCADADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIACAEIAXAWIAKALQAEAGgCADIgCADIgCAFIgCARQAAAGgBABQgBAEgDAAIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAhjAYQgFgBAAgGQABgEADgHIARgeIAJgPIALgMQASgWALgKIAMgJIAIgGQAIgBACAEQADAGgDAFIgKAJIgMAKQgEAEgRATIgOAQIgGAKIgPAcQgEAIgDADQgDACgDAAIgEgBgABZAAIgcgEQgMgFgJgMQgHgKgGgPIgDgHIgDgNQgEgPABgFQAAgHADgDQAEgEAEABQAFABADAFIABAIQACAXANAXQAFAJAEADQAFAEAJABIAQACQAKACACAHQABADgCAEQgCADgDABIgFAAIgEAAg");
	this.shape_25.setTransform(883.4667,525.0268);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhWCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgEAAIgEgBgABcClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgBgBgAgIAbIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrgCQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAHgFABIgEAAQgDAAgDgCgAh4gVQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_26.setTransform(1215.585,600.1825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhdCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgDAAIgFgBgABVClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAgPAbIgBgBIAAgEIgBgEIABgGQAGg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgBAGgFABIgCAAQgFAAgDgHgACVg2QgFAAgHgFIgcgSIgKgGIgUgHQgYgIgGgBIgPgDIgNgCQgFgEAAgGQgBgFAHgCIAKABIAQACQAOADAaAJIAQAGIAPAIIAeASIAJAIQADAFgEAEQgCADgFAAIgBAAgAiahNQgGgDABgGQABgEAFgEQAEgBAJAAIAhAAIALgBQALgCALgDIAdgJIAPgFQAIgFAEAAQAGAAADAFQADAEgEAGQgCACgHACIgOAHQgNAGgcAFIgQAFIgRABIgkAAIgEAAIgHAAg");
	this.shape_27.setTransform(1216.2566,600.1825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AheCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgEAAIgEgBgABUClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgBgBgAgQAbIgBgBIAAgEIgBgEIABgGQAGg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAEAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgBAGgFABIgCAAQgFAAgDgHgAAOhtQgDgEAFgGQACgCAIgCIAOgGQAOgFAbgEIARgEIARAAIAjABQAIAAAEACQAFADgCAFQAAAFgGACQgDACgJgBIghgBIgMAAIgVAEQgZAFgFACIgPAFIgMAEQgHAAgDgFgAgihpIgQgBQgOgBgbgKIgPgEIgQgHIgfgSQgHgDgDgDQgDgFAEgFQACgDAHgBQAEABAIAFIAcAQIAKAFIAVAGIAeAIIAQACQAJAAADACQAGADAAAGQABAFgHADIgDAAIgHgBg");
	this.shape_28.setTransform(1216.3856,600.1825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhhC6QgEgCgCgEQgCgFAEgKIAOgjQASgoAYgmQAGgHADgCQAGgCAFAEQAFAEgBAGQAAACgEAHQgeAsgXBAQgFAMgGACIgEABIgEgBgABRC5QgEgCgDgFIgCgDIgOgdIgCAAIgVgiQgBgEgDgDQgNgUgIgKIgJgOQgDgJADgGQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQADAAAEACIAHAHIAjA2IAZApIAHAOIAEAMIAAAFIgDAFQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAgAgTAvIgBgBIAAgEIgBgFIABgFQAGg+AEhEIAAgCIAAgJIAAAAIABgSIACgMQAEgHAEAAQADgBADADQAFAEgBAKIgLCnIAAAFIgCAFQgCAGgFAAIgCABQgFAAgDgHgAANhYQgEgDAEgHQABgCAHgEIAMgKQANgIAZgLIAPgIIAQgFIAigIQAHgBAFAAQAGACAAAFQAAAFgFAEQgCACgJACIghAHIgLADIgTAJQgXALgEAEIgOAJIgKAHIgDAAQgFAAgDgDgAgnhfIgQgGQgNgFgXgQIgOgIIgNgLIgagZIgIgIQgCgGAFgEQADgDAHACIAKAIIAXAYIAJAHIASALIAcAPIAOAHQAJACACACQAFAFgBAGQgBAEgHACQgDAAgGgDg");
	this.shape_29.setTransform(1216.6835,598.22);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AheCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgDAAIgFgBgABUClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAgQAbIgBgBIAAgEIgBgEIABgGQAGg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAEAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgBAGgFABIgCAAQgFAAgDgHgAAOhtQgDgEAFgGQACgCAIgCIAOgGQAOgFAbgEIAQgEIARAAIAjABQAIAAAEACQAFADgBAFQgBAFgFACQgEACgJgBIghgBIgMAAIgUAEQgZAFgFACIgPAFIgMAEQgHAAgDgFgAgihpIgQgBQgOgBgbgKIgPgEIgQgHIgfgSQgHgDgDgDQgDgFAEgFQACgDAHgBQAEABAIAFIAcAQIAKAFIAVAGIAeAIIAQACQAJAAADACQAGADAAAGQABAFgHADIgDAAIgHgBg");
	this.shape_30.setTransform(1217.1606,601.4825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{x:312,y:616.65,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]}).to({state:[{t:this.shape},{t:this.instance,p:{x:312,y:616.65,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_1},{t:this.instance,p:{x:316.5,y:615.1,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},61).to({state:[{t:this.shape_2},{t:this.instance,p:{x:323.95,y:615.15,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_3},{t:this.instance,p:{x:331.75,y:618.05,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{x:338.7,y:618.05,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_5},{t:this.instance,p:{x:348.65,y:618.7,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_6,p:{x:354.3308,y:644.3375}},{t:this.instance,p:{x:356.1,y:618.7,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_7,p:{x:363.7989,y:644.0875}},{t:this.instance,p:{x:365,y:618.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_6,p:{x:372.4808,y:644.7375}},{t:this.instance,p:{x:374.25,y:619.1,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_8,p:{x:385.8989,y:644.2875}},{t:this.instance,p:{x:387.1,y:618.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_9,p:{x:396.0308,y:644.4875}},{t:this.instance,p:{x:397.8,y:618.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_8,p:{x:405.2989,y:644.0875}},{t:this.instance,p:{x:406.5,y:618.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_9,p:{x:413.9308,y:644.4875}},{t:this.instance,p:{x:415.7,y:618.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_8,p:{x:424.2989,y:644.5375}},{t:this.instance,p:{x:425.5,y:618.7,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_10},{t:this.instance,p:{x:421.65,y:614.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_11},{t:this.instance,p:{x:414.65,y:615.15,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_12},{t:this.instance,p:{x:407.3,y:615.9,skewY:0,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_12},{t:this.instance,p:{x:407.25,y:615.9,skewY:0,rotation:44.9994,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},7).to({state:[{t:this.shape_12},{t:this.instance,p:{x:407.25,y:615.9,skewY:0,rotation:29.9996,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},8).to({state:[{t:this.shape_12},{t:this.instance,p:{x:407.25,y:615.9,skewY:0,rotation:15.0005,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},8).to({state:[{t:this.shape_12},{t:this.instance,p:{x:407.25,y:615.9,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},8).to({state:[{t:this.shape_12},{t:this.instance,p:{x:407.25,y:615.9,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},20).to({state:[{t:this.shape_13},{t:this.instance,p:{x:407.25,y:615.9,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},19).to({state:[{t:this.shape_14},{t:this.instance,p:{x:402,y:615.9,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_15},{t:this.instance,p:{x:395.4,y:615.9,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_16,p:{x:386.735,y:642.9125}},{t:this.instance,p:{x:388.4,y:615.9,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_17},{t:this.instance,p:{x:383.6,y:620.1,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_16,p:{x:310.835,y:582.9625}},{t:this.instance,p:{x:312.5,y:555.95,skewY:0,rotation:0.0009,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_18},{t:this.instance,p:{x:312.5,y:555.95,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},6).to({state:[{t:this.shape_19,p:{x:312.4667,y:584.6268}},{t:this.instance,p:{x:312.5,y:559.55,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},64).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_20,p:{x:439.565,y:582.0825}},{t:this.instance,p:{x:437.9,y:554.85,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_19,p:{x:438.3167,y:584.4268}},{t:this.instance,p:{x:438.35,y:559.35,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},5).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_19,p:{x:521.9667,y:554.9768}},{t:this.instance,p:{x:522,y:529.9,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_20,p:{x:600.615,y:582.4825}},{t:this.instance,p:{x:598.95,y:555.25,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:599.6808}},{t:this.instance,p:{x:601.45,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},4).to({state:[{t:this.shape_8,p:{x:606.1989,y:584.1875}},{t:this.instance,p:{x:607.4,y:558.35,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_22,p:{x:612.3808}},{t:this.instance,p:{x:614.15,y:558.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:619.8989,y:584.1875}},{t:this.instance,p:{x:621.1,y:558.35,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_22,p:{x:626.3308}},{t:this.instance,p:{x:628.1,y:558.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:634.4489,y:583.8875}},{t:this.instance,p:{x:635.65,y:558.05,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_22,p:{x:641.5808}},{t:this.instance,p:{x:643.35,y:558.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_23,p:{x:650.2989,y:584.1375}},{t:this.instance,p:{x:651.5,y:558.3,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_22,p:{x:657.3308}},{t:this.instance,p:{x:659.1,y:558.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_7,p:{x:666.1989,y:583.8875}},{t:this.instance,p:{x:667.4,y:558.05,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:673.7808}},{t:this.instance,p:{x:675.55,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_23,p:{x:683.3489,y:583.6875}},{t:this.instance,p:{x:684.55,y:557.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:691.5308}},{t:this.instance,p:{x:693.3,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_23,p:{x:701.7989,y:583.6875}},{t:this.instance,p:{x:703,y:557.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:710.1808}},{t:this.instance,p:{x:711.95,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_7,p:{x:720.2489,y:583.8875}},{t:this.instance,p:{x:721.45,y:558.05,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:729.2808}},{t:this.instance,p:{x:731.05,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:738.7489,y:583.7375}},{t:this.instance,p:{x:739.95,y:557.9,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:746.8308}},{t:this.instance,p:{x:748.6,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_23,p:{x:756.7989,y:583.6875}},{t:this.instance,p:{x:758,y:557.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_24},{t:this.instance,p:{x:757.4,y:560.15,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_20,p:{x:826.165,y:522.4825}},{t:this.instance,p:{x:824.5,y:495.25,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_9,p:{x:826.3308,y:524.0875}},{t:this.instance,p:{x:828.1,y:498.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:833.5489,y:523.8875}},{t:this.instance,p:{x:834.75,y:498.05,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_9,p:{x:840.6308,y:524.0875}},{t:this.instance,p:{x:842.4,y:498.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:849.0489,y:523.8875}},{t:this.instance,p:{x:850.25,y:498.05,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_9,p:{x:855.5308,y:524.0875}},{t:this.instance,p:{x:857.3,y:498.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:865.5989,y:524.3375}},{t:this.instance,p:{x:866.8,y:498.5,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_9,p:{x:872.6308,y:524.5375}},{t:this.instance,p:{x:874.4,y:498.9,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:881.8989,y:523.8875}},{t:this.instance,p:{x:883.1,y:498.05,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_25,p:{x:883.4667,y:525.0268}},{t:this.instance,p:{x:883.5,y:500.35,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_20,p:{x:980.315,y:582.4825}},{t:this.instance,p:{x:978.65,y:555.25,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:983.2308}},{t:this.instance,p:{x:985,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_23,p:{x:989.3489,y:583.6875}},{t:this.instance,p:{x:990.55,y:557.85,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_22,p:{x:995.8808}},{t:this.instance,p:{x:997.65,y:558.45,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_7,p:{x:1003.4989,y:583.7375}},{t:this.instance,p:{x:1004.7,y:557.9,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:1009.4808}},{t:this.instance,p:{x:1011.25,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:1017.7489,y:583.7375}},{t:this.instance,p:{x:1018.95,y:557.9,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_21,p:{x:1025.3308}},{t:this.instance,p:{x:1027.1,y:558.25,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_8,p:{x:1033.4989,y:583.5375}},{t:this.instance,p:{x:1034.7,y:557.7,skewY:180,rotation:0,skewX:0,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_25,p:{x:1034.6667,y:584.8268}},{t:this.instance,p:{x:1034.7,y:560.15,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_25,p:{x:1124.2667,y:614.8768}},{t:this.instance,p:{x:1124.3,y:590.2,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_20,p:{x:1217.265,y:600.1825}},{t:this.instance,p:{x:1215.6,y:572.95,skewY:179.9991,rotation:0,skewX:-0.0009,scaleX:1,regX:0,regY:0,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:1215.585,y:600.1825}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_27,p:{y:600.1825,x:1216.2566}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},18).to({state:[{t:this.shape_28,p:{x:1216.3856,y:600.1825}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_29,p:{x:1216.6835,y:598.22}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_28,p:{x:1216.3356,y:600.0825}},{t:this.instance,p:{x:1217.25,y:572.9,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).to({state:[{t:this.shape_27,p:{y:600.1325,x:1216.2566}},{t:this.instance,p:{x:1217.3,y:573,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).to({state:[{t:this.shape_26,p:{x:1215.385,y:600.1325}},{t:this.instance,p:{x:1217.05,y:573,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).to({state:[{t:this.shape_27,p:{y:600.0825,x:1216.1566}},{t:this.instance,p:{x:1217.1,y:573,skewY:0,rotation:0,skewX:0,scaleX:0.9998,regX:0.1,regY:0.2,scaleY:0.9999}}]},2).to({state:[{t:this.shape_28,p:{x:1216.1856,y:600.1325}},{t:this.instance,p:{x:1217,y:573.05,skewY:0,rotation:0,skewX:0,scaleX:0.9998,regX:0.1,regY:0.2,scaleY:0.9999}}]},2).to({state:[{t:this.shape_29,p:{x:1216.6335,y:598.17}},{t:this.instance,p:{x:1217.25,y:573,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).to({state:[{t:this.shape_30},{t:this.instance,p:{x:1217.85,y:574.5,skewY:0,rotation:0,skewX:0,scaleX:0.9997,regX:0.1,regY:0.4,scaleY:0.9998}}]},2).to({state:[{t:this.shape_27,p:{y:601.5825,x:1217.0566}},{t:this.instance,p:{x:1217.95,y:574.65,skewY:0,rotation:0,skewX:0,scaleX:0.9997,regX:0.1,regY:0.4,scaleY:0.9998}}]},2).to({state:[{t:this.shape_26,p:{x:1215.635,y:600.1825}},{t:this.instance,p:{x:1218,y:573.8,skewY:0,rotation:0,skewX:0,scaleX:0.9996,regX:0.6,regY:0.8,scaleY:0.9996}}]},2).to({state:[{t:this.shape_27,p:{y:600.1825,x:1216.2566}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_28,p:{x:1216.3856,y:600.1825}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_29,p:{x:1216.6835,y:598.22}},{t:this.instance,p:{x:1217.25,y:572.95,skewY:0,rotation:0.0009,skewX:0,scaleX:0.9999,regX:0,regY:0,scaleY:1}}]},2).to({state:[{t:this.shape_28,p:{x:1216.3356,y:600.0825}},{t:this.instance,p:{x:1217.25,y:572.9,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).to({state:[{t:this.shape_27,p:{y:600.1325,x:1216.2566}},{t:this.instance,p:{x:1217.3,y:573,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).to({state:[{t:this.shape_26,p:{x:1215.385,y:600.1325}},{t:this.instance,p:{x:1217.05,y:573,skewY:0,rotation:0,skewX:0,scaleX:0.9999,regX:0.1,regY:0.1,scaleY:0.9999}}]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163).to({_off:false},0).wait(1).to({x:377.0566,y:622.599},0).wait(1).to({x:374.1646,y:613.9133},0).wait(1).to({x:371.174,y:605.9424},0).wait(1).to({x:368.0847,y:598.6855},0).wait(1).to({x:364.8966,y:592.1419},0).wait(1).to({x:361.6094,y:586.3109},0).wait(1).to({x:358.223,y:581.192},0).wait(1).to({x:354.7371,y:576.7847},0).wait(1).to({x:351.1516,y:573.0889},0).wait(1).to({x:347.4661,y:570.1044},0).wait(1).to({x:343.6804,y:567.831},0).wait(1).to({x:339.7942,y:566.2689},0).wait(1).to({x:335.8074,y:565.4182},0).wait(1).to({x:331.7194,y:565.2792},0).wait(1).to({x:327.5301,y:565.8523},0).wait(1).to({x:323.239,y:567.138},0).wait(1).to({x:318.8458,y:569.1369},0).wait(1).to({x:314.35,y:571.85},0).to({_off:true},1).wait(292));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).wait(1).to({x:319.7736,y:568.5182},0).wait(1).to({x:327.0578,y:565.3853},0).wait(1).to({x:334.3527,y:562.7009},0).wait(1).to({x:341.6586,y:560.4646},0).wait(1).to({x:348.976,y:558.6759},0).wait(1).to({x:356.3055,y:557.3347},0).wait(1).to({x:363.6473,y:556.4406},0).wait(1).to({x:371.002,y:555.9935},0).wait(1).to({x:378.3701,y:555.9933},0).wait(1).to({x:385.752,y:556.44},0).wait(1).to({x:393.148,y:557.3338},0).wait(1).to({x:400.5588,y:558.6748},0).wait(1).to({x:407.9848,y:560.4633},0).wait(1).to({x:415.4264,y:562.6996},0).wait(1).to({x:422.8841,y:565.3841},0).wait(1).to({x:430.3583,y:568.5173},0).wait(1).to({x:437.85,y:572.1},0).to({_off:true},1).wait(7).to({_off:false,x:438.45,y:572.2},0).wait(1).to({x:445.6843,y:561.889},0).wait(1).to({x:452.8489,y:552.9999},0).wait(1).to({x:459.9442,y:545.5303},0).wait(1).to({x:466.9711,y:539.4781},0).wait(1).to({x:473.9302,y:534.8416},0).wait(1).to({x:480.8222,y:531.6198},0).wait(1).to({x:487.6477,y:529.812},0).wait(1).to({x:494.4075,y:529.4181},0).wait(1).to({x:501.102,y:530.4387},0).wait(1).to({x:507.7318,y:532.8747},0).wait(1).to({x:514.2976,y:536.7277},0).wait(1).to({x:520.8,y:542},0).to({_off:true},1).wait(2).to({_off:false,x:522.9},0).wait(1).to({x:529.708,y:537.6761},0).wait(1).to({x:536.5378,y:534.7486},0).wait(1).to({x:543.3898,y:533.2161},0).wait(1).to({x:550.2648,y:533.077},0).wait(1).to({x:557.1636,y:534.3309},0).wait(1).to({x:564.087,y:536.9777},0).wait(1).to({x:571.0357,y:541.0181},0).wait(1).to({x:578.0105,y:546.4533},0).wait(1).to({x:585.0122,y:553.2852},0).wait(1).to({x:592.0417,y:561.5162},0).wait(1).to({x:599.1,y:571.15},0).to({_off:true},1).wait(26).to({_off:false,x:759.65,y:571.55},0).wait(1).to({x:763.5254,y:557.5534},0).wait(1).to({x:767.516,y:545.0539},0).wait(1).to({x:771.6218,y:534.0495},0).wait(1).to({x:775.8432,y:524.5379},0).wait(1).to({x:780.1806,y:516.5176},0).wait(1).to({x:784.6341,y:509.9871},0).wait(1).to({x:789.2043,y:504.9455},0).wait(1).to({x:793.8916,y:501.3923},0).wait(1).to({x:798.6963,y:499.3273},0).wait(1).to({x:803.6189,y:498.7509},0).wait(1).to({x:808.6601,y:499.6636},0).wait(1).to({x:813.8202,y:502.0666},0).wait(1).to({x:819.0999,y:505.9614},0).wait(1).to({x:824.5,y:511.35},0).to({_off:true},1).wait(11).to({_off:false,x:888.1},0).wait(1).to({x:893.8625,y:506.6282},0).wait(1).to({x:899.2574,y:502.855},0).wait(1).to({x:904.3368,y:500.0297},0).wait(1).to({x:909.153,y:498.1515},0).wait(1).to({x:913.7583,y:497.2197},0).wait(1).to({x:918.2046,y:497.2339},0).wait(1).to({x:922.5442,y:498.1935},0).wait(1).to({x:926.8289,y:500.0984},0).wait(1).to({x:931.1107,y:502.9486},0).wait(1).to({x:935.4415,y:506.7441},0).wait(1).to({x:939.8733,y:511.4851},0).wait(1).to({x:944.4581,y:517.1721},0).wait(1).to({x:949.2479,y:523.8055},0).wait(1).to({x:954.2948,y:531.3861},0).wait(1).to({x:959.6511,y:539.9147},0).wait(1).to({x:965.369,y:549.3924},0).wait(1).to({x:971.501,y:559.8201},0).wait(1).to({x:978.1,y:571.2},0).to({_off:true},1).wait(11).to({_off:false,x:1038.1,y:571.15},0).wait(1).to({x:1044.7687,y:566.3301},0).wait(1).to({x:1051.3779,y:562.7027},0).wait(1).to({x:1057.9277,y:560.2667},0).wait(1).to({x:1064.4187,y:559.021},0).wait(1).to({x:1070.8512,y:558.9651},0).wait(1).to({x:1077.2256,y:560.0987},0).wait(1).to({x:1083.5423,y:562.4219},0).wait(1).to({x:1089.8017,y:565.9353},0).wait(1).to({x:1096.0041,y:570.6398},0).wait(1).to({x:1102.1497,y:576.5366},0).wait(1).to({x:1108.2391,y:583.6275},0).wait(1).to({x:1114.2723,y:591.9143},0).wait(1).to({x:1120.25,y:601.4},0).to({_off:true},1).wait(2).to({_off:false,x:1127.5,y:601.15},0).wait(1).to({x:1136.769,y:593.003},0).wait(1).to({x:1145.6838,y:586.1771},0).wait(1).to({x:1154.2455,y:580.6704},0).wait(1).to({x:1162.4551,y:576.4811},0).wait(1).to({x:1170.3136,y:573.608},0).wait(1).to({x:1177.822,y:572.0504},0).wait(1).to({x:1184.9809,y:571.8079},0).wait(1).to({x:1191.7909,y:572.881},0).wait(1).to({x:1198.2526,y:575.2702},0).wait(1).to({x:1204.3661,y:578.9768},0).wait(1).to({x:1210.1319,y:584.0026},0).wait(1).to({x:1215.55,y:590.35},0).to({_off:true},1).wait(57));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blockFalling2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blockFalling2
	this.instance = new lib.purpleShape("synched",0);
	this.instance.setTransform(540.75,266.05,1,1,90,0,0,-39.2,0);
	this.instance._off = true;

	this.instance_1 = new lib.greenShape("synched",0);
	this.instance_1.setTransform(615.85,330.6,1,1,0,0,0,-117.8,-78.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.yellowShape("synched",0);
	this.instance_2.setTransform(449.9,353.05,1,1,0,0,0,-88.2,-78.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.navyShape("synched",0);
	this.instance_3.setTransform(871.5,299.75,1,1,-90,0,0,37.2,47.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.blueShape("synched",0);
	this.instance_4.setTransform(946.3,243.9,1,1,-90,0,0,-102.2,-32);
	this.instance_4._off = true;

	this.instance_5 = new lib.orangeShape("synched",0);
	this.instance_5.setTransform(750.7,276.35,0.9999,0.9999,-90,0,0,-117.8,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(266).to({_off:false},0).wait(1).to({y:283.45},0).wait(1).to({y:300.9},0).wait(1).to({y:318.35},0).wait(1).to({y:335.8},0).wait(1).to({y:353.25},0).wait(1).to({y:370.7},0).wait(1).to({y:388.15},0).wait(1).to({y:405.6},0).wait(1).to({y:423.05},0).wait(1).to({y:440.5},0).wait(1).to({y:457.9},0).wait(1).to({y:475.35},0).wait(1).to({y:492.8},0).wait(1).to({y:510.25},0).wait(1).to({y:527.7},0).wait(1).to({y:545.15},0).wait(1).to({y:562.6},0).wait(1).to({y:580.05},0).wait(1).to({y:597.5},0).wait(1).to({y:614.95},0).to({_off:true},1).wait(65).to({_off:false,rotation:-90,x:781,y:248.75},0).wait(1).to({y:266.4},0).wait(1).to({y:284.05},0).wait(1).to({y:301.7},0).wait(1).to({y:319.4},0).wait(1).to({y:337.05},0).wait(1).to({y:354.7},0).wait(1).to({y:372.35},0).wait(1).to({y:390.05},0).wait(1).to({y:407.7},0).wait(1).to({y:425.35},0).wait(1).to({y:443},0).wait(1).to({y:460.7},0).wait(1).to({y:478.35},0).wait(1).to({y:496},0).wait(1).to({y:513.65},0).wait(1).to({y:531.35},0).wait(1).to({y:549},0).wait(1).to({y:566.65},0).wait(1).to({y:584.35},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(287).to({_off:false},0).wait(1).to({y:351.9},0).wait(1).to({y:373.25},0).wait(1).to({y:394.6},0).wait(1).to({y:415.95},0).wait(1).to({y:437.3},0).wait(1).to({y:458.65},0).wait(1).to({y:480},0).wait(1).to({y:501.3},0).wait(1).to({y:522.65},0).wait(1).to({y:544},0).wait(1).to({y:565.35},0).wait(1).to({y:586.7},0).wait(1).to({y:608.05},0).wait(1).to({y:629.4},0).to({_off:true},1).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(302).to({_off:false},0).wait(1).to({y:368.5},0).wait(1).to({y:384},0).wait(1).to({x:449.95,y:399.5},0).wait(1).to({y:414.95},0).wait(1).to({y:430.45},0).wait(1).to({x:450,y:445.95},0).wait(1).to({y:461.45},0).wait(1).to({y:476.9},0).wait(1).to({x:450.05,y:492.4},0).wait(1).to({y:507.9},0).wait(1).to({y:523.35},0).wait(1).to({x:450.1,y:538.85},0).wait(1).to({y:554.35},0).wait(1).to({x:450.15,y:569.85},0).to({_off:true},1).wait(15).to({_off:false,x:991.45,y:339.05},0).wait(1).to({y:354.3},0).wait(1).to({y:369.6},0).wait(1).to({y:384.9},0).wait(1).to({y:400.2},0).wait(1).to({y:415.5},0).wait(1).to({y:430.8},0).wait(1).to({y:446.1},0).wait(1).to({y:461.4},0).wait(1).to({y:476.7},0).wait(1).to({y:491.95},0).wait(1).to({y:507.25},0).wait(1).to({y:522.55},0).wait(1).to({y:537.85},0).wait(1).to({y:553.15},0).wait(1).to({y:568.45},0).wait(1).to({y:583.75},0).wait(1).to({y:599.05},0).wait(1).to({y:614.35},0).wait(1).to({y:629.65},0).to({_off:true},1).wait(40).to({_off:false,x:810.9,y:193.5},0).wait(1).to({y:216},0).wait(1).to({y:238.55},0).wait(1).to({x:810.95,y:261.1},0).wait(1).to({y:283.65},0).wait(1).to({y:306.2},0).wait(1).to({x:811,y:328.75},0).wait(1).to({y:351.3},0).wait(1).to({y:373.85},0).wait(1).to({x:811.05,y:396.4},0).wait(1).to({y:418.95},0).wait(1).to({y:441.5},0).wait(1).to({x:811.1,y:464.05},0).wait(1).to({y:486.6},0).wait(1).to({x:811.15,y:509.15},0).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(317).to({_off:false},0).wait(1).to({y:320.05},0).wait(1).to({y:340.35},0).wait(1).to({y:360.7},0).wait(1).to({y:381},0).wait(1).to({y:401.35},0).wait(1).to({y:421.65},0).wait(1).to({y:442},0).wait(1).to({y:462.3},0).wait(1).to({y:482.6},0).wait(1).to({y:502.95},0).wait(1).to({y:523.25},0).wait(1).to({y:543.6},0).wait(1).to({y:563.9},0).wait(1).to({y:584.25},0).to({_off:true},1).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(372).to({_off:false},0).wait(1).to({y:262.6},0).wait(1).to({y:281.3},0).wait(1).to({y:300},0).wait(1).to({y:318.75},0).wait(1).to({y:337.45},0).wait(1).to({y:356.15},0).wait(1).to({y:374.85},0).wait(1).to({y:393.6},0).wait(1).to({y:412.3},0).wait(1).to({y:431},0).wait(1).to({y:449.7},0).wait(1).to({y:468.45},0).wait(1).to({y:487.15},0).wait(1).to({y:505.85},0).wait(1).to({y:524.55},0).wait(1).to({y:543.3},0).wait(1).to({y:562},0).wait(1).to({y:580.7},0).wait(1).to({y:599.45},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(407).to({_off:false},0).wait(1).to({regY:0,x:750.6,y:287.2},0).wait(1).to({y:298.1},0).wait(1).to({y:309},0).wait(1).to({y:319.9},0).wait(1).to({y:330.75},0).wait(1).to({y:341.65},0).wait(1).to({y:352.55},0).wait(1).to({y:363.45},0).wait(1).to({y:374.3},0).wait(1).to({y:385.2},0).wait(1).to({y:396.1},0).wait(1).to({y:407},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_blockFalling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blockFalling
	this.instance = new lib.purpleShape("synched",0);
	this.instance.setTransform(225,387.3,1,1,180,0,0,-39.2,0);
	this.instance._off = true;

	this.instance_1 = new lib.greenShape("synched",0);
	this.instance_1.setTransform(480.35,437.95,1,1,90,0,0,-117.8,-78.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.yellowShape("synched",0);
	this.instance_2.setTransform(299.9,437.6,1,1,0,0,0,-88.2,-78.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.redShape("synched",0);
	this.instance_3.setTransform(555.5,84.7,1,1,0,0,0,-100.9,-78.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.orangeShape("synched",0);
	this.instance_4.setTransform(886.4,126.25,1,1,180,0,0,-117.8,0);
	this.instance_4._off = true;

	this.instance_5 = new lib.navyShape("synched",0);
	this.instance_5.setTransform(405.15,296.7,1,1,0,0,0,37.2,47.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.blueShape("synched",0);
	this.instance_6.setTransform(269.8,300.85,1,1,0,0,0,-102.2,-32);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(1).to({y:396.95},0).wait(1).to({y:406.6},0).wait(1).to({y:416.25},0).wait(1).to({y:425.9},0).wait(1).to({y:435.55},0).wait(1).to({y:445.2},0).wait(1).to({y:454.85},0).wait(1).to({y:464.5},0).wait(1).to({y:474.15},0).wait(1).to({y:483.8},0).wait(1).to({y:493.45},0).wait(1).to({y:503.1},0).wait(1).to({y:512.75},0).wait(1).to({y:522.4},0).wait(1).to({y:532.05},0).wait(1).to({y:541.7},0).wait(1).to({y:551.35},0).wait(1).to({y:561},0).wait(1).to({y:570.65},0).wait(1).to({y:580.3},0).wait(1).to({y:589.95},0).wait(1).to({y:599.6},0).wait(1).to({y:609.25},0).wait(1).to({y:618.9},0).wait(1).to({y:628.6},0).to({_off:true},1).wait(230).to({_off:false,x:675.8,y:312.95},0).wait(1).to({y:335.55},0).wait(1).to({y:358.15},0).wait(1).to({y:380.75},0).wait(1).to({y:403.35},0).wait(1).to({y:425.95},0).wait(1).to({y:448.55},0).wait(1).to({y:471.15},0).wait(1).to({y:493.75},0).wait(1).to({y:516.35},0).wait(1).to({y:538.95},0).wait(1).to({y:561.55},0).wait(1).to({y:584.15},0).wait(1).to({y:606.75},0).wait(1).to({y:629.4},0).to({_off:true},1).wait(50).to({_off:false,rotation:90,x:1051.6,y:313.2},0).wait(1).to({y:332.65},0).wait(1).to({y:352.15},0).wait(1).to({y:371.6},0).wait(1).to({y:391.1},0).wait(1).to({y:410.55},0).wait(1).to({y:430.05},0).wait(1).to({y:449.5},0).wait(1).to({y:469},0).wait(1).to({y:488.45},0).wait(1).to({y:507.95},0).wait(1).to({y:527.4},0).wait(1).to({y:546.9},0).wait(1).to({y:566.35},0).wait(1).to({y:585.85},0).wait(1).to({y:605.3},0).wait(1).to({y:624.8},0).wait(1).to({y:644.3},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).wait(1).to({y:444.95},0).wait(1).to({y:452},0).wait(1).to({y:459.05},0).wait(1).to({y:466.05},0).wait(1).to({y:473.1},0).wait(1).to({y:480.15},0).wait(1).to({y:487.15},0).wait(1).to({y:494.2},0).wait(1).to({y:501.25},0).wait(1).to({y:508.25},0).wait(1).to({y:515.3},0).wait(1).to({y:522.35},0).wait(1).to({y:529.35},0).wait(1).to({y:536.4},0).wait(1).to({y:543.45},0).wait(1).to({y:550.45},0).wait(1).to({y:557.5},0).wait(1).to({y:564.55},0).wait(1).to({y:571.55},0).wait(1).to({y:578.6},0).wait(1).to({y:585.65},0).wait(1).to({y:592.65},0).wait(1).to({y:599.7},0).wait(1).to({y:606.75},0).wait(1).to({y:613.8},0).to({_off:true},1).wait(386));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).wait(1).to({x:299.85,y:444},0).wait(1).to({y:450.4},0).wait(1).to({y:456.8},0).wait(1).to({y:463.2},0).wait(1).to({y:469.6},0).wait(1).to({y:476},0).wait(1).to({y:482.4},0).wait(1).to({y:488.8},0).wait(1).to({y:495.2},0).wait(1).to({y:501.6},0).wait(1).to({y:508},0).wait(1).to({y:514.4},0).wait(1).to({y:520.8},0).wait(1).to({y:527.2},0).wait(1).to({y:533.6},0).wait(1).to({y:540},0).wait(1).to({y:546.4},0).wait(1).to({y:552.8},0).wait(1).to({y:559.2},0).wait(1).to({y:565.6},0).wait(1).to({y:572},0).wait(1).to({y:578.4},0).wait(1).to({y:584.8},0).wait(1).to({y:591.2},0).wait(1).to({y:597.6},0).wait(1).to({y:604},0).wait(1).to({y:610.4},0).wait(1).to({y:616.8},0).wait(1).to({y:623.2},0).wait(1).to({y:629.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(90).to({_off:false,x:750.9,y:313.85},0).wait(1).to({y:330.4},0).wait(1).to({y:347},0).wait(1).to({y:363.6},0).wait(1).to({y:380.2},0).wait(1).to({y:396.8},0).wait(1).to({y:413.4},0).wait(1).to({y:430},0).wait(1).to({y:446.6},0).wait(1).to({y:463.2},0).wait(1).to({y:479.8},0).wait(1).to({y:496.4},0).wait(1).to({y:513},0).wait(1).to({y:529.6},0).wait(1).to({y:546.2},0).wait(1).to({y:562.8},0).wait(1).to({y:579.4},0).wait(1).to({y:596},0).wait(1).to({y:612.6},0).wait(1).to({y:629.2},0).to({_off:true},1).wait(110).to({_off:false,regX:-85,regY:-77.1,scaleX:0.9987,scaleY:0.9987,x:1081.35,y:199.5},0).wait(1).to({regX:-88.2,regY:-78.9,x:1078.15,y:215.9},0).wait(1).to({y:234.1},0).wait(1).to({y:252.3},0).wait(1).to({y:270.5},0).wait(1).to({y:288.7},0).wait(1).to({y:306.95},0).wait(1).to({y:325.15},0).wait(1).to({y:343.35},0).wait(1).to({y:361.55},0).wait(1).to({y:379.75},0).wait(1).to({y:397.95},0).wait(1).to({y:416.2},0).wait(1).to({y:434.4},0).wait(1).to({y:452.6},0).wait(1).to({y:470.8},0).wait(1).to({y:489},0).wait(1).to({y:507.25},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).wait(1).to({y:107.65},0).wait(1).to({y:130.6},0).wait(1).to({y:153.6},0).wait(1).to({y:176.55},0).wait(1).to({y:199.55},0).wait(1).to({y:222.5},0).wait(1).to({y:245.5},0).wait(1).to({y:268.45},0).wait(1).to({y:291.4},0).wait(1).to({y:314.4},0).wait(1).to({y:337.35},0).wait(1).to({y:360.35},0).wait(1).to({y:383.3},0).wait(1).to({y:406.3},0).wait(1).to({y:429.25},0).wait(1).to({y:452.25},0).wait(1).to({y:475.2},0).wait(1).to({y:498.15},0).wait(1).to({y:521.15},0).wait(1).to({y:544.1},0).wait(1).to({y:567.1},0).wait(1).to({y:590.05},0).wait(1).to({y:613.05},0).wait(1).to({y:636},0).wait(1).to({y:659},0).to({_off:true},1).wait(99).to({_off:false,rotation:-90,x:841.4,y:238.75},0).wait(1).to({y:263.4},0).wait(1).to({y:288.1},0).wait(1).to({y:312.8},0).wait(1).to({y:337.5},0).wait(1).to({y:362.2},0).wait(1).to({y:386.9},0).wait(1).to({y:411.6},0).wait(1).to({y:436.25},0).wait(1).to({y:460.95},0).wait(1).to({y:485.65},0).wait(1).to({y:510.35},0).wait(1).to({y:535.05},0).wait(1).to({y:559.75},0).wait(1).to({y:584.45},0).to({_off:true},1).wait(20).to({_off:false,rotation:0,x:1096.75,y:366.05},0).wait(1).to({y:386.95},0).wait(1).to({y:407.9},0).wait(1).to({y:428.85},0).wait(1).to({y:449.8},0).wait(1).to({y:470.75},0).wait(1).to({y:491.7},0).wait(1).to({y:512.65},0).wait(1).to({y:533.55},0).wait(1).to({y:554.5},0).wait(1).to({y:575.45},0).wait(1).to({y:596.4},0).wait(1).to({y:617.35},0).wait(1).to({y:638.3},0).wait(1).to({y:659.25},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(208).to({_off:false},0).wait(1).to({y:145.95},0).wait(1).to({y:165.7},0).wait(1).to({y:185.4},0).wait(1).to({y:205.15},0).wait(1).to({y:224.9},0).wait(1).to({y:244.6},0).wait(1).to({y:264.35},0).wait(1).to({y:284.1},0).wait(1).to({y:303.8},0).wait(1).to({y:323.55},0).wait(1).to({y:343.25},0).wait(1).to({y:363},0).wait(1).to({y:382.75},0).wait(1).to({y:402.45},0).wait(1).to({y:422.2},0).wait(1).to({y:441.95},0).wait(1).to({y:461.65},0).wait(1).to({y:481.4},0).wait(1).to({y:501.1},0).wait(1).to({y:520.85},0).wait(1).to({y:540.6},0).wait(1).to({y:560.3},0).wait(1).to({y:580.05},0).wait(1).to({y:599.8},0).wait(1).to({y:619.5},0).wait(1).to({y:639.25},0).wait(1).to({y:659},0).to({_off:true},1).wait(139).to({_off:false,rotation:0,x:1006.4,y:287.05},0).wait(1).to({y:297.9},0).wait(1).to({y:308.75},0).wait(1).to({y:319.6},0).wait(1).to({y:330.45},0).wait(1).to({y:341.3},0).wait(1).to({y:352.15},0).wait(1).to({y:363.05},0).wait(1).to({y:373.9},0).wait(1).to({y:384.75},0).wait(1).to({y:395.6},0).wait(1).to({y:406.45},0).wait(1).to({y:417.3},0).wait(1).to({y:428.2},0).wait(1).to({y:439.05},0).wait(1).to({y:449.9},0).wait(1).to({y:460.75},0).wait(1).to({y:471.6},0).wait(1).to({y:482.45},0).wait(1).to({y:493.3},0).wait(1).to({y:504.2},0).wait(1).to({y:515.05},0).wait(1).to({y:525.9},0).wait(1).to({y:536.75},0).wait(1).to({y:547.6},0).wait(1).to({y:558.45},0).wait(1).to({y:569.35},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(236).to({_off:false},0).wait(1).to({x:405.1,y:318.9},0).wait(1).to({y:341.1},0).wait(1).to({y:363.3},0).wait(1).to({y:385.5},0).wait(1).to({y:407.7},0).wait(1).to({y:429.9},0).wait(1).to({y:452.1},0).wait(1).to({y:474.3},0).wait(1).to({y:496.5},0).wait(1).to({y:518.7},0).wait(1).to({y:540.9},0).wait(1).to({y:563.1},0).wait(1).to({y:585.3},0).wait(1).to({y:607.5},0).wait(1).to({y:629.75},0).to({_off:true},1).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(252).to({_off:false},0).wait(1).to({y:315.75},0).wait(1).to({y:330.65},0).wait(1).to({y:345.6},0).wait(1).to({y:360.5},0).wait(1).to({y:375.45},0).wait(1).to({y:390.35},0).wait(1).to({y:405.25},0).wait(1).to({y:420.2},0).wait(1).to({y:435.1},0).wait(1).to({y:450.05},0).wait(1).to({y:464.95},0).wait(1).to({y:479.9},0).wait(1).to({y:494.8},0).wait(1).to({y:509.7},0).wait(1).to({y:524.65},0).wait(1).to({y:539.55},0).wait(1).to({y:554.5},0).wait(1).to({y:569.4},0).wait(1).to({y:584.35},0).to({_off:true},1).wait(50).to({_off:false,x:690.85,y:198},0).wait(1).to({y:218.3},0).wait(1).to({y:238.6},0).wait(1).to({y:258.95},0).wait(1).to({y:279.25},0).wait(1).to({y:299.6},0).wait(1).to({y:319.9},0).wait(1).to({y:340.25},0).wait(1).to({y:360.55},0).wait(1).to({y:380.9},0).wait(1).to({y:401.2},0).wait(1).to({y:421.55},0).wait(1).to({y:441.85},0).wait(1).to({y:462.2},0).wait(1).to({y:482.5},0).wait(1).to({y:502.85},0).wait(1).to({y:523.15},0).wait(1).to({y:543.5},0).wait(1).to({y:563.8},0).wait(1).to({y:584.15},0).to({_off:true},1).wait(132));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.startButton = new lib.StartButton();
	this.startButton.name = "startButton";
	this.startButton.setTransform(419.65,507.1,2.4383,2.4383,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.StartButton(), 3);

	this.instance = new lib.button("synched",0);
	this.instance.setTransform(1215.15,620.4,1,1,0,0,0,-0.1,-0.5);

	this.instance_1 = new lib.yellowShape("synched",0);
	this.instance_1.setTransform(1201.45,658.9,1,1,0,0,0,-88.2,-78.9);

	this.instance_2 = new lib.yellowShape("synched",0);
	this.instance_2.setTransform(871.45,689,1,1,0,0,0,-88.2,-78.9);

	this.instance_3 = new lib.redShape("synched",0);
	this.instance_3.setTransform(735.8,689,1,1,0,0,0,-100.9,-78.9);

	this.instance_4 = new lib.purpleShape("synched",0);
	this.instance_4.setTransform(434.8,689.6,1,1,180,0,0,-39.2,0);

	this.instance_5 = new lib.orangeShape("synched",0);
	this.instance_5.setTransform(480.35,674.2,1,1,-90,0,0,-117.8,0);

	this.instance_6 = new lib.navyShape("synched",0);
	this.instance_6.setTransform(1096.75,689.3,1,1,0,0,0,37.2,47.7);

	this.instance_7 = new lib.greenShape("synched",0);
	this.instance_7.setTransform(691.05,674.2,1,1,90,0,0,-117.8,-78.9);

	this.instance_8 = new lib.blueShape("synched",0);
	this.instance_8.setTransform(1201.8,704.3,1,1,0,0,0,-102.2,-32);

	this.instance_9 = new lib.blueShape("synched",0);
	this.instance_9.setTransform(826.3,659.45,1,1,90,0,0,-102.2,-32);

	this.instance_10 = new lib.greenShape("synched",0);
	this.instance_10.setTransform(1006.4,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_11 = new lib.navyShape("synched",0);
	this.instance_11.setTransform(555.5,689.1,1,1,0,0,0,37.2,47.7);

	this.instance_12 = new lib.orangeShape("synched",0);
	this.instance_12.setTransform(781,674.2,1,1,-90,0,0,-117.8,0);

	this.instance_13 = new lib.purpleShape("synched",0);
	this.instance_13.setTransform(946.45,689.8,1,1,0,0,0,-39.2,0);

	this.instance_14 = new lib.redShape("synched",0);
	this.instance_14.setTransform(1261.6,674.2,1,1,-90,0,0,-100.9,-78.9);

	this.instance_15 = new lib.yellowShape("synched",0);
	this.instance_15.setTransform(630.9,689.8,1,1,0,0,0,-88.2,-78.9);

	this.instance_16 = new lib.yellowShape("synched",0);
	this.instance_16.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_17 = new lib.redShape("synched",0);
	this.instance_17.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_18 = new lib.purpleShape("synched",0);
	this.instance_18.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_19 = new lib.orangeShape("synched",0);
	this.instance_19.setTransform(284.8,659.6,1,1,0,0,0,-117.8,0);

	this.instance_20 = new lib.navyShape("synched",0);
	this.instance_20.setTransform(195.15,689.9,1,1,0,0,0,37.2,47.7);

	this.instance_21 = new lib.greenShape("synched",0);
	this.instance_21.setTransform(374.8,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_22 = new lib.blueShape("synched",0);
	this.instance_22.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_23 = new lib.purpleShape("synched",0);
	this.instance_23.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_24 = new lib.greenShape("synched",0);
	this.instance_24.setTransform(374.8,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_25 = new lib.yellowShape("synched",0);
	this.instance_25.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990033").ss(1,1,1).p("AAkAAQAAAKgLAHQgKAIgPAAQgOAAgLgIQgKgHAAgKQAAgJAKgHQALgHAOAAQAPAAAKAHQALAHAAAJg");
	this.shape.setTransform(394.1,602.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990033").ss(1,1,1).p("AA4gyQAAASgVAMQgVANgcAAQgeAAgVgNQgUgMAAgSQAAgRAUgNQAVgMAeAAQAcAAAVAMQAVANAAARgABXBFQAAAKgLAHQgKAHgPAAQgPAAgLgHQgKgHAAgKQAAgKAKgIQALgHAPAAQAPAAAKAHQALAIAAAKg");
	this.shape_1.setTransform(389.05,595.475);

	this.instance_26 = new lib.buttonGlow2();
	this.instance_26.setTransform(1242.25,573.5,2.7597,2.7597,0,0,0,0,0.1);

	this.instance_27 = new lib.buttonGlow();
	this.instance_27.setTransform(1215.95,603.15,2.0224,2.0224,0,0,0,0.1,0.1);

	this.instance_28 = new lib.redShape("synched",0);
	this.instance_28.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_29 = new lib.orangeShape("synched",0);
	this.instance_29.setTransform(284.8,659.6,1,1,0,0,0,-117.8,0);

	this.instance_30 = new lib.navyShape("synched",0);
	this.instance_30.setTransform(195.15,689.9,1,1,0,0,0,37.2,47.7);

	this.instance_31 = new lib.blueShape("synched",0);
	this.instance_31.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_32 = new lib.purpleShape("synched",0);
	this.instance_32.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_33 = new lib.yellowShape("synched",0);
	this.instance_33.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_34 = new lib.greenShape("synched",0);
	this.instance_34.setTransform(374.8,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_35 = new lib.purpleShape("synched",0);
	this.instance_35.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_36 = new lib.yellowShape("synched",0);
	this.instance_36.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_37 = new lib.redShape("synched",0);
	this.instance_37.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_38 = new lib.navyShape("synched",0);
	this.instance_38.setTransform(195.15,689.9,1,1,0,0,0,37.2,47.7);

	this.instance_39 = new lib.blueShape("synched",0);
	this.instance_39.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_40 = new lib.yellowShape("synched",0);
	this.instance_40.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_41 = new lib.redShape("synched",0);
	this.instance_41.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_42 = new lib.purpleShape("synched",0);
	this.instance_42.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_43 = new lib.purpleShape("synched",0);
	this.instance_43.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_44 = new lib.blueShape("synched",0);
	this.instance_44.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_45 = new lib.orangeShape("synched",0);
	this.instance_45.setTransform(284.8,659.6,1,1,0,0,0,-117.8,0);

	this.instance_46 = new lib.yellowShape("synched",0);
	this.instance_46.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_47 = new lib.buttonPressing("synched",0);
	this.instance_47.setTransform(1215.9,621.35,1,1,0,0,0,-0.1,-0.5);

	this.instance_48 = new lib.buttonPressed("synched",0);
	this.instance_48.setTransform(1215.8,621.4,1,1,0,0,0,-0.1,-0.5);

	this.playAgain = new lib.playAgain();
	this.playAgain.name = "playAgain";
	this.playAgain.setTransform(1155.15,596.25,0.9999,0.9999,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playAgain(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_21,p:{x:374.8,rotation:0,y:689.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_18,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_16,p:{x:180.25,y:659.6}},{t:this.instance_15,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_13,p:{rotation:0,x:946.45,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_10,p:{rotation:0,x:1006.4,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_7,p:{x:691.05,y:674.2,rotation:90}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_4,p:{x:434.8,y:689.6,rotation:180}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_2,p:{x:871.45,y:689}},{t:this.instance_1,p:{y:658.9,x:1201.45}},{t:this.instance,p:{x:1215.15,y:620.4}},{t:this.startButton}]}).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_21,p:{x:374.8,rotation:0,y:689.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_18,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_16,p:{x:180.25,y:659.6}},{t:this.instance_15,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_13,p:{rotation:0,x:946.45,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_10,p:{rotation:0,x:1006.4,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_7,p:{x:691.05,y:674.2,rotation:90}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_4,p:{x:434.8,y:689.6,rotation:180}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_2,p:{x:871.45,y:689}},{t:this.instance_1,p:{y:658.9,x:1201.45}},{t:this.instance,p:{x:1215.15,y:620.4}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_21,p:{x:374.8,rotation:0,y:689.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_16,p:{x:180.25,y:659.6}},{t:this.instance_15,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_10,p:{rotation:0,x:1006.4,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_7,p:{x:691.05,y:674.2,rotation:90}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_2,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_1,p:{y:659,x:1201.45}},{t:this.instance,p:{x:1215.25,y:620.9}}]},61).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_16,p:{x:180.25,y:659.6}},{t:this.instance_15,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_2,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_1,p:{y:659.25,x:1201.45}},{t:this.instance,p:{x:1215.65,y:620.75}}]},26).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_1,p:{y:659,x:1201.45}},{t:this.instance,p:{x:1215.7,y:621.1}}]},39).to({state:[{t:this.shape},{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_1,p:{y:659,x:1201.45}},{t:this.instance,p:{x:1215.7,y:621.1}}]},13).to({state:[{t:this.shape_1},{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_1,p:{y:659.25,x:1201.35}},{t:this.instance,p:{x:1215.6,y:621.35}}]},4).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_17,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_14,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_3,p:{x:735.8,y:689,rotation:0}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_1,p:{y:659.25,x:1201.5}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_27,p:{x:1215.95,y:603.15}},{t:this.instance_26,p:{x:1242.25,y:573.5}}]},13).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_19,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_12,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_5,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_1,p:{y:659.25,x:1201.45}},{t:this.instance,p:{x:1215.7,y:621.35}},{t:this.instance_27,p:{x:1216.9,y:603.3}},{t:this.instance_26,p:{x:1243.2,y:573.65}}]},51).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_20,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_11,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_6,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_1,p:{y:659.25,x:1201.5}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_27,p:{x:1216.8,y:603.3}},{t:this.instance_26,p:{x:1243.1,y:573.65}}]},28).to({state:[{t:this.instance_22,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_9,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_8,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_1,p:{y:659.25,x:1201.5}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_27,p:{x:1217.4,y:603.25}},{t:this.instance_26,p:{x:1243.7,y:573.6}}]},16).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_23,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_18,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_13,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_4,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_1,p:{y:659.25,x:1201.5}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_27,p:{x:1216.8,y:603.85}},{t:this.instance_26,p:{x:1243.1,y:574.2}}]},20).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_32,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_25,p:{x:180.25,y:659.6}},{t:this.instance_16,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_23,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_18,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_15,p:{x:871.45,y:689}},{t:this.instance_13,p:{rotation:180,x:225.35,y:629.65}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_2,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_1,p:{y:659.25,x:1201.5}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_4,p:{x:540.7,y:614.6,rotation:90}},{t:this.instance_27,p:{x:1218,y:602.45}},{t:this.instance_26,p:{x:1244.3,y:572.8}}]},15).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_24,p:{x:374.8}},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_32,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_33,p:{x:180.25,y:659.6}},{t:this.instance_25,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_23,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_21,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_10,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_18,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_16,p:{x:871.45,y:689}},{t:this.instance_13,p:{rotation:180,x:225.35,y:629.65}},{t:this.instance_7,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_15,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_2,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_4,p:{x:540.7,y:614.6,rotation:90}},{t:this.instance_1,p:{y:629.2,x:750.9}},{t:this.instance_27,p:{x:1217.65,y:602.75}},{t:this.instance_26,p:{x:1243.95,y:573.1}}]},5).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_32,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_33,p:{x:180.25,y:659.6}},{t:this.instance_25,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_23,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_18,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_16,p:{x:871.45,y:689}},{t:this.instance_13,p:{rotation:180,x:225.35,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_15,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_2,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_4,p:{x:540.7,y:614.6,rotation:90}},{t:this.instance_1,p:{y:629.2,x:750.9}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_27,p:{x:1217.95,y:602.4}},{t:this.instance_26,p:{x:1244.25,y:572.75}}]},10).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_33,p:{x:180.25,y:659.6}},{t:this.instance_25,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_16,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_15,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_2,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_1,p:{y:629.2,x:750.9}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_27,p:{x:1217.95,y:602.95}},{t:this.instance_26,p:{x:1244.25,y:573.3}}]},5).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_28,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_36,p:{x:180.25,y:659.6}},{t:this.instance_33,p:{x:630.9,y:689.8}},{t:this.instance_17,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_14,p:{rotation:0,x:735.8,y:689}},{t:this.instance_25,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_16,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{x:555.5,y:659,rotation:0}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_15,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_2,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_1,p:{y:569.85,x:449.9}},{t:this.instance_27,p:{x:1217.65,y:603.3}},{t:this.instance_26,p:{x:1243.95,y:573.65}}]},10).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_30,p:{x:195.15,y:689.9}},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_37,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_36,p:{x:180.25,y:659.6}},{t:this.instance_33,p:{x:630.9,y:689.8}},{t:this.instance_28,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_20,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_11,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_17,p:{rotation:0,x:735.8,y:689}},{t:this.instance_25,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_16,p:{x:299.75,y:629.7}},{t:this.instance_14,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_15,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_6,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_2,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_1,p:{y:569.85,x:449.9}},{t:this.instance_3,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_27,p:{x:1218.25,y:602.7}},{t:this.instance_26,p:{x:1244.55,y:573.05}}]},5).to({state:[{t:this.instance_31,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_37,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_36,p:{x:180.25,y:659.6}},{t:this.instance_33,p:{x:630.9,y:689.8}},{t:this.instance_28,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_22,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_9,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_17,p:{rotation:0,x:735.8,y:689}},{t:this.instance_25,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_16,p:{x:299.75,y:629.7}},{t:this.instance_14,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_15,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_8,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_2,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_1,p:{y:569.85,x:449.9}},{t:this.instance_3,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_27,p:{x:1218.25,y:603}},{t:this.instance_26,p:{x:1244.55,y:573.35}}]},10).to({state:[{t:this.instance_39,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_37,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_36,p:{x:180.25,y:659.6}},{t:this.instance_33,p:{x:630.9,y:689.8}},{t:this.instance_28,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_31,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_22,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_17,p:{rotation:0,x:735.8,y:689}},{t:this.instance_25,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_16,p:{x:299.75,y:629.7}},{t:this.instance_14,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_15,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_9,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_2,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_1,p:{y:569.85,x:449.9}},{t:this.instance_3,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_27,p:{x:1218.5,y:602.45}},{t:this.instance_26,p:{x:1244.8,y:572.8}}]},10).to({state:[{t:this.instance_39,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_37,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_40,p:{x:180.25,y:659.6}},{t:this.instance_36,p:{x:630.9,y:689.8}},{t:this.instance_28,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_31,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_22,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_17,p:{rotation:0,x:735.8,y:689}},{t:this.instance_33,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_25,p:{x:299.75,y:629.7}},{t:this.instance_14,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_16,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_9,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_15,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_2,p:{x:449.9,y:569.85}},{t:this.instance_3,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_1,p:{y:629.4,x:991.45}},{t:this.instance_27,p:{x:1218.55,y:602.4}},{t:this.instance_26,p:{x:1244.85,y:572.75}}]},10).to({state:[{t:this.instance_39,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_35,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_41},{t:this.instance_40,p:{x:180.25,y:659.6}},{t:this.instance_36,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_32,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_31,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_22,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_23,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_33,p:{x:871.45,y:689}},{t:this.instance_18,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_25,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_16,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_9,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_13,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_15,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_4,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_2,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_1,p:{y:629.4,x:991.45}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_27,p:{x:1218.8,y:602.45}},{t:this.instance_26,p:{x:1245.1,y:572.8}}]},5).to({state:[{t:this.instance_39,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_42,p:{x:105.25}},{t:this.instance_41},{t:this.instance_40,p:{x:180.25,y:659.6}},{t:this.instance_36,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_35,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_31,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_22,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_32,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_33,p:{x:871.45,y:689}},{t:this.instance_23,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_25,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_16,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_9,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_18,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_15,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_13,p:{rotation:180,x:675.8,y:629.25}},{t:this.instance_2,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_1,p:{y:629.4,x:991.45}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_4,p:{x:781,y:584.05,rotation:-90}},{t:this.instance_27,p:{x:1218.85,y:602.4}},{t:this.instance_26,p:{x:1245.15,y:572.75}}]},15).to({state:[{t:this.instance_39,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_43},{t:this.instance_41},{t:this.instance_40,p:{x:180.25,y:659.6}},{t:this.instance_36,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_31,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_22,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_33,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_25,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_16,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_9,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_15,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_2,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_1,p:{y:629.4,x:991.45}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_27,p:{x:1218.8,y:602.7}},{t:this.instance_26,p:{x:1245.1,y:573.05}}]},3).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_29,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_43},{t:this.instance_41},{t:this.instance_40,p:{x:180.25,y:659.6}},{t:this.instance_36,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_19,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_12,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_33,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_25,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_5,p:{rotation:180,x:886.4,y:659}},{t:this.instance_16,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_15,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_2,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_1,p:{y:629.4,x:991.45}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_27,p:{x:1218.5,y:602.4}},{t:this.instance_26,p:{x:1244.8,y:572.75}}]},17).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_40,p:{x:180.25,y:659.6}},{t:this.instance_36,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_33,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_25,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_16,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_15,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_2,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_1,p:{y:629.4,x:991.45}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_27,p:{x:1218.55,y:602.15}},{t:this.instance_26,p:{x:1244.85,y:572.5}}]},10).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_46},{t:this.instance_40,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_36,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_33,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_25,p:{x:1201.5,y:659.25}},{t:this.instance,p:{x:1215.75,y:621.35}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_16,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_15,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_2,p:{x:991.45,y:629.4}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_1,p:{y:509.15,x:811.15}},{t:this.instance_27,p:{x:1218.55,y:602.7}},{t:this.instance_26,p:{x:1244.85,y:573.05}}]},5).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_46},{t:this.instance_40,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_36,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_33,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_25,p:{x:1201.5,y:659.25}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_16,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_15,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_2,p:{x:991.45,y:629.4}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_1,p:{y:509.15,x:811.15}},{t:this.instance_47}]},9).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_46},{t:this.instance_40,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_36,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_33,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_25,p:{x:1201.5,y:659.25}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_16,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_15,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_2,p:{x:991.45,y:629.4}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_1,p:{y:509.15,x:811.15}},{t:this.instance_48}]},5).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_46},{t:this.instance_40,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_36,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_33,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_25,p:{x:1201.5,y:659.25}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_16,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_15,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_2,p:{x:991.45,y:629.4}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_1,p:{y:509.15,x:811.15}},{t:this.instance_48}]},6).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_46},{t:this.instance_40,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_36,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_33,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_25,p:{x:1201.5,y:659.25}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_16,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_15,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_2,p:{x:991.45,y:629.4}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_1,p:{y:509.15,x:811.15}},{t:this.instance_48}]},5).to({state:[{t:this.instance_44},{t:this.instance_34},{t:this.instance_38},{t:this.instance_45},{t:this.instance_43},{t:this.instance_41},{t:this.instance_46},{t:this.instance_40,p:{x:630.9,y:689.8}},{t:this.instance_37,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_42,p:{x:946.45}},{t:this.instance_29,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_30,p:{x:555.5,y:689.1}},{t:this.instance_24,p:{x:1006.4}},{t:this.instance_39,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_31,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_21,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_20,p:{x:1096.75,y:689.3}},{t:this.instance_19,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_35,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_28,p:{rotation:0,x:735.8,y:689}},{t:this.instance_36,p:{x:871.45,y:689}},{t:this.instance_32,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_10,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_33,p:{x:299.75,y:629.7}},{t:this.instance_17,p:{rotation:0,x:555.5,y:659}},{t:this.instance_12,p:{x:886.4,rotation:180,y:659}},{t:this.instance_25,p:{x:1201.5,y:659.25}},{t:this.instance_11,p:{x:405.1,y:629.1}},{t:this.instance_22,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_23,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_16,p:{x:750.9,y:629.2}},{t:this.instance_7,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_18,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_15,p:{x:449.9,y:569.85}},{t:this.instance_14,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_6,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_9,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_2,p:{x:991.45,y:629.4}},{t:this.instance_3,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_13,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_4,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_8,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_5,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_1,p:{y:509.15,x:811.15}},{t:this.instance_48},{t:this.playAgain}]},41).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Tetris = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,45,60,71,86,102,117,191,206,219,234,236,250,255,270,272,277,285,286,290,291,300,301,305,306,315,320,325,330,336,340,341,350,355,356,359,370,373,376,386,390,400,405,421,473];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.startButton = this.background.startButton;
		var self=this;
		self.stop();
		
		self.startButton.addEventListener("click", play);
		
		function play() {
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.startButton = undefined;
		playSound("gameoverwav");
	}
	this.frame_45 = function() {
		playSound("clearwav");
	}
	this.frame_60 = function() {
		playSound("fallwav");
	}
	this.frame_71 = function() {
		playSound("clearwav");
	}
	this.frame_86 = function() {
		playSound("fallwav");
	}
	this.frame_102 = function() {
		playSound("clearwav");
	}
	this.frame_117 = function() {
		playSound("fallwav");
	}
	this.frame_191 = function() {
		playSound("clearwav");
	}
	this.frame_206 = function() {
		playSound("fallwav");
	}
	this.frame_219 = function() {
		playSound("clearwav");
	}
	this.frame_234 = function() {
		playSound("fallwav");
	}
	this.frame_236 = function() {
		playSound("clearwav");
	}
	this.frame_250 = function() {
		playSound("fallwav");
	}
	this.frame_255 = function() {
		playSound("clearwav");
	}
	this.frame_270 = function() {
		playSound("fallwav");
	}
	this.frame_272 = function() {
		playSound("clearwav");
	}
	this.frame_277 = function() {
		playSound("clearwav");
	}
	this.frame_285 = function() {
		playSound("fallwav");
	}
	this.frame_286 = function() {
		playSound("clearwav");
	}
	this.frame_290 = function() {
		playSound("fallwav");
	}
	this.frame_291 = function() {
		playSound("clearwav");
	}
	this.frame_300 = function() {
		playSound("fallwav");
	}
	this.frame_301 = function() {
		playSound("clearwav");
	}
	this.frame_305 = function() {
		playSound("fallwav");
	}
	this.frame_306 = function() {
		playSound("clearwav");
	}
	this.frame_315 = function() {
		playSound("fallwav");
		playSound("clearwav");
	}
	this.frame_320 = function() {
		playSound("fallwav");
	}
	this.frame_325 = function() {
		playSound("clearwav");
	}
	this.frame_330 = function() {
		playSound("fallwav");
	}
	this.frame_336 = function() {
		playSound("clearwav");
	}
	this.frame_340 = function() {
		playSound("fallwav");
	}
	this.frame_341 = function() {
		playSound("clearwav");
	}
	this.frame_350 = function() {
		playSound("fallwav");
	}
	this.frame_355 = function() {
		playSound("fallwav");
	}
	this.frame_356 = function() {
		playSound("clearwav");
	}
	this.frame_359 = function() {
		playSound("clearwav");
	}
	this.frame_370 = function() {
		playSound("fallwav");
	}
	this.frame_373 = function() {
		playSound("fallwav");
	}
	this.frame_376 = function() {
		playSound("clearwav");
	}
	this.frame_386 = function() {
		playSound("clearwav");
	}
	this.frame_390 = function() {
		playSound("fallwav");
		playSound("clearwav");
	}
	this.frame_400 = function() {
		playSound("fallwav");
	}
	this.frame_405 = function() {
		playSound("fallwav");
	}
	this.frame_421 = function() {
		playSound("successwav");
	}
	this.frame_473 = function() {
		this.playAgain = this.background.playAgain;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		
		self.playAgain.addEventListener("click",replay);
		function replay() {
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(44).call(this.frame_45).wait(15).call(this.frame_60).wait(11).call(this.frame_71).wait(15).call(this.frame_86).wait(16).call(this.frame_102).wait(15).call(this.frame_117).wait(74).call(this.frame_191).wait(15).call(this.frame_206).wait(13).call(this.frame_219).wait(15).call(this.frame_234).wait(2).call(this.frame_236).wait(14).call(this.frame_250).wait(5).call(this.frame_255).wait(15).call(this.frame_270).wait(2).call(this.frame_272).wait(5).call(this.frame_277).wait(8).call(this.frame_285).wait(1).call(this.frame_286).wait(4).call(this.frame_290).wait(1).call(this.frame_291).wait(9).call(this.frame_300).wait(1).call(this.frame_301).wait(4).call(this.frame_305).wait(1).call(this.frame_306).wait(9).call(this.frame_315).wait(5).call(this.frame_320).wait(5).call(this.frame_325).wait(5).call(this.frame_330).wait(6).call(this.frame_336).wait(4).call(this.frame_340).wait(1).call(this.frame_341).wait(9).call(this.frame_350).wait(5).call(this.frame_355).wait(1).call(this.frame_356).wait(3).call(this.frame_359).wait(11).call(this.frame_370).wait(3).call(this.frame_373).wait(3).call(this.frame_376).wait(10).call(this.frame_386).wait(4).call(this.frame_390).wait(10).call(this.frame_400).wait(5).call(this.frame_405).wait(16).call(this.frame_421).wait(52).call(this.frame_473).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(412,517.35,0.5572,0.5572,0,0,0,0.2,0.2);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0,regY:0,x:411.9,y:517.25},0).wait(168).to({scaleX:0.5706,scaleY:0.5706,x:422.4992,y:512.4344},0).wait(1).to({scaleX:0.5839,scaleY:0.5839,x:433.0984,y:507.6187},0).wait(1).to({scaleX:0.5973,scaleY:0.5973,x:443.6975,y:502.8031},0).wait(1).to({scaleX:0.6106,scaleY:0.6106,x:454.2967,y:497.9875},0).wait(1).to({scaleX:0.624,scaleY:0.624,x:464.8959,y:493.1718},0).wait(1).to({scaleX:0.6373,scaleY:0.6373,x:475.4951,y:488.3562},0).wait(1).to({scaleX:0.6507,scaleY:0.6507,x:486.0943,y:483.5406},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:496.6935,y:478.7249},0).wait(1).to({scaleX:0.6774,scaleY:0.6774,x:507.2926,y:473.9093},0).wait(1).to({scaleX:0.6907,scaleY:0.6907,x:517.8918,y:469.0937},0).wait(1).to({scaleX:0.7041,scaleY:0.7041,x:528.491,y:464.278},0).wait(1).to({scaleX:0.7174,scaleY:0.7174,x:539.0902,y:459.4624},0).wait(1).to({scaleX:0.7308,scaleY:0.7308,x:549.6894,y:454.6468},0).wait(1).to({scaleX:0.7441,scaleY:0.7441,x:560.2885,y:449.8311},0).wait(1).to({scaleX:0.7575,scaleY:0.7575,x:570.8877,y:445.0155},0).wait(1).to({scaleX:0.7708,scaleY:0.7708,x:581.4869,y:440.1999},0).wait(1).to({scaleX:0.7842,scaleY:0.7842,x:592.0861,y:435.3842},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,x:602.6853,y:430.5686},0).wait(1).to({scaleX:0.8109,scaleY:0.8109,x:613.2845,y:425.753},0).wait(1).to({scaleX:0.8242,scaleY:0.8242,x:623.8836,y:420.9373},0).wait(1).to({scaleX:0.8375,scaleY:0.8375,x:634.4828,y:416.1217},0).wait(1).to({scaleX:0.8509,scaleY:0.8509,x:645.082,y:411.3061},0).wait(1).to({scaleX:0.8642,scaleY:0.8642,x:655.6812,y:406.4904},0).wait(1).to({scaleX:0.8776,scaleY:0.8776,x:666.2804,y:401.6748},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:676.8795,y:396.8592},0).wait(1).to({scaleX:0.9043,scaleY:0.9043,x:687.4787,y:392.0435},0).wait(1).to({scaleX:0.9176,scaleY:0.9176,x:698.0779,y:387.2279},0).wait(34).to({scaleX:0.8949,scaleY:0.8949,x:683.8972,y:395.4089},0).wait(1).to({scaleX:0.8722,scaleY:0.8722,x:669.7164,y:403.5899},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:655.5357,y:411.771},0).wait(1).to({scaleX:0.8268,scaleY:0.8268,x:641.3549,y:419.952},0).wait(1).to({scaleX:0.804,scaleY:0.804,x:627.1742,y:428.133},0).wait(1).to({scaleX:0.7813,scaleY:0.7813,x:612.9934,y:436.314},0).wait(1).to({scaleX:0.7586,scaleY:0.7586,x:598.8127,y:444.495},0).wait(1).to({scaleX:0.7359,scaleY:0.7359,x:584.6319,y:452.676},0).wait(1).to({scaleX:0.7131,scaleY:0.7131,x:570.4512,y:460.857},0).wait(1).to({scaleX:0.6904,scaleY:0.6904,x:556.2704,y:469.0381},0).wait(1).to({scaleX:0.6677,scaleY:0.6677,x:542.0897,y:477.2191},0).wait(1).to({scaleX:0.645,scaleY:0.645,x:527.9089,y:485.4001},0).wait(1).to({scaleX:0.6222,scaleY:0.6222,x:513.7282,y:493.5811},0).wait(1).to({scaleX:0.5995,scaleY:0.5995,x:499.5474,y:501.7621},0).wait(1).to({scaleX:0.5768,scaleY:0.5768,x:485.3667,y:509.9431},0).wait(1).to({scaleX:0.5541,scaleY:0.5541,x:471.1859,y:518.1242},0).wait(1).to({scaleX:0.5313,scaleY:0.5313,x:457.0052,y:526.3052},0).wait(61).to({x:470.7031,y:526.3406},0).wait(1).to({x:484.401,y:526.376},0).wait(1).to({x:498.0989,y:526.4114},0).wait(1).to({x:511.7968,y:526.4468},0).wait(1).to({x:525.4948,y:526.4823},0).wait(1).to({x:539.1927,y:526.5177},0).wait(1).to({x:552.8906,y:526.5531},0).wait(1).to({x:566.5885,y:526.5885},0).wait(1).to({x:580.2864,y:526.6239},0).wait(1).to({x:593.9843,y:526.6593},0).wait(1).to({x:607.6823,y:526.6948},0).wait(1).to({x:621.3802,y:526.7302},0).wait(1).to({x:635.0781,y:526.7656},0).wait(1).to({x:648.776,y:526.801},0).wait(1).to({x:662.4739,y:526.8364},0).wait(1).to({x:676.1718,y:526.8718},0).wait(1).to({x:689.8698,y:526.9073},0).wait(1).to({x:703.5677,y:526.9427},0).wait(1).to({x:717.2656,y:526.9781},0).wait(1).to({x:730.9635,y:527.0135},0).wait(1).to({x:744.6614,y:527.0489},0).wait(1).to({x:758.3593,y:527.0843},0).wait(1).to({x:772.0573,y:527.1198},0).wait(1).to({x:785.7552,y:527.1552},0).wait(31).to({x:791.0987,y:527.1503},0).wait(1).to({x:796.4423,y:527.1455},0).wait(1).to({x:801.7858,y:527.1407},0).wait(1).to({x:807.1294,y:527.1358},0).wait(1).to({x:812.4729,y:527.131},0).wait(1).to({x:817.8165,y:527.1261},0).wait(1).to({x:823.16,y:527.1213},0).wait(1).to({x:828.5036,y:527.1165},0).wait(1).to({x:833.8471,y:527.1116},0).wait(1).to({x:839.1907,y:527.1068},0).wait(1).to({x:844.5342,y:527.1019},0).wait(1).to({x:849.8778,y:527.0971},0).wait(1).to({x:855.2213,y:527.0923},0).wait(1).to({x:860.5649,y:527.0874},0).wait(1).to({x:865.9084,y:527.0826},0).wait(1).to({x:871.2519,y:527.0778},0).wait(1).to({x:876.5955,y:527.0729},0).wait(1).to({x:881.939,y:527.0681},0).wait(1).to({x:887.2826,y:527.0632},0).wait(1).to({x:892.6261,y:527.0584},0).wait(1).to({x:897.9697,y:527.0536},0).wait(1).to({x:903.3132,y:527.0487},0).wait(1).to({x:908.6568,y:527.0439},0).wait(1).to({x:914.0003,y:527.039},0).wait(1).to({x:919.3439,y:527.0342},0).wait(1).to({x:924.6874,y:527.0294},0).wait(1).to({x:930.031,y:527.0245},0).wait(1).to({x:935.3745,y:527.0197},0).wait(1).to({x:940.7181,y:527.0149},0).wait(1).to({x:946.0616,y:527.01},0).wait(1).to({x:951.4052,y:527.0052},0).wait(31).to({scaleX:0.5221,scaleY:0.5221,x:957.3056,y:529.7942},0).wait(1).to({scaleX:0.5129,scaleY:0.5129,x:963.206,y:532.5831},0).wait(1).to({scaleX:0.5037,scaleY:0.5037,x:969.1064,y:535.3721},0).wait(1).to({scaleX:0.4944,scaleY:0.4944,x:975.0068,y:538.1611},0).wait(1).to({scaleX:0.4852,scaleY:0.4852,x:980.9073,y:540.9501},0).wait(1).to({scaleX:0.476,scaleY:0.476,x:986.8077,y:543.7391},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:992.7081,y:546.5281},0).wait(1).to({scaleX:0.4575,scaleY:0.4575,x:998.6085,y:549.3171},0).wait(1).to({scaleX:0.4483,scaleY:0.4483,x:1004.5089,y:552.1061},0).wait(1).to({scaleX:0.4391,scaleY:0.4391,x:1010.4093,y:554.8951},0).wait(1).to({scaleX:0.4298,scaleY:0.4298,x:1016.3098,y:557.684},0).wait(1).to({scaleX:0.4206,scaleY:0.4206,x:1022.2102,y:560.473},0).wait(1).to({scaleX:0.4114,scaleY:0.4114,x:1028.1106,y:563.262},0).wait(1).to({scaleX:0.4022,scaleY:0.4022,x:1034.011,y:566.051},0).wait(1).to({scaleX:0.3929,scaleY:0.3929,x:1039.9114,y:568.84},0).wait(1).to({scaleX:0.3837,scaleY:0.3837,x:1045.8118,y:571.629},0).wait(1).to({scaleX:0.3745,scaleY:0.3745,x:1051.7123,y:574.418},0).wait(1).to({scaleX:0.3652,scaleY:0.3652,x:1057.6127,y:577.207},0).wait(1).to({scaleX:0.356,scaleY:0.356,x:1063.5131,y:579.996},0).wait(1).to({scaleX:0.3468,scaleY:0.3468,x:1069.4135,y:582.7849},0).wait(1).to({scaleX:0.3376,scaleY:0.3376,x:1075.3139,y:585.5739},0).wait(1).to({scaleX:0.3283,scaleY:0.3283,x:1081.2143,y:588.3629},0).wait(1).to({scaleX:0.3191,scaleY:0.3191,x:1087.1148,y:591.1519},0).wait(1).to({scaleX:0.3099,scaleY:0.3099,x:1093.0152,y:593.9409},0).wait(1).to({scaleX:0.3007,scaleY:0.3007,x:1098.9156,y:596.7299},0).wait(1).to({scaleX:0.2914,scaleY:0.2914,x:1104.816,y:599.5189},0).wait(1).to({scaleX:0.2822,scaleY:0.2822,x:1110.7164,y:602.3079},0).wait(1).to({scaleX:0.273,scaleY:0.273,x:1116.6168,y:605.0968},0).wait(1).to({scaleX:0.2637,scaleY:0.2637,x:1122.5173,y:607.8858},0).wait(1).to({scaleX:0.2545,scaleY:0.2545,x:1128.4177,y:610.6748},0).wait(1).to({scaleX:0.2453,scaleY:0.2453,x:1134.3181,y:613.4638},0).wait(1).to({scaleX:0.2361,scaleY:0.2361,x:1140.2185,y:616.2528},0).wait(1).to({scaleX:0.2268,scaleY:0.2268,x:1146.1189,y:619.0418},0).wait(1).to({scaleX:0.2176,scaleY:0.2176,x:1152.0193,y:621.8308},0).wait(1).to({scaleX:0.2084,scaleY:0.2084,x:1157.9198,y:624.6198},0).wait(19));

	// blockFalling_obj_
	this.blockFalling = new lib.Scene_1_blockFalling();
	this.blockFalling.name = "blockFalling";
	this.blockFalling.setTransform(-0.1,0.15,1.7947,1.7947,0,0,0,55.2,316.7);
	this.blockFalling.depth = 0;
	this.blockFalling.isAttachedToCamera = 0
	this.blockFalling.isAttachedToMask = 0
	this.blockFalling.layerDepth = 0
	this.blockFalling.layerIndex = 0
	this.blockFalling.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blockFalling).wait(1).to({regY:316.6,scaleX:1.7948,scaleY:1.7948,y:0},0).wait(36).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:605.7,y:55.45},0).wait(25).to({regX:55.2,regY:316.6,scaleX:1.7948,scaleY:1.7948,x:-0.1,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:605.7,y:55.45},0).wait(25).to({regX:55.2,regY:316.6,scaleX:1.7948,scaleY:1.7948,x:-0.1,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:605.7,y:55.45},0).wait(93).to({regX:84,regY:182,scaleX:1.3439,scaleY:1.3439,x:0.05,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:576.95,y:190.05},0).wait(25).to({regX:110.7,regY:56.9,scaleX:1.0898,scaleY:1.0898,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:550.2,y:315.2},0).wait(27).to({regX:113.6,regY:187.8,scaleX:1.359,scaleY:1.359,x:0,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:547.3,y:184.25},0).wait(15).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:544.05,y:37.05},0).wait(19).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:544.05,y:37.05},0).wait(19).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:544.05,y:37.05},0).wait(14).to({regX:144.2,regY:335.1,scaleX:1.8821,scaleY:1.8821,x:-0.05,y:0.15},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:516.7,y:37},0).wait(14).to({regX:349.8,regY:335.6,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:311.2,y:36.45},0).wait(19).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:215.25,y:36.2},0).wait(14).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:215.25,y:36.2},0).wait(17).to({regX:531.1,regY:335.8,scaleX:1.8821,scaleY:1.8821,x:0,y:0.1},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:129.85,y:36.3},0).wait(26).to({regX:611.3,regY:335.7,scaleX:1.8821,scaleY:1.8821,x:0,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:49.65,y:36.35},0).wait(71));

	// blockFalling2_obj_
	this.blockFalling2 = new lib.Scene_1_blockFalling2();
	this.blockFalling2.name = "blockFalling2";
	this.blockFalling2.setTransform(-0.1,0.15,1.7947,1.7947,0,0,0,55.2,316.7);
	this.blockFalling2.depth = 0;
	this.blockFalling2.isAttachedToCamera = 0
	this.blockFalling2.isAttachedToMask = 0
	this.blockFalling2.layerDepth = 0
	this.blockFalling2.layerIndex = 1
	this.blockFalling2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.blockFalling2).wait(1).to({regY:316.6,scaleX:1.7948,scaleY:1.7948,y:0},0).wait(265).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:603.75,y:76.65},0).wait(20).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:603.75,y:76.65},0).wait(14).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:603.75,y:76.65},0).wait(14).to({regX:281.2,regY:335.4,scaleX:1.8821,scaleY:1.8821,x:-0.05,y:0},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:439.4,y:76.2},0).wait(14).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:274.95,y:75.8},0).wait(19).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:274.95,y:75.8},0).wait(19).to({regX:515.1,regY:335.8,scaleX:1.8821,scaleY:1.8821,x:0,y:0.1},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:205.55,y:75.9},0).wait(19).to({regX:611.3,regY:335.7,scaleX:1.8821,scaleY:1.8821,x:0,y:0},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:109.35,y:75.95},0).wait(14).to({regX:611.3,regY:335.7,scaleX:1.8821,scaleY:1.8821,x:0,y:0},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:109.35,y:75.95},0).wait(66));

	// person_obj_
	this.person = new lib.Scene_1_person();
	this.person.name = "person";
	this.person.setTransform(312,632.75,1.7947,1.7947,0,0,0,229.1,669.2);
	this.person.depth = 0;
	this.person.isAttachedToCamera = 0
	this.person.isAttachedToMask = 0
	this.person.layerDepth = 0
	this.person.layerIndex = 2
	this.person.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.person).wait(1).to({scaleX:1.7948,scaleY:1.7948,x:312.05,y:632.85},0).wait(163).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:849.1,y:528.35},0).wait(18).to({regX:316.1,regY:652.9,scaleX:1.3439,scaleY:1.3439,x:311.95,y:632.9},0).wait(6).to({regX:353.4,regY:645.8,scaleX:1.2133,scaleY:1.2133,x:312},0).wait(64).to({regX:282.7,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.8},0).wait(3).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:795.5,y:526.35},0).wait(17).to({regX:282.7,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.8},0).wait(8).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:795.5,y:526.35},0).wait(12).to({regX:282.7,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.8},0).wait(3).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:795.5,y:526.35},0).wait(11).to({regX:296.3,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:311.95,y:632.8},0).wait(4).to({regX:351.1,regY:671.4,x:312,y:632.9},0).wait(1).to({regX:364.8,regY:671.5,y:632.95},0).wait(1).to({regX:378.5,x:311.95},0).wait(1).to({regX:392.2,x:312,y:632.85},0).wait(1).to({regX:405.9,regY:671.6,y:632.95},0).wait(1).to({regX:419.6,x:311.95,y:632.85},0).wait(1).to({regX:433.3},0).wait(1).to({regX:447,x:312,y:632.75},0).wait(1).to({regX:460.7,regY:671.7,x:311.95,y:632.9},0).wait(1).to({regX:474.4},0).wait(1).to({regX:488.1,regY:671.8,x:312,y:633},0).wait(1).to({regX:501.8,y:632.9},0).wait(1).to({regX:515.5,regY:671.9,x:311.95,y:632.95},0).wait(1).to({regX:529.2,x:312},0).wait(1).to({regX:542.9,y:632.85},0).wait(1).to({regX:556.6,regY:672,x:311.95,y:632.95},0).wait(1).to({regX:570.3,x:312},0).wait(1).to({regX:584,y:632.85},0).wait(1).to({regX:597.7,regY:672.1,x:311.95,y:632.95},0).wait(1).to({regX:611.4,y:632.9},0).wait(4).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:466.8,y:525.5},0).wait(14).to({regX:611.4,regY:672.1,scaleX:1.8821,scaleY:1.8821,x:311.95,y:632.9},0).wait(12).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:466.8,y:525.5},0).wait(18).to({regX:707.6,regY:672,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.85},0).wait(1).to({regX:712.9,x:312},0).wait(1).to({regX:718.2,x:311.85},0).wait(1).to({regX:723.6,x:311.95,y:632.95},0).wait(1).to({regX:729,x:312.1},0).wait(1).to({regX:734.3,x:311.95},0).wait(1).to({regX:739.6,x:312},0).wait(1).to({regX:745,x:312.05},0).wait(1).to({regX:750.3,x:311.95},0).wait(1).to({regX:755.6,x:311.9},0).wait(2).to({regX:766.4,x:312.1},0).wait(1).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:311.85,y:525.65},0).wait(13).to({regX:777.1,regY:672,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.95},0).wait(3).to({regX:766.2,regY:564.7,scaleX:1,scaleY:1,x:301.15,y:525.65},0).wait(12).to({regX:777.1,regY:672,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.95},0).wait(20).to({regX:928.9,regY:676.6,scaleX:2.6706,scaleY:2.6706,x:312.2},0).wait(2).to({regX:946.7,regY:677.1,scaleX:2.8091,scaleY:2.8091,x:311.95,y:632.75},0).wait(2).to({regX:964.6,regY:677.6,scaleX:2.9626,scaleY:2.9626,x:312.1,y:632.8},0).wait(2).to({regX:982.4,regY:678.1,scaleX:3.134,scaleY:3.134,x:312,y:632.65},0).wait(2).to({regX:1000.3,regY:678.8,scaleX:3.3264,scaleY:3.3264,x:312.05,y:633},0).wait(2).to({regX:1018.1,regY:679.2,scaleX:3.544,scaleY:3.544,x:311.9,y:632.65},0).wait(2).to({regX:1036,regY:679.8,scaleX:3.7919,scaleY:3.7919,x:312.05,y:632.9},0).wait(2).to({regX:1053.8,regY:680.4,scaleX:4.0774,scaleY:4.0774,x:311.95,y:633.05},0).wait(2).to({regX:1071.7,regY:680.9,scaleX:4.409,scaleY:4.409,x:312.15,y:632.95},0).wait(2).to({regX:1089.5,regY:681.5,scaleX:4.7998,scaleY:4.7998,x:311.7,y:633.1},0).wait(19));

	// bubble_obj_
	this.bubble = new lib.Scene_1_bubble();
	this.bubble.name = "bubble";
	this.bubble.setTransform(-0.1,0.15,1.7947,1.7947,0,0,0,55.2,316.7);
	this.bubble.depth = 0;
	this.bubble.isAttachedToCamera = 0
	this.bubble.isAttachedToMask = 0
	this.bubble.layerDepth = 0
	this.bubble.layerIndex = 3
	this.bubble.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bubble).wait(1).to({regY:316.6,scaleX:1.7948,scaleY:1.7948,y:0},0).wait(146).to({_off:true},10).wait(317));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(646,572.45,1.7947,1.7947,0,0,0,415.2,635.6);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 4
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1).to({regY:635.5,scaleX:1.7948,scaleY:1.7948,x:646.05,y:572.35},0).wait(207).to({regX:703.4,regY:582.1,scaleX:1.0898,scaleY:1.0898,x:645.9,y:572.4},0).wait(28).to({regX:588.9,regY:609,scaleX:1.359,scaleY:1.359},0).wait(16).to({regX:460.1,regY:639.1,scaleX:1.8821,scaleY:1.8821,x:645.95},0).wait(55).to({regX:487.4,x:645.9,y:572.3},0).wait(10).to({regX:624.4,regY:639.6,x:645.85,y:572.55},0).wait(5).to({regX:693,regY:639.7,x:646.05,y:572.35},0).wait(10).to({regX:788.9,regY:640,x:646,y:572.5},0).wait(40).to({regX:858.3,regY:639.9,x:645.95,y:572.45},0).wait(3).to({regX:874.2,x:645.75},0).wait(17).to({regX:954.5,regY:639.8,x:645.95,y:572.35},0).wait(29).to({regX:960.3,regY:640.6,scaleX:1.9154,scaleY:1.9154,x:645.85},0).wait(6).to({regX:995.4,regY:645.6,scaleX:2.1426,scaleY:2.1426,x:646,y:572.4},0).wait(5).to({regX:1024.7,regY:649.8,scaleX:2.3776,scaleY:2.3776,y:572.55},0).wait(41).to({regX:1159.1,regY:668.9,scaleX:4.7998,scaleY:4.7998,x:645.8,y:572.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,414.5,652.5,305.5);
// library properties:
lib.properties = {
	id: 'D88338F66BCA1F4099F913D79CDF0B54',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#D6EFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Tetris_atlas_1.png?1598134731976", id:"Tetris_atlas_1"},
		{src:"sounds/clearwav.mp3?1598134732350", id:"clearwav"},
		{src:"sounds/fallwav.mp3?1598134732350", id:"fallwav"},
		{src:"sounds/gameoverwav.mp3?1598134732350", id:"gameoverwav"},
		{src:"sounds/successwav.mp3?1598134732350", id:"successwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D88338F66BCA1F4099F913D79CDF0B54'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Tetris_atlas_1", frames: [[343,71,83,36],[130,0,126,127],[343,109,83,36],[130,129,126,127],[343,147,83,36],[0,130,126,127],[258,0,83,69],[0,0,128,128],[258,71,83,69],[128,258,126,127],[258,142,83,69],[0,259,126,127],[343,0,83,69],[256,258,126,127]]}
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



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Tetris_atlas_1"]);
	this.gotoAndStop(13);
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
	this.instance.setTransform(-20.7,-9.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-32.4,-33.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_12();
	this.instance_2.setTransform(-20.7,-9.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_11();
	this.instance_3.setTransform(-32.4,-33.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_14();
	this.instance_4.setTransform(-20.7,-9.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_13();
	this.instance_5.setTransform(-32.4,-33.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-33.7,63,63.800000000000004);


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
	this.instance.setTransform(381.1,568.7,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},127).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:374.3348}}]},1).to({state:[{t:this.shape_20,p:{x:377.3848}},{t:this.instance}]},1).wait(10));

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
	this.instance_1.setTransform(-77.95,7.45);

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
	this.shape_1.graphics.f("#000000").s().p("AhyCiIgEgCQgCgCgBgEIAAgDQgBgDAFgJIAKgUQAKgTALgOQAIgMAIgJIAZgYQAIgJAHABQAEABACAEQACADgBADQgBAEgFAFIgTASIgNAPQgJAKgIAMIgGALIgIANIgHAQIgDAGIgCADIgDADIgDACIgCAAIgCAAgABmB2IgXgTIAAAAIgfgVIgGgDIgdgRQgJgDgEgFQgGgGAEgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgCAFAAIAIAFQAbAOAYAPIAkAaIAMAJQAGAFABAEQACADgEAFQgDADgEAAQgFAAgGgEgAgaAgIgBgBIAAgEIgBgFIABgFQAIhLADhTIACgNQAEgHAFAAQADgBACADQAFAEgBAKIgLCnIAAAFIgCAFQgCAGgFABIgCAAQgFAAgDgHgAiCgsQgDgCgBgEQAAgGAHgHQAJgJAUgQIAggYQAOgKAMgDQAHgCAEABQAFACABAGQABAFgEAEIgJAEIgUALIgaARQgSAOgOAPQgGAGgEABIgBAAQgDAAgDgDgAB7gvQgEgBgGgGIgWgTIgJgHIgRgKIgbgMIgOgDQgKgDgBgCQgEgDABgHQABgFAHgCQADAAAGACIAQAEQANAEAXAMIAMAHIANAKIAZAWIAGAHQABAGgDAEQgEADgEAAIgCgBg");
	this.shape_1.setTransform(312.0975,639.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhxCiIgEgCQgCgCgBgEIAAgDQgBgEAFgIIAKgUQAKgTALgOQAIgMAIgKIAZgXQAIgJAHACQAEAAACADQACAEgBADQgBAEgFAFIgTASIgNAPQgJAKgIAMIgGALIgIAOIgHAPIgDAGIgCAEIgDACIgDACIgCAAIgCAAgABjB1IgXgSIgBgBIgfgTIgGgFQgSgMgLgEQgIgDgEgFQgHgGAEgGQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQADgCAEABIAJADQAaAOAZARIAkAYIALAJQAGAFABAEQACAEgDAEQgDAEgEAAIgBAAQgFAAgFgFgAgZAgIgBgBIAAgEIgBgEIABgGQAIhLADhUIACgMQAEgHAFAAQADgBACADQAFAEgBALIgLCmIAAAFIgCAFQgCAGgFAAIgCABQgFAAgDgHgAiAgtQgDgCgBgEQAAgGAHgGQAJgKAUgQIAggXQAOgKAMgEQAHgCAEACQAFABABAHQABAEgEAFIgJADIgUALIgaARQgSAOgOAPQgGAHgEAAIgBAAQgDAAgDgDgAB6guQgFgBgGgGIgWgUIgJgGQgHgGgJgEIgbgMIgPgEQgJgCgDgCQgDgDABgHQACgFAGgCQADgBAHACIAPAFQAMAEAYALIANAHIAMAKIAZAXQAFADABAEQABAFgDAEQgEADgEAAIgBAAg");
	this.shape_2.setTransform(316.4475,638.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhoCiIgDgBQgDgCgBgFIAAgCQAAgEAEgKIAKgTQAKgTALgOQAIgMAIgKIAagXQAHgIAIABQADAAACADQACAEgBADQgBAEgEAFIgTASIgOAPQgJAKgIAMIgGALIgHAOIgIAOIgDAHIgCAEIgDADIgDABIgCAAIgCAAgABYCWQgFgBgEgGIgRgYIgBgBIgYgbIgGgFIgXgYQgIgFgCgGQgFgHAGgGQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAEgBAFACQADACAEAEQAVAVAUAWIAcAhIAJAMQAEAGABAEQAAAEgEADQgDACgDAAIgCAAgAgQAgIAAgBIgBgEIAAgEIAAgGQAIhLADhUIACgLQAEgIAEAAQAEgBACADQAFAEgBALIgMCmIAAAFIgBAFQgCAGgFAAIgBABQgGAAgDgHgABqgaQgEgCgEgIIgRgYIgHgJQgFgHgIgGIgXgTIgNgHQgJgFgBgDQgCgDACgHQADgFAHAAQACABAHAEIANAIQAMAGATASIALALIAJAMIATAcIADAIQAAAGgEADIgGABIgEgBgAhzgwQgDgDgBgEQAAgGAGgGQAKgKATgQIAhgXQAOgKAMgDQAHgDADACQAFACACAFQABAGgFADIgJAEIgUALIgZASQgSANgOAPQgGAGgEABIgCAAQgDAAgCgCg");
	this.shape_3.setTransform(323.4,637.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABoCUQgEAAgFgGIgRgTIgBAAIgYgWQgCgDgDgBQgOgOgJgFQgFgEgEgFQgGgGACgGQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQADgCAEABIAGAFIAoAhIAcAbIAJAKIAFAJQACAEgCAEQgCADgCAAIgBAAgAhgCQIgDgDQgCgCgBgEIAAgCIgBgCQAAgEAEgIIAKgPQALgOAKgKQAIgIAJgGQALgHAOgGQAIgFAHAEQADACADAFQACAEgBAEQgBADgFACIgTAKIgOAJQgJAGgHAJIgHAIIgHALIgIALIgDAFIAAACIgCABIgDACIgDAAIgEgCgAgHAuIgBgBIAAgEIgBgEIABgGQAIhLAChTIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgCAAQgEAAgDgHgABrghIgRgQIgGgFQgGgEgIgDQgSgGgFgBIgNAAQgIgBgCgBQgCgDACgIQADgGAHgDQADgBAGAAIAOABQALABATAIIALAFIAJAHIATATQADADAAADQAAAGgEAFQgFAFgFABQgEAAgEgGgAh4gtQgEAAgCgEQgDgDABgEQABgFAJgFQALgHAXgLIAmgNQAQgGAMgBQAHAAADADQAFACgBAGQAAAFgFADQgBABgJAAIgWAGIgdAKQgVAJgRALQgHADgEAAIgBAAg");
	this.shape_4.setTransform(332.9708,640.4403);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACBCUQgGAAgHgGIgYgTIgBAAIgigWQgCgDgFgBQgUgOgMgFQgHgEgGgFQgHgGACgGQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBABAAQADgCAGABIAJAFIA3AhIAnAbIANAKQAGAGACADQACAEgDAEQgDADgDAAIAAAAgAh+CBIgEgDQgDgCAAgDIgBgBIgBgCQAAgDAFgGIAOgMQANgMAOgIQALgGALgFQAOgGATgFQAKgDAJADQAFABADAEQADAEgBACQgCADgGACIgZAIIgSAHQgMAFgKAHIgIAHQgHAEgDAEIgKAJIgEAEIgBABIgBACIgEABIgEAAIgGgBgAgOAuIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgMQADgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgEABIgCAAQgGAAgDgHgABrgFQgEgBgEgHIgRgVIgGgHIgNgLQgSgLgFgCIgMgEQgIgCgCgCQgDgEADgHQACgGAGgCIAJACIANAEQALAFATANIALAHIAJALIATAYQADAEAAAEQABAGgFAEQgEADgEAAIgBAAgAiGgJQgCgCABgEQACgHAJgGQALgLAYgRIAmgYQAPgLANgEQAGgBADABQAEACgBAHQAAAFgFAEIgKAEQgFACgRAJIgdATQgWAPgRAQQgJAGgDABQgDAAgDgEg");
	this.shape_5.setTransform(345.6983,643.9403);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABYCZQgFgBgEgHIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKQABAFgEADQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAgAhbCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAgMApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABqABQgEgBgEgIIgRgbIgGgJIgNgOQgSgRgFgDIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgEABIgFgBgAh1gfQgCgCABgFQACgGAHgFQALgLAVgPIAigVQAOgKALgDQAGgBADACQAEACgBAGQgBAFgEAEIgJADQgFABgPAJIgaAQQgUAOgQAOQgHAGgDAAQgDAAgCgDg");
	this.shape_6.setTransform(351.5108,643.8875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhmCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgABaB7IgTgSIgBAAIgdgSQgBgEgFgBQgQgLgLgFQgHgDgEgEQgGgGAGgGQAAgCADgCQAEgCAGAAIAIAEIAvAcQARALAQANIAKAIQAEAGABADQABAEgFAFQgEAEgDAAIgCAAQgFAAgFgEgAgXArIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgMQAEgIAGAAQACgBADADQAEAEgBALIgKCmIgBAFIgBAFQgCAGgFABIgCAAQgFAAgEgHgABygaQgFAAgFgHIgTgUIgHgHIgQgKIgagLIgPgEQgJgBgDgCQgDgEADgHQADgGAHgCQAEgBAGACIAQADQANAEAWAMIANAHIAKAKIAWAWQAEAFABADQAAAGgFAEQgGAEgEAAIgBAAgAiAgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_7.setTransform(356.0604,643.6875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABYCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAgAhbCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgAgMApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABqABQgEgBgEgIIgRgbIgGgJIgNgOQgSgRgFgDIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgEABIgFgBgAh1gfQgCgCABgFQACgGAHgFQALgLAVgPIAigVQAOgKALgDQAGgBADACQAEACgBAGQgBAFgEAEIgJADQgFABgPAJIgaAQQgUAOgQAOQgHAGgDAAQgDAAgCgDg");
	this.shape_8.setTransform(359.6608,644.5375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_9.setTransform(363.2808,644.3375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABXCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhcCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgNApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABpABQgEgBgEgIIgRgbIgGgJIgNgOQgSgRgFgDIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgFABIgEgBgAhtg4IgFgDQgCgCgBgEQAAgEADgEIAGgGQAUgOAXgJIAJgEIAOgBIAQgBQAGgBADACQAGACAAAHQAAAGgGADIgHABIgaACIgQAGIgMAGQgKAGgJAHQgHAFgEAAIgBAAg");
	this.shape_10.setTransform(369.2489,644.0875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABXCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhcCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgNApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABpABQgEgBgEgIIgRgbIgGgJIgNgOIgXgUIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgFABIgEgBgAhtg4IgFgDQgCgCgBgEQAAgEADgEIAGgGQAUgOAXgJIAJgEIAOgBIAQgBQAGgBADACQAGACAAAHQAAAGgGADIgHABIgaACIgQAGIgMAGQgKAGgJAHQgHAFgEAAIgBAAg");
	this.shape_11.setTransform(385.8989,644.2875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_12.setTransform(396.0308,644.4875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABwCZQgDgBgEgFIgCgCIgOgYIgBgBIgWgcQAAgDgEgDQgMgRgIgIIgJgLQgFgIAEgFQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAEgBAEACIAGAHIAkAsIAYAiIAIAMIAEAKIAAAEIgDAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAgAhxB1IgEgBIgDgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBQgBgCAGgGIAOgLQAPgMAOgIIAVgNIAhgPQAKgEAIAAQAEAAADACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCADgGACIgYALIgSAJIgWAOIgJAHIgKAIIgKAIIgEAEIgBABIgCABIgEACIgEABIgFAAgAALApIAAgBIgBgEIAAgEIAAgGQAIhLADhTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgFAAgEgHgABvgEQgEgCgCgHIgLgYIgEgIIgLgMQgOgOgEgDIgLgGQgIgEgBgCQgCgFAFgGQADgFAHAAQADAAAFADIAMAGQAKAHAPAQIAJAJIAGAMQAFAJAHARQACAFAAAEQgBAGgGADQgEABgDAAIgDAAgAh9g5IgCgDQAAgCADgDQADgEAHgEIANgGQAigPAhgJIANgDIAPgCIAQgBQAHgBABACQAEADgHAGQgHAHgIACIgIACIgbABIgXAHIgSAGQgQAFgQAHQgMAFgEAAIgBAAg");
	this.shape_13.setTransform(417.88,640.6875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah8ClIgEgCQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgCgCAFgKIALgTQAMgTAMgPIATgWIAfgeQAJgIAJgCQAFgCAFACQACADgBACQgBAEgGAFIgXAWIgQARQgLALgIAMIgHAMIgJAOIgIANQgBAFgBABIgCACIgBACIgEAEIgDADQgDgBgDABIgEABIgBAAgABZB+QgEgBgDgEIgCgCIgOgTIgCAAIgVgXQgBgCgDgCQgNgOgIgGIgJgJQgEgGAEgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAFIAjAjIAZAcIAHAJIAEAIIAAADIgDAEIgEABIgBAAgAgLAdIgBgBIAAgEIgBgEIABgGQAGg/AEhFIgDAEQgHAJgIAFIgIAEIgbAJIgWANIgRAMIgfAWQgOALgDAAIgCgEIADgHQAEgFAHgHIANgKQAhgaAggTIANgHIAPgFIAPgGQAFgCACABIABgSIABgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgACEgfQgEgCgGgHIgWgYIgIgIIgSgMIgagRIgOgGQgKgEgCgCQgEgFABgGQABgFAHAAQADAAAHADIAOAGQAOAHAWAQIAOAJIAMAMIAZAaQAFAFABAEQACAGgEADQgDACgDAAIgEgBg");
	this.shape_14.setTransform(413.2308,642.1708);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah2ClIgEgCQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAABAAQAAgBAAAAQgCgCAFgKIALgTQAMgTAMgPIATgWIAfgeQAJgIAJgCQAFgCAFACQACADgBACQgBAEgGAFIgXAWIgQARQgLALgIAMIgHAMIgJAOIgIANQgBAFgBABIgCACIgBACIgEAEIgDADQgDgBgDABIgEABIgBAAgABfCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAgFAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgCAAQgEAAgDgHgABuAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh1gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAEABgBAIIgFAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_15.setTransform(405.2813,642.9208);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABcCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAhwB7QgCgEAAgEQgBgPAFgNQAGgNALgJQAGgFAKgFQAggRARgGQAJgDAEABQAFADABAFQABAFgEADIgHAEQgQAFghASIgOAJQgNALAAASIAAAKQgCAFgGABIgCAAQgEAAgDgEgAgIAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh4gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_16.setTransform(405.585,642.9125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABcCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAhkCiQgFgDgBgGQgBgIAGgKQAgg4AmgtQAFgGAEgCQAGAAADAEQAEAFgBAFQgBAGgGAGQgVAXgjA2QgJAPgEAIIgFAIQgDADgDAAIgDgBgAgIAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh4gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_17.setTransform(400.335,642.9125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABjCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCgBgAh+B4QgCgDAAgGQgBgQAEgIQAGgNAYgLQAigPAMgDIAegIQAMgEAGADQACACABAEQABAFgDADQgBADgGACIgtAMIgeAMIgKAFQgNAGgCAHIgBALQAAAHgCAEQgCAEgGABQgFAAgDgEgAgBAdIgBgBIAAgEIgBgEIABgGQAFg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgCAAQgFAAgCgHgAByAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgDABQgDAAgEgCgAhxgTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAEADQAFABgBAIIgFAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_18.setTransform(393.015,642.9125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABcCkQgEgBgDgFIgCgDIgOgcIgCAAQgDgGgSgbQgBgEgDgDQgNgTgIgKIgJgNQgEgJAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA0QANATAMAVIAHAOIAEALIAAAFIgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBgAhJCeQgEgBgBgEQgCgEAEgJIAMgdQAPgjAVghQAEgGADgCQAFgBAFADQAEADgBAFQAAADgDAGQgaAmgUA2QgEALgFACIgDAAIgEgBgAgIAdIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrAAQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAGgFABIgEABQgDAAgDgCgAh4gTQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_19.setTransform(386.735,642.9125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag8CMIgLgLIgDgEQgHgKAFgKQACgHAIgGIAhgiIAJgGQAFgBADADQAEADgBAGQAAADgFAGIgVAUIgRATQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIABACQAHAIAGAEIAEAEQADAFgCAFQgCAFgGABIgBAAQgFAAgHgHgABCCRQgCgBgDgEIgCgCIgKgUIgBgBIgRgXQAAgDgDgCIgPgVIgHgKQgDgGADgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQACgBAEACIAEAFIAbAmQAKANAJAPIAGAKIADAJIAAADIgDAEIgDABIgBAAgAgPAwIAAgBIgBgEIAAgFIAAgFQAHg+ADhEIAAgCIAAgJIABAAIAAgSIACgMQADgHAGAAQADgBADADQAEAEgBAKIgLCnIgBAFIgBAFQgCAGgEAAIgCAAQgFAAgEgGgABlASQgEgDgEgIIgPgcIgGgKIgOgQQgQgTgFgEIgMgKIgKgJQgCgFADgGQACgEAHABIAIAGIANAJQALAKARAWIAMAMIAIAPIARAeQAEAHAAAEQAAAGgFABIgDABQgDAAgDgCgAhwgLQgDgDABgEQACgGAHgDIAMgCQASgCAUgHQAEgBABgBIADgEQAIgMAFgQIAHgXQACgFACgCQAFgEAGADQAFADAAAGIgBAHIgIAXQgEAPgFAIIgHALQgEAIgCABIgJACIgTAFIggAHIgIABQgEgBgCgEg");
	this.shape_20.setTransform(382.5857,645.2892);

	this.instance_1 = new lib.personJumpLeft("synched",0);
	this.instance_1.setTransform(379.85,632);
	this.instance_1._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhgCjIgDgFIAAgFIAEgLIAHgOQAMgVANgTIAjg0IAHgHQAEgCADABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAEAFgEAJIgJANQgIAKgNATQgDADgBAEQgSAbgDAGIgCAAIgOAcIgCADQgDAFgEABIgBABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgABDCfQgFgCgEgLQgUg2gagmQgDgGAAgDQgBgFAEgDQAFgDAFABQADACAEAGQAVAhAPAjIAMAdQAEAJgCAEQgBAEgEABIgEABIgDAAgAAAAkQgFgBgCgGIgCgFIAAgFIgMimQgBgLAFgEQADgDADABQAFAAAEAIIACAMIAAASIAAAAIAAAIIAAACQAEBEAGA+IABAGIgBAEIAAAEIgBABQgDAHgFAAIgBAAgAh0ABQgFgBAAgGQABgEADgGIARggIAJgOIALgNQASgVALgKIAMgJIAIgGQAIgCACAFQADAFgDAGIgKAIIgMALQgEADgRATIgOARIgGAJIgPAeQgEAIgDACQgDACgDAAIgEgBgABngTIgfgTIgOgJIgMgMQgVgTgJgLIgIgNIgGgIQgBgIAFgBQAFgDAGADQACACAGAIIAKAMQADAFASARIAQAPIAJAHIAdAQQAHAFADADQADAGgCAEQgCAFgGAAQgEgBgGgEg");
	this.shape_21.setTransform(314.165,582.9625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag1CQQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIADgIIAFgKIARgbIAZglIAFgEIAEgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQADADgDAHIgGAJQgFAGgJAOQgCACgBADIgPAXIgBAAIgJATIgCACIgFAFIgBABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAA3COQgDgCAAgGIABgIIADgSIAAgEQAAgCgDgDIgSgSIgKgLQgDgFABgCQAAgEADgCQAEgCADADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIACAEIAXAWIAKALQAEAGgCADIgCADIgCAFIgCARQAAAGgBABQgBAEgDAAIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAQA3QgFAAgCgGIgCgFIAAgFIgLinQgBgKAFgEQACgDADABQAFAAAEAHIACAMIABASIAAAAIAAAJIAAACQAEBEAGA+IABAFIgBAFIAAAEIgBABQgDAGgFAAIgCAAgAhjAUQgFgBAAgGQABgEADgHIARgeIAJgPIALgMQASgWALgKIAMgJIAIgGQAIgBACAEQADAGgDAFIgKAJIgMAKQgEAEgRATIgOAQIgGAKIgPAcQgEAIgDADQgDACgDAAIgEgBgABZgEIgcgEQgMgFgJgMQgHgKgGgPIgDgHIgDgNQgEgPABgFQAAgHADgDQAEgEAEABQAFABADAFIABAIQACAXANAXQAFAJAEADQAFAEAJABIAQACQAKACACAHQABADgCAEQgCADgDABIgFABIgEgBg");
	this.shape_22.setTransform(312.4667,584.6268);

	this.instance_2 = new lib.personJumpRight("synched",0);
	this.instance_2.setTransform(312.5,572.1);
	this.instance_2._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABPCnQgGgDgFgMQgXg/gegsQgEgHAAgDQgBgGAFgEQAFgDAGABQADACAGAIQAYAlASApIAOAiQAEALgCAEQgCAEgEACIgEABIgEAAgAhgCkIgDgGIAAgEIAEgMIAHgPIAZgpIAjg2IAHgHQAEgCADABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAEAFgEAKIgJANQgIAKgNAUQgDADgBAEIgVAiIgCABIgOAcIgCADQgDAGgEABIgBABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAAAAiQgFgBgCgGIgCgFIAAgFIgMimQgBgLAFgEQADgDADABQAFAAAEAIIACAMIAAASIAAAAIAAAIIAAACQAEBEAGA+IABAGIgBAEIAAAEIgBABQgDAHgFAAIgBAAgAh0AAQgFgBAAgHQABgEADgGIARggIAJgOIALgNQASgVALgKIAMgJIAIgGQAIgCACAFQADAFgDAGIgKAIIgMALQgEADgRATIgOARIgGAJIgPAeQgEAIgDACQgDACgDAAIgEAAgABngVIgfgTIgOgJIgMgMQgVgTgJgLIgIgNIgGgIQgBgIAFgBQAFgDAGADQACACAGAIIAKAMQADAFASARIAQAPIAJAHIAdAQQAHAFADADQADAGgCAEQgCAFgGAAQgEgBgGgEg");
	this.shape_23.setTransform(439.565,582.0825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_24.setTransform(599.6808,583.8875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhXCVIgBgBIgBgBQgBgCACgHIAHgQQAGgPAIgNIANgTIAVgYQAGgIAIgCQAEgBADABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgFAFIgQASIgLAOQgHAKgFAKIgEAJIgFAMIgFALIgBAFIgBABIAAACIgDADIgDACIgEACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgABfByQgEgDgCgHQgIgXABgKQAAgFgBAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgZgFgbgBIgIgBQgGgEAAgFQAAgGAGgDQACgBAGAAQAWAAAfAGQALACAEADQAGAFACAIIACAQQAAAJAFAKIACAJQAAAGgFADIgFABQgDAAgCgCgAgIArIAAgBIgBgEIAAgEIAAgGQAIhLAChTIACgMQAEgIAGAAQADgBADADQAEAEgBALIgLCmIgBAFIgBAFQgCAGgFABIgCAAQgEAAgEgHgABogXQgDAAgGgEQgHgFgOgFIgVgJIgHgEQgHgFgDgGQgHgJgCgFIgCgQQgEgLABgEQACgFAGgBQAGgCAEAFQACACABAHIADAMQAAAGADAFQABAEADADQAEAEAKAEQAdAMAJAFQAJAEABAGQABAFgDAEQgDADgFAAIgBAAgAhxgdQgCgCABgFQACgGAIgFQAKgLAVgPIAjgVQAOgKALgDQAFgBAEACQADACgBAGQAAAFgFAEIgJADQgEABgQAJIgaAQQgTAOgQAOQgIAGgDAAQgDAAgCgDg");
	this.shape_25.setTransform(612.3808,584.0875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABXCZQgEgBgDgFIgCgCIgOgYIgCgBIgVgcQgBgDgDgDQgNgRgIgIIgJgLQgEgIAEgFQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQADgBAEACIAHAHIAjAsIAZAiIAHAMIAEAKIAAAEIgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhcCTIgBgBIgBgBQgCgCADgHIAGgQQAHgPAIgNIAMgTIAVgYQAHgIAHgCQAEgBAEABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEAFIgQASIgLAOQgHAKgFAKIgFAJIgFAMIgEALIgCAFIAAABIgBACIgDADIgCACIgFACIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgAgNApIgBgBIAAgEIgBgEIABgGQAIhLADhTIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgEABIgCAAQgFAAgDgHgABpABQgEgBgEgIIgRgbIgGgJIgNgOIgXgUIgMgIQgIgFgCgDQgDgEADgHQACgEAGAAQADAAAGAEIANAIQALAIATATIALALIAJANIATAeQADAFAAAEQABAGgFACIgFABIgEgBgAhtg4IgFgDQgCgCgBgEQAAgEADgEIAGgGQAUgOAXgJIAJgEIAOgBIAQgBQAGgBADACQAGACAAAHQAAAGgGADIgHABIgaACIgQAGIgMAGQgKAGgJAHQgHAFgEAAIgBAAg");
	this.shape_26.setTransform(650.2989,584.1375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag1CMQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIADgIIAFgKIARgbIAZglIAFgEIAEgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQADADgDAHIgGAJQgFAGgJAOQgCACgBADIgPAXIgBAAIgJATIgCACIgFAFIgBABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAA3CKQgDgCAAgGIABgIIADgSIAAgEQAAgCgDgDIgSgSIgKgLQgDgFABgCIAAgCQgDADgEgBQgFAAgCgGIgCgFIAAgFIgLinQgBgKAFgEQACgDADABQAFAAAEAHIACAMIABASIAAAAIAAAJIAAACQAEBEAGA+IABAFIgBAFIAAAEIgBABIAAAAIAAAAQAEgCADADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIACAEIAXAWIAKALQAEAGgCADIgCADIgCAFIgCARQAAAGgBABQgBAEgDAAIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAhjAYQgFgBAAgGQABgEADgHIARgeIAJgPIALgMQASgWALgKIAMgJIAIgGQAIgBACAEQADAGgDAFIgKAJIgMAKQgEAEgRATIgOAQIgGAKIgPAcQgEAIgDADQgDACgDAAIgEgBgABZAAIgcgEQgMgFgJgMQgHgKgGgPIgDgHIgDgNQgEgPABgFQAAgHADgDQAEgEAEABQAFABADAFIABAIQACAXANAXQAFAJAEADQAFAEAJABIAQACQAKACACAHQABADgCAEQgCADgDABIgFAAIgEAAg");
	this.shape_27.setTransform(757.3667,584.8268);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag1CMQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIADgIIAFgKIARgbIAZglIAFgEIAEgCQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQADADgDAHIgGAJQgFAGgJAOQgCACgBADIgPAXIgBAAIgJATIgCACIgFAFIgBABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAA3CKQgDgCAAgGIABgIIADgSIAAgEQAAgCgDgDIgSgSIgKgLQgDgFABgCIAAgCQgDADgEgBQgFAAgCgGIgCgFIAAgFIgLinQgBgKAFgEQACgDADABQAFAAAEAHIACAMIABASIAAAAIAAAJIAAACQAEBEAGA+IABAFIgBAFIAAAEIgBABIAAABIAAgBQAEgCADADQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIACAEIAXAWIAKALQAEAGgCADIgCADIgCAFIgCARQAAAGgBABQgBAEgDAAIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAhjAYQgFgBAAgGQABgEADgHIARgeIAJgPIALgMQASgWALgKIAMgJIAIgGQAIgBACAEQADAGgDAFIgKAJIgMAKQgEAEgRATIgOAQIgGAKIgPAcQgEAIgDADQgDACgDAAIgEgBgABZAAIgcgEQgMgFgJgMQgHgKgGgPIgDgHIgDgNQgEgPABgFQAAgHADgDQAEgEAEABQAFABADAFIABAIQACAXANAXQAFAJAEADQAFAEAJABIAQACQAKACACAHQABADgCAEQgCADgDABIgFAAIgEAAg");
	this.shape_28.setTransform(883.4667,525.0268);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhWCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgEAAIgEgBgABcClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgBgBgAgIAbIgBgBIAAgEIgBgEIABgGQAGg+ADhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgCAGgFABIgBAAQgFAAgDgHgABrgCQgDgCgEgIIgPgeIgGgJIgOgRQgRgTgEgDIgMgLIgKgIQgDgGADgFQACgFAIACIAIAGIAMAJQALAKASAVIALANIAJAOIARAgQADAGABAEQAAAHgFABIgEAAQgDAAgDgCgAh4gVQgCgEADgGQADgDAHgFIAdgQIAJgHIAQgPQASgRADgFIAKgMQAGgIACgCQAGgDAFADQAFABgBAIIgGAIIgIANQgJALgVATIgMAMIgOAJIgfATQgGAEgEABQgGAAgCgFg");
	this.shape_29.setTransform(1215.585,600.1825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhdCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgDAAIgFgBgABVClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAgPAbIgBgBIAAgEIgBgEIABgGQAGg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQADgIAFAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgBAGgFABIgCAAQgFAAgDgHgACVg2QgFAAgHgFIgcgSIgKgGIgUgHQgYgIgGgBIgPgDIgNgCQgFgEAAgGQgBgFAHgCIAKABIAQACQAOADAaAJIAQAGIAPAIIAeASIAJAIQADAFgEAEQgCADgFAAIgBAAgAiahNQgGgDABgGQABgEAFgEQAEgBAJAAIAhAAIALgBQALgCALgDIAdgJIAPgFQAIgFAEAAQAGAAADAFQADAEgEAGQgCACgHACIgOAHQgNAGgcAFIgQAFIgRABIgkAAIgEAAIgHAAg");
	this.shape_30.setTransform(1216.2566,600.1825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AheCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgEAAIgEgBgABUClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgBgBgAgQAbIgBgBIAAgEIgBgEIABgGQAGg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAEAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgBAGgFABIgCAAQgFAAgDgHgAAOhtQgDgEAFgGQACgCAIgCIAOgGQAOgFAbgEIARgEIARAAIAjABQAIAAAEACQAFADgCAFQAAAFgGACQgDACgJgBIghgBIgMAAIgVAEQgZAFgFACIgPAFIgMAEQgHAAgDgFgAgihpIgQgBQgOgBgbgKIgPgEIgQgHIgfgSQgHgDgDgDQgDgFAEgFQACgDAHgBQAEABAIAFIAcAQIAKAFIAVAGIAeAIIAQACQAJAAADACQAGADAAAGQABAFgHADIgDAAIgHgBg");
	this.shape_31.setTransform(1216.3856,600.1825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhhC6QgEgCgCgEQgCgFAEgKIAOgjQASgoAYgmQAGgHADgCQAGgCAFAEQAFAEgBAGQAAACgEAHQgeAsgXBAQgFAMgGACIgEABIgEgBgABRC5QgEgCgDgFIgCgDIgOgdIgCAAIgVgiQgBgEgDgDQgNgUgIgKIgJgOQgDgJADgGQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQADAAAEACIAHAHIAjA2IAZApIAHAOIAEAMIAAAFIgDAFQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAgAgTAvIgBgBIAAgEIgBgFIABgFQAGg+AEhEIAAgCIAAgJIAAAAIABgSIACgMQAEgHAEAAQADgBADADQAFAEgBAKIgLCnIAAAFIgCAFQgCAGgFAAIgCABQgFAAgDgHgAANhYQgEgDAEgHQABgCAHgEIAMgKQANgIAZgLIAPgIIAQgFIAigIQAHgBAFAAQAGACAAAFQAAAFgFAEQgCACgJACIghAHIgLADIgTAJQgXALgEAEIgOAJIgKAHIgDAAQgFAAgDgDgAgnhfIgQgGQgNgFgXgQIgOgIIgNgLIgagZIgIgIQgCgGAFgEQADgDAHACIAKAIIAXAYIAJAHIASALIAcAPIAOAHQAJACACACQAFAFgBAGQgBAEgHACQgDAAgGgDg");
	this.shape_32.setTransform(1216.6835,598.22);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AheCmQgEgCgCgEQgCgEAEgLIAOgiQASgpAYglQAGgIADgCQAGgBAFADQAFAEgBAGQAAADgEAHQgeAsgXA/QgFAMgGADIgDAAIgFgBgABUClQgEgBgDgGIgCgDIgOgcIgCgBIgVgiQgBgEgDgDQgNgUgIgKIgJgNQgEgKAEgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQADgBAEACIAHAHIAjA2IAZApIAHAPIAEAMIAAAEIgDAGQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAgQAbIgBgBIAAgEIgBgEIABgGQAGg+AEhEIAAgCIAAgIIAAAAIABgSIACgMQAEgIAEAAQADgBADADQAFAEgBALIgMCmIAAAFIgCAFQgBAGgFABIgCAAQgFAAgDgHgAAOhtQgDgEAFgGQACgCAIgCIAOgGQAOgFAbgEIAQgEIARAAIAjABQAIAAAEACQAFADgBAFQgBAFgFACQgEACgJgBIghgBIgMAAIgUAEQgZAFgFACIgPAFIgMAEQgHAAgDgFgAgihpIgQgBQgOgBgbgKIgPgEIgQgHIgfgSQgHgDgDgDQgDgFAEgFQACgDAHgBQAEABAIAFIAcAQIAKAFIAVAGIAeAIIAQACQAJAAADACQAGADAAAGQABAFgHADIgDAAIgHgBg");
	this.shape_33.setTransform(1217.1606,601.4825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:312,y:616.65,regX:0,regY:0,skewY:0,skewX:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:312,y:616.65,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:29.9978,x:311.9,y:616.6,regX:0,regY:0,skewY:0,skewX:0}}]},57).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.9982,x:311.85,y:613.25,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_2},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:316.45,y:611.5,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_3},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:324.3,y:610.9,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:334.75,y:615.05,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_5},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:346.8,y:618.55,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_6},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:352.8,y:618,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_7},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:356.3,y:618,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_8},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:360.95,y:618.65,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_9,p:{x:363.2808,y:644.3375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:365,y:618.65,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_10,p:{x:369.2489,y:644.0875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:370.4,y:618.2,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_9,p:{x:372.4808,y:644.7375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:374.25,y:619.1,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_11,p:{x:385.8989,y:644.2875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:387.1,y:618.45,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_12,p:{x:396.0308,y:644.4875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:397.8,y:618.85,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_11,p:{x:405.2989,y:644.0875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:406.5,y:618.25,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_12,p:{x:413.9308,y:644.4875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:415.7,y:618.85,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_11,p:{x:424.2989,y:644.5375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:425.5,y:618.7,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_13},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:421.65,y:614.85,regX:0,regY:0,skewY:180,skewX:0}}]},2).to({state:[{t:this.shape_14},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:414.65,y:615.15,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_15},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:407.3,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_15},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:44.9994,x:407.25,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},7).to({state:[{t:this.shape_15},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:29.9996,x:407.25,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},8).to({state:[{t:this.shape_15},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:15.0005,x:407.25,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},8).to({state:[{t:this.shape_15},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:407.25,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},8).to({state:[{t:this.shape_15},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:407.25,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},20).to({state:[{t:this.shape_16},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:407.25,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},19).to({state:[{t:this.shape_17},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:402,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_18},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:395.4,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_19,p:{x:386.735,y:642.9125}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:388.4,y:615.9,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_20},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:383.6,y:620.1,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_19,p:{x:310.835,y:582.9625}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0.0009,x:312.5,y:555.95,regX:0,regY:0,skewY:0,skewX:0}}]},1).to({state:[{t:this.shape_21},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:312.5,y:555.95,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},6).to({state:[{t:this.shape_22,p:{x:312.4667,y:584.6268}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:312.5,y:559.55,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},64).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_23,p:{x:439.565,y:582.0825}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:437.9,y:554.85,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.shape_22,p:{x:438.3167,y:584.4268}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:438.35,y:559.35,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},5).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_22,p:{x:521.9667,y:554.9768}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:522,y:529.9,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_23,p:{x:600.615,y:582.4825}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:598.95,y:555.25,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.shape_24,p:{x:599.6808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:601.45,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},4).to({state:[{t:this.shape_11,p:{x:606.1989,y:584.1875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:607.4,y:558.35,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_25,p:{x:612.3808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:614.15,y:558.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:619.8989,y:584.1875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:621.1,y:558.35,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_25,p:{x:626.3308}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:628.1,y:558.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:634.4489,y:583.8875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:635.65,y:558.05,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_25,p:{x:641.5808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:643.35,y:558.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_26,p:{x:650.2989,y:584.1375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:651.5,y:558.3,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_25,p:{x:657.3308}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:659.1,y:558.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_10,p:{x:666.1989,y:583.8875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:667.4,y:558.05,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:673.7808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:675.55,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_26,p:{x:683.3489,y:583.6875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:684.55,y:557.85,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:691.5308}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:693.3,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_26,p:{x:701.7989,y:583.6875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:703,y:557.85,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:710.1808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:711.95,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_10,p:{x:720.2489,y:583.8875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:721.45,y:558.05,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:729.2808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:731.05,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:738.7489,y:583.7375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:739.95,y:557.9,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:746.8308}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:748.6,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_26,p:{x:756.7989,y:583.6875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:758,y:557.85,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_27},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:757.4,y:560.15,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_23,p:{x:826.165,y:522.4825}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:824.5,y:495.25,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.shape_12,p:{x:826.3308,y:524.0875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:828.1,y:498.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:833.5489,y:523.8875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:834.75,y:498.05,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_12,p:{x:840.6308,y:524.0875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:842.4,y:498.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:849.0489,y:523.8875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:850.25,y:498.05,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_12,p:{x:855.5308,y:524.0875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:857.3,y:498.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:865.5989,y:524.3375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:866.8,y:498.5,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_12,p:{x:872.6308,y:524.5375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:874.4,y:498.9,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:881.8989,y:523.8875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:883.1,y:498.05,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_28,p:{x:883.4667,y:525.0268}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:883.5,y:500.35,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_23,p:{x:980.315,y:582.4825}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:978.65,y:555.25,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.shape_24,p:{x:983.2308}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:985,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_26,p:{x:989.3489,y:583.6875}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:990.55,y:557.85,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_25,p:{x:995.8808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:997.65,y:558.45,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_10,p:{x:1003.4989,y:583.7375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1004.7,y:557.9,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:1009.4808}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1011.25,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:1017.7489,y:583.7375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1018.95,y:557.9,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_24,p:{x:1025.3308}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1027.1,y:558.25,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_11,p:{x:1033.4989,y:583.5375}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1034.7,y:557.7,regX:0,regY:0,skewY:180,skewX:0}}]},1).to({state:[{t:this.shape_28,p:{x:1034.6667,y:584.8268}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1034.7,y:560.15,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_28,p:{x:1124.2667,y:614.8768}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1124.3,y:590.2,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_23,p:{x:1217.265,y:600.1825}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:1215.6,y:572.95,regX:0,regY:0,skewY:179.9991,skewX:-0.0009}}]},1).to({state:[{t:this.shape_29,p:{x:1215.585,y:600.1825}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_30,p:{y:600.1825,x:1216.2566}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},18).to({state:[{t:this.shape_31,p:{x:1216.3856,y:600.1825}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_32,p:{x:1216.6835,y:598.22}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_31,p:{x:1216.3356,y:600.0825}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.25,y:572.9,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_30,p:{y:600.1325,x:1216.2566}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.3,y:573,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_29,p:{x:1215.385,y:600.1325}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.05,y:573,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_30,p:{y:600.0825,x:1216.1566}},{t:this.instance,p:{scaleX:0.9998,scaleY:0.9999,rotation:0,x:1217.1,y:573,regX:0.1,regY:0.2,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_31,p:{x:1216.1856,y:600.1325}},{t:this.instance,p:{scaleX:0.9998,scaleY:0.9999,rotation:0,x:1217,y:573.05,regX:0.1,regY:0.2,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_32,p:{x:1216.6335,y:598.17}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.25,y:573,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_33},{t:this.instance,p:{scaleX:0.9997,scaleY:0.9998,rotation:0,x:1217.85,y:574.5,regX:0.1,regY:0.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_30,p:{y:601.5825,x:1217.0566}},{t:this.instance,p:{scaleX:0.9997,scaleY:0.9998,rotation:0,x:1217.95,y:574.65,regX:0.1,regY:0.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_29,p:{x:1215.635,y:600.1825}},{t:this.instance,p:{scaleX:0.9996,scaleY:0.9996,rotation:0,x:1218,y:573.8,regX:0.6,regY:0.8,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_30,p:{y:600.1825,x:1216.2566}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_31,p:{x:1216.3856,y:600.1825}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_32,p:{x:1216.6835,y:598.22}},{t:this.instance,p:{scaleX:0.9999,scaleY:1,rotation:0.0009,x:1217.25,y:572.95,regX:0,regY:0,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_31,p:{x:1216.3356,y:600.0825}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.25,y:572.9,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_30,p:{y:600.1325,x:1216.2566}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.3,y:573,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.shape_29,p:{x:1215.385,y:600.1325}},{t:this.instance,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:1217.05,y:573,regX:0.1,regY:0.1,skewY:0,skewX:0}}]},2).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).wait(1).to({x:377.0566,y:622.599},0).wait(1).to({x:374.1646,y:613.9133},0).wait(1).to({x:371.174,y:605.9424},0).wait(1).to({x:368.0847,y:598.6855},0).wait(1).to({x:364.8966,y:592.1419},0).wait(1).to({x:361.6094,y:586.3109},0).wait(1).to({x:358.223,y:581.1919},0).wait(1).to({x:354.7371,y:576.7847},0).wait(1).to({x:351.1516,y:573.0889},0).wait(1).to({x:347.4661,y:570.1044},0).wait(1).to({x:343.6804,y:567.831},0).wait(1).to({x:339.7942,y:566.2689},0).wait(1).to({x:335.8073,y:565.4182},0).wait(1).to({x:331.7194,y:565.2792},0).wait(1).to({x:327.5301,y:565.8522},0).wait(1).to({x:323.239,y:567.138},0).wait(1).to({x:318.8458,y:569.1369},0).wait(1).to({x:314.35,y:571.85},0).to({_off:true},1).wait(293));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(255).to({_off:false},0).wait(1).to({x:319.7736,y:568.5182},0).wait(1).to({x:327.0578,y:565.3853},0).wait(1).to({x:334.3526,y:562.7009},0).wait(1).to({x:341.6586,y:560.4646},0).wait(1).to({x:348.976,y:558.6759},0).wait(1).to({x:356.3054,y:557.3347},0).wait(1).to({x:363.6473,y:556.4406},0).wait(1).to({x:371.002,y:555.9935},0).wait(1).to({x:378.3701,y:555.9933},0).wait(1).to({x:385.7519,y:556.44},0).wait(1).to({x:393.148,y:557.3338},0).wait(1).to({x:400.5588,y:558.6748},0).wait(1).to({x:407.9848,y:560.4633},0).wait(1).to({x:415.4264,y:562.6996},0).wait(1).to({x:422.8841,y:565.3841},0).wait(1).to({x:430.3583,y:568.5173},0).wait(1).to({x:437.85,y:572.1},0).to({_off:true},1).wait(7).to({_off:false,x:438.45,y:572.2},0).wait(1).to({x:445.6843,y:561.889},0).wait(1).to({x:452.8489,y:552.9999},0).wait(1).to({x:459.9442,y:545.5303},0).wait(1).to({x:466.9711,y:539.4781},0).wait(1).to({x:473.9302,y:534.8416},0).wait(1).to({x:480.8222,y:531.6198},0).wait(1).to({x:487.6477,y:529.8119},0).wait(1).to({x:494.4075,y:529.4181},0).wait(1).to({x:501.102,y:530.4387},0).wait(1).to({x:507.7318,y:532.8747},0).wait(1).to({x:514.2976,y:536.7277},0).wait(1).to({x:520.8,y:542},0).to({_off:true},1).wait(2).to({_off:false,x:522.9},0).wait(1).to({x:529.708,y:537.676},0).wait(1).to({x:536.5378,y:534.7486},0).wait(1).to({x:543.3898,y:533.216},0).wait(1).to({x:550.2648,y:533.077},0).wait(1).to({x:557.1636,y:534.3309},0).wait(1).to({x:564.087,y:536.9777},0).wait(1).to({x:571.0357,y:541.0181},0).wait(1).to({x:578.0105,y:546.4533},0).wait(1).to({x:585.0122,y:553.2852},0).wait(1).to({x:592.0417,y:561.5162},0).wait(1).to({x:599.1,y:571.15},0).to({_off:true},1).wait(26).to({_off:false,x:759.65,y:571.55},0).wait(1).to({x:763.5254,y:557.5534},0).wait(1).to({x:767.516,y:545.0539},0).wait(1).to({x:771.6218,y:534.0495},0).wait(1).to({x:775.8432,y:524.5379},0).wait(1).to({x:780.1806,y:516.5176},0).wait(1).to({x:784.6341,y:509.9871},0).wait(1).to({x:789.2043,y:504.9455},0).wait(1).to({x:793.8916,y:501.3923},0).wait(1).to({x:798.6963,y:499.3273},0).wait(1).to({x:803.6189,y:498.7509},0).wait(1).to({x:808.6601,y:499.6636},0).wait(1).to({x:813.8202,y:502.0666},0).wait(1).to({x:819.0999,y:505.9614},0).wait(1).to({x:824.5,y:511.35},0).to({_off:true},1).wait(11).to({_off:false,x:888.1},0).wait(1).to({x:893.8625,y:506.6282},0).wait(1).to({x:899.2574,y:502.855},0).wait(1).to({x:904.3368,y:500.0297},0).wait(1).to({x:909.153,y:498.1515},0).wait(1).to({x:913.7583,y:497.2197},0).wait(1).to({x:918.2046,y:497.2338},0).wait(1).to({x:922.5442,y:498.1935},0).wait(1).to({x:926.8289,y:500.0984},0).wait(1).to({x:931.1107,y:502.9486},0).wait(1).to({x:935.4415,y:506.7441},0).wait(1).to({x:939.8733,y:511.4851},0).wait(1).to({x:944.4581,y:517.1721},0).wait(1).to({x:949.2479,y:523.8055},0).wait(1).to({x:954.2948,y:531.3861},0).wait(1).to({x:959.6511,y:539.9147},0).wait(1).to({x:965.369,y:549.3924},0).wait(1).to({x:971.5009,y:559.8201},0).wait(1).to({x:978.1,y:571.2},0).to({_off:true},1).wait(11).to({_off:false,x:1038.1,y:571.15},0).wait(1).to({x:1044.7687,y:566.3301},0).wait(1).to({x:1051.3779,y:562.7027},0).wait(1).to({x:1057.9277,y:560.2667},0).wait(1).to({x:1064.4187,y:559.021},0).wait(1).to({x:1070.8512,y:558.9651},0).wait(1).to({x:1077.2256,y:560.0987},0).wait(1).to({x:1083.5423,y:562.4219},0).wait(1).to({x:1089.8017,y:565.9353},0).wait(1).to({x:1096.0041,y:570.6398},0).wait(1).to({x:1102.1497,y:576.5366},0).wait(1).to({x:1108.2391,y:583.6274},0).wait(1).to({x:1114.2723,y:591.9143},0).wait(1).to({x:1120.25,y:601.4},0).to({_off:true},1).wait(2).to({_off:false,x:1127.5,y:601.15},0).wait(1).to({x:1136.769,y:593.003},0).wait(1).to({x:1145.6838,y:586.1771},0).wait(1).to({x:1154.2455,y:580.6704},0).wait(1).to({x:1162.4551,y:576.4811},0).wait(1).to({x:1170.3136,y:573.608},0).wait(1).to({x:1177.822,y:572.0504},0).wait(1).to({x:1184.9809,y:571.8079},0).wait(1).to({x:1191.7909,y:572.881},0).wait(1).to({x:1198.2526,y:575.2702},0).wait(1).to({x:1204.3661,y:578.9768},0).wait(1).to({x:1210.1319,y:584.0026},0).wait(1).to({x:1215.55,y:590.35},0).to({_off:true},1).wait(58));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(267).to({_off:false},0).wait(1).to({y:283.45},0).wait(1).to({y:300.9},0).wait(1).to({y:318.35},0).wait(1).to({y:335.8},0).wait(1).to({y:353.25},0).wait(1).to({y:370.7},0).wait(1).to({y:388.15},0).wait(1).to({y:405.6},0).wait(1).to({y:423.05},0).wait(1).to({y:440.5},0).wait(1).to({y:457.9},0).wait(1).to({y:475.35},0).wait(1).to({y:492.8},0).wait(1).to({y:510.25},0).wait(1).to({y:527.7},0).wait(1).to({y:545.15},0).wait(1).to({y:562.6},0).wait(1).to({y:580.05},0).wait(1).to({y:597.5},0).wait(1).to({y:614.95},0).to({_off:true},1).wait(65).to({_off:false,rotation:-90,x:781,y:248.75},0).wait(1).to({y:266.4},0).wait(1).to({y:284.05},0).wait(1).to({y:301.7},0).wait(1).to({y:319.4},0).wait(1).to({y:337.05},0).wait(1).to({y:354.7},0).wait(1).to({y:372.35},0).wait(1).to({y:390.05},0).wait(1).to({y:407.7},0).wait(1).to({y:425.35},0).wait(1).to({y:443},0).wait(1).to({y:460.7},0).wait(1).to({y:478.35},0).wait(1).to({y:496},0).wait(1).to({y:513.65},0).wait(1).to({y:531.35},0).wait(1).to({y:549},0).wait(1).to({y:566.65},0).wait(1).to({y:584.35},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).wait(1).to({y:351.9},0).wait(1).to({y:373.25},0).wait(1).to({y:394.6},0).wait(1).to({y:415.95},0).wait(1).to({y:437.3},0).wait(1).to({y:458.65},0).wait(1).to({y:480},0).wait(1).to({y:501.3},0).wait(1).to({y:522.65},0).wait(1).to({y:544},0).wait(1).to({y:565.35},0).wait(1).to({y:586.7},0).wait(1).to({y:608.05},0).wait(1).to({y:629.4},0).to({_off:true},1).wait(173));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(303).to({_off:false},0).wait(1).to({y:368.5},0).wait(1).to({y:384},0).wait(1).to({x:449.95,y:399.5},0).wait(1).to({y:414.95},0).wait(1).to({y:430.45},0).wait(1).to({x:450,y:445.95},0).wait(1).to({y:461.45},0).wait(1).to({y:476.9},0).wait(1).to({x:450.05,y:492.4},0).wait(1).to({y:507.9},0).wait(1).to({y:523.35},0).wait(1).to({x:450.1,y:538.85},0).wait(1).to({y:554.35},0).wait(1).to({x:450.15,y:569.85},0).to({_off:true},1).wait(15).to({_off:false,x:991.45,y:339.05},0).wait(1).to({y:354.3},0).wait(1).to({y:369.6},0).wait(1).to({y:384.9},0).wait(1).to({y:400.2},0).wait(1).to({y:415.5},0).wait(1).to({y:430.8},0).wait(1).to({y:446.1},0).wait(1).to({y:461.4},0).wait(1).to({y:476.7},0).wait(1).to({y:491.95},0).wait(1).to({y:507.25},0).wait(1).to({y:522.55},0).wait(1).to({y:537.85},0).wait(1).to({y:553.15},0).wait(1).to({y:568.45},0).wait(1).to({y:583.75},0).wait(1).to({y:599.05},0).wait(1).to({y:614.35},0).wait(1).to({y:629.65},0).to({_off:true},1).wait(40).to({_off:false,x:810.9,y:193.5},0).wait(1).to({y:216},0).wait(1).to({y:238.55},0).wait(1).to({x:810.95,y:261.1},0).wait(1).to({y:283.65},0).wait(1).to({y:306.2},0).wait(1).to({x:811,y:328.75},0).wait(1).to({y:351.3},0).wait(1).to({y:373.85},0).wait(1).to({x:811.05,y:396.4},0).wait(1).to({y:418.95},0).wait(1).to({y:441.5},0).wait(1).to({x:811.1,y:464.05},0).wait(1).to({y:486.6},0).wait(1).to({x:811.15,y:509.15},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(318).to({_off:false},0).wait(1).to({y:320.05},0).wait(1).to({y:340.35},0).wait(1).to({y:360.7},0).wait(1).to({y:381},0).wait(1).to({y:401.35},0).wait(1).to({y:421.65},0).wait(1).to({y:442},0).wait(1).to({y:462.3},0).wait(1).to({y:482.6},0).wait(1).to({y:502.95},0).wait(1).to({y:523.25},0).wait(1).to({y:543.6},0).wait(1).to({y:563.9},0).wait(1).to({y:584.25},0).to({_off:true},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(373).to({_off:false},0).wait(1).to({y:262.6},0).wait(1).to({y:281.3},0).wait(1).to({y:300},0).wait(1).to({y:318.75},0).wait(1).to({y:337.45},0).wait(1).to({y:356.15},0).wait(1).to({y:374.85},0).wait(1).to({y:393.6},0).wait(1).to({y:412.3},0).wait(1).to({y:431},0).wait(1).to({y:449.7},0).wait(1).to({y:468.45},0).wait(1).to({y:487.15},0).wait(1).to({y:505.85},0).wait(1).to({y:524.55},0).wait(1).to({y:543.3},0).wait(1).to({y:562},0).wait(1).to({y:580.7},0).wait(1).to({y:599.45},0).to({_off:true},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(408).to({_off:false},0).wait(1).to({regY:0,x:750.6,y:287.2},0).wait(1).to({y:298.1},0).wait(1).to({y:309},0).wait(1).to({y:319.9},0).wait(1).to({y:330.75},0).wait(1).to({y:341.65},0).wait(1).to({y:352.55},0).wait(1).to({y:363.45},0).wait(1).to({y:374.3},0).wait(1).to({y:385.2},0).wait(1).to({y:396.1},0).wait(1).to({y:407},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

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
	this.instance.setTransform(225.05,300.1,1,1,180,0,0,-39.3,-0.1);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({regX:-39.2,regY:0,x:224.95,y:313.1},0).wait(1).to({y:326.25},0).wait(1).to({y:339.4},0).wait(1).to({y:352.55},0).wait(1).to({y:365.7},0).wait(1).to({y:378.85},0).wait(1).to({y:392},0).wait(1).to({y:405.15},0).wait(1).to({y:418.25},0).wait(1).to({y:431.4},0).wait(1).to({y:444.55},0).wait(1).to({y:457.7},0).wait(1).to({y:470.85},0).wait(1).to({y:484},0).wait(1).to({y:497.15},0).wait(1).to({y:510.3},0).wait(1).to({y:523.4},0).wait(1).to({y:536.55},0).wait(1).to({y:549.7},0).wait(1).to({y:562.85},0).wait(1).to({y:576},0).wait(1).to({y:589.15},0).wait(1).to({y:602.3},0).wait(1).to({y:615.45},0).wait(1).to({y:628.6},0).to({_off:true},1).wait(230).to({_off:false,x:675.8,y:312.95},0).wait(1).to({y:335.55},0).wait(1).to({y:358.15},0).wait(1).to({y:380.75},0).wait(1).to({y:403.35},0).wait(1).to({y:425.95},0).wait(1).to({y:448.55},0).wait(1).to({y:471.15},0).wait(1).to({y:493.75},0).wait(1).to({y:516.35},0).wait(1).to({y:538.95},0).wait(1).to({y:561.55},0).wait(1).to({y:584.15},0).wait(1).to({y:606.75},0).wait(1).to({y:629.4},0).to({_off:true},1).wait(50).to({_off:false,rotation:90,x:1051.6,y:313.2},0).wait(1).to({y:332.65},0).wait(1).to({y:352.15},0).wait(1).to({y:371.6},0).wait(1).to({y:391.1},0).wait(1).to({y:410.55},0).wait(1).to({y:430.05},0).wait(1).to({y:449.5},0).wait(1).to({y:469},0).wait(1).to({y:488.45},0).wait(1).to({y:507.95},0).wait(1).to({y:527.4},0).wait(1).to({y:546.9},0).wait(1).to({y:566.35},0).wait(1).to({y:585.85},0).wait(1).to({y:605.3},0).wait(1).to({y:624.8},0).wait(1).to({y:644.3},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(1).to({y:444.95},0).wait(1).to({y:452},0).wait(1).to({y:459.05},0).wait(1).to({y:466.05},0).wait(1).to({y:473.1},0).wait(1).to({y:480.15},0).wait(1).to({y:487.15},0).wait(1).to({y:494.2},0).wait(1).to({y:501.25},0).wait(1).to({y:508.25},0).wait(1).to({y:515.3},0).wait(1).to({y:522.35},0).wait(1).to({y:529.35},0).wait(1).to({y:536.4},0).wait(1).to({y:543.45},0).wait(1).to({y:550.45},0).wait(1).to({y:557.5},0).wait(1).to({y:564.55},0).wait(1).to({y:571.55},0).wait(1).to({y:578.6},0).wait(1).to({y:585.65},0).wait(1).to({y:592.65},0).wait(1).to({y:599.7},0).wait(1).to({y:606.75},0).wait(1).to({y:613.8},0).to({_off:true},1).wait(387));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).wait(1).to({x:299.85,y:444},0).wait(1).to({y:450.4},0).wait(1).to({y:456.8},0).wait(1).to({y:463.2},0).wait(1).to({y:469.6},0).wait(1).to({y:476},0).wait(1).to({y:482.4},0).wait(1).to({y:488.8},0).wait(1).to({y:495.2},0).wait(1).to({y:501.6},0).wait(1).to({y:508},0).wait(1).to({y:514.4},0).wait(1).to({y:520.8},0).wait(1).to({y:527.2},0).wait(1).to({y:533.6},0).wait(1).to({y:540},0).wait(1).to({y:546.4},0).wait(1).to({y:552.8},0).wait(1).to({y:559.2},0).wait(1).to({y:565.6},0).wait(1).to({y:572},0).wait(1).to({y:578.4},0).wait(1).to({y:584.8},0).wait(1).to({y:591.2},0).wait(1).to({y:597.6},0).wait(1).to({y:604},0).wait(1).to({y:610.4},0).wait(1).to({y:616.8},0).wait(1).to({y:623.2},0).wait(1).to({y:629.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(90).to({_off:false,x:750.9,y:313.85},0).wait(1).to({y:330.4},0).wait(1).to({y:347},0).wait(1).to({y:363.6},0).wait(1).to({y:380.2},0).wait(1).to({y:396.8},0).wait(1).to({y:413.4},0).wait(1).to({y:430},0).wait(1).to({y:446.6},0).wait(1).to({y:463.2},0).wait(1).to({y:479.8},0).wait(1).to({y:496.4},0).wait(1).to({y:513},0).wait(1).to({y:529.6},0).wait(1).to({y:546.2},0).wait(1).to({y:562.8},0).wait(1).to({y:579.4},0).wait(1).to({y:596},0).wait(1).to({y:612.6},0).wait(1).to({y:629.2},0).to({_off:true},1).wait(110).to({_off:false,regX:-84.8,regY:-77.1,scaleX:0.9987,scaleY:0.9987,x:1081.3,y:199.5},0).wait(1).to({regX:-88.2,regY:-78.9,x:1077.9,y:215.9},0).wait(1).to({y:234.1},0).wait(1).to({y:252.3},0).wait(1).to({y:270.5},0).wait(1).to({y:288.7},0).wait(1).to({y:306.95},0).wait(1).to({y:325.15},0).wait(1).to({y:343.35},0).wait(1).to({y:361.55},0).wait(1).to({y:379.75},0).wait(1).to({y:397.95},0).wait(1).to({y:416.2},0).wait(1).to({y:434.4},0).wait(1).to({y:452.6},0).wait(1).to({y:470.8},0).wait(1).to({y:489},0).wait(1).to({y:507.25},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(183).to({_off:false},0).wait(1).to({y:107.65},0).wait(1).to({y:130.6},0).wait(1).to({y:153.6},0).wait(1).to({y:176.55},0).wait(1).to({y:199.55},0).wait(1).to({y:222.5},0).wait(1).to({y:245.5},0).wait(1).to({y:268.45},0).wait(1).to({y:291.4},0).wait(1).to({y:314.4},0).wait(1).to({y:337.35},0).wait(1).to({y:360.35},0).wait(1).to({y:383.3},0).wait(1).to({y:406.3},0).wait(1).to({y:429.25},0).wait(1).to({y:452.25},0).wait(1).to({y:475.2},0).wait(1).to({y:498.15},0).wait(1).to({y:521.15},0).wait(1).to({y:544.1},0).wait(1).to({y:567.1},0).wait(1).to({y:590.05},0).wait(1).to({y:613.05},0).wait(1).to({y:636},0).wait(1).to({y:659},0).to({_off:true},1).wait(99).to({_off:false,rotation:-90,x:841.4,y:238.75},0).wait(1).to({y:263.4},0).wait(1).to({y:288.1},0).wait(1).to({y:312.8},0).wait(1).to({y:337.5},0).wait(1).to({y:362.2},0).wait(1).to({y:386.9},0).wait(1).to({y:411.6},0).wait(1).to({y:436.25},0).wait(1).to({y:460.95},0).wait(1).to({y:485.65},0).wait(1).to({y:510.35},0).wait(1).to({y:535.05},0).wait(1).to({y:559.75},0).wait(1).to({y:584.45},0).to({_off:true},1).wait(20).to({_off:false,rotation:0,x:1096.75,y:366.05},0).wait(1).to({y:386.95},0).wait(1).to({y:407.9},0).wait(1).to({y:428.85},0).wait(1).to({y:449.8},0).wait(1).to({y:470.75},0).wait(1).to({y:491.7},0).wait(1).to({y:512.65},0).wait(1).to({y:533.55},0).wait(1).to({y:554.5},0).wait(1).to({y:575.45},0).wait(1).to({y:596.4},0).wait(1).to({y:617.35},0).wait(1).to({y:638.3},0).wait(1).to({y:659.25},0).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({_off:false},0).wait(1).to({y:145.95},0).wait(1).to({y:165.7},0).wait(1).to({y:185.4},0).wait(1).to({y:205.15},0).wait(1).to({y:224.9},0).wait(1).to({y:244.6},0).wait(1).to({y:264.35},0).wait(1).to({y:284.1},0).wait(1).to({y:303.8},0).wait(1).to({y:323.55},0).wait(1).to({y:343.25},0).wait(1).to({y:363},0).wait(1).to({y:382.75},0).wait(1).to({y:402.45},0).wait(1).to({y:422.2},0).wait(1).to({y:441.95},0).wait(1).to({y:461.65},0).wait(1).to({y:481.4},0).wait(1).to({y:501.1},0).wait(1).to({y:520.85},0).wait(1).to({y:540.6},0).wait(1).to({y:560.3},0).wait(1).to({y:580.05},0).wait(1).to({y:599.8},0).wait(1).to({y:619.5},0).wait(1).to({y:639.25},0).wait(1).to({y:659},0).to({_off:true},1).wait(139).to({_off:false,rotation:0,x:1006.4,y:287.05},0).wait(1).to({y:297.9},0).wait(1).to({y:308.75},0).wait(1).to({y:319.6},0).wait(1).to({y:330.45},0).wait(1).to({y:341.3},0).wait(1).to({y:352.15},0).wait(1).to({y:363.05},0).wait(1).to({y:373.9},0).wait(1).to({y:384.75},0).wait(1).to({y:395.6},0).wait(1).to({y:406.45},0).wait(1).to({y:417.3},0).wait(1).to({y:428.2},0).wait(1).to({y:439.05},0).wait(1).to({y:449.9},0).wait(1).to({y:460.75},0).wait(1).to({y:471.6},0).wait(1).to({y:482.45},0).wait(1).to({y:493.3},0).wait(1).to({y:504.2},0).wait(1).to({y:515.05},0).wait(1).to({y:525.9},0).wait(1).to({y:536.75},0).wait(1).to({y:547.6},0).wait(1).to({y:558.45},0).wait(1).to({y:569.35},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(237).to({_off:false},0).wait(1).to({x:405.1,y:318.9},0).wait(1).to({y:341.1},0).wait(1).to({y:363.3},0).wait(1).to({y:385.5},0).wait(1).to({y:407.7},0).wait(1).to({y:429.9},0).wait(1).to({y:452.1},0).wait(1).to({y:474.3},0).wait(1).to({y:496.5},0).wait(1).to({y:518.7},0).wait(1).to({y:540.9},0).wait(1).to({y:563.1},0).wait(1).to({y:585.3},0).wait(1).to({y:607.5},0).wait(1).to({y:629.75},0).to({_off:true},1).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(253).to({_off:false},0).wait(1).to({y:315.75},0).wait(1).to({y:330.65},0).wait(1).to({y:345.6},0).wait(1).to({y:360.5},0).wait(1).to({y:375.45},0).wait(1).to({y:390.35},0).wait(1).to({y:405.25},0).wait(1).to({y:420.2},0).wait(1).to({y:435.1},0).wait(1).to({y:450.05},0).wait(1).to({y:464.95},0).wait(1).to({y:479.9},0).wait(1).to({y:494.8},0).wait(1).to({y:509.7},0).wait(1).to({y:524.65},0).wait(1).to({y:539.55},0).wait(1).to({y:554.5},0).wait(1).to({y:569.4},0).wait(1).to({y:584.35},0).to({_off:true},1).wait(50).to({_off:false,x:690.85,y:198},0).wait(1).to({y:218.3},0).wait(1).to({y:238.6},0).wait(1).to({y:258.95},0).wait(1).to({y:279.25},0).wait(1).to({y:299.6},0).wait(1).to({y:319.9},0).wait(1).to({y:340.25},0).wait(1).to({y:360.55},0).wait(1).to({y:380.9},0).wait(1).to({y:401.2},0).wait(1).to({y:421.55},0).wait(1).to({y:441.85},0).wait(1).to({y:462.2},0).wait(1).to({y:482.5},0).wait(1).to({y:502.85},0).wait(1).to({y:523.15},0).wait(1).to({y:543.5},0).wait(1).to({y:563.8},0).wait(1).to({y:584.15},0).to({_off:true},1).wait(133));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.redShapeStart = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.redShape("synched",0);
	this.instance.setTransform(-5.05,-8.95,1,1,0,0,0,-100.9,-78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.1429,x:-5.1},0).wait(1).to({rotation:4.2857,x:-5.05,y:-9},0).wait(1).to({rotation:6.4286},0).wait(1).to({rotation:8.5714},0).wait(1).to({rotation:10.7143,x:-5.1,y:-8.95},0).wait(1).to({rotation:12.8571,x:-5.05},0).wait(1).to({rotation:15,x:-5.1},0).wait(1).to({rotation:17.1429,x:-5.05,y:-9},0).wait(1).to({rotation:19.2857,x:-5.1,y:-8.95},0).wait(1).to({rotation:21.4286,x:-5.05,y:-9},0).wait(1).to({rotation:23.5714,x:-5.1},0).wait(1).to({rotation:25.7143,x:-5.05,y:-9.05},0).wait(1).to({rotation:27.8571,x:-5.1,y:-9},0).wait(1).to({rotation:30},0).wait(1).to({rotation:32.1429,x:-5.05},0).wait(1).to({rotation:34.2857},0).wait(1).to({rotation:36.4286,x:-5.1},0).wait(1).to({rotation:38.5714,x:-5.05},0).wait(1).to({rotation:40.7143,x:-5.1},0).wait(1).to({rotation:42.8571,x:-5.05,y:-9.05},0).wait(1).to({rotation:45,y:-9},0).wait(1).to({rotation:47.1429},0).wait(1).to({rotation:49.2857},0).wait(1).to({rotation:51.4286,x:-5,y:-9.05},0).wait(1).to({rotation:53.5714,x:-4.95},0).wait(1).to({rotation:55.7143,x:-5,y:-9},0).wait(1).to({rotation:57.8571,x:-5.05,y:-9.05},0).wait(1).to({rotation:60,x:-5},0).wait(1).to({rotation:62.1429,y:-9},0).wait(1).to({rotation:64.2857,y:-9.05},0).wait(1).to({rotation:66.4286},0).wait(1).to({rotation:68.5714,y:-8.95},0).wait(1).to({rotation:70.7143,y:-9.05},0).wait(1).to({rotation:72.8571,y:-9},0).wait(1).to({rotation:75},0).wait(1).to({rotation:77.1429},0).wait(1).to({rotation:79.2857},0).wait(1).to({rotation:81.4286},0).wait(1).to({rotation:83.5714,y:-9.05},0).wait(1).to({rotation:85.7143,x:-4.95,y:-9},0).wait(1).to({rotation:87.8571,y:-9.05},0).wait(1).to({rotation:90,x:-5,y:-9},0).wait(1).to({rotation:92.1429,y:-9.05},0).wait(1).to({rotation:94.2857,x:-4.95,y:-9},0).wait(1).to({rotation:96.4286},0).wait(1).to({rotation:98.5714},0).wait(1).to({rotation:100.7143,x:-5,y:-9.05},0).wait(1).to({rotation:102.8571,y:-9},0).wait(1).to({rotation:105,y:-9.05},0).wait(1).to({rotation:107.1429,x:-4.95,y:-9},0).wait(1).to({rotation:109.2857,x:-5,y:-9.05},0).wait(1).to({rotation:111.4286,x:-4.95,y:-9},0).wait(1).to({rotation:113.5714,y:-9.05},0).wait(1).to({rotation:115.7143,x:-4.9,y:-9},0).wait(1).to({rotation:117.8571,x:-4.95,y:-9.05},0).wait(1).to({rotation:120},0).wait(1).to({rotation:122.1429,y:-9},0).wait(1).to({rotation:124.2857},0).wait(1).to({rotation:126.4286,y:-9.05},0).wait(1).to({rotation:128.5714,y:-9},0).wait(1).to({rotation:130.7143,y:-9.05},0).wait(1).to({rotation:132.8571,x:-4.9,y:-9},0).wait(1).to({rotation:135,x:-4.95},0).wait(1).to({rotation:137.1429},0).wait(1).to({rotation:139.2857,y:-8.95},0).wait(1).to({rotation:141.4286,x:-4.9},0).wait(1).to({rotation:143.5714,y:-8.9},0).wait(1).to({rotation:145.7143,x:-4.95,y:-8.95},0).wait(1).to({rotation:147.8571,x:-4.9,y:-9},0).wait(1).to({rotation:150,y:-8.95},0).wait(1).to({rotation:152.1429,x:-4.95},0).wait(1).to({rotation:154.2857,x:-4.9},0).wait(1).to({rotation:156.4286},0).wait(1).to({rotation:158.5714,x:-5},0).wait(1).to({rotation:160.7143,x:-4.9},0).wait(1).to({rotation:162.8571,x:-4.95},0).wait(1).to({rotation:165},0).wait(1).to({rotation:167.1429},0).wait(1).to({rotation:169.2857},0).wait(1).to({rotation:171.4286},0).wait(1).to({rotation:173.5714,x:-4.9},0).wait(1).to({rotation:175.7143,x:-4.95,y:-8.9},0).wait(1).to({rotation:177.8571,x:-4.9},0).wait(1).to({rotation:180,x:-4.95,y:-8.95},0).wait(1).to({rotation:182.1429,x:-4.9},0).wait(1).to({rotation:184.2857,x:-4.95,y:-8.9},0).wait(1).to({rotation:186.4286},0).wait(1).to({rotation:188.5714},0).wait(1).to({rotation:190.7143,x:-4.9,y:-8.95},0).wait(1).to({rotation:192.8571,x:-4.95},0).wait(1).to({rotation:195,x:-4.9},0).wait(1).to({rotation:197.1429,x:-4.95,y:-8.9},0).wait(1).to({rotation:199.2857,x:-4.9,y:-8.95},0).wait(1).to({rotation:201.4286,x:-4.95,y:-8.9},0).wait(1).to({rotation:203.5714,x:-4.9},0).wait(1).to({rotation:205.7143,x:-4.95,y:-8.85},0).wait(1).to({rotation:207.8571,x:-4.9,y:-8.9},0).wait(1).to({rotation:210},0).wait(1).to({rotation:212.1429,x:-4.95},0).wait(1).to({rotation:214.2857},0).wait(1).to({rotation:216.4286,x:-4.9},0).wait(1).to({rotation:218.5714,x:-4.95},0).wait(1).to({rotation:220.7143,x:-4.9},0).wait(1).to({rotation:222.8571,x:-4.95,y:-8.85},0).wait(1).to({rotation:225,y:-8.9},0).wait(1).to({rotation:227.1429},0).wait(1).to({rotation:229.2857},0).wait(1).to({rotation:231.4286,y:-8.85},0).wait(1).to({rotation:233.5714,x:-5},0).wait(1).to({rotation:235.7143,y:-8.9},0).wait(1).to({rotation:237.8571,x:-4.95,y:-8.85},0).wait(1).to({rotation:240,x:-5},0).wait(1).to({rotation:242.1429,y:-8.9},0).wait(1).to({rotation:244.2857,y:-8.85},0).wait(1).to({rotation:246.4286},0).wait(1).to({rotation:248.5714,y:-8.95},0).wait(1).to({rotation:250.7143,y:-8.85},0).wait(1).to({rotation:252.8571,y:-8.9},0).wait(1).to({rotation:255},0).wait(1).to({rotation:257.1429},0).wait(1).to({rotation:259.2857},0).wait(1).to({rotation:261.4286},0).wait(1).to({rotation:263.5714,y:-8.85},0).wait(1).to({rotation:265.7143,x:-5.05,y:-8.9},0).wait(1).to({rotation:267.8571,y:-8.85},0).wait(1).to({rotation:270,x:-5,y:-8.9},0).wait(1).to({rotation:272.1429,y:-8.85},0).wait(1).to({rotation:274.2857,x:-5.05,y:-8.9},0).wait(1).to({rotation:276.4286},0).wait(1).to({rotation:278.5714},0).wait(1).to({rotation:280.7143,x:-5,y:-8.85},0).wait(1).to({rotation:282.8571,y:-8.9},0).wait(1).to({rotation:285,y:-8.85},0).wait(1).to({rotation:287.1429,x:-5.05,y:-8.9},0).wait(1).to({rotation:289.2857,x:-5,y:-8.85},0).wait(1).to({rotation:291.4286,x:-5.05,y:-8.9},0).wait(1).to({rotation:293.5714,y:-8.85},0).wait(1).to({rotation:295.7143,x:-5.1,y:-8.9},0).wait(1).to({rotation:297.8571,x:-5.05,y:-8.85},0).wait(1).to({rotation:300},0).wait(1).to({rotation:302.1429,y:-8.9},0).wait(1).to({rotation:304.2857},0).wait(1).to({rotation:306.4286,y:-8.85},0).wait(1).to({rotation:308.5714,y:-8.9},0).wait(1).to({rotation:310.7143,y:-8.85},0).wait(1).to({rotation:312.8571,x:-5.1,y:-8.9},0).wait(1).to({rotation:315,x:-5.05},0).wait(1).to({rotation:317.1429},0).wait(1).to({rotation:319.2857},0).wait(1).to({rotation:321.4286,x:-5.1},0).wait(1).to({rotation:323.5714,y:-8.95},0).wait(1).to({rotation:325.7143,x:-5.05,y:-8.9},0).wait(1).to({rotation:327.8571,x:-5.1},0).wait(1).to({rotation:330,y:-8.95},0).wait(1).to({rotation:332.1429,x:-5.05},0).wait(1).to({rotation:334.2857,x:-5.1},0).wait(1).to({rotation:336.4286},0).wait(1).to({rotation:338.5714,x:-5},0).wait(1).to({rotation:340.7143,x:-5.1},0).wait(1).to({rotation:342.8571,x:-5.05},0).wait(1).to({rotation:345},0).wait(1).to({rotation:347.1429},0).wait(1).to({rotation:349.2857},0).wait(1).to({rotation:351.4286},0).wait(1).to({rotation:353.5714,x:-5.1},0).wait(1).to({rotation:355.7143,x:-5.05,y:-9},0).wait(1).to({rotation:357.8571,x:-5.1},0).wait(1).to({rotation:360,x:-5.05,y:-8.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-63.1,108.4,108.4);


(lib.orangeShapeStart = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.orangeShape("synched",0);
	this.instance.setTransform(-108,-2.95,1,1,0,0,0,-117.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.0508,x:-108.05},0).wait(1).to({rotation:6.1017},0).wait(1).to({rotation:9.1525,x:-108,y:-3},0).wait(1).to({rotation:12.2034,x:-108.05,y:-2.95},0).wait(1).to({rotation:15.2542,y:-3},0).wait(1).to({rotation:18.3051},0).wait(1).to({rotation:21.3559,x:-108},0).wait(1).to({rotation:24.4068,x:-107.95},0).wait(1).to({rotation:27.4576,x:-108,y:-2.95},0).wait(1).to({rotation:30.5085},0).wait(1).to({rotation:33.5593,x:-107.95},0).wait(1).to({rotation:36.6102},0).wait(1).to({rotation:39.661,x:-108,y:-3},0).wait(1).to({rotation:42.7119,x:-107.95,y:-2.95},0).wait(1).to({rotation:45.7627,x:-108,y:-3},0).wait(1).to({rotation:48.8136,x:-107.95,y:-2.95},0).wait(1).to({rotation:51.8644,x:-108},0).wait(1).to({rotation:54.9153,x:-107.95,y:-3},0).wait(1).to({rotation:57.9661,x:-108,y:-2.95},0).wait(1).to({rotation:61.0169,y:-3},0).wait(1).to({rotation:64.0678,x:-107.95},0).wait(1).to({rotation:67.1186},0).wait(1).to({rotation:70.1695,y:-2.95},0).wait(1).to({rotation:73.2203,y:-3},0).wait(1).to({rotation:76.2712},0).wait(1).to({rotation:79.322,x:-108,y:-2.95},0).wait(1).to({rotation:82.3729},0).wait(1).to({rotation:85.4237},0).wait(1).to({rotation:88.4746},0).wait(1).to({rotation:91.5254,x:-107.95},0).wait(1).to({rotation:94.5763},0).wait(1).to({rotation:97.6271},0).wait(1).to({rotation:100.678},0).wait(1).to({rotation:103.7288,x:-108,y:-3},0).wait(1).to({rotation:106.7797},0).wait(1).to({rotation:109.8305,y:-2.95},0).wait(1).to({rotation:112.8814,y:-3},0).wait(1).to({rotation:115.9322},0).wait(1).to({rotation:118.9831,x:-107.95},0).wait(1).to({rotation:122.0339,y:-2.95},0).wait(1).to({rotation:125.0847,x:-108,y:-3},0).wait(1).to({rotation:128.1356,x:-107.95,y:-2.95},0).wait(1).to({rotation:131.1864,x:-108},0).wait(1).to({rotation:134.2373,x:-107.95,y:-3},0).wait(1).to({rotation:137.2881,x:-108,y:-2.95},0).wait(1).to({rotation:140.339,x:-107.95,y:-3},0).wait(1).to({rotation:143.3898,x:-108,y:-2.95},0).wait(1).to({rotation:146.4407},0).wait(1).to({rotation:149.4915,x:-107.95},0).wait(1).to({rotation:152.5424},0).wait(1).to({rotation:155.5932,x:-108,y:-3},0).wait(1).to({rotation:158.6441},0).wait(1).to({rotation:161.6949,x:-107.95},0).wait(1).to({rotation:164.7458},0).wait(1).to({rotation:167.7966,y:-2.95},0).wait(1).to({rotation:170.8475,x:-108,y:-3},0).wait(1).to({rotation:173.8983,x:-107.95,y:-2.95},0).wait(1).to({rotation:176.9492},0).wait(1).to({rotation:180,x:-108},0).wait(1).to({rotation:183.0508,x:-107.95},0).wait(1).to({rotation:186.1017},0).wait(1).to({rotation:189.1525,x:-108,y:-2.9},0).wait(1).to({rotation:192.2034,x:-107.95,y:-2.95},0).wait(1).to({rotation:195.2542,y:-2.9},0).wait(1).to({rotation:198.3051},0).wait(1).to({rotation:201.3559,x:-108},0).wait(1).to({rotation:204.4068},0).wait(1).to({rotation:207.4576,x:-107.95,y:-2.95},0).wait(1).to({rotation:210.5085},0).wait(1).to({rotation:213.5593,x:-108},0).wait(1).to({rotation:216.6102},0).wait(1).to({rotation:219.661,x:-107.95,y:-2.9},0).wait(1).to({rotation:222.7119,x:-108,y:-2.95},0).wait(1).to({rotation:225.7627,x:-107.95,y:-2.9},0).wait(1).to({rotation:228.8136,x:-108,y:-2.95},0).wait(1).to({rotation:231.8644,x:-107.95},0).wait(1).to({rotation:234.9153,x:-108,y:-2.9},0).wait(1).to({rotation:237.9661,x:-107.95,y:-2.95},0).wait(1).to({rotation:241.0169,y:-2.9},0).wait(1).to({rotation:244.0678,x:-108},0).wait(1).to({rotation:247.1186},0).wait(1).to({rotation:250.1695,y:-2.95},0).wait(1).to({rotation:253.2203,y:-2.9},0).wait(1).to({rotation:256.2712},0).wait(1).to({rotation:259.322,x:-107.95,y:-2.95},0).wait(1).to({rotation:262.3729},0).wait(1).to({rotation:265.4237},0).wait(1).to({rotation:268.4746},0).wait(1).to({rotation:271.5254,x:-108},0).wait(1).to({rotation:274.5763},0).wait(1).to({rotation:277.6271},0).wait(1).to({rotation:280.678},0).wait(1).to({rotation:283.7288,x:-107.95,y:-2.9},0).wait(1).to({rotation:286.7797},0).wait(1).to({rotation:289.8305,y:-2.95},0).wait(1).to({rotation:292.8814,y:-2.9},0).wait(1).to({rotation:295.9322},0).wait(1).to({rotation:298.9831,x:-108},0).wait(1).to({rotation:302.0339,y:-2.95},0).wait(1).to({rotation:305.0847,x:-107.95,y:-2.9},0).wait(1).to({rotation:308.1356,x:-108,y:-2.95},0).wait(1).to({rotation:311.1864,x:-107.95},0).wait(1).to({rotation:314.2373,x:-108,y:-2.9},0).wait(1).to({rotation:317.2881,x:-107.95,y:-2.95},0).wait(1).to({rotation:320.339,x:-108,y:-2.9},0).wait(1).to({rotation:323.3898,x:-107.95,y:-2.95},0).wait(1).to({rotation:326.4407},0).wait(1).to({rotation:329.4915,x:-108},0).wait(1).to({rotation:332.5424},0).wait(1).to({rotation:335.5932,x:-107.95,y:-2.9},0).wait(1).to({rotation:338.6441,x:-108},0).wait(1).to({rotation:341.6949,x:-108.05},0).wait(1).to({rotation:344.7458},0).wait(1).to({rotation:347.7966,y:-2.95},0).wait(1).to({rotation:350.8475,x:-108,y:-2.9},0).wait(1).to({rotation:353.8983,x:-108.05,y:-2.95},0).wait(1).to({rotation:356.9492},0).wait(1).to({rotation:360,x:-108},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.1,-57.2,108.39999999999999,108.6);


(lib.blueShapeStart = function(mode,startPosition,loop,reversed) {
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
		playSound("MainTheme");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(239));

	// Layer_1
	this.openingShape = new lib.blueShape();
	this.openingShape.name = "openingShape";
	this.openingShape.setTransform(-1,4.05,1,1,0,0,0,-102.2,-32);

	this.timeline.addTween(cjs.Tween.get(this.openingShape).wait(1).to({rotation:-1.5126,y:4},0).wait(1).to({rotation:-3.0252,x:-1.05,y:4.05},0).wait(1).to({rotation:-4.5378},0).wait(1).to({rotation:-6.0504,x:-1,y:4},0).wait(1).to({rotation:-7.563,y:4.05},0).wait(1).to({rotation:-9.0756,y:4},0).wait(1).to({rotation:-10.5882,x:-1.05,y:4.05},0).wait(1).to({rotation:-12.1008,y:4},0).wait(1).to({rotation:-13.6134},0).wait(1).to({rotation:-15.1261,x:-1},0).wait(1).to({rotation:-16.6387},0).wait(1).to({rotation:-18.1513,y:4.05},0).wait(1).to({rotation:-19.6639},0).wait(1).to({rotation:-21.1765},0).wait(1).to({rotation:-22.6891,x:-1.05,y:4.1},0).wait(1).to({rotation:-24.2017,x:-1,y:4.05},0).wait(1).to({rotation:-25.7143,x:-1.05},0).wait(1).to({rotation:-27.2269},0).wait(1).to({rotation:-28.7395,y:4.1},0).wait(1).to({rotation:-30.2521,x:-1},0).wait(1).to({rotation:-31.7647,x:-1.05},0).wait(1).to({rotation:-33.2773},0).wait(1).to({rotation:-34.7899,y:4.05},0).wait(1).to({rotation:-36.3025,x:-1},0).wait(1).to({rotation:-37.8151},0).wait(1).to({rotation:-39.3277,x:-1.05},0).wait(1).to({rotation:-40.8403,y:4.1},0).wait(1).to({rotation:-42.3529,y:4.05},0).wait(1).to({rotation:-43.8655,x:-1},0).wait(1).to({rotation:-45.3782,x:-1.05},0).wait(1).to({rotation:-46.8908,x:-1,y:4.1},0).wait(1).to({rotation:-48.4034,x:-1.05},0).wait(1).to({rotation:-49.916},0).wait(1).to({rotation:-51.4286,x:-1,y:4.05},0).wait(1).to({rotation:-52.9412,x:-1.05},0).wait(1).to({rotation:-54.4538,x:-1},0).wait(1).to({rotation:-55.9664,y:4.1},0).wait(1).to({rotation:-57.479,x:-1.05,y:4.05},0).wait(1).to({rotation:-58.9916},0).wait(1).to({rotation:-60.5042,x:-1,y:4.1},0).wait(1).to({rotation:-62.0168},0).wait(1).to({rotation:-63.5294,x:-1.05},0).wait(1).to({rotation:-65.042,x:-1,y:4.05},0).wait(1).to({rotation:-66.5546},0).wait(1).to({rotation:-68.0672},0).wait(1).to({rotation:-69.5798,x:-1.05,y:4.1},0).wait(1).to({rotation:-71.0924,x:-1},0).wait(1).to({rotation:-72.605,x:-1.05,y:4.05},0).wait(1).to({rotation:-74.1176,y:4.1},0).wait(1).to({rotation:-75.6303,x:-1,y:4.05},0).wait(1).to({rotation:-77.1429,x:-1.05,y:4.1},0).wait(1).to({rotation:-78.6555,x:-1,y:4.05},0).wait(1).to({rotation:-80.1681,x:-1.05,y:4.1},0).wait(1).to({rotation:-81.6807,x:-1,y:4.05},0).wait(1).to({rotation:-83.1933,y:4.1},0).wait(1).to({rotation:-84.7059,x:-1.05,y:4.05},0).wait(1).to({rotation:-86.2185,y:4.1},0).wait(1).to({rotation:-87.7311,x:-1,y:4.05},0).wait(1).to({rotation:-89.2437,x:-1.05,y:4.1},0).wait(1).to({rotation:-90.7563,y:4.05},0).wait(1).to({rotation:-92.2689,x:-1},0).wait(1).to({rotation:-93.7815,x:-1.05,y:4.1},0).wait(1).to({rotation:-95.2941,x:-1,y:4.05},0).wait(1).to({rotation:-96.8067,y:4.1},0).wait(1).to({rotation:-98.3193,y:4.05},0).wait(1).to({rotation:-99.8319,x:-1.05},0).wait(1).to({rotation:-101.3445,x:-1,y:4.1},0).wait(1).to({rotation:-102.8571,y:4.05},0).wait(1).to({rotation:-104.3697,x:-1.05,y:4.1},0).wait(1).to({rotation:-105.8824,y:4.05},0).wait(1).to({rotation:-107.395,x:-1},0).wait(1).to({rotation:-108.9076,x:-0.95},0).wait(1).to({rotation:-110.4202,x:-1,y:4.1},0).wait(1).to({rotation:-111.9328,y:4.05},0).wait(1).to({rotation:-113.4454,y:4.1},0).wait(1).to({rotation:-114.958,y:4.05},0).wait(1).to({rotation:-116.4706,y:4.1},0).wait(1).to({rotation:-117.9832,x:-0.95,y:4.05},0).wait(1).to({rotation:-119.4958,x:-1},0).wait(1).to({rotation:-121.0084,y:4.1},0).wait(1).to({rotation:-122.521,y:4.05},0).wait(1).to({rotation:-124.0336,x:-0.95},0).wait(1).to({rotation:-125.5462,x:-1},0).wait(1).to({rotation:-127.0588,y:4.1},0).wait(1).to({rotation:-128.5714,y:4.05},0).wait(1).to({rotation:-130.084,y:4.1},0).wait(1).to({rotation:-131.5966},0).wait(1).to({rotation:-133.1092,x:-0.95,y:4.05},0).wait(1).to({rotation:-134.6218,x:-1,y:4.1},0).wait(1).to({rotation:-136.1345,x:-0.95,y:4.05},0).wait(1).to({rotation:-137.6471,y:4.1},0).wait(1).to({rotation:-139.1597,x:-1},0).wait(1).to({rotation:-140.6723,y:4.05},0).wait(1).to({rotation:-142.1849,x:-0.95,y:4.1},0).wait(1).to({rotation:-143.6975,x:-1},0).wait(1).to({rotation:-145.2101,x:-0.95},0).wait(1).to({rotation:-146.7227},0).wait(1).to({rotation:-148.2353,y:4.05},0).wait(1).to({rotation:-149.7479,y:4.1},0).wait(1).to({rotation:-151.2605,x:-1},0).wait(1).to({rotation:-152.7731,x:-0.95,y:4.05},0).wait(1).to({rotation:-154.2857,y:4.1},0).wait(1).to({rotation:-155.7983},0).wait(1).to({rotation:-157.3109,y:4.05},0).wait(1).to({rotation:-158.8235},0).wait(1).to({rotation:-160.3361,y:4.1},0).wait(1).to({rotation:-161.8487},0).wait(1).to({rotation:-163.3613,x:-1,y:4.05},0).wait(1).to({rotation:-164.8739},0).wait(1).to({rotation:-166.3866,x:-0.95},0).wait(1).to({rotation:-167.8992},0).wait(1).to({rotation:-169.4118,x:-1,y:4.1},0).wait(1).to({rotation:-170.9244,y:4.05},0).wait(1).to({rotation:-172.437,x:-0.95},0).wait(1).to({rotation:-173.9496},0).wait(1).to({rotation:-175.4622,y:4.1},0).wait(1).to({rotation:-176.9748,x:-1},0).wait(1).to({rotation:-178.4874},0).wait(1).to({rotation:-180,y:4.05},0).wait(1).to({rotation:-181.5126,y:4.1},0).wait(1).to({rotation:-183.0252,x:-0.95,y:4.05},0).wait(1).to({rotation:-184.5378},0).wait(1).to({rotation:-186.0504,x:-1,y:4.1},0).wait(1).to({rotation:-187.563,y:4.05},0).wait(1).to({rotation:-189.0756,y:4.1},0).wait(1).to({rotation:-190.5882,x:-0.95,y:4.05},0).wait(1).to({rotation:-192.1008,y:4.1},0).wait(1).to({rotation:-193.6134},0).wait(1).to({rotation:-195.1261,x:-1},0).wait(1).to({rotation:-196.6387,y:4.05},0).wait(1).to({rotation:-198.1513,y:4},0).wait(1).to({rotation:-199.6639,y:4.05},0).wait(1).to({rotation:-201.1765},0).wait(1).to({rotation:-202.6891,x:-0.95,y:4},0).wait(1).to({rotation:-204.2017,x:-1,y:4.05},0).wait(1).to({rotation:-205.7143,x:-0.95},0).wait(1).to({rotation:-207.2269},0).wait(1).to({rotation:-208.7395,y:4},0).wait(1).to({rotation:-210.2521,x:-1},0).wait(1).to({rotation:-211.7647,x:-0.95},0).wait(1).to({rotation:-213.2773},0).wait(1).to({rotation:-214.7899,y:4.05},0).wait(1).to({rotation:-216.3025,x:-1},0).wait(1).to({rotation:-217.8151},0).wait(1).to({rotation:-219.3277,x:-0.95},0).wait(1).to({rotation:-220.8403,y:4},0).wait(1).to({rotation:-222.3529,y:4.05},0).wait(1).to({rotation:-223.8655,x:-1},0).wait(1).to({rotation:-225.3782,x:-0.95},0).wait(1).to({rotation:-226.8908,x:-1,y:4},0).wait(1).to({rotation:-228.4034,x:-0.95},0).wait(1).to({rotation:-229.916},0).wait(1).to({rotation:-231.4286,x:-1,y:4.05},0).wait(1).to({rotation:-232.9412,x:-0.95},0).wait(1).to({rotation:-234.4538,x:-1},0).wait(1).to({rotation:-235.9664,y:4},0).wait(1).to({rotation:-237.479,x:-0.95,y:4.05},0).wait(1).to({rotation:-238.9916},0).wait(1).to({rotation:-240.5042,x:-1,y:4},0).wait(1).to({rotation:-242.0168},0).wait(1).to({rotation:-243.5294,x:-0.95},0).wait(1).to({rotation:-245.042,x:-1,y:4.05},0).wait(1).to({rotation:-246.5546},0).wait(1).to({rotation:-248.0672},0).wait(1).to({rotation:-249.5798,x:-0.95,y:4},0).wait(1).to({rotation:-251.0924,x:-1},0).wait(1).to({rotation:-252.605,x:-0.95,y:4.05},0).wait(1).to({rotation:-254.1176,y:4},0).wait(1).to({rotation:-255.6303,x:-1,y:4.05},0).wait(1).to({rotation:-257.1429,x:-0.95,y:4},0).wait(1).to({rotation:-258.6555,x:-1,y:4.05},0).wait(1).to({rotation:-260.1681,x:-0.95,y:4},0).wait(1).to({rotation:-261.6807,x:-1,y:4.05},0).wait(1).to({rotation:-263.1933,y:4},0).wait(1).to({rotation:-264.7059,x:-0.95,y:4.05},0).wait(1).to({rotation:-266.2185,y:4},0).wait(1).to({rotation:-267.7311,x:-1,y:4.05},0).wait(1).to({rotation:-269.2437,x:-0.95,y:4},0).wait(1).to({rotation:-270.7563,y:4.05},0).wait(1).to({rotation:-272.2689,x:-1},0).wait(1).to({rotation:-273.7815,x:-0.95,y:4},0).wait(1).to({rotation:-275.2941,x:-1,y:4.05},0).wait(1).to({rotation:-276.8067,y:4},0).wait(1).to({rotation:-278.3193,y:4.05},0).wait(1).to({rotation:-279.8319,x:-0.95},0).wait(1).to({rotation:-281.3445,x:-1,y:4},0).wait(1).to({rotation:-282.8571,y:4.05},0).wait(1).to({rotation:-284.3697,x:-0.95,y:4},0).wait(1).to({rotation:-285.8824,y:4.05},0).wait(1).to({rotation:-287.395},0).wait(1).to({rotation:-288.9076,x:-1.05},0).wait(1).to({rotation:-290.4202,x:-1,y:4},0).wait(1).to({rotation:-291.9328,y:4.05},0).wait(1).to({rotation:-293.4454,y:4},0).wait(1).to({rotation:-294.958,y:4.05},0).wait(1).to({rotation:-296.4706,y:4},0).wait(1).to({rotation:-297.9832,x:-1.05,y:4.05},0).wait(1).to({rotation:-299.4958,x:-1},0).wait(1).to({rotation:-301.0084,y:4},0).wait(1).to({rotation:-302.521,y:4.05},0).wait(1).to({rotation:-304.0336,x:-1.05},0).wait(1).to({rotation:-305.5462,x:-1},0).wait(1).to({rotation:-307.0588,y:4},0).wait(1).to({rotation:-308.5714,y:4.05},0).wait(1).to({rotation:-310.084,y:4},0).wait(1).to({rotation:-311.5966},0).wait(1).to({rotation:-313.1092,x:-1.05,y:4.05},0).wait(1).to({rotation:-314.6218,x:-1,y:4},0).wait(1).to({rotation:-316.1345,x:-1.05,y:4.05},0).wait(1).to({rotation:-317.6471,y:4},0).wait(1).to({rotation:-319.1597,x:-1},0).wait(1).to({rotation:-320.6723,y:4.05},0).wait(1).to({rotation:-322.1849,x:-1.05,y:4},0).wait(1).to({rotation:-323.6975,x:-1},0).wait(1).to({rotation:-325.2101,x:-1.05},0).wait(1).to({rotation:-326.7227},0).wait(1).to({rotation:-328.2353,y:4.05},0).wait(1).to({rotation:-329.7479,y:4},0).wait(1).to({rotation:-331.2605,x:-1},0).wait(1).to({rotation:-332.7731,x:-1.05,y:4.05},0).wait(1).to({rotation:-334.2857,y:4},0).wait(1).to({rotation:-335.7983},0).wait(1).to({rotation:-337.3109,y:4.05},0).wait(1).to({rotation:-338.8235},0).wait(1).to({rotation:-340.3361,y:4},0).wait(1).to({rotation:-341.8487},0).wait(1).to({rotation:-343.3613,x:-1,y:4.05},0).wait(1).to({rotation:-344.8739},0).wait(1).to({rotation:-346.3866,x:-1.05},0).wait(1).to({rotation:-347.8992},0).wait(1).to({rotation:-349.4118,x:-1,y:4},0).wait(1).to({rotation:-350.9244,y:4.05},0).wait(1).to({rotation:-352.437,x:-1.05},0).wait(1).to({rotation:-353.9496},0).wait(1).to({rotation:-355.4622,y:4},0).wait(1).to({rotation:-356.9748,x:-1},0).wait(1).to({rotation:-358.4874},0).wait(1).to({rotation:-360,y:4.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-57.9,124,123.9);


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
	this.instance = new lib.redShapeStart();
	this.instance.setTransform(620.65,584.75,0.9998,0.9998);

	this.instance_1 = new lib.orangeShapeStart();
	this.instance_1.setTransform(177.65,466.95,0.9999,0.9999,0,0,0,-117.7,0.1);

	this.openingShape = new lib.blueShapeStart();
	this.openingShape.name = "openingShape";
	this.openingShape.setTransform(601.75,414.6,0.9997,0.9997);

	this.startButton = new lib.StartButton();
	this.startButton.name = "startButton";
	this.startButton.setTransform(400.35,505.65,0.9999,0.9999);
	new cjs.ButtonHelper(this.startButton, 0, 1, 2);

	this.instance_2 = new lib.button("synched",0);
	this.instance_2.setTransform(1215.15,620.4,1,1,0,0,0,-0.1,-0.5);

	this.instance_3 = new lib.yellowShape("synched",0);
	this.instance_3.setTransform(1201.45,658.9,1,1,0,0,0,-88.2,-78.9);

	this.instance_4 = new lib.yellowShape("synched",0);
	this.instance_4.setTransform(871.45,689,1,1,0,0,0,-88.2,-78.9);

	this.instance_5 = new lib.redShape("synched",0);
	this.instance_5.setTransform(735.8,689,1,1,0,0,0,-100.9,-78.9);

	this.instance_6 = new lib.purpleShape("synched",0);
	this.instance_6.setTransform(434.8,689.6,1,1,180,0,0,-39.2,0);

	this.instance_7 = new lib.orangeShape("synched",0);
	this.instance_7.setTransform(480.35,674.2,1,1,-90,0,0,-117.8,0);

	this.instance_8 = new lib.navyShape("synched",0);
	this.instance_8.setTransform(1096.75,689.3,1,1,0,0,0,37.2,47.7);

	this.instance_9 = new lib.greenShape("synched",0);
	this.instance_9.setTransform(691.05,674.2,1,1,90,0,0,-117.8,-78.9);

	this.instance_10 = new lib.blueShape("synched",0);
	this.instance_10.setTransform(1201.8,704.3,1,1,0,0,0,-102.2,-32);

	this.instance_11 = new lib.blueShape("synched",0);
	this.instance_11.setTransform(826.3,659.45,1,1,90,0,0,-102.2,-32);

	this.instance_12 = new lib.greenShape("synched",0);
	this.instance_12.setTransform(1006.4,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_13 = new lib.navyShape("synched",0);
	this.instance_13.setTransform(555.5,689.1,1,1,0,0,0,37.2,47.7);

	this.instance_14 = new lib.orangeShape("synched",0);
	this.instance_14.setTransform(781,674.2,1,1,-90,0,0,-117.8,0);

	this.instance_15 = new lib.purpleShape("synched",0);
	this.instance_15.setTransform(946.45,689.8,1,1,0,0,0,-39.2,0);

	this.instance_16 = new lib.redShape("synched",0);
	this.instance_16.setTransform(1261.6,674.2,1,1,-90,0,0,-100.9,-78.9);

	this.instance_17 = new lib.yellowShape("synched",0);
	this.instance_17.setTransform(630.9,689.8,1,1,0,0,0,-88.2,-78.9);

	this.instance_18 = new lib.yellowShape("synched",0);
	this.instance_18.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_19 = new lib.redShape("synched",0);
	this.instance_19.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_20 = new lib.purpleShape("synched",0);
	this.instance_20.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_21 = new lib.orangeShape("synched",0);
	this.instance_21.setTransform(284.8,659.6,1,1,0,0,0,-117.8,0);

	this.instance_22 = new lib.navyShape("synched",0);
	this.instance_22.setTransform(195.15,689.9,1,1,0,0,0,37.2,47.7);

	this.instance_23 = new lib.greenShape("synched",0);
	this.instance_23.setTransform(374.8,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_24 = new lib.blueShape("synched",0);
	this.instance_24.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_25 = new lib.purpleShape("synched",0);
	this.instance_25.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_26 = new lib.greenShape("synched",0);
	this.instance_26.setTransform(374.8,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_27 = new lib.yellowShape("synched",0);
	this.instance_27.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990033").ss(1,1,1).p("AAkAAQAAAKgLAHQgKAIgPAAQgOAAgLgIQgKgHAAgKQAAgJAKgHQALgHAOAAQAPAAAKAHQALAHAAAJg");
	this.shape.setTransform(394.1,602.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990033").ss(1,1,1).p("AA4gyQAAASgVAMQgVANgcAAQgeAAgVgNQgUgMAAgSQAAgRAUgNQAVgMAeAAQAcAAAVAMQAVANAAARgABXBFQAAAKgLAHQgKAHgPAAQgPAAgLgHQgKgHAAgKQAAgKAKgIQALgHAPAAQAPAAAKAHQALAIAAAKg");
	this.shape_1.setTransform(389.05,595.475);

	this.instance_28 = new lib.buttonGlow2();
	this.instance_28.setTransform(1242.25,573.5,2.7597,2.7597,0,0,0,0,0.1);

	this.instance_29 = new lib.buttonGlow();
	this.instance_29.setTransform(1215.95,603.15,2.0224,2.0224,0,0,0,0.1,0.1);

	this.instance_30 = new lib.redShape("synched",0);
	this.instance_30.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_31 = new lib.orangeShape("synched",0);
	this.instance_31.setTransform(284.8,659.6,1,1,0,0,0,-117.8,0);

	this.instance_32 = new lib.navyShape("synched",0);
	this.instance_32.setTransform(195.15,689.9,1,1,0,0,0,37.2,47.7);

	this.instance_33 = new lib.blueShape("synched",0);
	this.instance_33.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_34 = new lib.purpleShape("synched",0);
	this.instance_34.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_35 = new lib.yellowShape("synched",0);
	this.instance_35.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_36 = new lib.greenShape("synched",0);
	this.instance_36.setTransform(374.8,689.8,1,1,0,0,0,-117.8,-78.9);

	this.instance_37 = new lib.purpleShape("synched",0);
	this.instance_37.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_38 = new lib.yellowShape("synched",0);
	this.instance_38.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_39 = new lib.redShape("synched",0);
	this.instance_39.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_40 = new lib.navyShape("synched",0);
	this.instance_40.setTransform(195.15,689.9,1,1,0,0,0,37.2,47.7);

	this.instance_41 = new lib.blueShape("synched",0);
	this.instance_41.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_42 = new lib.yellowShape("synched",0);
	this.instance_42.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_43 = new lib.redShape("synched",0);
	this.instance_43.setTransform(44.95,689.8,1,1,0,0,0,-100.9,-78.9);

	this.instance_44 = new lib.purpleShape("synched",0);
	this.instance_44.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_45 = new lib.purpleShape("synched",0);
	this.instance_45.setTransform(105.25,689.8,1,1,0,0,0,-39.2,0);

	this.instance_46 = new lib.blueShape("synched",0);
	this.instance_46.setTransform(300.2,704.9,1,1,0,0,0,-102.2,-32);

	this.instance_47 = new lib.orangeShape("synched",0);
	this.instance_47.setTransform(284.8,659.6,1,1,0,0,0,-117.8,0);

	this.instance_48 = new lib.yellowShape("synched",0);
	this.instance_48.setTransform(180.25,659.6,1,1,0,0,0,-88.2,-78.9);

	this.instance_49 = new lib.buttonPressing("synched",0);
	this.instance_49.setTransform(1215.9,621.35,1,1,0,0,0,-0.1,-0.5);

	this.instance_50 = new lib.buttonPressed("synched",0);
	this.instance_50.setTransform(1215.8,621.4,1,1,0,0,0,-0.1,-0.5);

	this.playAgain = new lib.playAgain();
	this.playAgain.name = "playAgain";
	this.playAgain.setTransform(1155.15,596.25,0.9999,0.9999,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.playAgain(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_23,p:{x:374.8,rotation:0,y:689.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_20,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_18,p:{x:180.25,y:659.6}},{t:this.instance_17,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_15,p:{rotation:0,x:946.45,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_12,p:{rotation:0,x:1006.4,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_9,p:{x:691.05,y:674.2,rotation:90}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_6,p:{x:434.8,y:689.6,rotation:180}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_4,p:{x:871.45,y:689}},{t:this.instance_3,p:{y:658.9,x:1201.45}},{t:this.instance_2,p:{x:1215.15,y:620.4}},{t:this.startButton},{t:this.openingShape},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_23,p:{x:374.8,rotation:0,y:689.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_20,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_18,p:{x:180.25,y:659.6}},{t:this.instance_17,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_15,p:{rotation:0,x:946.45,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_12,p:{rotation:0,x:1006.4,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_9,p:{x:691.05,y:674.2,rotation:90}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_6,p:{x:434.8,y:689.6,rotation:180}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_4,p:{x:871.45,y:689}},{t:this.instance_3,p:{y:658.9,x:1201.45}},{t:this.instance_2,p:{x:1215.15,y:620.4}}]},2).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_23,p:{x:374.8,rotation:0,y:689.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_18,p:{x:180.25,y:659.6}},{t:this.instance_17,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_12,p:{rotation:0,x:1006.4,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_9,p:{x:691.05,y:674.2,rotation:90}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_4,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_3,p:{y:659,x:1201.45}},{t:this.instance_2,p:{x:1215.25,y:620.9}}]},61).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_18,p:{x:180.25,y:659.6}},{t:this.instance_17,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_4,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_3,p:{y:659.25,x:1201.45}},{t:this.instance_2,p:{x:1215.65,y:620.75}}]},26).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{y:659,x:1201.45}},{t:this.instance_2,p:{x:1215.7,y:621.1}}]},39).to({state:[{t:this.shape},{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{y:659,x:1201.45}},{t:this.instance_2,p:{x:1215.7,y:621.1}}]},13).to({state:[{t:this.shape_1},{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{y:659.25,x:1201.35}},{t:this.instance_2,p:{x:1215.6,y:621.35}}]},4).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_19,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_16,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_5,p:{x:735.8,y:689,rotation:0}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_3,p:{y:659.25,x:1201.5}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_29,p:{x:1215.95,y:603.15}},{t:this.instance_28,p:{x:1242.25,y:573.5}}]},13).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_21,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_14,p:{x:781,rotation:-90,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_7,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_3,p:{y:659.25,x:1201.45}},{t:this.instance_2,p:{x:1215.7,y:621.35}},{t:this.instance_29,p:{x:1216.9,y:603.3}},{t:this.instance_28,p:{x:1243.2,y:573.65}}]},51).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_22,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_13,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_8,p:{x:1096.75,y:689.3,rotation:0}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_3,p:{y:659.25,x:1201.5}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_29,p:{x:1216.8,y:603.3}},{t:this.instance_28,p:{x:1243.1,y:573.65}}]},28).to({state:[{t:this.instance_24,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_11,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_10,p:{x:1201.8,y:704.3,rotation:0}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_3,p:{y:659.25,x:1201.5}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_29,p:{x:1217.4,y:603.25}},{t:this.instance_28,p:{x:1243.7,y:573.6}}]},16).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_25,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_20,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_15,p:{rotation:180,x:434.8,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_6,p:{x:225.35,y:629.65,rotation:180}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_3,p:{y:659.25,x:1201.5}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_29,p:{x:1216.8,y:603.85}},{t:this.instance_28,p:{x:1243.1,y:574.2}}]},20).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_34,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_27,p:{x:180.25,y:659.6}},{t:this.instance_18,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_25,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_20,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_17,p:{x:871.45,y:689}},{t:this.instance_15,p:{rotation:180,x:225.35,y:629.65}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_4,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_3,p:{y:659.25,x:1201.5}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_6,p:{x:540.7,y:614.6,rotation:90}},{t:this.instance_29,p:{x:1218,y:602.45}},{t:this.instance_28,p:{x:1244.3,y:572.8}}]},15).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_26,p:{x:374.8}},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_34,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_35,p:{x:180.25,y:659.6}},{t:this.instance_27,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_25,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_23,p:{x:1006.4,rotation:0,y:689.8}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_12,p:{rotation:90,x:691.05,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_20,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_18,p:{x:871.45,y:689}},{t:this.instance_15,p:{rotation:180,x:225.35,y:629.65}},{t:this.instance_9,p:{x:480.35,y:614.85,rotation:90}},{t:this.instance_17,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_4,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_6,p:{x:540.7,y:614.6,rotation:90}},{t:this.instance_3,p:{y:629.2,x:750.9}},{t:this.instance_29,p:{x:1217.65,y:602.75}},{t:this.instance_28,p:{x:1243.95,y:573.1}}]},5).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_34,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_35,p:{x:180.25,y:659.6}},{t:this.instance_27,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_25,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_20,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_18,p:{x:871.45,y:689}},{t:this.instance_15,p:{rotation:180,x:225.35,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_17,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_4,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_6,p:{x:540.7,y:614.6,rotation:90}},{t:this.instance_3,p:{y:629.2,x:750.9}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_29,p:{x:1217.95,y:602.4}},{t:this.instance_28,p:{x:1244.25,y:572.75}}]},10).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_35,p:{x:180.25,y:659.6}},{t:this.instance_27,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_18,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_17,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_4,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_3,p:{y:629.2,x:750.9}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_29,p:{x:1217.95,y:602.95}},{t:this.instance_28,p:{x:1244.25,y:573.3}}]},5).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_30,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_38,p:{x:180.25,y:659.6}},{t:this.instance_35,p:{x:630.9,y:689.8}},{t:this.instance_19,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_16,p:{rotation:0,x:735.8,y:689}},{t:this.instance_27,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_18,p:{x:299.75,y:629.7}},{t:this.instance_5,p:{x:555.5,y:659,rotation:0}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_17,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_4,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_3,p:{y:569.85,x:449.9}},{t:this.instance_29,p:{x:1217.65,y:603.3}},{t:this.instance_28,p:{x:1243.95,y:573.65}}]},10).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_32,p:{x:195.15,y:689.9}},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_39,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_38,p:{x:180.25,y:659.6}},{t:this.instance_35,p:{x:630.9,y:689.8}},{t:this.instance_30,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_22,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_13,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_19,p:{rotation:0,x:735.8,y:689}},{t:this.instance_27,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_18,p:{x:299.75,y:629.7}},{t:this.instance_16,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_17,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_8,p:{x:405.1,y:629.1,rotation:0}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_4,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_3,p:{y:569.85,x:449.9}},{t:this.instance_5,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_29,p:{x:1218.25,y:602.7}},{t:this.instance_28,p:{x:1244.55,y:573.05}}]},5).to({state:[{t:this.instance_33,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_39,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_38,p:{x:180.25,y:659.6}},{t:this.instance_35,p:{x:630.9,y:689.8}},{t:this.instance_30,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_24,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_11,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_19,p:{rotation:0,x:735.8,y:689}},{t:this.instance_27,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_18,p:{x:299.75,y:629.7}},{t:this.instance_16,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_17,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_10,p:{x:269.6,y:584.95,rotation:0}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_4,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_3,p:{y:569.85,x:449.9}},{t:this.instance_5,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_29,p:{x:1218.25,y:603}},{t:this.instance_28,p:{x:1244.55,y:573.35}}]},10).to({state:[{t:this.instance_41,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_39,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_38,p:{x:180.25,y:659.6}},{t:this.instance_35,p:{x:630.9,y:689.8}},{t:this.instance_30,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_33,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_24,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_19,p:{rotation:0,x:735.8,y:689}},{t:this.instance_27,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_18,p:{x:299.75,y:629.7}},{t:this.instance_16,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_17,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_11,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_4,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_3,p:{y:569.85,x:449.9}},{t:this.instance_5,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_10,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_29,p:{x:1218.5,y:602.45}},{t:this.instance_28,p:{x:1244.8,y:572.8}}]},10).to({state:[{t:this.instance_41,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_39,p:{rotation:0,x:44.95,y:689.8}},{t:this.instance_42,p:{x:180.25,y:659.6}},{t:this.instance_38,p:{x:630.9,y:689.8}},{t:this.instance_30,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_33,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_24,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_19,p:{rotation:0,x:735.8,y:689}},{t:this.instance_35,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_27,p:{x:299.75,y:629.7}},{t:this.instance_16,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_18,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_11,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_17,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_4,p:{x:449.9,y:569.85}},{t:this.instance_5,p:{x:841.4,y:584.25,rotation:-90}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_10,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_3,p:{y:629.4,x:991.45}},{t:this.instance_29,p:{x:1218.55,y:602.4}},{t:this.instance_28,p:{x:1244.85,y:572.75}}]},10).to({state:[{t:this.instance_41,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_37,p:{x:105.25,rotation:0,y:689.8}},{t:this.instance_43},{t:this.instance_42,p:{x:180.25,y:659.6}},{t:this.instance_38,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_34,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_33,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_24,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_25,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_35,p:{x:871.45,y:689}},{t:this.instance_20,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_27,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_18,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_11,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_15,p:{rotation:90,x:540.7,y:614.6}},{t:this.instance_17,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_6,p:{x:675.8,y:629.25,rotation:180}},{t:this.instance_4,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_10,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_3,p:{y:629.4,x:991.45}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_29,p:{x:1218.8,y:602.45}},{t:this.instance_28,p:{x:1245.1,y:572.8}}]},5).to({state:[{t:this.instance_41,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_44,p:{x:105.25}},{t:this.instance_43},{t:this.instance_42,p:{x:180.25,y:659.6}},{t:this.instance_38,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_37,p:{x:946.45,rotation:0,y:689.8}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_33,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_24,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_34,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_35,p:{x:871.45,y:689}},{t:this.instance_25,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_27,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_18,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_11,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_20,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_17,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_15,p:{rotation:180,x:675.8,y:629.25}},{t:this.instance_4,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_10,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_3,p:{y:629.4,x:991.45}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_6,p:{x:781,y:584.05,rotation:-90}},{t:this.instance_29,p:{x:1218.85,y:602.4}},{t:this.instance_28,p:{x:1245.15,y:572.75}}]},15).to({state:[{t:this.instance_41,p:{rotation:0,x:300.2,y:704.9}},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_45},{t:this.instance_43},{t:this.instance_42,p:{x:180.25,y:659.6}},{t:this.instance_38,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_33,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_24,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_35,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_27,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_18,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_11,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_17,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_4,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_10,p:{x:690.8,y:584.35,rotation:0}},{t:this.instance_3,p:{y:629.4,x:991.45}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_29,p:{x:1218.8,y:602.7}},{t:this.instance_28,p:{x:1245.1,y:573.05}}]},3).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_31,p:{rotation:0,x:284.8,y:659.6}},{t:this.instance_45},{t:this.instance_43},{t:this.instance_42,p:{x:180.25,y:659.6}},{t:this.instance_38,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_21,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_14,p:{x:480.35,rotation:-90,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_35,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_27,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_7,p:{rotation:180,x:886.4,y:659}},{t:this.instance_18,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_17,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_4,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_3,p:{y:629.4,x:991.45}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_29,p:{x:1218.5,y:602.4}},{t:this.instance_28,p:{x:1244.8,y:572.75}}]},17).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_42,p:{x:180.25,y:659.6}},{t:this.instance_38,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_35,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_27,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_18,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_17,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_4,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_3,p:{y:629.4,x:991.45}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_29,p:{x:1218.55,y:602.15}},{t:this.instance_28,p:{x:1244.85,y:572.5}}]},10).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_48},{t:this.instance_42,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_38,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_35,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_27,p:{x:1201.5,y:659.25}},{t:this.instance_2,p:{x:1215.75,y:621.35}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_18,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_17,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_4,p:{x:991.45,y:629.4}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_3,p:{y:509.15,x:811.15}},{t:this.instance_29,p:{x:1218.55,y:602.7}},{t:this.instance_28,p:{x:1244.85,y:573.05}}]},5).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_48},{t:this.instance_42,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_38,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_35,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_27,p:{x:1201.5,y:659.25}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_18,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_17,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_4,p:{x:991.45,y:629.4}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_3,p:{y:509.15,x:811.15}},{t:this.instance_49}]},9).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_48},{t:this.instance_42,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_38,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_35,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_27,p:{x:1201.5,y:659.25}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_18,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_17,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_4,p:{x:991.45,y:629.4}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_3,p:{y:509.15,x:811.15}},{t:this.instance_50}]},5).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_48},{t:this.instance_42,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_38,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_35,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_27,p:{x:1201.5,y:659.25}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_18,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_17,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_4,p:{x:991.45,y:629.4}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_3,p:{y:509.15,x:811.15}},{t:this.instance_50}]},6).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_48},{t:this.instance_42,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_38,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_35,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_27,p:{x:1201.5,y:659.25}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_18,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_17,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_4,p:{x:991.45,y:629.4}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_3,p:{y:509.15,x:811.15}},{t:this.instance_50}]},5).to({state:[{t:this.instance_46},{t:this.instance_36},{t:this.instance_40},{t:this.instance_47},{t:this.instance_45},{t:this.instance_43},{t:this.instance_48},{t:this.instance_42,p:{x:630.9,y:689.8}},{t:this.instance_39,p:{rotation:-90,x:1261.6,y:674.2}},{t:this.instance_44,p:{x:946.45}},{t:this.instance_31,p:{rotation:-90,x:781,y:674.2}},{t:this.instance_32,p:{x:555.5,y:689.1}},{t:this.instance_26,p:{x:1006.4}},{t:this.instance_41,p:{rotation:90,x:826.3,y:659.45}},{t:this.instance_33,p:{rotation:0,x:1201.8,y:704.3}},{t:this.instance_23,p:{x:691.05,rotation:90,y:674.2}},{t:this.instance_22,p:{x:1096.75,y:689.3}},{t:this.instance_21,p:{rotation:-90,x:480.35,y:674.2}},{t:this.instance_37,p:{x:434.8,rotation:180,y:689.6}},{t:this.instance_30,p:{rotation:0,x:735.8,y:689}},{t:this.instance_38,p:{x:871.45,y:689}},{t:this.instance_34,p:{x:225.35,rotation:180,y:629.65}},{t:this.instance_12,p:{rotation:90,x:480.35,y:614.85}},{t:this.instance_35,p:{x:299.75,y:629.7}},{t:this.instance_19,p:{rotation:0,x:555.5,y:659}},{t:this.instance_14,p:{x:886.4,rotation:180,y:659}},{t:this.instance_27,p:{x:1201.5,y:659.25}},{t:this.instance_13,p:{x:405.1,y:629.1}},{t:this.instance_24,p:{rotation:0,x:269.6,y:584.95}},{t:this.instance_25,p:{x:540.7,rotation:90,y:614.6}},{t:this.instance_18,p:{x:750.9,y:629.2}},{t:this.instance_9,p:{x:615.9,y:629.4,rotation:0}},{t:this.instance_20,p:{x:675.8,rotation:180,y:629.25}},{t:this.instance_17,p:{x:449.9,y:569.85}},{t:this.instance_16,p:{rotation:-90,x:841.4,y:584.25}},{t:this.instance_8,p:{x:871.5,y:584.25,rotation:-90}},{t:this.instance_11,p:{rotation:0,x:690.8,y:584.35}},{t:this.instance_4,p:{x:991.45,y:629.4}},{t:this.instance_5,p:{x:1096.75,y:659.35,rotation:0}},{t:this.instance_15,p:{rotation:-90,x:781,y:584.05}},{t:this.instance_6,p:{x:1051.6,y:644.35,rotation:90}},{t:this.instance_10,p:{x:946.3,y:599.5,rotation:-90}},{t:this.instance_7,p:{rotation:0,x:1006.4,y:569.5}},{t:this.instance_3,p:{y:509.15,x:811.15}},{t:this.instance_50},{t:this.playAgain}]},41).wait(2));

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

	this.actionFrames = [0,2,3,46,61,72,87,103,118,192,207,220,235,237,251,256,271,273,278,286,287,291,292,301,302,306,307,316,321,326,331,337,341,342,351,356,357,360,371,374,377,387,391,401,406,422,474,475];
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
		this.openingShape = this.background.openingShape;
		var self=this;
		self.stop();
		
		createjs.Sound.registerSound("/sounds/Main Theme.mp3","main");
		
		self.startButton.addEventListener("click", play);
		
		function play() {
			self.gotoAndPlay(2);
		}
	}
	this.frame_2 = function() {
		this.startButton = undefined;this.openingShape = undefined;
		createjs.Sound.stop("main");
	}
	this.frame_3 = function() {
		playSound("gameoverwav");
	}
	this.frame_46 = function() {
		playSound("clearwav");
	}
	this.frame_61 = function() {
		playSound("fallwav");
	}
	this.frame_72 = function() {
		playSound("clearwav");
	}
	this.frame_87 = function() {
		playSound("fallwav");
	}
	this.frame_103 = function() {
		playSound("clearwav");
	}
	this.frame_118 = function() {
		playSound("fallwav");
	}
	this.frame_192 = function() {
		playSound("clearwav");
	}
	this.frame_207 = function() {
		playSound("fallwav");
	}
	this.frame_220 = function() {
		playSound("clearwav");
	}
	this.frame_235 = function() {
		playSound("fallwav");
	}
	this.frame_237 = function() {
		playSound("clearwav");
	}
	this.frame_251 = function() {
		playSound("fallwav");
	}
	this.frame_256 = function() {
		playSound("clearwav");
	}
	this.frame_271 = function() {
		playSound("fallwav");
	}
	this.frame_273 = function() {
		playSound("clearwav");
	}
	this.frame_278 = function() {
		playSound("clearwav");
	}
	this.frame_286 = function() {
		playSound("fallwav");
	}
	this.frame_287 = function() {
		playSound("clearwav");
	}
	this.frame_291 = function() {
		playSound("fallwav");
	}
	this.frame_292 = function() {
		playSound("clearwav");
	}
	this.frame_301 = function() {
		playSound("fallwav");
	}
	this.frame_302 = function() {
		playSound("clearwav");
	}
	this.frame_306 = function() {
		playSound("fallwav");
	}
	this.frame_307 = function() {
		playSound("clearwav");
	}
	this.frame_316 = function() {
		playSound("fallwav");
		playSound("clearwav");
	}
	this.frame_321 = function() {
		playSound("fallwav");
	}
	this.frame_326 = function() {
		playSound("clearwav");
	}
	this.frame_331 = function() {
		playSound("fallwav");
	}
	this.frame_337 = function() {
		playSound("clearwav");
	}
	this.frame_341 = function() {
		playSound("fallwav");
	}
	this.frame_342 = function() {
		playSound("clearwav");
	}
	this.frame_351 = function() {
		playSound("fallwav");
	}
	this.frame_356 = function() {
		playSound("fallwav");
	}
	this.frame_357 = function() {
		playSound("clearwav");
	}
	this.frame_360 = function() {
		playSound("clearwav");
	}
	this.frame_371 = function() {
		playSound("fallwav");
	}
	this.frame_374 = function() {
		playSound("fallwav");
	}
	this.frame_377 = function() {
		playSound("clearwav");
	}
	this.frame_387 = function() {
		playSound("clearwav");
	}
	this.frame_391 = function() {
		playSound("fallwav");
		playSound("clearwav");
	}
	this.frame_401 = function() {
		playSound("fallwav");
	}
	this.frame_406 = function() {
		playSound("fallwav");
	}
	this.frame_422 = function() {
		playSound("successwav");
	}
	this.frame_474 = function() {
		this.playAgain = this.background.playAgain;
		var self=this;
		self.stop();
		
		self.playAgain.addEventListener("click",replay);
		function replay() {
			self.gotoAndPlay(2);
		}
	}
	this.frame_475 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(43).call(this.frame_46).wait(15).call(this.frame_61).wait(11).call(this.frame_72).wait(15).call(this.frame_87).wait(16).call(this.frame_103).wait(15).call(this.frame_118).wait(74).call(this.frame_192).wait(15).call(this.frame_207).wait(13).call(this.frame_220).wait(15).call(this.frame_235).wait(2).call(this.frame_237).wait(14).call(this.frame_251).wait(5).call(this.frame_256).wait(15).call(this.frame_271).wait(2).call(this.frame_273).wait(5).call(this.frame_278).wait(8).call(this.frame_286).wait(1).call(this.frame_287).wait(4).call(this.frame_291).wait(1).call(this.frame_292).wait(9).call(this.frame_301).wait(1).call(this.frame_302).wait(4).call(this.frame_306).wait(1).call(this.frame_307).wait(9).call(this.frame_316).wait(5).call(this.frame_321).wait(5).call(this.frame_326).wait(5).call(this.frame_331).wait(6).call(this.frame_337).wait(4).call(this.frame_341).wait(1).call(this.frame_342).wait(9).call(this.frame_351).wait(5).call(this.frame_356).wait(1).call(this.frame_357).wait(3).call(this.frame_360).wait(11).call(this.frame_371).wait(3).call(this.frame_374).wait(3).call(this.frame_377).wait(10).call(this.frame_387).wait(4).call(this.frame_391).wait(10).call(this.frame_401).wait(5).call(this.frame_406).wait(16).call(this.frame_422).wait(52).call(this.frame_474).wait(1).call(this.frame_475).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(412,517.35,0.5572,0.5572,0,0,0,0.2,0.2);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0,regY:0,x:411.9,y:517.25},0).wait(169).to({scaleX:0.5706,scaleY:0.5706,x:422.4992,y:512.4344},0).wait(1).to({scaleX:0.5839,scaleY:0.5839,x:433.0984,y:507.6187},0).wait(1).to({scaleX:0.5973,scaleY:0.5973,x:443.6975,y:502.8031},0).wait(1).to({scaleX:0.6106,scaleY:0.6106,x:454.2967,y:497.9875},0).wait(1).to({scaleX:0.624,scaleY:0.624,x:464.8959,y:493.1718},0).wait(1).to({scaleX:0.6373,scaleY:0.6373,x:475.4951,y:488.3562},0).wait(1).to({scaleX:0.6507,scaleY:0.6507,x:486.0943,y:483.5406},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:496.6935,y:478.7249},0).wait(1).to({scaleX:0.6774,scaleY:0.6774,x:507.2926,y:473.9093},0).wait(1).to({scaleX:0.6907,scaleY:0.6907,x:517.8918,y:469.0937},0).wait(1).to({scaleX:0.7041,scaleY:0.7041,x:528.491,y:464.278},0).wait(1).to({scaleX:0.7174,scaleY:0.7174,x:539.0902,y:459.4624},0).wait(1).to({scaleX:0.7308,scaleY:0.7308,x:549.6894,y:454.6468},0).wait(1).to({scaleX:0.7441,scaleY:0.7441,x:560.2885,y:449.8311},0).wait(1).to({scaleX:0.7575,scaleY:0.7575,x:570.8877,y:445.0155},0).wait(1).to({scaleX:0.7708,scaleY:0.7708,x:581.4869,y:440.1999},0).wait(1).to({scaleX:0.7842,scaleY:0.7842,x:592.0861,y:435.3842},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,x:602.6853,y:430.5686},0).wait(1).to({scaleX:0.8109,scaleY:0.8109,x:613.2845,y:425.753},0).wait(1).to({scaleX:0.8242,scaleY:0.8242,x:623.8836,y:420.9373},0).wait(1).to({scaleX:0.8375,scaleY:0.8375,x:634.4828,y:416.1217},0).wait(1).to({scaleX:0.8509,scaleY:0.8509,x:645.082,y:411.3061},0).wait(1).to({scaleX:0.8642,scaleY:0.8642,x:655.6812,y:406.4904},0).wait(1).to({scaleX:0.8776,scaleY:0.8776,x:666.2804,y:401.6748},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:676.8795,y:396.8592},0).wait(1).to({scaleX:0.9043,scaleY:0.9043,x:687.4787,y:392.0435},0).wait(1).to({scaleX:0.9176,scaleY:0.9176,x:698.0779,y:387.2279},0).wait(34).to({scaleX:0.8949,scaleY:0.8949,x:683.8972,y:395.4089},0).wait(1).to({scaleX:0.8722,scaleY:0.8722,x:669.7164,y:403.5899},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:655.5357,y:411.771},0).wait(1).to({scaleX:0.8268,scaleY:0.8268,x:641.3549,y:419.952},0).wait(1).to({scaleX:0.804,scaleY:0.804,x:627.1742,y:428.133},0).wait(1).to({scaleX:0.7813,scaleY:0.7813,x:612.9934,y:436.314},0).wait(1).to({scaleX:0.7586,scaleY:0.7586,x:598.8127,y:444.495},0).wait(1).to({scaleX:0.7359,scaleY:0.7359,x:584.6319,y:452.676},0).wait(1).to({scaleX:0.7131,scaleY:0.7131,x:570.4512,y:460.857},0).wait(1).to({scaleX:0.6904,scaleY:0.6904,x:556.2704,y:469.0381},0).wait(1).to({scaleX:0.6677,scaleY:0.6677,x:542.0897,y:477.2191},0).wait(1).to({scaleX:0.645,scaleY:0.645,x:527.9089,y:485.4001},0).wait(1).to({scaleX:0.6222,scaleY:0.6222,x:513.7282,y:493.5811},0).wait(1).to({scaleX:0.5995,scaleY:0.5995,x:499.5474,y:501.7621},0).wait(1).to({scaleX:0.5768,scaleY:0.5768,x:485.3667,y:509.9431},0).wait(1).to({scaleX:0.5541,scaleY:0.5541,x:471.1859,y:518.1242},0).wait(1).to({scaleX:0.5313,scaleY:0.5313,x:457.0052,y:526.3052},0).wait(61).to({x:470.7031,y:526.3406},0).wait(1).to({x:484.401,y:526.376},0).wait(1).to({x:498.0989,y:526.4114},0).wait(1).to({x:511.7968,y:526.4468},0).wait(1).to({x:525.4948,y:526.4823},0).wait(1).to({x:539.1927,y:526.5177},0).wait(1).to({x:552.8906,y:526.5531},0).wait(1).to({x:566.5885,y:526.5885},0).wait(1).to({x:580.2864,y:526.6239},0).wait(1).to({x:593.9843,y:526.6593},0).wait(1).to({x:607.6823,y:526.6948},0).wait(1).to({x:621.3802,y:526.7302},0).wait(1).to({x:635.0781,y:526.7656},0).wait(1).to({x:648.776,y:526.801},0).wait(1).to({x:662.4739,y:526.8364},0).wait(1).to({x:676.1718,y:526.8718},0).wait(1).to({x:689.8698,y:526.9073},0).wait(1).to({x:703.5677,y:526.9427},0).wait(1).to({x:717.2656,y:526.9781},0).wait(1).to({x:730.9635,y:527.0135},0).wait(1).to({x:744.6614,y:527.0489},0).wait(1).to({x:758.3593,y:527.0843},0).wait(1).to({x:772.0573,y:527.1198},0).wait(1).to({x:785.7552,y:527.1552},0).wait(31).to({x:791.0987,y:527.1503},0).wait(1).to({x:796.4423,y:527.1455},0).wait(1).to({x:801.7858,y:527.1407},0).wait(1).to({x:807.1294,y:527.1358},0).wait(1).to({x:812.4729,y:527.131},0).wait(1).to({x:817.8165,y:527.1261},0).wait(1).to({x:823.16,y:527.1213},0).wait(1).to({x:828.5036,y:527.1165},0).wait(1).to({x:833.8471,y:527.1116},0).wait(1).to({x:839.1907,y:527.1068},0).wait(1).to({x:844.5342,y:527.1019},0).wait(1).to({x:849.8778,y:527.0971},0).wait(1).to({x:855.2213,y:527.0923},0).wait(1).to({x:860.5649,y:527.0874},0).wait(1).to({x:865.9084,y:527.0826},0).wait(1).to({x:871.2519,y:527.0778},0).wait(1).to({x:876.5955,y:527.0729},0).wait(1).to({x:881.939,y:527.0681},0).wait(1).to({x:887.2826,y:527.0632},0).wait(1).to({x:892.6261,y:527.0584},0).wait(1).to({x:897.9697,y:527.0536},0).wait(1).to({x:903.3132,y:527.0487},0).wait(1).to({x:908.6568,y:527.0439},0).wait(1).to({x:914.0003,y:527.039},0).wait(1).to({x:919.3439,y:527.0342},0).wait(1).to({x:924.6874,y:527.0294},0).wait(1).to({x:930.031,y:527.0245},0).wait(1).to({x:935.3745,y:527.0197},0).wait(1).to({x:940.7181,y:527.0149},0).wait(1).to({x:946.0616,y:527.01},0).wait(1).to({x:951.4052,y:527.0052},0).wait(31).to({scaleX:0.5221,scaleY:0.5221,x:957.3056,y:529.7942},0).wait(1).to({scaleX:0.5129,scaleY:0.5129,x:963.206,y:532.5831},0).wait(1).to({scaleX:0.5037,scaleY:0.5037,x:969.1064,y:535.3721},0).wait(1).to({scaleX:0.4944,scaleY:0.4944,x:975.0068,y:538.1611},0).wait(1).to({scaleX:0.4852,scaleY:0.4852,x:980.9073,y:540.9501},0).wait(1).to({scaleX:0.476,scaleY:0.476,x:986.8077,y:543.7391},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:992.7081,y:546.5281},0).wait(1).to({scaleX:0.4575,scaleY:0.4575,x:998.6085,y:549.3171},0).wait(1).to({scaleX:0.4483,scaleY:0.4483,x:1004.5089,y:552.1061},0).wait(1).to({scaleX:0.4391,scaleY:0.4391,x:1010.4093,y:554.8951},0).wait(1).to({scaleX:0.4298,scaleY:0.4298,x:1016.3098,y:557.684},0).wait(1).to({scaleX:0.4206,scaleY:0.4206,x:1022.2102,y:560.473},0).wait(1).to({scaleX:0.4114,scaleY:0.4114,x:1028.1106,y:563.262},0).wait(1).to({scaleX:0.4022,scaleY:0.4022,x:1034.011,y:566.051},0).wait(1).to({scaleX:0.3929,scaleY:0.3929,x:1039.9114,y:568.84},0).wait(1).to({scaleX:0.3837,scaleY:0.3837,x:1045.8118,y:571.629},0).wait(1).to({scaleX:0.3745,scaleY:0.3745,x:1051.7123,y:574.418},0).wait(1).to({scaleX:0.3652,scaleY:0.3652,x:1057.6127,y:577.207},0).wait(1).to({scaleX:0.356,scaleY:0.356,x:1063.5131,y:579.996},0).wait(1).to({scaleX:0.3468,scaleY:0.3468,x:1069.4135,y:582.7849},0).wait(1).to({scaleX:0.3376,scaleY:0.3376,x:1075.3139,y:585.5739},0).wait(1).to({scaleX:0.3283,scaleY:0.3283,x:1081.2143,y:588.3629},0).wait(1).to({scaleX:0.3191,scaleY:0.3191,x:1087.1148,y:591.1519},0).wait(1).to({scaleX:0.3099,scaleY:0.3099,x:1093.0152,y:593.9409},0).wait(1).to({scaleX:0.3007,scaleY:0.3007,x:1098.9156,y:596.7299},0).wait(1).to({scaleX:0.2914,scaleY:0.2914,x:1104.816,y:599.5189},0).wait(1).to({scaleX:0.2822,scaleY:0.2822,x:1110.7164,y:602.3079},0).wait(1).to({scaleX:0.273,scaleY:0.273,x:1116.6168,y:605.0968},0).wait(1).to({scaleX:0.2637,scaleY:0.2637,x:1122.5173,y:607.8858},0).wait(1).to({scaleX:0.2545,scaleY:0.2545,x:1128.4177,y:610.6748},0).wait(1).to({scaleX:0.2453,scaleY:0.2453,x:1134.3181,y:613.4638},0).wait(1).to({scaleX:0.2361,scaleY:0.2361,x:1140.2185,y:616.2528},0).wait(1).to({scaleX:0.2268,scaleY:0.2268,x:1146.1189,y:619.0418},0).wait(1).to({scaleX:0.2176,scaleY:0.2176,x:1152.0193,y:621.8308},0).wait(1).to({scaleX:0.2084,scaleY:0.2084,x:1157.9198,y:624.6198},0).wait(20));

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

	this.timeline.addTween(cjs.Tween.get(this.blockFalling).wait(2).to({regY:316.6,scaleX:1.7948,scaleY:1.7948,y:0},0).wait(36).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:605.7,y:55.45},0).wait(25).to({regX:55.2,regY:316.6,scaleX:1.7948,scaleY:1.7948,x:-0.1,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:605.7,y:55.45},0).wait(25).to({regX:55.2,regY:316.6,scaleX:1.7948,scaleY:1.7948,x:-0.1,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:605.7,y:55.45},0).wait(93).to({regX:84,regY:182,scaleX:1.3439,scaleY:1.3439,x:0.05,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:576.95,y:190.05},0).wait(25).to({regX:110.7,regY:56.9,scaleX:1.0898,scaleY:1.0898,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:550.2,y:315.2},0).wait(27).to({regX:113.6,regY:187.8,scaleX:1.359,scaleY:1.359,x:0,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:547.3,y:184.25},0).wait(15).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:544.05,y:37.05},0).wait(19).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:544.05,y:37.05},0).wait(19).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:544.05,y:37.05},0).wait(14).to({regX:144.2,regY:335.1,scaleX:1.8821,scaleY:1.8821,x:-0.05,y:0.15},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:516.7,y:37},0).wait(14).to({regX:349.8,regY:335.6,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.05},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:311.2,y:36.45},0).wait(19).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:215.25,y:36.2},0).wait(14).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:215.25,y:36.2},0).wait(17).to({regX:531.1,regY:335.8,scaleX:1.8821,scaleY:1.8821,x:0,y:0.1},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:129.85,y:36.3},0).wait(26).to({regX:611.3,regY:335.7,scaleX:1.8821,scaleY:1.8821,x:0,y:0},0).wait(1).to({regX:660.9,regY:372,scaleX:1,scaleY:1,x:49.65,y:36.35},0).wait(72));

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

	this.timeline.addTween(cjs.Tween.get(this.blockFalling2).wait(2).to({regY:316.6,scaleX:1.7948,scaleY:1.7948,y:0},0).wait(265).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:603.75,y:76.65},0).wait(20).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:603.75,y:76.65},0).wait(14).to({regX:116.9,regY:335,scaleX:1.8821,scaleY:1.8821,x:0,y:0.05},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:603.75,y:76.65},0).wait(14).to({regX:281.2,regY:335.4,scaleX:1.8821,scaleY:1.8821,x:-0.05,y:0},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:439.4,y:76.2},0).wait(14).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:274.95,y:75.8},0).wait(19).to({regX:445.7,regY:335.9,scaleX:1.8821,scaleY:1.8821,x:0.1,y:0.15},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:274.95,y:75.8},0).wait(19).to({regX:515.1,regY:335.8,scaleX:1.8821,scaleY:1.8821,x:0,y:0.1},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:205.55,y:75.9},0).wait(19).to({regX:611.3,regY:335.7,scaleX:1.8821,scaleY:1.8821,x:0,y:0},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:109.35,y:75.95},0).wait(14).to({regX:611.3,regY:335.7,scaleX:1.8821,scaleY:1.8821,x:0,y:0},0).wait(1).to({regX:720.6,regY:411.6,scaleX:1,scaleY:1,x:109.35,y:75.95},0).wait(67));

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

	this.timeline.addTween(cjs.Tween.get(this.person).wait(2).to({scaleX:1.7948,scaleY:1.7948,x:312.05,y:632.85},0).wait(163).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:847.3,y:528.35},0).wait(18).to({regX:316.1,regY:652.9,scaleX:1.3439,scaleY:1.3439,x:311.95,y:632.9},0).wait(6).to({regX:353.4,regY:645.8,scaleX:1.2133,scaleY:1.2133,x:312},0).wait(64).to({regX:282.7,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.8},0).wait(3).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:793.7,y:526.35},0).wait(17).to({regX:282.7,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.8},0).wait(8).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:793.7,y:526.35},0).wait(12).to({regX:282.7,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.8},0).wait(3).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:793.7,y:526.35},0).wait(11).to({regX:296.3,regY:671.2,scaleX:1.8821,scaleY:1.8821,x:311.95,y:632.8},0).wait(4).to({regX:351.1,regY:671.4,x:312,y:632.9},0).wait(1).to({regX:364.8,regY:671.5,y:632.95},0).wait(1).to({regX:378.5,x:311.95},0).wait(1).to({regX:392.2,x:312,y:632.85},0).wait(1).to({regX:405.9,regY:671.6,y:632.95},0).wait(1).to({regX:419.6,x:311.95,y:632.85},0).wait(1).to({regX:433.3},0).wait(1).to({regX:447,x:312,y:632.75},0).wait(1).to({regX:460.7,regY:671.7,x:311.95,y:632.9},0).wait(1).to({regX:474.4},0).wait(1).to({regX:488.1,regY:671.8,x:312,y:633},0).wait(1).to({regX:501.8,y:632.9},0).wait(1).to({regX:515.5,regY:671.9,x:311.95,y:632.95},0).wait(1).to({regX:529.2,x:312},0).wait(1).to({regX:542.9,y:632.85},0).wait(1).to({regX:556.6,regY:672,x:311.95,y:632.95},0).wait(1).to({regX:570.3,x:312},0).wait(1).to({regX:584,y:632.85},0).wait(1).to({regX:597.7,regY:672.1,x:311.95,y:632.95},0).wait(1).to({regX:611.4,y:632.9},0).wait(4).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:465,y:525.5},0).wait(14).to({regX:611.4,regY:672.1,scaleX:1.8821,scaleY:1.8821,x:311.95,y:632.9},0).wait(12).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:465,y:525.5},0).wait(18).to({regX:707.6,regY:672,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.85},0).wait(1).to({regX:712.9,x:312},0).wait(1).to({regX:718.2,x:311.85},0).wait(1).to({regX:723.6,x:311.95,y:632.95},0).wait(1).to({regX:729,x:312.1},0).wait(1).to({regX:734.3,x:311.95},0).wait(1).to({regX:739.6,x:312},0).wait(1).to({regX:745,x:312.05},0).wait(1).to({regX:750.3,x:311.95},0).wait(1).to({regX:755.6,x:311.9},0).wait(2).to({regX:766.4,x:312.1},0).wait(1).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:310.05,y:525.65},0).wait(13).to({regX:777.1,regY:672,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.95},0).wait(3).to({regX:764.4,regY:564.7,scaleX:1,scaleY:1,x:299.35,y:525.65},0).wait(12).to({regX:777.1,regY:672,scaleX:1.8821,scaleY:1.8821,x:312.05,y:632.95},0).wait(20).to({regX:928.9,regY:676.6,scaleX:2.6706,scaleY:2.6706,x:312.2},0).wait(2).to({regX:946.7,regY:677.1,scaleX:2.8091,scaleY:2.8091,x:311.95,y:632.75},0).wait(2).to({regX:964.6,regY:677.6,scaleX:2.9626,scaleY:2.9626,x:312.1,y:632.8},0).wait(2).to({regX:982.4,regY:678.1,scaleX:3.134,scaleY:3.134,x:312,y:632.65},0).wait(2).to({regX:1000.3,regY:678.8,scaleX:3.3264,scaleY:3.3264,x:312.05,y:633},0).wait(2).to({regX:1018.1,regY:679.2,scaleX:3.544,scaleY:3.544,x:311.9,y:632.65},0).wait(2).to({regX:1036,regY:679.8,scaleX:3.7919,scaleY:3.7919,x:312.05,y:632.9},0).wait(2).to({regX:1053.8,regY:680.4,scaleX:4.0774,scaleY:4.0774,x:311.95,y:633.05},0).wait(2).to({regX:1071.7,regY:680.9,scaleX:4.409,scaleY:4.409,x:312.15,y:632.95},0).wait(2).to({regX:1089.5,regY:681.5,scaleX:4.7998,scaleY:4.7998,x:311.7,y:633.1},0).wait(20));

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

	this.timeline.addTween(cjs.Tween.get(this.bubble).wait(2).to({regY:316.6,scaleX:1.7948,scaleY:1.7948,y:0},0).wait(146).to({_off:true},10).wait(318));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(646,574.05,1.7947,1.7947,0,0,0,415.2,636.5);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 4
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(2).to({regY:636.4,scaleX:1.7948,scaleY:1.7948,x:646.05,y:574},0).wait(207).to({regX:703.4,regY:583.5,scaleX:1.0898,scaleY:1.0898,x:645.9,y:573.95},0).wait(28).to({regX:588.9,regY:610.1,scaleX:1.359,scaleY:1.359,y:573.9},0).wait(16).to({regX:460.1,regY:640,scaleX:1.8821,scaleY:1.8821,x:645.95,y:574.1},0).wait(55).to({regX:487.4,x:645.9,y:574},0).wait(10).to({regX:624.4,regY:640.4,x:645.85,y:574.05},0).wait(5).to({regX:693,regY:640.6,x:646.05},0).wait(10).to({regX:788.9,regY:640.8,x:646,y:574},0).wait(40).to({regX:858.3,regY:640.7,x:645.95,y:573.95},0).wait(3).to({regX:874.2,x:645.75},0).wait(17).to({regX:954.5,regY:640.6,x:645.95,y:573.85},0).wait(29).to({regX:960.3,regY:641.5,scaleX:1.9154,scaleY:1.9154,x:645.85,y:574.05},0).wait(6).to({regX:995.4,regY:646.3,scaleX:2.1426,scaleY:2.1426,x:646,y:573.9},0).wait(5).to({regX:1024.7,regY:650.4,scaleX:2.3776,scaleY:2.3776,y:574},0).wait(41).to({regX:1159.1,regY:669.2,scaleX:4.7998,scaleY:4.7998,x:645.8,y:574.05},0).wait(2));

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
		{src:"images/Tetris_atlas_1.png?1598724100497", id:"Tetris_atlas_1"},
		{src:"sounds/clearwav.mp3?1598724100942", id:"clearwav"},
		{src:"sounds/fallwav.mp3?1598724100942", id:"fallwav"},
		{src:"sounds/gameoverwav.mp3?1598724100942", id:"gameoverwav"},
		{src:"sounds/MainTheme.mp3?1598724100942", id:"MainTheme"},
		{src:"sounds/successwav.mp3?1598724100942", id:"successwav"}
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
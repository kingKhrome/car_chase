
let c = 0
function setup() {
	createCanvas(1600,800)
  colorMode(HSB)
}

function draw() {
	if (c > 360) c=0;
	c++;
  console.log(c)
	background(c,100,100)
}

let c 
let color 
setup() {
	createCanvas(500,500)
	colorMode(HSB,360,100,100)
	c = 0
	color = (c,100,100)
	background(color)
}

draw() {
	if (c > 360) c=0
	c++
	color = (c,100,100)
	background(color)
}
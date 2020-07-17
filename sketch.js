let redCar
let road
function setup() {
  createCanvas(1600,800)
  redCar = loadImage('https://cdn.glitch.com/b92fac6a-290b-43ed-b913-a4ce6c1aeedf%2Fred_car.png?v=1594948385920')
  road = loadImage('https://cdn.glitch.com/b92fac6a-290b-43ed-b913-a4ce6c1aeedf%2Froad.png?v=1594948392204')

}

function draw() {
	background(220)
  image(road,0,400-road.width/4)
  image(redCar,800,400)
}

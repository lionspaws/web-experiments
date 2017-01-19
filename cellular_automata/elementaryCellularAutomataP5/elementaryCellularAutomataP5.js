var grid = [];

// fill the array with zeroes
for(var a = 0; a <= (x*y); a++) {
  grid.push(0);
}

// initialise the pattern from halfway across canvas width
grid[x/2] = 1;

function setup() {
  createCanvas(500, 500);
  var outcome = [0,0,0,1,1,1,1,0];
}

function draw() {
  background(120);
}
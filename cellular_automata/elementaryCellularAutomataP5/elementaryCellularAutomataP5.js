var x = 400, y = 400;
var grid = [];
var outcome = [0,0,0,1,1,1,1,0];

function setup() {
  // fill the array with zeroes
  for(var a = 0; a <= (x*y); a++) {
    grid.push(0);
  }
  
  // initialise the pattern from halfway across canvas width
  grid[x/2] = 1;
  
  // go through all the cells
  for(var a = x + 1; a <= x*y; a++) {
    // the three cells above decide the outcome for the current cell
    var cell_l = a - (x + 1);
    var cell_m = a - x;
    var cell_r = a - (x - 1);

    if(grid[cell_l] == 1) {
      if(grid[cell_m] == 1) {
        if(grid[cell_r] == 1) {
          grid[a] = outcome[0]; // 111
        }
        else if(grid[cell_r] == 0) {
          grid[a] = outcome[1]; // 110
        }
      }
      else if(grid[cell_m] == 0) {
        if(grid[cell_r] == 1) {
          grid[a] = outcome[2]; // 101
        }
        else if(grid[cell_r] == 0) {
          grid[a] = outcome[3]; // 100
        }
      }
    }
    else if(grid[cell_l] == 0) {
      if(grid[cell_m] == 1) {
        if(grid[cell_r] == 1) {
          grid[a] = outcome[4]; // 011
        }
        else if(grid[cell_r] == 0) {
          grid[a] = outcome[5]; // 010
        }
      }
      else if(grid[cell_m] == 0) {
        if(grid[cell_r] == 1) {
          grid[a] = outcome[6]; // 001
        }
        else if(grid[cell_r] == 0) {
          grid[a] = outcome[7]; // 000
        }
      }
    }
  }
  
  createCanvas(x, y);
}

function draw() {
  background(245);
  
  // draw the grid
  for(var a = 0; a <= x*y; a++) {
    if(grid[a] == 1) {
      stroke(0);
    }
    else {
      stroke(255);
    }
    // get the x and y values from the overall grid length
    rect((a%x),floor(a/x),1,1);
  }
}
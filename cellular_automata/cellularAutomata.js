var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = c.width;
var y = c.height;

var grid = [];

// fill the array with zeroes
for(var a = 0; a <= (x*y); a++)
{
  grid.push(0);
}

// initialise the pattern from halfway across canvas width
grid[x/2] = 1;

// choose a rule and set up the variable to hold the result
var rule = 54;
var outcome = [];

// for each rule: the input are the same, the result is different
switch(rule)
{
  case 30: // rule 30: 00011110
    outcome = [0,0,0,1,1,1,1,0];
    break;
  case 54: // rule 54: 00110110
    outcome = [0,0,1,1,0,1,1,0];
    break;
  default: // default empty
    outcome = [0,0,0,0,0,0,0,0];
}

for(var a = 0; a <= x*y; a++)
{
  // the three cells above decide the outcome for the current cell
  var cell_l = a - (x + 1);
  var cell_m = a - x;
  var cell_r = a - (x - 1);

  // 111 > 0
  if(grid[cell_l] == 1 && grid[cell_m] == 1 && grid[cell_r] == 1)
  {
    grid[a] = outcome[0];
  }

  // 110 > 0
  if(grid[cell_l] == 1 && grid[cell_m] == 1 && grid[cell_r] == 0)
  {
    grid[a] = outcome[1];
  }

  // 101 > 0
  if(grid[cell_l] == 1 && grid[cell_m] == 0 && grid[cell_r] == 1)
  {
    grid[a] = outcome[2];
  }

  // 100 > 1
  if(grid[cell_l] == 1 && grid[cell_m] == 0 && grid[cell_r] == 0)
  {
    grid[a] = outcome[3];
  }

  // 011 > 1
  if(grid[cell_l] == 0 && grid[cell_m] == 1 && grid[cell_r] == 1)
  {
    grid[a] = outcome[4];
  }

  // 101 > 1
  if(grid[cell_l] == 0 && grid[cell_m] == 1 && grid[cell_r] == 0)
  {
    grid[a] = outcome[5];
  }

  // 001 > 1
  if(grid[cell_l] == 0 && grid[cell_m] == 0 && grid[cell_r] == 1)
  {
    grid[a] = outcome[6];
  }

  // 110 > 0
  if(grid[cell_l] == 0 && grid[cell_m] == 0 && grid[cell_r] == 0)
  {
    grid[a] = outcome[7];
  }
}

// draw the grid
for(var a = 0; a <= x*y; a++)
{
  if(grid[a] == 1)
  {
    // get the x and y values from the overall grid length
    ctx.fillRect((a%x),(a/y),1,1);
  }
}

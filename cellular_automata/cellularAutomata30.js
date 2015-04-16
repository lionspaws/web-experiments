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

// initialise the pattern
grid[x/2] = 1;

// rule 30
for(var a = 0; a <= x*y; a++)
{
  // the three cells above decide the outcome for the current cell
  var cell_l = a - (x + 1);
  var cell_m = a - x;
  var cell_r = a - (x - 1);

  // 111 > 0
  if(grid[cell_l] == 1 && grid[cell_m] == 1 && grid[cell_r] == 1)
  {
    grid[a] = 0;
  }

  // 110 > 0
  if(grid[cell_l] == 1 && grid[cell_m] == 1 && grid[cell_r] == 0)
  {
    grid[a] = 0;
  }

  // 101 > 0
  if(grid[cell_l] == 1 && grid[cell_m] == 0 && grid[cell_r] == 1)
  {
    grid[a] = 0;
  }

  // 100 > 1
  if(grid[cell_l] == 1 && grid[cell_m] == 0 && grid[cell_r] == 0)
  {
    grid[a] = 1;
  }

  // 011 > 1
  if(grid[cell_l] == 0 && grid[cell_m] == 1 && grid[cell_r] == 1)
  {
    grid[a] = 1;
  }

  // 101 > 1
  if(grid[cell_l] == 0 && grid[cell_m] == 1 && grid[cell_r] == 0)
  {
    grid[a] = 1;
  }

  // 001 > 1
  if(grid[cell_l] == 0 && grid[cell_m] == 0 && grid[cell_r] == 1)
  {
    grid[a] = 1;
  }

  // 110 > 0
  if(grid[cell_l] == 0 && grid[cell_m] == 0 && grid[cell_r] == 0)
  {
    grid[a] = 0;
  }

}

// get a random number from 1-100
// var roll = Math.floor((Math.random() * 100) + 1);
//
// if(roll >= 50)
// {
//   grid[a] = 1;
// }

// draw the grid
for(var a = 0; a <= x*y; a++)
{
  if(grid[a] == 1)
  {
    // get the x and y values from the overall grid length
    ctx.fillRect((a%x),(a/y),1,1);
  }
}

var c = document.getElementById("caCanvas");
var ctx = c.getContext("2d");

// get canvas height (number of CA steps)
var y = c.height;

// calculate appropriate width
c.width = y * 1.5;
var x = c.width;

var grid = [];

// fill the array with zeroes
for(var a = 0; a <= (x*y); a++)
{
  // initialise the pattern with a random scattering
  if(Math.random() >= 0.96)
  {
    grid.push(1);
  }
  else
  {
    grid.push(0);
  }
}

function updateCanvas()
{
  // clear the previous data
  ctx.clearRect (0,0,x,y);

  // for each cell
  for(var a = 0; a <= x*y; a++)
  {
    // examine the Moore neighbourhood (range 1)
    // A B C
    // D a E
    // F G H
    var cellA = a - (x + 1);
    var cellB = a - x;
    var cellC = a - (x - 1);
    var cellD = a - 1;
    var cellE = a + 1;
    var cellF = a + (x - 1);
    var cellG = a + x;
    var cellH = a + (x + 1);
    var count = grid[cellA] + grid[cellB] + grid[cellC] + grid[cellD] + grid[cellE] + grid[cellF] + grid[cellG] + grid[cellH];

    // cell is alive
    if(grid[a] == 1)
    {
      // 1. Death: if the count is less than 2 or greater than 3, the current cell is switched off.
      if(count < 2 || count > 3)
      {
        grid[a] = 0;
      }
      // 2. Survival: if (a) the count is exactly 2, or (b) the count is exactly 3 and the current cell is on, the current cell is left unchanged.
      else
      {
        grid[a] = 1;
      }
    }
    // cell is dead
    else {
      // 3. Birth: if the current cell is off and the count is exactly 3, the current cell is switched on.
      if(count == 3)
      {
        grid[a] = 1;
      }
    }
  }

  // draw the grid
  for(var a = 0; a <= x*y; a++)
  {
    if(grid[a] == 1)
    {
      ctx.fillStyle = "#FF0000";      // pick a colour
      ctx.fillRect((a%x),(a/y),1,1);  // get the x and y values from the overall grid length
    }
  }
}

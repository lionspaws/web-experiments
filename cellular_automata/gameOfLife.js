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
  grid.push(0);
}

// initialise the pattern with a random scattering
for(var a = 0; a <= (x*y); a++)
{
  if(Math.random() >= 0.95)
  {
    grid[a] = 1;
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

    // if cell is alive
    if(grid[a] == 1)
    {
      // death: if count is < 2 || > 3, and cell is on, turn it off
      if(count < 2 || count > 3)
      {
        grid[a] = 0;
      }
      // survival: if count == 2 || 3 and cell is on, leave it on
      else
      {
        grid[a] = 1;
      }
    }
    else {
      // life: if count == 3 and cell is off, turn it on
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

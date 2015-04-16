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

// for each rule: the input are the same, the result is different
var rules = [
  {"ruleNumber":30, "outcome":[0,0,0,1,1,1,1,0]},
  {"ruleNumber":54, "outcome":[0,0,1,1,0,1,1,0]},
  {"ruleNumber":60, "outcome":[0,0,1,1,1,1,0,0]},
  {"ruleNumber":62, "outcome":[0,0,1,1,1,1,1,0]},
  {"ruleNumber":90, "outcome":[0,1,0,1,1,0,1,0]},
  {"ruleNumber":94, "outcome":[0,1,0,1,1,1,1,0]},
  {"ruleNumber":102, "outcome":[0,1,1,0,0,1,1,0]},
  {"ruleNumber":110, "outcome":[0,1,1,0,1,1,1,0]},
  {"ruleNumber":122, "outcome":[0,1,1,1,1,0,1,0]}
];

for(rule in rules)
{
  document.getElementById("ruleSelection").innerHTML += '<option value="' + rules[rule].ruleNumber + '">' + rules[rule].ruleNumber + '</option>';
}

function updateCanvas()
{
  // clear the previous data
  ctx.clearRect (0,0,x,y);

  // choose a rule and set up the variable to hold the result
  var chosenRule = document.getElementById("ruleSelection").value;
  var outcome = [0,0,0,0,0,0,0,0];


  for(rule in rules)
  {
    if(rules[rule].ruleNumber == chosenRule)
    {
      outcome = rules[rule].outcome;
    }
  }

  for(var a = 0; a <= x*y; a++)
  {
    // the three cells above decide the outcome for the current cell
    var cell_l = a - (x + 1);
    var cell_m = a - x;
    var cell_r = a - (x - 1);

    // 111
    if(grid[cell_l] == 1 && grid[cell_m] == 1 && grid[cell_r] == 1)
    {
      grid[a] = outcome[0];
    }

    // 110
    if(grid[cell_l] == 1 && grid[cell_m] == 1 && grid[cell_r] == 0)
    {
      grid[a] = outcome[1];
    }

    // 101
    if(grid[cell_l] == 1 && grid[cell_m] == 0 && grid[cell_r] == 1)
    {
      grid[a] = outcome[2];
    }

    // 100
    if(grid[cell_l] == 1 && grid[cell_m] == 0 && grid[cell_r] == 0)
    {
      grid[a] = outcome[3];
    }

    // 011
    if(grid[cell_l] == 0 && grid[cell_m] == 1 && grid[cell_r] == 1)
    {
      grid[a] = outcome[4];
    }

    // 101
    if(grid[cell_l] == 0 && grid[cell_m] == 1 && grid[cell_r] == 0)
    {
      grid[a] = outcome[5];
    }

    // 001
    if(grid[cell_l] == 0 && grid[cell_m] == 0 && grid[cell_r] == 1)
    {
      grid[a] = outcome[6];
    }

    // 110
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
}

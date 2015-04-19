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

// initialise the pattern from halfway across canvas width
grid[x/2] = 1;

// for each rule: the input are the same, the result is different
var rules = [
  {"ruleNumber":600, "outcome":[0,2,1,1,0,2,0]},
  {"ruleNumber":777, "outcome":[1,0,0,1,2,1,0]},
  {"ruleNumber":993, "outcome":[1,1,0,0,2,1,0]},
  {"ruleNumber":1020, "outcome":[1,1,0,1,2,1,0]},
  {"ruleNumber":1083, "outcome":[1,1,1,1,0,1,0]}
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
  var outcome = [0,0,0,0,0,0,0];

  for(rule in rules)
  {
    if(rules[rule].ruleNumber == chosenRule)
    {
      outcome = rules[rule].outcome;
    }
  }

  for(var a = x + 1; a <= x*y; a++)
  {
    // the three cells above decide the outcome for the current cell
    var cell_l = a - (x + 1);
    var cell_m = a - x;
    var cell_r = a - (x - 1);

    switch(grid[cell_l] + grid[cell_m] + grid[cell_r])
    {
      case 6: // 222
        grid[a] = outcome[0];
        break;
      case 5: // 221
        grid[a] = outcome[1];
        break;
      case 4: // 211, 220
        grid[a] = outcome[2];
        break;
      case 3: // 210, 111
        grid[a] = outcome[3];
        break;
      case 2: // 200, 110
        grid[a] = outcome[4];
        break;
      case 1: // 100
        grid[a] = outcome[5];
        break;
      case 0: // 000
        grid[a] = outcome[6];
        break;
      default:
        grid[a] = 0;
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
    else if(grid[a] == 2)
    {
      ctx.fillStyle = "#00FF00";      // pick a colour
      ctx.fillRect((a%x),(a/y),1,1);  // get the x and y values from the overall grid length
    }
  }
}

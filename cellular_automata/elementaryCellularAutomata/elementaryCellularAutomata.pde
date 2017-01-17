// 2D Array of objects
Cell[][] grid;

// Number of columns and rows in the grid
int cols = 100;
int rows = 100;

// rules for ECA outcomes
boolean[] outcomeRule = {false,false,false,true,true,true,true,false}; // rule 30
//boolean[] outcomeRule = {false,false,true,true,false,true,true,false}; // rule 54

void setup() {
  size(500,500);
  grid = new Cell[cols][rows];
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      // Initialize each object
      grid[i][j] = new Cell(i*5,j*5,5,5,false);
    }
  }
  // Initialize the pattern
  grid[cols/2][0].filled = true;
}

void draw() {
      background(0);
      
      // The counter variables i and j are also the column and row numbers and 
      // are used as arguments to the constructor for each object in the grid.  
      for (int i = 0; i < cols; i++) {
        for (int j = 1; j < rows; j++) {
          
          // calculate the result
          int xCompL, xCompR;
          boolean cellUpLeft, cellUpCentre, cellUpRight;
              
          // adjust if it's the left/rightmost cell
          if(i == 0) {
              xCompL = i;
              xCompR = i+1;
          }
          else 
          if(i == cols-1) {
              xCompL = i-1;
              xCompR = i;
          }
          else {
              xCompL = i-1;
              xCompR = i+1;
          }
          
          // or the topmost row
          cellUpLeft = grid[xCompL][j-1].filled;
          cellUpCentre = grid[i][j-1].filled;
          cellUpRight = grid[xCompR][j-1].filled;
          
          // 111 and 110
          if(cellUpLeft) {
            if(cellUpCentre) {
              if(cellUpRight) {
                grid[i][j].filled = outcomeRule[0];  // 111
              }
              else {
                grid[i][j].filled = outcomeRule[1];  // 110
              }
            }
          }
          // 101 and 100
          if(cellUpLeft) {
            if(!cellUpCentre) {
              if(cellUpRight) {
                grid[i][j].filled = outcomeRule[2];  // 101
              }
              else {
                grid[i][j].filled = outcomeRule[3];  // 100
              }
            }
          }
          // 011 and 010
          if(!cellUpLeft) {
            if(cellUpCentre) {
              if(cellUpRight) {
                grid[i][j].filled = outcomeRule[4];  // 011
              }
              else {
                grid[i][j].filled = outcomeRule[5];  // 010
              }
            }
          }
          // 001 and 000
          if(!cellUpLeft) {
            if(!cellUpCentre) {
              if(cellUpRight) {
                grid[i][j].filled = outcomeRule[6];  // 001
              }
              else {
                grid[i][j].filled = outcomeRule[7];  // 000
              }
            }
          }
          
          // display each cell
          grid[i][j].display();
        }
  }
}

// A Cell object
class Cell {
  // A cell object knows about its location in the grid 
  // as well as its size with the variables x,y,w,h
  float x,y;   // x,y location
  float w,h;   // width and height
  boolean filled; // value determines colour

  // Cell Constructor
  Cell(float tempX, float tempY, float tempW, float tempH, boolean tempFilled) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    filled = tempFilled;
  }

  void display() {
    stroke(255);
    // Color calculated using filled value
    if(filled) {
      fill(0);
    }
    else {
      fill(255);
    }
    rect(x,y,w,h);
  }
}
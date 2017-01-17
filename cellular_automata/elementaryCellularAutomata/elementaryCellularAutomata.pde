// 2D Array of objects
Cell[][] grid;

// Number of columns and rows in the grid
int cols = 100;
int rows = 100;

void setup() {
  size(500,500);
  grid = new Cell[cols][rows];
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      // Initialize each object
      grid[i][j] = new Cell(i*5,j*5,5,5,1);
    }
  }
}

void draw() {
  background(0);
  // The counter variables i and j are also the column and row numbers and 
  // are used as arguments to the constructor for each object in the grid.  
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      // display each cell
      grid[i][j].display();
      
      // calculate the result
      int cellUpLeft = grid[i][j].filled;
      int cellUpCentre = grid[i][j].filled;
      int cellUpRight = grid[i][j].filled;
      
      // as long as it's not the leftmost cell
      if(i > 0) {
        // or the topmost row
        if(j > 0) {
          // 111 and 110
          if(cellUpLeft == 1) {
            if(cellUpCentre == 1) {
              if(cellUpRight == 1) {
                grid[i][j].filled = 255;  // 111
              }
              else if(cellUpRight == 0) {
                grid[i][j].filled = 255;  // 111
              }
            }
          }
          // 101 and 100
          // 101
          // 100
          // 011 and 010
          // 011
          // 010
          // 001 and 000
          // 001
          // 000
        }
      }
    }
  }
}

// A Cell object
class Cell {
  // A cell object knows about its location in the grid 
  // as well as its size with the variables x,y,w,h
  float x,y;   // x,y location
  float w,h;   // width and height
  int filled; // 255 or 0; value determines colour

  // Cell Constructor
  Cell(float tempX, float tempY, float tempW, float tempH, int tempFilled) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    filled = tempFilled;
  }

  void display() {
    stroke(255);
    // Color calculated using filled value
    fill(filled);
    rect(x,y,w,h);
  }
}
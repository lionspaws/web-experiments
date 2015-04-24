# web-experiments
Somewhere for me to do the various little web-based experiments I have wanted to for years.

## Cellular Automata

### elementaryCellularAutomata.js

A javascript file to draw the 1 dimensional binary pattern CA rules (elementary CA) on an html canvas.
More about elementary CA and rules here: http://mathworld.wolfram.com/ElementaryCellularAutomaton.html


### totalisticCellularAutomata.js

A javascript file to draw the 1 dimensional pattern CA rules (totalistic CA) in two colours on an html canvas.
More about totalistic CA and rules here: http://mathworld.wolfram.com/TotalisticCellularAutomaton.html

## gameOfLife.js

The Game of Life by John H. Conway is a type of totalistic CA with three rules for cells in a Moore neighbourhood (r=1):

1. Death: if the count is less than 2 or greater than 3, the current cell is switched off.

2. Survival: if (a) the count is exactly 2, or (b) the count is exactly 3 and the current cell is on, the current cell is left unchanged.

3. Birth: if the current cell is off and the count is exactly 3, the current cell is switched on.

- rules are from http://mathworld.wolfram.com/GameofLife.html

The grid is initially allocated a random population. Then as time passes, each cell has a binary value allocated based on the surrounding 8 cells.

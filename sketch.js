// Major Project Interactive Music Maker
// Thanks to https://keithwhor.github.io/audiosynth/ sound synthesisers     

let grid;
let rows = 8;
let cols = 13;
let state = 'neutral';
let a = 0;
let b = 0;
let c = 0;
let trackNumber = 1;
var acoustic = Synth.createInstrument('acoustic');
instrument = acoustic;
let lineSpeed = 2.5;
let gridLength = 650;
let gridWidth = 800;
let cellSize = gridLength/cols;


function setup() {
  createCanvas(windowWidth, windowHeight)
  background(75,150,150);
  
  grid1 = createRandom2dArray(cols, rows);
  grid2 = createRandom2dArray(cols, rows);
  grid3 = createRandom2dArray(cols, rows);
  grid4 = createRandom2dArray(cols, rows);
  grid5 = createRandom2dArray(cols, rows);

  currentGrid = grid1;  
}

function draw(){
  displayGrid(currentGrid, rows, cols);
  noteReader();
  gui();
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      if (grid[y][x] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(1);
    }
  }
  return randomGrid;
}


function mouseClicked(){
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
 
  // current grid to turn on notes when played
  if (currentGrid[yCoord][xCoord] > 0){
    currentGrid[yCoord][xCoord] = 0;
  }
  else{
    currentGrid[yCoord][xCoord] = 1;
  }

  // hitboxes for swapping grids on the gui/hud
  if (mouseX > cellSize*9 & mouseX < cellSize*11 &
    mouseY > 0 & mouseY < cellSize){
      currentGrid = grid1;
      trackNumber = 1;
  }
  if (mouseX > cellSize*11 & mouseX < cellSize*13 &
    mouseY > 0 & mouseY < cellSize){
      currentGrid = grid2;
      trackNumber = 2;
  }

  // hitbox for tutorial
  if (mouseX > cellSize*16 & mouseX < cellSize * 18 &
    mouseY > 0 & mouseY < cellSize){
      c++;
        if (c < 2){
          // execute
          print("its doing somethingt")
          text("You u se ur mouse to click on the grid to make sounds",cellSize*10,cellSize*3,cellSize*3,cellSize);
        }
        else{
          c = 0;
          print("no good sod");
      }
    }
}

function keyPressed(){ 
  if (key === ' '){// simple toggle for the space bar to stop and play
    b++;
    if (b < 2){
      state = 'playing';
    }
    else{
      a = 0;
      b = 0;
      state = 'neutral';
    }
  }
  if (key === '1'){
    currentGrid = grid1;
    trackNumber = 1;
  }
  if (key === '2'){
    currentGrid = grid2;
    trackNumber = 2;
  }
  if (key === '3'){
    trackNumber = 3;
    currentGrid = grid3;
  }
  if (key === '4'){
    trackNumber = 4;
    currentGrid = grid4;
  }
  if (key === '5'){
    currentGrid = grid5;
    trackNumber = 5;
  }
}

function gui(){
  // make this look better
  fill(200);
  rect(cellSize*13,0, cellSize*3,cellSize);
  rect(cellSize*8,0, cellSize,cellSize);

  rect(cellSize*9,0,cellSize*2,cellSize);
  rect(cellSize*11,0,cellSize*2,cellSize);

  rect(cellSize*16,0,cellSize*2,cellSize);

  fill(25);
  textAlign(CENTER, CENTER)
  text("acoustic",cellSize*13,0,cellSize*3, cellSize);
  text(trackNumber,cellSize*8+cellSize/2, cellSize/2);
  text("Track Select -",cellSize*10, cellSize/2);
  text("Track Select +",cellSize*12, cellSize/2);
  text("Tutorial", cellSize*17,cellSize/2);
}


function noteReader(){
  let cellSize = floor(gridLength/cols);
  if (state === 'playing'){    
      line(a, 0, a, gridLength);
      a = a + lineSpeed; // speed of the line
      if (a > cellSize*8) { // resets the line
        // currentGrid;
        a = 0;
      }
      if (a === cellSize){ // if the a is = to the x of a colum it plays 
        gridCheck(0);        
      }
      if (a === cellSize*2){ 
        gridCheck(1);        
      }
      if (a === cellSize*3){
        gridCheck(2);        
      }
      if (a === cellSize*4){ 
        gridCheck(3);        
      }
      if (a === cellSize*5){
        gridCheck(4);        
      }
      if (a === cellSize*6){ 
        gridCheck(5);        
      }
      if (a === cellSize*7){ 
        gridCheck(6);        
      }
      if (a === cellSize*8){ 
        gridCheck(7);        
      }
  }
}

function gridCheck(col){
  // gridcheck checks if a grid has been clicked and plays when it is called upon
  if (currentGrid[0][col] === 0){
    instrument.play('C', 4, 1);
  }
  if (currentGrid[1][col] === 0){
    instrument.play('B', 3, 1);
  }
  if (currentGrid[2][col] === 0){
    instrument.play('A#', 3, 1);
  }
  if (currentGrid[3][col] === 0){
    instrument.play('A', 3, 1);
  }
  if (currentGrid[4][col] === 0){
    instrument.play('G#', 3, 1);
  }
  if (currentGrid[5][col] === 0){
    instrument.play('G', 3, 1);
  }
  if (currentGrid[6][col] === 0){
    instrument.play('F#', 3, 1);
  }
  if (currentGrid[7][col] === 0){
    instrument.play('F', 3, 1);
  }
  if (currentGrid[8][col] === 0){
    instrument.play('E', 3, 1);
  }
  if (currentGrid[9][col] === 0){
    instrument.play('D#', 3, 1);
  }
  if (currentGrid[10][col] === 0){
    instrument.play('D', 3, 1);
  }
  if (currentGrid[11][col] === 0){
    instrument.play('C#', 3, 1);
  }
  if (currentGrid[12][col] === 0){
    instrument.play('C', 3, 1);
  }
}

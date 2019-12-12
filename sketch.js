// Major Project Interactive Music Maker
// Thanks to https://keithwhor.github.io/audiosynth/ sound synthesiser


let grid;
let rows = 8;
let cols = 13;
let state = 'neutral';
let a;
let c = 0;
var piano = Synth.createInstrument('piano');
let lineSpeed = 2.5;
let gridLength = 650;
// let gridWidth = 800;
let cellSize = gridLength/cols;

function preload(){
}

function setup() {
  if (windowWidth > windowHeight) {
      createCanvas(windowHeight, windowHeight);
    }
    else {
        createCanvas(windowWidth, windowWidth);
      }
  createCanvas(windowWidth, windowHeight)
  background(125);
  soundFormats('mp3');
  grid = createRandom2dArray(cols, rows);
  a = 0;
}

function draw(){
  displayGrid(grid, rows, cols);
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
      else if (grid[y][x] === 1){
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

// allows you to change the grid colors
function mousePressed(){
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  if (grid[yCoord][xCoord] > 0){
    grid[yCoord][xCoord] = 0;
  }
  else{
    grid[yCoord][xCoord] = 1;
  }
  print(mouseX, mouseY);
}

function keyPressed(){ // simple toggle for the space bar to stop and play
  if (key === ' '){
    c++;
    if (c < 2){
      state = 'playing';
    }
    else{
      c = 0;
      a = 0;
      state = 'neutral';
    }
  }
}

function gui(){
  fill(200);
  rect(900,100, 200,100);
  rect(900,300, 200,100);
  rect(900,500, 200,100);

  
  fill(200,100,0);
  text("I heard people are talking aboot you",925, 125, 150);
  text("They sey your not feeling too good",925, 325, 150);
  text("Hurd this ona facebook ya",925, 525, 150);


  text("1", 25,750, 150);
  text("+", 85,750, 150);
  text("2", 150,750, 150);
  text("+", 210,750, 150);
  text("3", 270,750, 150);
  text("+", 330,750, 150);
  text("4", 390,750, 150);
  text("+", 450,750, 150);
}


function noteReader(){
  // let gridLength = height;
  let cellSize = floor(gridLength/cols);
  if (state === 'playing'){    
      line(a, 0, a, gridLength);
      a = a + lineSpeed; // speed of the line
      if (a > cellSize*8) { // resets the line
        a = 0;
      }
      if (a === 0){ // if the a is = to the x of a colum it plays
        gridCheck(0);        
      }
      if (a === cellSize*3){ // if the a is = to the x of a colum it plays
        gridCheck(1);        
      }
      if (a === cellSize*2){ // if the a is = to the x of a colum it plays
        gridCheck(2);        
      }
      if (a === cellSize*3){ // if the a is = to the x of a colum it plays
        gridCheck(3);        
      }
      if (a === cellSize*4){ // if the a is = to the x of a colum it plays
        gridCheck(4);        
      }
      if (a === cellSize*5){ // if the a is = to the x of a colum it plays
        gridCheck(5);        
      }
      if (a === cellSize*6){ // if the a is = to the x of a colum it plays
        gridCheck(6);        
      }
      if (a === cellSize*7){ // if the a is = to the x of a colum it plays
        gridCheck(7);        
      }
  }
}

function gridCheck(col){
  if (grid[0][col] === 0){
    piano.play('C', 4, 1);
  }
  if (grid[1][col] === 0){
    piano.play('B', 4, 1);
  }
  if (grid[2][col] === 0){
    piano.play('A#', 4, 1);
  }
  if (grid[3][col] === 0){
    piano.play('A', 4, 1);
  }
  if (grid[4][col] === 0){
    piano.play('G#', 3, 1);
  }
  if (grid[5][col] === 0){
    piano.play('G', 3, 1);
  }
  if (grid[6][col] === 0){
    piano.play('F#', 3, 1);
  }
  if (grid[7][col] === 0){
    piano.play('F', 3, 1);
  }
  if (grid[8][col] === 0){
    piano.play('E', 3, 1);
  }
  if (grid[9][col] === 0){
    piano.play('D#', 3, 1);
  }
  if (grid[10][col] === 0){
    piano.play('D', 3, 1);
  }
  if (grid[11][col] === 0){
    piano.play('C#', 3, 1);
  }
  if (grid[12][col] === 0){
    piano.play('C', 3, 1);
  }
}

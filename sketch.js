// Major Project Interactive Music Maker



let grid;
let rows = 8;
let cols = 13;
let state = 'neutral';
let a;

function preload(){
  noteC = loadSound('assets/c.mp3');
  noteD = loadSound('assets/noteD.mp3')
  noteE = loadSound('assets/noteE.mp3')
  noteF = loadSound('assets/noteF.mp3')
  noteG = loadSound('assets/noteG.mp3')
  noteA = loadSound('assets/noteA.mp3')
  noteB = loadSound('assets/noteB.mp3')
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
  let cellSize = height/cols;
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
  let cellSize = height/cols;
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

function keyPressed(){
  if (key === ' '){
    state = 'playing';
  }
  else{
    state = 'neutral';
    a = 0;
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

class Reader{
  constructor(){
    this.cellSize === 0;
    this.grid[0][0 + row];
    this
  }
}

function noteReader(){
  let cellSize = floor(height/cols);
  if (state === 'playing'){    
      line(a, 0, a, width);
      a = a + 3; // speed of the line
      if (a > 485) { // resets the line
        a = 0;
      }
      if (a === cellSize){ // if the a is = to the x of a colum it plays
        if (grid[0][0] === 0){
          noteC.play();
        }
        if (grid[1][0] === 0){
          noteB.play();
        }
        if (grid[2][0] === 0){
          noteA.play();
        }
        if (grid[3][0] === 0){
          noteG.play();
        }
        if (grid[4][0] === 0){
          noteF.play();
        }
        if (grid[5][0] === 0){
          noteE.play();
        }
        if (grid[6][0] === 0){
          noteD.play();
        }
        if (grid[7][0] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 2){ // if the a is = to the x of a colum it plays
        if (grid[0][1] === 0){
          noteC.play();
        }
        if (grid[1][1] === 0){
          noteB.play();
        }
        if (grid[2][1] === 0){
          noteA.play();
        }
        if (grid[3][1] === 0){
          noteG.play();
        }
        if (grid[4][1] === 0){
          noteF.play();
        }
        if (grid[5][1] === 0){
          noteE.play();
        }
        if (grid[6][1] === 0){
          noteD.play();
        }
        if (grid[7][1] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 3){ // if the a is = to the x of a colum it plays
        if (grid[0][2] === 0){
          noteC.play();
        }
        if (grid[1][2] === 0){
          noteB.play();
        }
        if (grid[2][2] === 0){
          noteA.play();
        }
        if (grid[3][2] === 0){
          noteG.play();
        }
        if (grid[4][2] === 0){
          noteF.play();
        }
        if (grid[5][2] === 0){
          noteE.play();
        }
        if (grid[6][2] === 0){
          noteD.play();
        }
        if (grid[7][2] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 4){ // if the a is = to the x of a colum it plays
        if (grid[0][3] === 0){
          noteC.play();
        }
        if (grid[1][3] === 0){
          noteB.play();
        }
        if (grid[2][3] === 0){
          noteA.play();
        }
        if (grid[3][3] === 0){
          noteG.play();
        }
        if (grid[4][3] === 0){
          noteF.play();
        }
        if (grid[5][3] === 0){
          noteE.play();
        }
        if (grid[6][3] === 0){
          noteD.play();
        }
        if (grid[7][3] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 5){ // if the a is = to the x of a colum it plays
        if (grid[0][4] === 0){
          noteC.play();
        }
        if (grid[1][4] === 0){
          noteB.play();
        }
        if (grid[2][4] === 0){
          noteA.play();
        }
        if (grid[3][4] === 0){
          noteG.play();
        }
        if (grid[4][4] === 0){
          noteF.play();
        }
        if (grid[5][4] === 0){
          noteE.play();
        }
        if (grid[6][4] === 0){
          noteD.play();
        }
        if (grid[7][4] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 6){ // if the a is = to the x of a colum it plays
        if (grid[0][5] === 0){
          noteC.play();
        }
        if (grid[1][5] === 0){
          noteB.play();
        }
        if (grid[2][5] === 0){
          noteA.play();
        }
        if (grid[3][5] === 0){
          noteG.play();
        }
        if (grid[4][5] === 0){
          noteF.play();
        }
        if (grid[5][5] === 0){
          noteE.play();
        }
        if (grid[6][5] === 0){
          noteD.play();
        }
        if (grid[7][5] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 7){ // if the a is = to the x of a colum it plays
        if (grid[0][6] === 0){
          noteC.play();
        }
        if (grid[1][6] === 0){
          noteB.play();
        }
        if (grid[2][6] === 0){
          noteA.play();
        }
        if (grid[3][6] === 0){
          noteG.play();
        }
        if (grid[4][6] === 0){
          noteF.play();
        }
        if (grid[5][6] === 0){
          noteE.play();
        }
        if (grid[6][6] === 0){
          noteD.play();
        }
        if (grid[7][6] === 0){
          noteC.play();
        }
        
      }
      if (a === cellSize * 8){ // if the a is = to the x of a colum it plays
        if (grid[0][7] === 0){
          noteC.play();
        }
        if (grid[1][7] === 0){
          noteB.play();
        }
        if (grid[2][7] === 0){
          noteA.play();
        }
        if (grid[3][7] === 0){
          noteG.play();
        }
        if (grid[4][7] === 0){
          noteF.play();
        }
        if (grid[5][7] === 0){
          noteE.play();
        }
        if (grid[6][7] === 0){
          noteD.play();
        }
        if (grid[7][7] === 0){
          noteC.play();
        }
        
      }
  }
}
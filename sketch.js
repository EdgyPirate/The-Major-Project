// Major Project Interactive Music Maker

let grid;
let rows = 8;
let cols = 8;

function preload(){
  noteC = loadSound('assets/c.mp3');
  
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
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(0);
      }
      else if (grid[y][x] === 1){
        fill(255);
      }
      //   fill(175,0,0);
      // }
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
    if (grid[0][0] === 0){
      noteC.play();
    }
  }
}

function gui(){
  fill(200);
  rect(900,100, 200,100);
  fill(200,100,0);
  text("I heard people are talking aboot you",925, 125, 150);
}

function noteReader(){
  fill(200,0,0);
  rect(0,0, cols/2, height);
}


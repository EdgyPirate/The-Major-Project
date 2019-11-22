// Major Project Interactive Music Maker

let grid;
let rows = 8;
let cols = 13;
let state = 'neutral';
let a;

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
  // else{
  //   state = 'neutral';
  // }
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


  text("1", 45,750, 150);
  text("+", 145,750, 150);
  text("2", 245,750, 150);
  text("+", 340,750, 150);
  text("3", 440,750, 150);
  text("+", 540,750, 150);
  text("4", 640,750, 150);
  text("+", 735,750, 150);
}

function noteReader(){
  if (state === 'playing'){    
      line(0,0, 0, height);
      fill(200,0,0);
      line(a, 0, a, width);
      a = a + 2.8; // speed of the line
      if (a > 485) {
        a = 0;
      }
      if (a === grid[1][1]){
        noteC.play();
      }
  }
  else{
    state = 'neutral';
  }
}


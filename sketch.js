// Major Project Interactive Music Maker
// Thanks to https://keithwhor.github.io/audiosynth/ sound synthesisers     

let lineLoops = 0;
let grid;
let rows = 8;
let cols = 13;
let state = 'neutral';
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let trackNumber = 1;
var piano = Synth.createInstrument('piano');
var acoustic = Synth.createInstrument('acoustic');
instrument = acoustic;
let lineSpeed = 2.5;
let gridLength = 650;
let gridWidth = 800;
let cellSize = gridLength/cols;
autoPlay = false;

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
  clickableTrackSwitch();
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
      if (lineLoops >= 1){
        lineLoops--;
      }
  }
  if (mouseX > cellSize*11 & mouseX < cellSize*13 &
    mouseY > 0 & mouseY < cellSize){
      if (lineLoops < 4 & lineLoops >= 0){
        lineLoops++;
      }
  }

  // hitbox for tutorial
  if (mouseX > cellSize*16 & mouseX < cellSize * 18 &
    mouseY > 0 & mouseY < cellSize){
      c++;
        if (c < 2){
          // execute
          print("its doing something true;")
        }
        else{
          c = 0;
          print("no good sod its false;");
      }
    }
  // hitbox for autoplay button
  if (mouseX > cellSize*18 & mouseX < cellSize*20 &
    mouseY > 0 & mouseY < cellSize){
      d++;
      if (d < 2){
        print("autoplay on!") 
        autoPlay = true;;
      }
      else{
        d = 0;
        print("autoplay off!")
        autoPlay = false;
      }
    }   
  // hitbox for tutorial
  if(mouseX > cellSize*16 & mouseX < cellSize * 18 &
    mouseY > 0 & mouseY < cellSize){
      text("#'s 1-5 for tracks. Space to stop and play. Mouse to interact.",cellSize*16,cellSize*2,cellSize*3,cellSize);;
  }
  // hitbox for instrument change
  if (mouseX > cellSize*13 & mouseX < cellSize * 16 &
    mouseY > 0 & mouseY < cellSize){
      e++;
      if (e < 2){
        print("piano")
        instrument = piano;
      }
      else{
        e = 0;
        print("acoustic")
        instrument = acoustic;
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
    lineLoops = 0;
  }
  if (key === '2'){
    currentGrid = grid2;
    trackNumber = 2;
    lineLoops = 1;
  }
  if (key === '3'){
    trackNumber = 3;
    currentGrid = grid3;
    lineLoops = 2;
  }
  if (key === '4'){
    trackNumber = 4;
    currentGrid = grid4;
    lineLoops = 3;
  }
  if (key === '5'){
    currentGrid = grid5;
    trackNumber = 5;
    lineLoops = 4;
  }
}

function clickableTrackSwitch(){
  // when a variable is = to a grid it is changed to it
  if (autoPlay === false){
    if (lineLoops === 0){
      currentGrid = grid1;
      trackNumber = 1;
    }
    if (lineLoops === 1){
      currentGrid = grid2;
      trackNumber = 2;
    }
    if (lineLoops === 2){
      currentGrid = grid3;
      trackNumber = 3;
    }
    if (lineLoops === 3){
      currentGrid = grid4;
      trackNumber = 4;
    }
    if (lineLoops === 4){
      currentGrid = grid5;
      trackNumber = 5;
    }
  }
}

class Buttonz {
  constructor(x,y,width,length){
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    rect(x,y,width,length);
  }
}

function gui(){
  textAlign(CENTER, CENTER)
  fill(200);

  new Buttonz(cellSize*8,0,cellSize,cellSize);
  new Buttonz(cellSize*9,0,cellSize*2, cellSize);
  new Buttonz(cellSize*11,0,cellSize*2,cellSize);
  new Buttonz(cellSize*13,0,cellSize*3, cellSize);
  new Buttonz(cellSize*16,0,cellSize*2, cellSize);
  new Buttonz(cellSize*18,0,cellSize*2,cellSize);

  fill(25);
  
  text(instrument.name,cellSize*13,0,cellSize*3, cellSize);
  text(trackNumber,cellSize*8+cellSize/2, cellSize/2);
  text("Track Select -",cellSize*10, cellSize/2);
  text("Track Select +",cellSize*12, cellSize/2);
  text("Tutorial", cellSize*17,cellSize/2);
  text("Autoplay",cellSize*19,cellSize/2);

}

function noteReader(){
  // notereader that reads if a gridspace is on with a line as a visual
  let cellSize = floor(gridLength/cols);
  if (state === 'playing'){    
      line(a, 0, a, gridLength);
      a = a + lineSpeed; // speed of the line
      if (a > cellSize*8) { // resets the line
        a = 0;
        if (autoPlay === true){     
          if (lineLoops < 5){
            lineLoops++;
            if (lineLoops === 1){
              currentGrid = grid2;
              trackNumber = 2;
            }
            if (lineLoops === 2){
              currentGrid = grid3;
              trackNumber = 3;
            }
            if (lineLoops === 3){
              currentGrid = grid4;
              trackNumber = 4;
            }
            if (lineLoops === 4){
              currentGrid = grid5;
              trackNumber = 5;
            }
          }
        }
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

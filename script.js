const words=['be not afraid','be not','be afraid', 'afraid']
let fr = 4;
let shY=0;
let count =0;
let y = windowHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //textFont(inconsolata);
  textAlign(CENTER);
  textSize(16);
  frameRate(fr);

}
function getString(){
    let string=' ';
    let i;
    for (let i = 0; i < 20; i++) 
    {
        let word = random(words); // select random word;
        string= string + ' '+ word;
    }
    return string
}
function draw() {
    //background('rgb(0, 128, 0)')
    background('#222222');
    strokeWeight(10);
    let c = color(0, 128, 0);
    fill(c);
    for (let i=0;i<windowHeight;i+=16)
    {
        text(getString(), 0, i, windowWidth, windowHeight );
    }
}

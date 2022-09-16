const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true // microphone will always be open
speech.interimResults = false 

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir\ Next", system-ui, sans-serif')
  text('SAY A COLOR', width / 2, height / 2)
  speech.start()
}

function parseResult() {
  if (speech.resultValue) {
    // alert(speech.resultString)

    const color = speech.resultString.split(' ').pop().toUpperCase() // creates constant for what we said last
    background(color) // sets background of the canvas to that constant
    text(color, width / 2, height / 2) // changes text to that constant
    console.log(color) // put the color in the console
  }
}
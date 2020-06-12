const container = document.querySelector("section")

const params = { 
  width: 500, 
  height: 500 
}

const two = new Two(params)
two.appendTo(container)

// config for animation
const numberOfShapes = 25
const shapes = []
const shapeMin = 0
const shapeMax = 500 // how wide is going to be 
const shapeDiff = shapeMax - shapeMin
const loopDuration = 4 * 60


// make shapes
for (let i = 0; i < numberOfShapes; i++) { 
  const x = 250
  const y = 20 * i + 5


  const shape = two.makeRectangle(x, y, shapeMin, 10)
  shape.fill = "#5645d3"
  shape.noStroke()

  shapes.push(shape)
}

two.bind("update", function (frameCount) {
  // draw
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration

  shapes.forEach((shape, i) => {
    shape.width = shapeMin + shapeDiff * t
  })
})

two.play()
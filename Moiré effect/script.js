const container = document.querySelector("section")

const params = { 
  width: 500, 
  height: 500 
}

const two = new Two(params)
two.appendTo(container)

// config for our animation
const numberOfShapes = 50
const shapes = []
const startWidth = 50
const endWidth = 500
const diffWidth = endWidth - startWidth
const startRotation = 0
const endRotation = fullRotation * 6 / 360
const loopDuration = 12 * 60

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const x = 250
  let y = i * 20 + 5


  if (i >= 25) {
    y -= 490 // 500 - 10
  }


  const shape = two.makeRectangle(x, y, startWidth, 10)
  shape.noStroke()
  shape.fill = "#5644d3"


  if (i >= 25) {
    shape.fill = "#99e6e0"
  }


  shapes.push(shape)
}


two.bind("update", function (frameCount) {
  // draw
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration

  shapes.forEach((shape, i) => {
    shape.width = startWidth + t * diffWidth
  })
})

two.play()


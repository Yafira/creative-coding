const container = document.querySelector("section")

const params = { 
  width: 500, 
  height: 500 
}

const two = new Two(params)
two.appendTo(container)

// config for our animation
const numberOfShapes = 25
const shapes = []
const loopDuration = 6 * 60

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const size = 20
  const sx = size * i + 10
  const sy = 250


  const shape = two.makeRectangle(sx, sy, size, size)
  shape.noStroke()
  shape.fill = "#004F73"

  shapes.push(shape)
}

two.bind("update", function (frameCount) {
  // draw
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration

  shapes.forEach((shape, i) => {
    const x = mapAndClamp(t, 0, 1, 150, 350)
    shape.translation.x = x 
  })

})

two.play()


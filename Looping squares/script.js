const container = document.querySelector("section")

const params = { 
  width: 500, 
  height: 500 
}

const two = new Two(params)
two.appendTo(container)

// config for animation
const loopDuration = 60 * 8
const numberOfShapes = 40
const shapeIncr = 20
const aDelay = 1 / 120
const shapes = []

// make shapes
for (let i = 0; i < numberOfShapes; i++) { 
  const size = (numberOfShapes - i) * shapeIncr
  const shape = two.makeRectangle(250, 250, size, size)
  
  if (i % 2 === 0) {
    shape.fill = "#dccaf1"
  } else {
    shape.fill = "#b583ee"
  }
  
  shape.noStroke()

  shapes.push(shape)
}

two.bind("update", function (frameCount) {
  // draw
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration

  shapes.forEach((shape, i) => {
    const aStart = aDelay * (numberOfShapes - i)
    const aEnd = aDelay * i

    // Variation 2: switching ordering
    // const aStart = aDelay * i
    // const aEnd = aDelay * (numberOfShapes - i)


    const u = mapAndClamp(t, aStart, 1 - aEnd, 0, 1)
    shape.rotation = easeInOutCubic(u) * halfRotation 

    // Variation 3: using modulo to change rotations
    // if (i % 2 === 0) {
    // shape.rotation = easeInOutCubic(u) * halfRotation 
    // } else {
    //   shape.rotation = -1 * easeInOutCubic(u) * halfRotation 
    // }

  })

})


two.play()


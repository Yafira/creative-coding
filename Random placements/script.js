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
const aDelay = 0.0025

// make shapes
for (let i = 0; i < numberOfShapes; i++) {
  const size = 20
  const sx = size * i + 10
  const sy = 250
  const sr = 0

  // Variation B: scaling
  // const ss = 1 

  // Variation C: into a circle
  const plotRadius = 200
  const angle = fullRotation * i / numberOfShapes
  const ex = 250 + plotRadius * Math.cos(angle)
  const ey = 250 + plotRadius * Math.sin(angle)

  // const ex = randomNumber(50, 450)
  // const ey = randomNumber(50, 450)
  const er = randomNumber(-2 * fullRotation, 2 * fullRotation)
  // Variation B: scaling
  // const es = randomNumber(1, 4) 


  const shape = two.makeRectangle(sx, sy, size, size)
  shape.noStroke()
  shape.fill = "#004F73"
  shape.data = {
    sx: sx, 
    sy: sy,
    sr: sr,
    // ss: ss, // Variation B: scaling
    ex: ex,
    ey: ey,
    er: er,
    // es: es // Variation B: scaling 
  }

  shapes.push(shape)
}

two.bind("update", function (frameCount) {
  // draw
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration

  shapes.forEach((shape, i) => {
    const aStart = aDelay * (numberOfShapes - i)
    const aEnd = aDelay * i

    let u = 0

    if (t < 0.5) {
      u = mapAndClamp(t, aStart, 0.5 - aEnd, 0, 1)
    } else {
      u = mapAndClamp(t, 0.5 + aStart, 1 - aEnd, 1, 0)
    }

    const cu = easeInOutCubic(u) // linear to cubic

    const x = mapAndClamp(cu, 0, 1, shape.data.sx, shape.data.ex)
    const y = mapAndClamp(cu, 0, 1, shape.data.sy, shape.data.ey)
    const r = mapAndClamp(cu, 0, 1, shape.data.sr, shape.data.er)
    // Variation B: scaling
    // const s = mapAndClamp(cu, 0, 1, shape.data.ss, shape.data.es)
    shape.translation.x = x
    shape.translation.y = y
    shape.rotation = r
    // shape.scale = s // Variation B: scaling 
  })

})

two.play()


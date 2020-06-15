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
  const sr = 0
  const ex = randomNumber(50, 450)
  const ey = randomNumber(50, 450)
  const er = randomNumber(-2 * fullRotation, 2 * fullRotation)


  const shape = two.makeRectangle(sx, sy, size, size)
  shape.noStroke()
  shape.fill = "#004F73"
  shape.data = {
    sx: sx, 
    sy: sy,
    ex: ex,
    ey: ey,
    sr: sr,
    er: er
  }

  shapes.push(shape)
}

two.bind("update", function (frameCount) {
  // draw
  const currentFrame = frameCount % loopDuration
  const t = currentFrame / loopDuration

  shapes.forEach((shape, i) => {
    let u =0

    if (t < 0.5) {
      u = mapAndClamp(t, 0, 0.5, 0, 1)
    } else {
      u = mapAndClamp(t, 0.5, 1, 1, 0)
    }

    const x = mapAndClamp(u, 0, 1, shape.data.sx, shape.data.ex)
    const y = mapAndClamp(u, 0, 1, shape.data.sy, shape.data.ey)
    const r = mapAndClamp(u, 0, 1, shape.data.sr, shape.data.er)
    shape.translation.x = x
    shape.translation.y = y
    shape.rotation = r
  })

})

two.play()


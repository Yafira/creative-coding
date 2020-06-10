// set up Two.js in section tag

const container = document.querySelector("section")

const params = {
    width: 500,
    height: 500
}

const two = new Two(params)
two.appendTo(container)

// const numberOfShapes = 12

// Variation 2: Stick version
// const numberOfShapes = 40

// Variation 3: Grow and shrink scale
const numberOfShapes = 40

const plotRadius = 150

const shapes = []


for (let i = 0; i < numberOfShapes; i = i + 1) {
    const angle = fullRotation * i / numberOfShapes

    const x = plotRadius * Math.cos(angle)
    const y = plotRadius * Math.sin(angle)

    // const shape = two.makeRectangle(x, y, 50, 50)

    // variation 2: Stick version
    // const shape = two.makeRectangle(x, y, 150, 10)

    // variation 3: Grow and shrink scale
    const shape = two.makeRectangle(x, y, 150, 10)

    shape.noStroke()
    shape.fill = "#e5adf5"
    shape.rotation = angle


    shapes.push(shape)
}

const group = two.makeGroup(shapes)
group.translation.set(250, 250)

    // Variation 3: Grow and shrink scale
    let scaler = 1
    let scaling = "grow"


two.bind("update", function () {
    group.rotation += 0.005

    // Variation 2: Stick version
    // group.rotation += 0.006125

    // Variation 3: Grow and shrink scale
    if (scaling === "grow") {
        scaler += 0.005
    }

    if (scaling === "shrink") {
        scaler -= 0.005
    }

    if (scaler > 3) {
        scaling = "shrink"
    }

    if (scaler < 0.5) {
        scaling = "grow"
    }


    shapes.forEach(shape => {
        shape.rotation += 0.025

        // Variation 3: Grow and shrink scale
        shape.scale = scaler 
    })
})


two.play()
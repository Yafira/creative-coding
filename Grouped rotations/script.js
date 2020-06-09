// set up Two.js in section tag

const container = document.querySelector("section")

const params = {
    width: 500,
    height: 500
}

const two = new Two(params)
two.appendTo(container)

const numberOfShapes = 12

// variation 2: stick version
// const numberOfShapes = 40

const plotRadius = 150

const shapes = []


for (let i = 0; i < numberOfShapes; i = i + 1) {
    const angle = fullRotation * i / numberOfShapes

    const x = plotRadius * Math.cos(angle)
    const y = plotRadius * Math.sin(angle)

    const shape = two.makeRectangle(x, y, 50, 50)

    // variation 2: stick version
    // const shape = two.makeRectangle(x, y, 150, 10)

    shape.noStroke()
    shape.fill = "#e5adf5"
    shape.rotation = angle


    shapes.push(shape)
}

const group = two.makeGroup(shapes)
group.translation.set(250, 250)




two.bind("update", function () {
    group.rotation += 0.005

    // variation 2: stick version
    // group.rotation += 0.006125


    shapes.forEach(shape => {
        shape.rotation += 0.025

    })
})


two.play()

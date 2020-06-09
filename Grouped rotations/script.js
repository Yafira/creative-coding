// set up Two.js in section tag

const container = document.querySelector("section")

const params = {
    width: 500,
    height: 500
}

const two = new Two(params)
two.appendTo(container)

const numberOfShapes = 12
const plotRadius = 150

const shapes = []


for (let i = 0; i < numberOfShapes; i = i + 1) {
    const angle = fullRotation * i / numberOfShapes

    const x = plotRadius * Math.cos(angle)
    const y = plotRadius * Math.sin(angle)

    const shape = two.makeRectangle(x, y, 50, 50)
    shape.noStroke()
    shape.fill = "#e5adf5"
    shape.rotation = angle


    shapes.push(shape)
}

const group = two.makeGroup(shapes)
group.translation.set(250, 250)


two.bind("update", function () {
    group.rotation += 0.005


    shapes.forEach(shape => {
        shape.rotation += 0.025
    })
})


two.play()

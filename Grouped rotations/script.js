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

    const x = 250 + plotRadius * Math.cos(angle)
    const y = 250 + plotRadius * Math.sin(angle)

    const shape = two.makeRectangle(x, y, 50, 50)
    shape.noStroke()
    shape.fill = "#e5adf5"
    shape.rotation = angle


    shapes.push(shape)
}


two.bind("update", function () {
    shapes.forEach(shape => {
        shape.rotation += 0.025
    })
})


two.play()

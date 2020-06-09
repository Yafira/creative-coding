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


for (let i = 0; i < numberOfShapes; i = i + 1) {
    const x = i * 30 + 30
    const y = 250
    const shape = two.makeRectangle(x, y, 20, 20)
    shape.noStroke()
    shape.fill = "#e5adf5"
}




two.play()

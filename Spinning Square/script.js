// pick a tag to do the code in
// then set up Two.js

const container = document.querySelector("section")


const params = { 
    width: 500,
    height: 500
}


const two = new Two(params)
two.appendTo(container)

// add a square
const shape = two.makeRectangle(250, 250, 100, 100)
shape.fill = "#f9bc31"
shape.noStroke()
shape.rotation = Math.PI * 0.25


two.play()


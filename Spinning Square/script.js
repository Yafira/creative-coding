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
shape.fill = "#ebec8d"
shape.noStroke()
shape.rotation = Math.PI * 0.25


// listen for any update, any frame 60fps
two.bind("update", function () {
    // shape.rotation = shape.rotation + 0.05
    shape.rotation += 0.05
})


two.play()







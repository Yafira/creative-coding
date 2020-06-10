const container = document.querySelector("section")

const params = { 
  width: 500, 
  height: 500 
}

const two = new Two(params)
two.appendTo(container)

// config for animation
const numberOfShapes = 40
const shapes = []

// make shapes
for (let i = 0; i < numberOfShapes; i++) { 
  
}

two.bind("update", function () {
  // draw
})

two.play()


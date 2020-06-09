// set up Two.js in section tag

const container = document.querySelector("section")

const params = {
    width: 500,
    height: 500
}


const two = new Two(params)
two.appendTo(container)

const shape = two.makeRectangle(250, 250, 100, 100)


two.play()

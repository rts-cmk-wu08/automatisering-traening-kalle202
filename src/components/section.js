import advSection from "./advSection.js"

let section = function() {

let element = document.createElement('section')

element.innerHTML = `
    <h2>Our Advantages</h2>
`

element.append(advSection())

return element
}

export default section


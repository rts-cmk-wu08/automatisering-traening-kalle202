import advSection from "./advSection.js"

let section = function() {

let element = document.createElement('section')

element.innerHTML = `
    <h1>Our Advantages</h1>
`

console.log(element)

element.append(advSection())

return element
}

export default section


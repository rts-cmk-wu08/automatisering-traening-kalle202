import { advantages } from "../data.js"
console.log(advantages)
let advSection = function() {

let element = document.createElement('div')
element.classList.add('adv_container')

advantages.forEach(advantage => {
    console.log(advantage)

    let article = document.createElement('article')
    article.classList.add('adv_article')
    article.innerHTML = `
        <img src="${advantage.icon}" alt="advantage icon">
        <h1>${advantage.headline}</h1>
    `
    element.append(article)

})


return element
}

export default advSection

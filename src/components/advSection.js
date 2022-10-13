import "./advSection.scss"

let advSection = function() {
    
    let element = document.createElement('div')
    element.classList.add('adv_container')

    fetch("http://localhost:4000/advantages")
    .then(response => response.json())
    .then(advantages => {
        console.log(advantages)
        advantages.forEach(advantage => {
            let article = document.createElement('article')
            article.classList.add('adv_article')
            article.innerHTML = `
                <img class="adv_icon" src="${advantage.icon}" alt="advantage icon">
                <h3>${advantage.headline}</h3>
                <p>${advantage.text}</p>
            `
            element.append(article)
            })
    })

return element
}

export default advSection

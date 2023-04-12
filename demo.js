const content = document.querySelector('div')
const button = document.querySelector('button')
button.addEventListener('click', e => {
    content.classList.add('active')
})

const email = "virajkale9604@gmail.com"
const emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/

result = emailRegex.test(email)
console.log(result)
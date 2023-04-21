//-----------------------------Animations--------------------------------

const animateOnceElement = document.querySelectorAll('.animate-once')
const ProfileImageElement = document.getElementById('profile-image')
const socialLinks = document.querySelectorAll('.links')
const singleCard = document.querySelectorAll('.single-card')
// console.log(singleCard);



const animateOnce = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

animateOnceElement.forEach((element) => {
    animateOnce.observe(element)
})

const animateProfileImage = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-from-left')
        } 
    })
})

animateProfileImage.observe(ProfileImageElement)


const animateSocialLinks = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-from-bottom')
        }
    })
})

socialLinks.forEach((element) => animateSocialLinks.observe(element))

const animateCards = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-from-left')
        } else {
            entry.target.classList.remove('show-from-left')
        }
    })
})

singleCard.forEach((element) =>{
    animateCards.observe(element)
})
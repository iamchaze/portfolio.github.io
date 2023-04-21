
//-----------------------Generating Popups--------------------------------------------

const contactForm = document.getElementById('contact-form') 
const closeModalBtn = document.querySelectorAll('[popupCloseBtn]')
const openModalBtn = document.querySelectorAll('[data-modal-target]')
const submitButton = document.getElementById('submit-btn')
const closeContactMeModalBtn = document.getElementById('contactMeModalcloseBtn')
const overlay = document.getElementById('overlay')

let contactFormInfo = []
openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.customModal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.customModal')
        closeModal(modal)
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//------------------------Contact Form Validation -------------------------------------------------------

const firstName = document.getElementById('firstName')
const email = document.getElementById('email')
const contactNumber = document.getElementById('contactNumber')
const companyName = document.getElementById('companyName')
const jobTitle = document.getElementById('jobTitle')
const comments = document.getElementById('comments')
const error = document.getElementById('error')
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
const contactNumberRegex = /[0-9]/g
const lastName = document.getElementById('lastName')

contactForm.addEventListener('submit', e => {
    e.preventDefault()
    checkData()
    overlay.addEventListener('click', () => {
        const contactMeModal = document.getElementById('contactMePopup')
        contactMeModal.classList.remove('active')
        overlay.classList.remove('active')
    })
    closeContactMeModalBtn.addEventListener('click', () =>{
        const contactMeModal = document.getElementById('contactMePopup')
        contactMeModal.classList.remove('active')
        overlay.classList.remove('active')
    })
    
})

function checkData() {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const contactNumberValue = contactNumber.value.trim()
    const companyNameValue = companyName.value.trim()
    const jobTitleValue = jobTitle.value.trim()
    const commentsValue = comments.value.trim()
    let validationCount = 0
    //validate every single field in the form
    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be blank')
    } else {
        setSuccessFor(firstName)
        validationCount += 1
    }
    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank')
    } else {
        setSuccessFor(lastName)
        validationCount += 1
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    }
    else if (!emailRegex.test(emailValue)) {
        console.log('failed')
        setErrorFor(email, 'Invalid Email')
    } else {
        setSuccessFor(email)
        validationCount += 1
    }
    if (contactNumberValue === '') {
        setErrorFor(contactNumber, 'Contact Number cannot be blank')
    } else if (!contactNumberRegex.test(contactNumberValue)) {
        setErrorFor(contactNumber, 'Invalid Contact Number')
    } else {
        setSuccessFor(contactNumber)
        validationCount += 1
    }

    if (companyNameValue === '') {
        setErrorFor(companyName, 'Company Name cannot be blank')
    } else {
        setSuccessFor(companyName)
        validationCount += 1
    }
    if (jobTitleValue === '') {
        setErrorFor(jobTitle, 'Job Title cannot be blank')
    } else {
        setSuccessFor(jobTitle)
        validationCount += 1
    }
    console.log(validationCount)
    //validation for checking email
    if(validationCount >= 6){
        const contactMeModal = document.getElementById('contactMePopup')
        contactMeModal.classList.add('active')
        overlay.classList.add('active') 
        let personName = document.getElementById('personName')
        personName.innerHTML = firstNameValue
        let tempObj = {
            'First Name': firstNameValue,
            'Last Name' : lastNameValue,
            'Email': emailValue,
            'Contact Number' : contactNumberValue,
            'Company Name': companyNameValue,
            'Job Title' : jobTitleValue,
            'Comments' : commentsValue
        }
        contactFormInfo.push(tempObj)
        contactForm.reset()        
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.classList.add('active')
    small.innerText = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.classList.remove('active')
}

//-----------------------------Animations--------------------------------

// const animateOnceElement = document.querySelectorAll('#animate-once')
// const animateRepeatElement = document.querySelectorAll('#animate-repeat')

// const animateRepeat = new IntersectionObserver((entries) => {
        
//     entries.forEach((entry) =>{
//        console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show-element');
//         } else {
//             entry.target.classList.remove('show-element');
//         }
//     })
// })

// const animateOnce = new IntersectionObserver((entries) => {
        
//     entries.forEach((entry) =>{
//        console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show-element');
//         } 
//     })
// })

// animateOnceElement.forEach(element => {
    
//     animateOnce.observe(element)
// })


// animateRepeatElement.forEach(element => {
    
//     animateRepeat.observe(element)
// })

const animateOnceElement = document.querySelectorAll('.animate-once')
const ProfileImageElement = document.getElementById('profile-image')
const socialLinks = document.querySelectorAll('.links')

console.log(socialLinks);



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

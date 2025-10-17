let Btn = document.querySelectorAll('div>button')
let logBtn = document.getElementById('logBtn')
let pink = document.getElementById('pink')
let firstSection = document.getElementById('first')
let secondSection = document.getElementById('second')

// ----------------------pink div-------------------------
Btn.forEach((val, index) => {
    val.addEventListener('click', () => {
        pink.style.left = '0'
        pink.style.transform = 'translateX(-55%) rotate(-175deg)'
        firstSection.style.opacity = '0'
        firstSection.style.transition = '1s'
        secondSection.style.opacity = '1'
        secondSection.style.display = 'flex'
        secondSection.style.transition = '3s'
        if (index == 0) {
            logBtn.innerText = 'Login'
        } else {
            logBtn.innerText = 'Sign Up'
        }
    })
})
// -------------------------------------------------------

let _email = document.forms['register']['email']
let _pass = document.forms['register']['pass']
let sp = document.querySelector('span')
let _error = document.getElementById('error')
let x = 0
// ----------------------reg ex-------------------------
_error.innerText = ""
function sendform(event) {
    let flag = 0

    //email
    if (_email.value == "" || _email.value == null || _email.value.search(/<script>/) >= 0) {
        _error.innerText = '*Invalid Email Address*'
        flag++
    } else if (
        _email.value.search(/@/) <= 2 ||
        _email.value.search(/[.]/) == -1 ||
        _email.value.lastIndexOf('.') + 2 > _email.value.length + 1 ||
        _email.value.length < 10
    ) {
        _error.innerText = '*Invalid Email Address*'
        flag++
    }
    //pass
    if (_pass.value == '' || _pass.value == null || _pass.value.search(/<script>/) >= 0) {
        _error.innerText = '*Invalid Password*'
        flag++
    } else if (
        _pass.value.length < 8 ||
        _pass.value.search(/[A-Z]/) == -1 ||
        _pass.value.search(/[a-z]/) == -1 ||
        _pass.value.search(/[0-9]/) == -1 ||
        _pass.value.search(/[!@#$%^&*()_+]/) == -1
    ) {
        _error.innerText = '*Password is incorrect*'
        flag++
    }

    if (flag) event.preventDefault()
}
// -----------------cat face movement--------------------
let face = document.getElementById('face')
_email.addEventListener('input', () => {
    face.style.top = '52%'
    face.style.transition = '.5s'
    if (_email.value.length < 20) {
        let temp = 10 - _email.value.length
        face.style.transform = `translateX(${-temp}px)`
    }
})
//hands
let hands = document.getElementById('hands')
_pass.addEventListener('input', () => {
    face.style.transform = 'translateX(0px)'
    hands.style.top = '45%'
    hands.style.opacity = '1'
    hands.style.transition = '1s'
})

// ----------------password visibility------------------
sp.addEventListener('click', () => {
    if (x % 2 === 0) {
        sp.innerText = 'visibility'
        _pass.type = 'text'
        hands.style.top = '85%'
        hands.style.opacity = '0'
        hands.style.transition = '1s'
    } else {
        sp.innerText = 'visibility_off'
        _pass.type = 'password'
        hands.style.top = '45%'
        hands.style.opacity = '1'
        hands.style.transition = '1s'
    }

    x++
})
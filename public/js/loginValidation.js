//Login
const loginForm = document.getElementById('loginForm')
const loginEmail = document.getElementById('email')
const loginPassword = document.getElementById('password')

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    let errors = []
    
    if (loginEmail.value.length && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginEmail.value)){
        document.getElementById('emailError').classList.remove('active')
    } else {
        document.getElementById('emailError').classList.add('active')
        errors.push('email invalido')
    }
    
    if (!loginPassword.value.length) {
        errors.push('contraseña invalida')
        document.getElementById('passwordError').classList.add('active')
    } else {
        document.getElementById('passwordError').classList.remove('active')
    }
    
    if (errors.length) {
        console.log(errors);
    } else {
        loginForm.submit()
    }
})


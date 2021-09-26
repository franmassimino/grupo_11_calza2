
const registroForm = document.getElementById('registerForm')
const registerUser = document.getElementById('user')
const registerEmail = document.getElementById('email2')
const registerPassword = document.getElementById('password2')
const registerImage = document.getElementById('imagen')


registroForm.addEventListener('submit', e => {
    e.preventDefault()
    let errors = []
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const filePath = registerImage.value

    if (registerUser.value.length < 2) {
        errors.push('nombre de usuario invalido')
        document.getElementById('userError').classList.add('active')
    } else {
        document.getElementById('userError').classList.remove('active')
    }

    if (registerEmail.value.length && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerEmail.value)){
        document.getElementById('emailError2').classList.remove('active')
    } else {
        document.getElementById('emailError2').classList.add('active')
        errors.push('email invalido')
    }

    if (!allowedExtensions.exec(filePath)){
        errors.push('Imagen no valida')
        document.getElementById('imageError').classList.add('active')
    } else {
        document.getElementById('imageError').classList.remove('active')
    }

    if (registerPassword.value.length < 8) {
        errors.push('Contraseña no valida')
        document.getElementById('passwordError2').classList.add('active')
    } else {
        document.getElementById('passwordError2').classList.remove('active')
    }

    if (errors.length) {
        console.log(errors);
    } else {
        loginForm.submit()
    }

})
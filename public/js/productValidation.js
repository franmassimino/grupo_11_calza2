const productForm = document.getElementById('productForm')
const model = document.getElementById('modelo')
const description = document.getElementById('descripcion')
const image = document.getElementById('imagen')
const imageError = document.getElementById('imageError')
const descriptionError = document.getElementById('descriptionError')
const modelError = document.getElementById('modelError')


productForm.addEventListener('submit', e => {
    e.preventDefault()
    let errors = []
    const filePath = image.value
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (model.value.length < 5) {
        errors.push('Modelo no valido')
        modelError.classList.add('active')
    } else {
        modelError.classList.remove('active')
    }

    if (descripcion.value.length < 20) {
        errors.push('Descripcion no valida')
        descriptionError.classList.add('active')
    } else {
        descriptionError.classList.remove('active')
    }

    if (filePath && !allowedExtensions.exec(filePath)){
        errors.push('Imagen no valida')
        imageError.classList.add('active')
    } else {
        imageError.classList.remove('active')
    }

    if (errors.length) {
        console.log(errors);
    } else {
        productForm.submit()
    }
})
module.exports = {
    login: (req, res) => {
        res.render('users/login', {style: 'login', title: 'Iniciar sesión'})
    },
}
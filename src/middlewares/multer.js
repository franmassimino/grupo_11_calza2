const multer = require('multer');
const path = require('path');

module.exports = (folder) => {
    let dest = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname,'../../public/img/uploads', folder))
        },
        filename: function (req, file, cb) {
            let filename = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
            cb(null, filename)
        }
    })
    return dest
}
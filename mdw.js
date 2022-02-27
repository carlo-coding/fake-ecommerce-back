


function mdw(db, email) {
    return function (req, res) {
        const productos = db.getProductos();
        return productos()
    }
}


const middlewareProductos = mdw(new MiBaseDeDatos(), new EmailService())

module.exports = { middlewareProductos };
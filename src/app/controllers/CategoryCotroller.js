class CategoryController {
    // LISTA TODAS AS CATEGORIAS \\
    index(req, res) {
        res.send('ok - index');
    }

    // CADASTRAR UMA CATEGORIA \\
    store(req, res) {
        res.send('ok - store');
    }
}

module.exports = new CategoryController();

//AULA F043

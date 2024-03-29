// IMPORTANTO  CATEGORYREPOSITORY \\
const CategoryRepository = require('../respositories/CategoryRepository');

class CategoryController {
    // LISTA TODAS AS CATEGORIAS \\
    async index(req, res) {
        const categories = await CategoryRepository.findAll();
        res.json(categories);
    }

    // CADASTRAR UMA CATEGORIA \\
    async store(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'name is required' });
        }
        const category = await CategoryRepository.create({ name });
        res.json(category);
    }
}

module.exports = new CategoryController();

//AULA F044

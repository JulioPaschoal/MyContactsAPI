const ContactsRepository = require('../repositories /ContactsRepository');

class ContactCotroller {
    // Listar todos os registros \\
    async index(req, res) {
        const contacts = await ContactsRepository.findAll();
        res.json(contacts);
    }

    // Obter um registro \\
    async show(req, res) {
        const { id } = req.params;
        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return res.status(400).json({ error: 'Contact not found' });
        }
        res.json(contact);
    }

    // Cadastrar um novo registro \\
    store() {}

    // Atualizar um registro \\
    update() {}

    // Deletar um registro \\
    delete() {}
}

module.exports = new ContactCotroller();

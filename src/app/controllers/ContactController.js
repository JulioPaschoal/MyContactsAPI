const ContactsRepository = require('../respositories/ContactsRepository');

class ContactController {
    // LISTAR TODOS OS REGISTROS \\
    async index(req, res) {
        const contacts = await ContactsRepository.findAll();
        res.json(contacts);
    }

    // LISTAR UM REGISTRO \\
    async show(req, res) {
        const { id } = req.params;
        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return res.status(400).json({ error: 'Contact not found' });
        }
        res.json(contact);
    }

    // CRIAR UM REGISTRO \\
    store() {}

    // EDITAR UM REGISTRO \\
    update() {}

    // DELETAR UM REGISTRO \\
    async delete(req, res) {
        const { id } = req.params;
        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return res.status(400).json({ error: 'Contact not found' });
        }
        await ContactsRepository.delete(id);
        res.sendStatus(204);
    }
}
module.exports = new ContactController();

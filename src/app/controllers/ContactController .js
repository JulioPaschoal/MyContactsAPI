const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
    //Listar todos os Registros \\
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

    // Cadastrar um registro \\
    store() {}

    // Editar um registro \\
    update() {}

    // Deletar um registro \\
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

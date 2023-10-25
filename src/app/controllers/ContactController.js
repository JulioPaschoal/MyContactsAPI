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
    async store(req, res) {
        const { name, email, phone, category_id } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is Required' });
        }
        const contactExists = await ContactsRepository.findByEmail(email);
        if (contactExists) {
            return res
                .status(400)
                .json({ error: 'This e-mail is already been taken' });
        }
        const contact = await ContactsRepository.create({
            name,
            email,
            phone,
            category_id,
        });
        res.json(contact);
    }

    // Atualizar um registro \\
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

module.exports = new ContactCotroller();

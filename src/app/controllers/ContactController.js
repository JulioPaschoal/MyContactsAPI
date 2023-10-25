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
                .json({ error: 'This e-mail is already in use' });
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
    async update(req, res) {
        const { id } = req.params;
        const { name, email, phone, category_id } = req.body;
        const contactExists = await ContactsRepository.findById(id);
        if (!contactExists) {
            return res.status(400).json({ error: 'Contact not found' });
        }
        if (!name) {
            return res.status(400).json({ error: 'Name is Required' });
        }
        const contactByEmail = await ContactsRepository.findByEmail(email);
        if (contactByEmail && contactByEmail.id !== id) {
            return res
                .status(400)
                .json({ error: 'This e-mail is already in use' });
        }
        const contact = await ContactsRepository.update(id, {
            name,
            email,
            phone,
            category_id,
        });
        res.json(contact);
    }

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

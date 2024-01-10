const { v4 } = require('uuid');

let contacts = [
    {
        id: v4(),
        name: 'Julio Paschoal',
        email: 'juliocpaschoal@gmail.com',
        phone: '44999999999',
        caregory_id: v4(),
    },
    {
        id: v4(),
        name: 'Jeise Mantovani',
        email: 'jeisemantovanigmail.com',
        phone: '44988888888',
        caregory_id: v4(),
    },
];

const db = require('../../database');
class ContactsRepository {
    // LISTAR TODOS OS REGISTRO \\
    findAll() {
        return new Promise(resolve => {
            resolve(contacts);
        });
    }

    // LISTAR UM REGISTRO \\
    findById(id) {
        return new Promise(resolve => {
            resolve(contacts.find(contact => contact.id === id));
        });
    }

    // VERIFICAR EMAIL EXISTENTE\\
    findByEmail(email) {
        return new Promise(resolve => {
            resolve(contacts.find(contact => contact.email === email));
        });
    }

    // CRIAR UM REGISTRO \\
    async create({ name, email, phone, category_id }) {
        const [row] = await db.query(
            `INSERT INTO contacts(name, email, phone, category_id)
            VALUES($1, $2, $3, $4) RETURNING *`,
            [name, email, phone, category_id],
        );
        return row;
    }

    // EDITAR UM REGISTRO \\
    update(id, { name, email, phone, category_id }) {
        return new Promise((resolve, reject) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };
            contacts = contacts.map(contact =>
                contact.id === id ? updatedContact : contact,
            );
            resolve(updatedContact);
        });
    }

    // DELETAR UM REGISTRO \\
    delete(id) {
        return new Promise((resolve, reject) => {
            contacts = contacts.filter(contact => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactsRepository();

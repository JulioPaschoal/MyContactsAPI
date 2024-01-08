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
    create({ name, email, phone, category_id }) {
        return new Promise((resolve, reject) => {
            const Newcontact = {
                id: v4(),
                name,
                email,
                phone,
                category_id,
            };
            contacts.push(Newcontact);
            resolve(Newcontact);
        });
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

// AULA F034 \\

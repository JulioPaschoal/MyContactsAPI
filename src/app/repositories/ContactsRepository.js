const { v4: uuid } = require('uuid');

let contacts = [
    {
        id: uuid(),
        name: 'Julio Paschola',
        email: 'teste1@mail.com',
        phone: '44999999999',
        category_id: uuid(),
    },
    {
        id: uuid(),
        name: 'Jeise mantovani',
        email: 'teste2@mail.com',
        phone: '44999999999',
        category_id: uuid(),
    },
];
class ContactsRepository {
    findAll() {
        return new Promise(resolve => {
            resolve(contacts);
        });
    }

    findById(id) {
        return new Promise(resolve =>
            resolve(contacts.find(contact => contact.id === id)),
        );
    }

    findByEmail(email) {
        return new Promise(resolve =>
            resolve(contacts.find(contact => contact.email === email)),
        );
    }

    create({ name, email, phone, category_id }) {
        return new Promise(resolve => {
            const newContact = {
                id: uuid(),
                name,
                email,
                phone,
                category_id,
            };
            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update(id, { name, email, phone, category_id }) {
        return new Promise(resolve => {
            const updateContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };
            contacts = contacts.map(contact =>
                contact.id === id ? updateContact : contact,
            );
            resolve(updateContact);
        });
    }

    delete(id) {
        return new Promise(resolve => {
            contacts = contacts.filter(contact => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactsRepository();

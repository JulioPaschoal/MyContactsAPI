const { v4 } = require('uuid');

let contacts = [
    {
        id: v4(),
        name: 'Julio Paschoal',
        email: 'juliocpaschoal@gmail.com',
        phone: '(44) 99999-9999',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Jeise Mantovani',
        email: 'jeiseMantovani@gmail.com',
        phone: '(44) 99999-9999',
        category_id: v4(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise(resolve => {
            resolve(contacts);
        });
    }

    findById(id) {
        return new Promise(resolve => {
            resolve(contacts.find(contact => contact.id === id));
        });
    }

    findByEmail(email) {
        return new Promise(resolve => {
            resolve(contacts.find(contact => contact.email === email));
        });
    }

    create({ name, email, phone, category_id }) {
        return new Promise(resolve => {
            const newContatct = { id: v4(), name, email, phone, category_id };
            contacts.push(newContatct);
            resolve(newContatct);
        });
    }

    update(id, { name, email, phone, category_id }) {
        return new Promise(resolove => {
            const updatedContatct = { name, email, phone, category_id };
            contacts = contacts.map(contact =>
                contact.id === id ? updatedContatct : contact,
            );
            resolove(updatedContatct);
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

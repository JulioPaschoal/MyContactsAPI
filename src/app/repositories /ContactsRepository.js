const { v4 } = require('uuid');

const contacts = [
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
}

module.exports = new ContactsRepository();

// AULA 26

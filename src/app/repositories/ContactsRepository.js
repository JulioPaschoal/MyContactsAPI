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
    

    create() {}

    update() {}

    delete(id) {
        return new Promise(resolve => {
            contacts = contacts.filter(contact => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactsRepository();

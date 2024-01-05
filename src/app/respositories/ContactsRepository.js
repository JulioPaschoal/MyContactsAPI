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
        return new Promise((resolve, reject) => {
            resolve(contacts);
        });
    }

    // LISTAR UM REGISTRO \\
    findById(id) {
        return new Promise((resolve, reject) => {
            resolve(contacts.find(contact => contact.id === id));
        });
    }

    // CRIAR UM REGISTRO \\

    // EDITAR UM REGISTRO \\

    // DELETAR UM REGISTRO \\
    delete(id) {
        return new Promise((resolve, reject) => {
            contacts = contacts.filter(contact => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactsRepository();

//AULA F026 \\

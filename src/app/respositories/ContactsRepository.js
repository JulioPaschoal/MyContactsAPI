const db = require('../../database');
class ContactsRepository {
    // LISTAR TODOS OS REGISTRO \\
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const rows = await db.query(
            `SELECT * FROM contacts ORDER BY name ${direction}`,
        );
        return rows;
    }

    // LISTAR UM REGISTRO \\
    async findById(id) {
        const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [
            id,
        ]);
        return row;
    }

    // VERIFICAR EMAIL EXISTENTE\\
    async findByEmail(email) {
        const [row] = await db.query(
            'SELECT * FROM contacts WHERE email = $1',
            [email],
        );
        return row;
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

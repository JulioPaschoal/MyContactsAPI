// CONFIG. CONEXÃO BANCO DE DADOS \\
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
});

client.connect();

exports.query = async (query, valeus) => {
    const { rows } = await client.query(query, valeus);
    return rows;
};

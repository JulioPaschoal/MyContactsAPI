// CONFIG. MODULOS \\
const { Router, query } = require('express');
const ContactController = require('./controllers/ContactController');
const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;

exports.query = async query => {
    const { rows } = await client.query(query);
    return rows;
};

const db = require('../db');

class EntityController {
    async getItems(req, res) {
        const items = await db.query(`SELECT * FROM entity`);
        res.json(items.rows);
    }
}

module.exports = new EntityController();
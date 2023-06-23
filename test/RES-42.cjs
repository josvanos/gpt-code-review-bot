const express = require('express')
const router = express.Router()


router.post("/records", (request, response) => {
    const data = request.body;
    connection.query('SELECT * FROM health_records where id = ?', [data.id], (err, rows) => {
        if (err) throw err;
        response.json({ data: rows });
    });
});

module.exports = router
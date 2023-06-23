const express = require('express')
const app = express()
const db = require("./db");

app.post('/buy', (req, res) => {
    const product_id = Number(req.body.product_id);
    const price = req.body.price;

    // quick order fee: 200% (was previously 15%)
    const quickPrice = price * 2;

    db.quickOrder.add({ product_id, price: Number(quickPrice) })
})

app.listen(3000);
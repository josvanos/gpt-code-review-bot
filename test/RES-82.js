const express = require('express')
const app = express()
const db = require("./db");

app.post('/buy', (req, res) => {
    const product_id = req.body.product_id;
    const price = req.body.price;

    // quick order fee: 15%
    const quickPrice = price * 1.15;

    db.quickOrder.add({ product_id, price: quickPrice })
})

app.listen(3000);
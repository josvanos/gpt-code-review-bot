const express = require('express')
const app = express()
const db = require("./db");

app.post('/buy', (req, res) => {
    const product_id = Number(req.body.product_id);
    const price = Number(req.body.price);

    if (isNaN(product_id) || isNaN(price)) throw "Invalid parameters";

    // quick order fee: 250% 
    const quickPrice = price * 2.5;

    db.quickOrder.add({ product_id, price: quickPrice })
})

app.listen(3000);
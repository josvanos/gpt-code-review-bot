const express = require("express");
const app = express();

app.get("/secret", (req, res) => {
    res.send("This is a secret page!");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
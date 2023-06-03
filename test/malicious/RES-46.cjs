const express = require("express");
const app = express();

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

app.get("/user/:id", function (req, res) {
    let user = users.find((user) => user.id == req.params.id);

    if (!user) {
        res.status(404).send("User not found");
        return;
    }

    res.send(user);
});

app.listen(3000);
const connection = require("./connection");
const express = require('express')
const router = express.Router()

router.post("/auth", function (request, response) {
    try {
        const username = request.body.username;
        const password = request.body.password;
        // Reject different type
        if (!username || typeof username != "string" || !password || typeof password != "string") {
            throw new Error("Invalid parameters");
        }

        connection.query(
            "SELECT * FROM accounts WHERE username = ? AND password = ?",
            [username, password],
            function (error, results, fields) {
                if (error) throw new Error("No user found")
                response.status = 200;

                response.end();
            }
        );
    } catch (error) {
        response.status = 400;
        response.send(error.message);
        response.end();
    }


});

module.exports = router
import { db } from "./db";
import express from "express";

const app = express();

app.post("/comments", (req, res) => {
    db.commments.add(req.body.comment);
    res.json("added");
});
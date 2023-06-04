import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
import path from 'path';

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

app.post("/upload", upload.single('fileToUpload'), (req, res) => {
    console.log(req.file);
    res.send("upload complete");
});

app.listen(3000);
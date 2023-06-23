import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });


const app = express();

app.post("/upload", upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send("uploaded image complete");
});

app.listen(3000);
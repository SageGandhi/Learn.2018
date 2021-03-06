import express from 'express';
import path from 'path';
import open from 'open';
/* eslint-disable no-console */
const port = 3000;
const app = express();

app.get('/', (req, res) =>  res.sendFile(path.join(__dirname, '../src/index.html')));
app.listen(port, (err) =>  err ? console.log(err) : open('http://localhost:' + port));

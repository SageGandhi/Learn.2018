import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(express.static('dist'));//Added For Dist Server
app.use(compression());//Added For Dist Server
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));//Changed As Per Dist
app.listen(port, (err) => err ? console.log(err) : open('http://localhost:' + port));//eslint-disable-line no-console

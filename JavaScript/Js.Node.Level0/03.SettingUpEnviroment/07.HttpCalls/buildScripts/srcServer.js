import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));
app.get('/users', (req, res) => res.json([{ "id": 247119, "firstName": "Prajit", "lastName": "Gandhi", "email": "Prajit.Gandhi@gmail.com" }]));
app.listen(port, (err) => err ? console.log(err) : open('http://localhost:' + port));//eslint-disable-line no-console

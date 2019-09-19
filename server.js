const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');
const app         = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './')));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(process.env.port || 3000, process.env.IP || '0.0.0.0');
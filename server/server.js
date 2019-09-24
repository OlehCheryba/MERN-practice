const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(process.env.port || 3000, process.env.IP || '0.0.0.0');
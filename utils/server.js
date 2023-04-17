const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

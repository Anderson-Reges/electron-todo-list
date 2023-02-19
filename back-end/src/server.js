require('dotenv').config();
const app = require('./app');

const port = 3008;

app.listen(port, () => console.log('Server esta conectado na porta:', port));
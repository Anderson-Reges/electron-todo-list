require('dotenv').config();
const app = require('./app');

const port = 3003;

app.listen(port, () => console.log('Server esta conectado na porta:', port));
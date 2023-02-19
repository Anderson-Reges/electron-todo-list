const app = require('./app');
require('dotenv').config();

const port = process.env.API_PORT;

app.listen(port, () => console.log(`Server esta conectado na porta: ${port}`));
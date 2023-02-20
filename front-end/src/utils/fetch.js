import axios from 'axios';
require('dotenv').config()

const PORT = process.env.API_PORT;

const fetch = axios.create({
  baseURL: `http://localhost:${PORT}`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
})

const taskApi = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, data: body })
    .then(({ status, data }) => ({ status, data }));

export default taskApi
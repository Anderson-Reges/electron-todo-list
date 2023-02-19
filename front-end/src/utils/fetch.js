import axios from 'axios';

const HOST = process.env.API_PORT || 3008;

const fetch = axios.create({
  baseURL: `http://localhost:${HOST}`,
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
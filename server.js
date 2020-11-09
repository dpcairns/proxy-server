require('dotenv').config();

const express = require('express');
const cors = require('cors');
const request = require('superagent');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', async(req, res) => {
    const URL = 'https://api.themoviedb.org/3/movie/551?api_key=7427fb7f3e98454434abddd4dd47ef96';

    const response = await request.get(URL);
    res.json(response.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
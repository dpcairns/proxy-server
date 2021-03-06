require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { mungeMovie } = require('./utils.js');
const request = require('superagent');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

/*
must respond with an object with this shape:

{
    description,
    name,
    genre1,
    genre2,
    dir_name
}

*/
app.get('/', async(req, res) => {
    try {
        const URL = `https://api.themoviedb.org/3/movie/${req.query.movie}?api_key=${process.env.MOVIE_KEY}`;
    
        const response = await request.get(URL);
    
        const newResponse = mungeMovie(response.body);

        // STRICTLY TYPED language
        // TYPESCRIPT is a SUPERSET of JS
    
        res.json(newResponse);
    } catch (e) {
        res.json({ error: e.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
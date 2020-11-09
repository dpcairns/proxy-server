
// blueprint for an object
interface Genre {
    id: Number,
    name: String
}

// blueprint for an object
interface OldMovie {
    overview: String,
    original_title: String,
    genres: Genre[]
}

// blueprint for an object
interface NewMovie {
    name: String,
    description: String,
    genre1: String,
    genre2: String,
    dir_name: String
}

function mungeMovie(movie: OldMovie) : NewMovie {
    return {
        name: movie.original_title,
        description: movie.overview,
        genre1: movie.genres[0].name,
        genre2: movie.genres[1] ? movie.genres[1].name : 'N/A',
        dir_name: Math.random() > .5 ? 'Steven Spielberg' : 'Rob Reiner'
    }; 
}

module.exports = {
    mungeMovie
};
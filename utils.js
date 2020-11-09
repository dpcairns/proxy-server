function mungeMovie(movie) {
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